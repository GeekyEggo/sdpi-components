import { HTMLInputEvent } from 'dom';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { SettingElement } from './shared/setting-element';

@customElement('sdpi-select')
export class Select extends SettingElement<string> {
    /**
     * Gets the styles associated with the component.
     */
    public static get styles() {
        return [
            ...super.styles,
            css`
                select {
                    background-color: var(--color-secondary-bg);
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }
            `
        ];
    }

    /**
     * Initializes a new instance of a custom Stream Deck property inspector select input.
     */
    constructor() {
        super();

        // We have to use an observer to extract the child elements, and use them within the shadow-DOM.
        this._observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeName === 'OPTION' || node.nodeName === 'OPTGROUP') {
                        this._items = [...this._items, node];
                    }
                });
            });
        });
    }

    /**
     * The optional placeholder text; added as the first item within the select, as a disable option, and selected by default.
     */
    @property()
    public placeholder?: string;

    /**
     * The item nodes of the component.
     */
    @state()
    private _items: Node[] = [];

    /**
     * The observer used to monitor option and optgroup nodes, and render them as children of the component.
     */
    private _observer: MutationObserver;

    /**
     * Invoked when the component is added to the DOM.
     */
    public connectedCallback() {
        super.connectedCallback();
        this._observer.observe(this, { childList: true });
    }

    /**
     * Invoked when the component is removed from the DOM.
     */
    public disconnectedCallback(): void {
        super.disconnectedCallback();
        this._observer.disconnect();
    }

    /**
     * Gets the contents rendered in the right column, typically representing the input.
     * @returns {unknown} The contents.
     */
    protected override getContents(): unknown {
        return html`
            <select .id=${this.inputID} .disabled=${this.disabled} .value=${this.value || ''} @change=${(ev: HTMLInputEvent<HTMLSelectElement>) => this.save(ev.target.value)}>
                <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined}>${this.placeholder}</option>
                ${this._items}
            </select>
        `;
    }
}
