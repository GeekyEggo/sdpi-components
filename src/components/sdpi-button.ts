import { cloneAttributeOrDefault } from '../core/element';
import SDPIInput from './sdpi-input';

export default class SDPIButton extends SDPIInput<HTMLInputElement> {
    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'button');

        cloneAttributeOrDefault(this, this.input, 'value');
        this.input.onclick = this.onclick;

        root.appendChild(this.input);
        super.render && super.render(root);
    }
}

customElements.define('sdpi-button', SDPIButton);
