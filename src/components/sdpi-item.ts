import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { IFocusable } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-item')
export class SdpiItem extends LitElement {
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
                color: var(--font-color);
                font-family: var(--font-family);
                font-size: var(--font-size);
                margin: 0 0 10px 0;
                max-width: 322px;
                -webkit-user-drag: none;
            }

            .grid {
                align-items: start;
                display: grid;
                grid-template-columns: 95px 1fr;
            }

            .label {
                margin-top: 6px;
                justify-self: end;
                padding-right: 11px;
            }
        `
    ];

    /**
     * Gets or sets the label.
     */
    @property()
    public label?: string;

    /** @inheritdoc */
    render() {
        const label = this.label ? html`<label>${this.label}:</label>` : undefined;

        return html`
            <div class="container grid">
                <div class="label"><label @click=${this.handleLabelClick}>${label}</label></div>
                <div class="content"><slot></slot></div>
            </div>
        `;
    }

    private handleLabelClick(): void {
        for (const elem of this.querySelectorAll('*')) {
            const focusable = elem as unknown as IFocusable;
            if (focusable.canFocus) {
                focusable.focus();
                return;
            }
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-item': SdpiItem;
    }
}
