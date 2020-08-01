import store, { STORE_EVENT } from "../core/store";

/**
 * Provides a base Stream Deck property inspector element.
 */
export default class SDPIElement extends HTMLElement {
    /**
     * Initializes a new base element.
     */
    constructor() {
        super();

        this.label = document.createElement('label');
    }

    private label: HTMLLabelElement;
    private storeKey?: string;
    private useGlobalSettings: boolean = false;

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return [ 'label' ];
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        // set the store key
        if (this.hasAttribute('id')) {
            this.storeKey = <string>this.getAttribute('id');
        } else {
            console.warn('Unable to save input as there is no id assigned');
        }

        this.useGlobalSettings = this.hasAttribute('global');
        this.classList.add('sdpi-item');
        
        // construct the label
        this.label.classList.add('sdpi-item-label');
        if (this.hasAttribute('id')) {
            this.label.htmlFor = <string>this.getAttribute('id');
        }

        this.appendChild(this.label);
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        if (attrName === 'label') {
            this.label.innerText = this.getAttribute('label') ?? '';
        }
    }

    /**
     * Clones the attribute presence and value from this element to the target element.
     * @param target The element to clone the attribute to.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    protected cloneAttribute(target: HTMLElement, attrName: string, oldValue: string | null, newValue: string | null): void {
        if (newValue === null) {
            target.removeAttribute(attrName);
        } else {
            target.setAttribute(attrName, newValue);
        }
    }

    /**
     * Registers the element against the Stream Deck settings, monitoring for changes.
     * @param onChange Called when new settings are received.
     * @param element The target element.
     * @returns A function to set the value and store it against the Stream Deck action settings.
     */
    protected useSettings(onChange: (value?: any) => void, element?: HTMLElement): (value?: any) => void {
        // transfer the identifer to the element
        if (this.id && element) {
            element.id = this.id;
            this.removeAttribute('id');
        }
        
        // monitor for changes from the Stream Deck
        store.addEventListener(this.useGlobalSettings ? STORE_EVENT.globalSettings : STORE_EVENT.settings, (ev: Event) => {
            const data = (<MessageEvent>ev).data;
            if (data && this.storeKey) {
                onChange(data[this.storeKey]);
            }
        });
        
        return this.saveValue;
    }

    /**
     * Saves the value against the action settings.
     * @param value The value.
     */
    private saveValue(value?: any): void {
        if (this.storeKey) {
            store.set(this.storeKey, value, this.useGlobalSettings);
        }
    }
}
