import SDPIElement from './sdpiElement';
import { useStoreWithInput } from '../core/store';
import { observeChildList } from '../core/node';

/**
 * A Stream Deck property inspector select field. 
 */
class SDPISelect extends SDPIElement<HTMLSelectElement> {
    /**
     * Initializes a new select field.
     */
    constructor() {
        super(document.createElement('select'));
        this.input.classList.add('select');
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        super.connectedCallback();
        
        if (this.input) {
            useStoreWithInput(this.id, this.global, this.input);        
            this.appendChild(this.input);

            observeChildList(this, (added: Node) => this.input.appendChild(added), 'OPTGROUP', 'OPTION');
        }
    }
}

customElements.define('sdpi-select', SDPISelect);
