import SDPIElement from './sdpi-element';
import { anyChange } from '../core/input';
import { useStore } from '../core/input';

/**
 * A Stream Deck property inspector textarea.
 */
class SDPITextArea extends SDPIElement<HTMLTextAreaElement> {
     /**
     * Initializes a new textarea.
     */
    constructor() {
        super(document.createElement('textarea'));

        this.input.setAttribute('type', 'textarea');
        this.count = document.createElement('label');
        this.count.toggleAttribute('hidden', true);
    }

    /**
     * Gets the count element.
     */
    private count: HTMLLabelElement;

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat([
            'maxlength',
            'showcount'
        ]);
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        super.connectedCallback();

        if (this.input) {
            // create the wrapper
            const wrapper = document.createElement('span');
            wrapper.classList.add('textarea');

            // init the input and counter
            anyChange(this.input, this.refreshCount.bind(this));
            useStore(this.id, this.global, this.input);
            this.refreshCount();
            
            // add the elements
            wrapper.appendChild(this.input);
            wrapper.appendChild(this.count);
            this.appendChild(wrapper);
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
            case 'maxlength':
                this.cloneAttribute(attrName, this.input);
                this.refreshCount();
                break;

            case 'showcount':
                this.count.toggleAttribute('hidden', !this.hasAttribute('showcount'));
                this.refreshCount();
                break;
        }
    }

    /** 
     * Refreshes the count label.
     */
    private refreshCount(): void {
        if (this.input) {
            this.count.innerText = this.input.value.length.toString();
            if (this.input.maxLength > -1) {
                this.count.innerText += `/${this.input.maxLength}`;
            }
        }
    }
}

customElements.define('sdpi-textarea', SDPITextArea);
