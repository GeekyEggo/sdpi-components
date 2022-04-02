import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Input, Labeled } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-button')
export class Button extends Labeled(Input<typeof LitElement, string>(LitElement)) {
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
                    padding: calc(var(--spacer) * 2) var(--spacer);
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
                    opacity: 0.5;
                }
            `
        ];
    }

    /** @inheritdoc */
    render() {
        return html`
            <sdpi-item .label=${this.label}>
                <button .disabled=${this.disabled} .value=${this.value || ''}>
                    <slot></slot>
                </button>
            </sdpi-item>
        `;
    }
}
