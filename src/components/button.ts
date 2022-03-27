import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getUUID } from '../core/utils';

import { commonCss, inputCss } from '../styles';

@customElement('sdpi-button')
export class Button extends LitElement {
    static styles = [
        commonCss,
        inputCss,
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

    /**
     * Determines whether the button is disabled.
     */
    @property({ type: Boolean })
    public disabled = false;

    /**
     * The optional label to show.
     */
    @property()
    public label = '';

    /**
     * Renders the component.
     * @returns The HTML template used to render the component.
     */
    render() {
        const id = getUUID();

        return html`
            <div class="container">
                <div><label for=${id}>${this.label ? this.label + ':' : ''}</label></div>
                <div>
                    <button id=${id} .disabled=${this.disabled}>
                        <slot></slot>
                    </button>
                </div>
            </div>
        `;
    }
}
