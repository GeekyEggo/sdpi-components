import { createElement, withAttribute } from '../core/element';

/**
 * Provides a base class for all elements within the Stream Deck Property Inspector.
 */
export default class SDPIElement extends HTMLElement {
    protected readonly label: HTMLLabelElement = document.createElement('label');

    /* Gets the observed attributes. */
    public static get observedAttributes(): string[] {
        return ['label'];
    }

    /* Gets the disabled state of this instance. */
    public get disabled(): boolean {
        return this.getAttribute('disabled') != undefined;
    }

    /* Sets the disabled state of this instance. */;
    public set disabled(value: boolean) {
        if (value) {
            this.setAttribute('disabled', 'disabled');
        } else {
            this.removeAttribute('disabled');
        }
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        if (attrName == 'label') {
            this.label.innerText = newValue || '';
        }
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element
     */
    public connectedCallback(): void {
        // Label and primary content column
        const labelColumn = createElement('div', ['col-label'], [this.label]);
        withAttribute(this, 'label', value => this.label.innerText = `${value}: `);
        const contentColumn = createElement('div', ['col-content']);

        // Container row.
        this.appendChild(createElement('div', ['row'], [labelColumn, contentColumn]));
        this.render && this.render(contentColumn);
    }

    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render?(root: HTMLElement): void;
}