import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Input } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-button')
export class Button extends Input<typeof LitElement, string>(LitElement) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            hostStyle,
            css`
                button {
                    background-color: var(--window-bg-color);
                    border: 1px solid #969696;
                    border-radius: 3px;
                    padding: calc(var(--spacer) * 1.5);
                }

                button:not(:disabled):hover {
                    background-color: #464646;
                    cursor: pointer;
                }

                button:not(:disabled):active {
                    background-color: var(--window-bg-color);
                    border-color: #646464;
                    color: #969696;
                }

                button:disabled {
                    opacity: var(--opacity-disabled);
                }
            `
        ];
    }

    /** @inheritdoc */
    render() {
        return html`
            <button .disabled=${this.disabled} .value=${this.value || ''}>
                <slot></slot>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-button': Button;
    }
}
