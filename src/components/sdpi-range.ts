import { cloneAttributeOrDefault, createElement } from '../core/element';
import SDPIInput, { IFieldContent } from './sdpi-input';

export default class SDPIRange extends SDPIInput<HTMLInputElement> {
    private valueText?: HTMLSpanElement;

    /* Gets the observed attributes. */
    public static get attributess(): string[] {
        return super.attributess.concat(['min', 'max', 'step']);
    }

    /* Gets the value that determines whether saving should be delayed; this typically applies to inputs that can change frequently. */
    public get isDelayed(): boolean {
        return true;
    }

    /**
     * Creates the content contained within the input column.
     * @returns The object that contains the input element, and the optional content wrapper.
     */
    protected createContent(): IFieldContent<HTMLInputElement> {
        let parent = null;

        this.input = document.createElement('input');
        this.input.setAttribute('type', 'range');

        cloneAttributeOrDefault(this, this.input, 'min', '0');
        cloneAttributeOrDefault(this, this.input, 'max', '100');
        cloneAttributeOrDefault(this, this.input, 'step', '5');

        if (this.getAttribute('showvalue')) {

            this.valueText = document.createElement('span');
            parent = createElement(
                'div',
                'row',
                [
                    createElement('div', ['col', 'f-stretch'], [this.input]),
                    createElement('div', ['col', 'col-1', 'ml-3', 'a-center-center'], [this.valueText])
                ]);

            this.input.addEventListener('input', () => this.valueText!.innerText = `${this.input!.value}%`);
            this.change.subscribe(() => this.valueText!.innerText = `${this.value}%`);
        }

        return {
            parent: parent,
            input: this.input
        };
    }
}

customElements.define('sdpi-range', SDPIRange);
