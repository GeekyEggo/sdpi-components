import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { InputElement } from './shared/input-element';

@customElement('sdpi-button')
export class Button extends InputElement {
    /**
     * Gets the styles associated with the component.
     */
    public static get styles() {
        return [
            ...super.styles,
            css`
                :host {
                    --bg-color: #303030;
                }

                button {
                    background-color: var(--bg-color);
                    border: 1px solid #969696;
                    border-radius: 3px;
                    padding: calc(var(--spacer) * 2) var(--spacer);
                }

                button:not(:disabled):hover {
                    background-color: #464646;
                    cursor: pointer;
                }

                button:not(:disabled):active {
                    background-color: var(--bg-color);
                    border-color: #646464;
                    color: #969696;
                }

                button:disabled {
                    opacity: 0.5;
                }
            `
        ];
    }

    /**
     * Gets the contents rendered in the right column, typically representing the input.
     * @returns {unknown} The contents.
     */
    protected override getContents(): unknown {
        return html`
            <button .id=${this.inputID} .disabled=${this.disabled}>
                <slot></slot>
            </button>
        `;
    }
}
