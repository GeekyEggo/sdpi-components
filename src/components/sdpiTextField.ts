import SDPIElement from './sdpiElement';
import { useStoreWithInput } from '../core/store';

/**
 * A Stream Deck property inspector text field. 
 */
class SDPITextField extends SDPIElement<HTMLInputElement> {
    /**
     * Initializes a new text field.
     */
    constructor() {
        super(document.createElement('input'));
    }

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat([
            'password',
            'pattern',
            'placeholder',
            'required'
        ]);
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        super.connectedCallback();

        if (this.input) {
            useStoreWithInput(this.id, this.global, this.input);
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
            case 'password':
                this.input.setAttribute('type', this.hasAttribute('password') ? 'password' : '');
                break;

            case 'pattern':
            case 'placeholder':
            case 'required':
                super.cloneAttribute(attrName, this.input);
                break;
        }
    }
}

customElements.define('sdpi-textfield', SDPITextField);
