import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';

import { format } from '../core';
import { Focusable, Input, Persisted } from '../mixins';

@customElement('sdpi-range')
export class Range extends Persisted(Focusable(Input<typeof LitElement, number>(LitElement))) {
    public static get styles() {
        return [
            ...super.styles,
            css`
                input {
                    -webkit-appearance: none;
                    margin: 0;
                    height: 22px;
                    background-color: transparent;
                }

                input:disabled,
                .container > div[aria-disabled='true'] {
                    cursor: default;
                    opacity: var(--opacity-disabled);
                }

                ::-webkit-slider-runnable-track {
                    margin-top: 2px;
                    height: 5px;
                    padding: 0px !important;

                    border: solid 1px var(--input-bg-color);
                    background: #636363;
                    border-radius: 3px;
                }

                ::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    background-color: var(--input-font-color);
                    border-radius: 50%;
                    cursor: pointer;
                    top: -4px;
                    position: relative;
                    height: 12px;
                    width: 12px;
                }

                input:disabled::-webkit-slider-thumb {
                    cursor: default;
                }

                input::-webkit-slider-thumb::before {
                    position: absolute;
                    content: '';
                }

                .container {
                    display: flex;
                    align-items: center;
                }

                .container > div {
                    flex: 0 1;
                }

                div[role='button'] {
                    cursor: pointer;
                    user-select: none;
                }

                .container > div:nth-child(2) {
                    flex: 1 1;
                    margin: 0 var(--spacer);
                }
            `
        ];
    }

    /**
     * The maximum value.
     */
    @property({ type: Number })
    public max?: number;

    /**
     * The minimum value.
     */
    @property({ type: Number })
    public min?: number;

    /**
     * When `true`, the `min` and `max` values are shown on either side of the input.
     */
    @property({
        attribute: 'showlabels',
        type: Boolean
    })
    public showLabels = false;

    /**
     * Specifies the granularity that the value must adhere to.
     */
    @property({ type: Number })
    public step?: number;

    /** @inheritdoc */
    protected delaySave = true;

    /** @inheritdoc */
    protected render() {
        const value = this.value?.toString() || this.defaultValue?.toString() || '';
        const input = html`
            <input
                ${ref(this.focusElement)}
                type="range"
                max=${ifDefined(this.max)}
                min=${ifDefined(this.min)}
                step=${ifDefined(this.step)}
                .disabled=${this.disabled}
                .title=${value}
                .value=${value}
                @change=${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = ev.target.valueAsNumber)}
            />
        `;

        if (this.showLabels) {
            return html`<div class="container">
                <div aria-disabled=${this.disabled} role="button" @click=${() => !this.disabled && this.min !== undefined && (this.value = this.min)}><slot name="min">${this.min}</slot></div>
                <div>${input}</div>
                <div aria-disabled=${this.disabled} role="button" @click=${() => !this.disabled && this.max !== undefined && (this.value = this.max)}><slot name="max">${this.max}</slot></div>
            </div>`;
        } else {
            return input;
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-range': Range;
    }
}
