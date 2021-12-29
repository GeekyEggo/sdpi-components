import SDPIInput, { IFieldContent } from './sdpi-input';
import { observeChildList } from '../core/element';

export default class SDPISelect extends SDPIInput<HTMLSelectElement> {
    /**
     * Creates the content contained within the input column.
     * @returns The object that contains the input element, and the optional content wrapper.
     */
    protected createContent(): IFieldContent<HTMLSelectElement> {
        const select = document.createElement('select');        
        observeChildList(this, (added: Node) => select.appendChild(added), 'OPTGROUP', 'OPTION');

        return { 
            input: select
        };
    }
}

customElements.define('sdpi-select', SDPISelect);
