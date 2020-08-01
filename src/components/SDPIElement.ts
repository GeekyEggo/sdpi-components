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
     * Transfers the id attribute from this element, to the target.
     * @param target The target element.
     */
    protected transferIdentifierTo(target: HTMLElement): void {
        if (this.hasAttribute('id')) {
            target.id = <string>this.getAttribute('id');
            this.removeAttribute('id');
        }
    }
}
