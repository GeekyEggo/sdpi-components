import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Labeled } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-item')
export class SdpiItem extends Labeled(LitElement) {
    /** @inheritdoc */
    public static styles = [
        hostStyle,
        css`
            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            ::-webkit-scrollbar-thumb {
                background-color: #666666;
                border-radius: 5px;
                outline: 1px solid slategrey;
            }

            .container {
                align-items: start;
                color: var(--font-color);
                display: grid;
                font-family: var(--font-family);
                font-size: var(--font-size);
                grid-template-columns: 95px 1fr;
                margin: 0 0 10px 0;
                max-width: 322px;
                -webkit-user-drag: none;
            }

            .container > div:first-child {
                margin-top: 6px;
                justify-self: end;
                padding-right: 11px;
            }
        `
    ];

    /** @inheritdoc */
    render() {
        const label = this.label ? html`<label>${this.label}:</label>` : undefined;

        return html`
            <div class="container">
                <div class="label">${label}</div>
                <div class="content"><slot></slot></div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-item': SdpiItem;
    }
}
