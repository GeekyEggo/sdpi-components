import { createElement, setAttribute, withAttribute } from '../core/element';
import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import { HTMLInput } from '../core/input';
import store, { IStoreObject } from '../stream-deck/store';
import SDPIElement from './sdpi-element';

export interface IFieldContent<T extends HTMLInput> {
    parent?: HTMLElement;
    input: T;
}

/**
 * Provides a base component that represents an SDPI input.
 */
export default class SDPIInput<T extends HTMLInput> extends SDPIElement implements IStoreObject {
    private _change: EventManager<void> = new EventManager();
    private _value?: any;

    /**
     * Initializes a new instance of the SDPI input.
     * @constructor
     */
    public constructor() {
        super();
        this.label = document.createElement('label');
    }

    /* Occurs when the value changes. */
    public get change(): IEventSubscriber<void> {
        return this._change;
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

    protected input?: T;
    protected readonly label: HTMLLabelElement;
    protected get global(): boolean {
        return this.hasAttribute('global');
    }

    /**
     * Gets the observed attributes.
     */
    public static get attributess(): string[] {
        return super.attributess.concat(this.inputAttributes);
    }

    /**
     * Gets the attributes that should be mapped to the input.
     */
    public static get inputAttributes(): string[] {
        return ['disabled', 'label'];
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        if (attrName === 'label') {
            withAttribute(this, 'label', value => this.label.innerText = `${value}: `, () => this.label.innerText = '');
        } else if (SDPIInput.inputAttributes.indexOf(attrName) > -1) {
            setAttribute(this.input, attrName, newValue);
        }
    }

    /**
     * Renders the element to the DOM.
     */
    protected render(): void {
        super.render && super.render();

        // Ensure we have an id to map against settings.
        if (this.id === undefined || this.id === null) {
            throw 'Element must define an "id".'
        }

        // Get the input column content.
        const content = this.createContent && this.createContent();
        if (content === undefined || content == null) {
            throw 'Input content cannot be empty.'
        }

        // Label column.
        const labelColumn = createElement('div', ['col-label'], [this.label]);
        withAttribute(this, 'label', value => this.label.innerText = `${value}: `);

        // Input column.        
        const inputColumn = createElement('div', ['col-input']);
        this.input = content.input;
        this.input.id = `sdpi__${this.id}`;
        this.label.htmlFor = this.input.id;
        inputColumn.appendChild(content.parent || content.input);

        this.appendChild(createElement('div', ['row'], [labelColumn, inputColumn]))

        // Setup the store.
        this.input.addEventListener('change', () => this.value = this.input?.value);
        store.use(this, this.id, this.global);
    }

    /**
     * Creates the content contained within the input column.
     * @returns The object that contains the input element, and the optional content wrapper.
     */
    protected createContent?(): IFieldContent<T>;
}
