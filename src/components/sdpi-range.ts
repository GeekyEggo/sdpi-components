import { cloneAttributeOrDefault, createElement, withAttribute } from '../core/element';
import SDPIInput, { IFieldContent } from './sdpi-input';

export default class SDPIRange extends SDPIInput<HTMLInputElement> {
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
        // Min value text.
        let components: HTMLElement[] = [];
        withAttribute(this, 'mintext', value => {
            const minText = createElement('div', ['col', 'a-center-center', 'mr-2']);
            minText.innerText = value;

            components.push(minText);
        });

        // The range input.
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'range');

        cloneAttributeOrDefault(this, this.input, 'min', '0');
        cloneAttributeOrDefault(this, this.input, 'max', '100');
        cloneAttributeOrDefault(this, this.input, 'step', '5');
        components.push(createElement('div', ['col', 'f-stretch'], [this.input]))

        // Max value text.
        withAttribute(this, 'maxtext', value => {
            const maxText = createElement('div', ['col', 'a-center-center', 'ml-2']);
            maxText.innerText = value;

            components.push(maxText);
        })

        // Current value text.
        withAttribute(this, 'showvalue', _ => {
            const valueText = createElement('div', ['col', 'a-center-center', 'ml-2']);
            this.input!.addEventListener('input', () => valueText.innerText = `${this.input!.value}%`);
            this.change.subscribe(() => valueText.innerText = `${this.value}%`);

            components.push(valueText);
        });

        return {
            parent: createElement('div', 'row', components),
            input: this.input
        };
    }
}

customElements.define('sdpi-range', SDPIRange);
