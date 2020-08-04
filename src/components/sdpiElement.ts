/**
 * Provides a base Stream Deck property inspector element.
 */
export default abstract class SDPIElement<T extends HTMLElement> extends HTMLElement {
    /**
     * Initializes a new SDPI element.
     * @param input The input.
     */
    constructor(input: T) {
        super();

        this.input = input;
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
     * Gets or sets the main input.
     */
    protected input: T;
    
    /**
     * Gets or sets the main label.
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
        } else if (this.input) {
            this.input.id = `sdpi__${this.id}`;
            this.label.htmlFor = this.input.id;
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
     * @param attrName The attribute name.
     * @param target The element to clone the attribute to.
     */
    protected cloneAttribute(attrName: string, target: HTMLElement, ): void {
        const value = this.getAttribute(attrName);

        if (value !== undefined && value !== null) {
            target.setAttribute(attrName, value);
        } else {
            target.removeAttribute(attrName);
        }
    }
}
