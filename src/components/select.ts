import { HTMLInputEvent } from 'dom';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { commonCss, inputCss } from '../styles';
import { SettingsElement } from './settings-element';

@customElement('sdpi-select')
export class Select extends SettingsElement<string> {
    static styles = [
        commonCss,
        inputCss,
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

    @state()
    private _items: Node[] = [];
    private _observer: MutationObserver;

    /**
     * Invoked when the component is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        this._observer.observe(this, { childList: true });
    }

    /**
     * Invoked when the component is removed from the DOM.
     */
    disconnectedCallback(): void {
        super.disconnectedCallback();
        this._observer.disconnect();
    }

    /**
     * Renders the component.
     * @returns The HTML template used to render the component.
     */
    render() {
        return html`
            <div class="container">
                <div><label for=${this.inputID}>${this.label ? this.label + ':' : ''}</label></div>
                <div>
                    <select .id=${this.inputID} .value=${this.value || ''} @change=${(ev: HTMLInputEvent<HTMLSelectElement>) => this.save(ev.target.value)}>
                        <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined}>${this.placeholder}</option>
                        ${this._items}
                    </select>
                </div>
            </div>
        `;
    }
}
