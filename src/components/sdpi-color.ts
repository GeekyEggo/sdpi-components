import SDPIInput, { IFieldContent } from './sdpi-input';

export default class SDPIColor extends SDPIInput<HTMLInputElement> {
    /**
     * Creates the content contained within the input column.
     * @returns The object that contains the input element, and the optional content wrapper.
     */
    protected createContent(): IFieldContent<HTMLInputElement> {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'color');

        return {
            input: this.input
        };
    }
}

customElements.define('sdpi-color', SDPIColor);
