import { cloneAttributeOrDefault, createElement, withAttribute } from '../core/element';
import SDPIInput from './sdpi-input';

export default class SDPIRange extends SDPIInput<HTMLInputElement> {
    /* Gets the observed attributes. */
    public static get observedInputAttributes(): string[] {
        return super.observedInputAttributes.concat(['min', 'max', 'step']);
    }

    /* Gets the value that determines whether saving should be delayed; this typically applies to inputs that can change frequently. */
    public get isDelayed(): boolean {
        return true;
    }

    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        // Min value text.
        const components: HTMLElement[] = [];
        withAttribute(this, 'mintext', (value) => {
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
        components.push(createElement('div', ['col', 'f-stretch'], [this.input]));

        // Max value text.
        withAttribute(this, 'maxtext', (value) => {
            const maxText = createElement('div', ['col', 'a-center-center', 'ml-2']);
            maxText.innerText = value;

            components.push(maxText);
        });

        // Current value text.
        withAttribute(this, 'showvalue', () => {
            const valueText = createElement('div', ['col', 'a-center-center', 'ml-2']);
            this.input!.addEventListener('input', () => (valueText.innerText = `${this.input!.value}%`));
            this.change.subscribe(() => (valueText.innerText = `${this.value}%`));

            components.push(valueText);
        });

        root.appendChild(createElement('div', 'row', components));
        super.render(root);
    }
}

customElements.define('sdpi-range', SDPIRange);
