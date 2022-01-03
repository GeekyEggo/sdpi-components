import SDPIInput from './sdpi-input';

export default class SDPIColor extends SDPIInput<HTMLInputElement> {
    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'color');

        root.appendChild(this.input);
        super.render(root);
    }
}

customElements.define('sdpi-color', SDPIColor);
