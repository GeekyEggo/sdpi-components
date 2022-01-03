import { observeChildList, withAttribute } from '../core/element';
import SDPIElement from './sdpi-element';

export default class SDPIContent extends SDPIElement {
    private readonly container: HTMLElement = document.createElement('div');
    private readonly text: HTMLElement = document.createElement('p');

    /* Gets the observed attributes */
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat(['text']);
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        super.attributeChangedCallback(attrName, oldValue, newValue);

        if (attrName === 'text') {
            this.text.innerText = newValue || '';
        }
    }

    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        withAttribute(this, 'text', value => this.text.innerText = value);

        this.container.appendChild(this.text);
        root.appendChild(this.container);
    }
}

customElements.define('sdpi-content', SDPIContent);
