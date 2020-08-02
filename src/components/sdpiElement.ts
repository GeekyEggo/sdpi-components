import store, { STORE_EVENT } from "../core/store";

/**
 * Provides a base Stream Deck property inspector element.
 */
export default abstract class SDPIElement extends HTMLElement {
    /**
     * Initializes a new base element.
     */
    constructor() {
        super();

        this.label = document.createElement('label');
    }

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return [ 'label' ];
    }

    /**
     * Gets the element that should be focused when the label is clicked.
     */
    protected abstract get focusElement(): HTMLElement | null;
    
    /**
     * Gets the main label.
     */
    private label: HTMLLabelElement;

    /**
     * Gets a value indicating whether the setting is global.
     */
    protected get global(): boolean {
        return this.hasAttribute('global');
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        if (!this.id) {
            console.warn('Unable to save input as there is no id assigned');
        } else if (this.focusElement) {
            this.focusElement.id = `sdpi__${this.id}`;
            this.label.htmlFor = this.focusElement.id;
        }

        // assign the classes.
        this.classList.add('sdpi-item');
        this.label.classList.add('sdpi-item-label');

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
}
