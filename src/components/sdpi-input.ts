import { setAttribute } from '../core/element';
import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import { HTMLInput } from '../core/input';
import store, { IStoreObject } from '../stream-deck/store';
import SDPIElement from './sdpi-element';

/**
 * Provides a base component that represents an SDPI input.
 */
export default class SDPIInput<T extends HTMLInput> extends SDPIElement implements IStoreObject {
    protected input?: T;
    private _change: EventManager<void> = new EventManager();
    private _value?: any;

    /* Gets the observed attributes that are mapped directly to the input. */
    public static get observedInputAttributes(): string[] {
        return ['disabled'];
    }

    /* Gets the observed attributes */
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat(this.observedInputAttributes);
    }

    /* Occurs when the value changes. */
    public get change(): IEventSubscriber<void> {
        return this._change;
    }

    /* Gets the value that determines whether saving should be delayed; this typically applies to inputs that can change frequently. */
    public get isDelayed(): boolean {
        return true;
    }

    /* Gets the value that the input represents. */
    public get value(): any {
        return this._value;
    }

    /* Set the value that the input represents, and dispatches a change event */
    public set value(value: any) {
        if (this._value != value || (this.input && this.input.value != value)) {
            this._value = value;
            if (this.input) {
                this.input.value = value;
            }

            this._change.dispatch();
        }
    }

    /* Gets a value determining whether the persisted value is a global setting */
    protected get global(): boolean {
        return this.hasAttribute('global');
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        if (SDPIInput.observedAttributes.indexOf(attrName) > -1) {
            setAttribute(this.input, attrName, newValue);
        }
    }

    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        super.render && super.render(root);

        // Setup the store when there is an id, and the input has been set.
        if (this.input) {
            this.input.addEventListener('change', () => this.value = this.input?.value);

            const propertyName = this.getAttribute('property');
            if (propertyName) {
                this.input.id = `sdpi__${propertyName}`;
                this.label.htmlFor = this.input.id;

                store.use(this, propertyName, this.global, this.isDelayed ? 250 : undefined);
            }
        }
    }
}
