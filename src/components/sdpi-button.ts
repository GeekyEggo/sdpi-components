import SDPIElement from './sdpi-element';

/**
 * A Stream Deck property inspector button. 
 */
class SDPIButton extends SDPIElement<HTMLButtonElement> {
    /**
     * Initializes a new button.
     */
    constructor() {
        super(document.createElement('button'));
    }

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat([
            'max20',
            'max30',
            'max40',
            'onclick',
            'text'
        ]);
    }

    /**
     * Gets the on-click handler.
     */
    public get onclick(): ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null {
        return this.input.onclick;
    }

    /**
     * Sets the on-click handler.
     */
    public set onclick(value: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null) {
        this.input.onclick = value;
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        super.connectedCallback();

        if (this.input) {
            this.input.classList.add('sdpi-item-value');
            this.appendChild(this.input);
        }
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        
        if (!this.input) {
            return;
        }

        switch (attrName) {
            case 'max20':
            case 'max30':
            case 'max40':
                this.input.classList.toggle(attrName, newValue !== null);
                break;

            case 'onclick':
                this.onclick = super.onclick;
                super.onclick = null;
                break;

            case 'text':
                this.input.innerText = newValue || '';
                break;
        }
    }
}

customElements.define('sdpi-button', SDPIButton);
