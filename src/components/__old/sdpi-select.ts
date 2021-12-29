import SDPIElement from './sdpi-element';
import { observeChildList } from '../core/node';
import { useStore } from '../core/input';

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
            useStore(this.id, this.global, this.input);        
            this.appendChild(this.input);

            observeChildList(this, (added: Node) => this.input.appendChild(added), 'OPTGROUP', 'OPTION');
        }
    }
}

customElements.define('sdpi-select', SDPISelect);
