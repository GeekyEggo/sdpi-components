import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';

import { Focusable, Input, Persisted } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-textarea')
export class Textarea extends Persisted(Focusable(Input<typeof LitElement, string>(LitElement))) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            hostStyle,
            css`
                textarea {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                    resize: none;
                }

                textarea:disabled {
                    opacity: var(--opacity-disabled);
                }

                .length {
                    color: var(--font-color);
                    display: block;
                    text-align: right;
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                }
            `
        ];
    }

    /**
     * The maximum length the text value can be.
     */
    @property({
        attribute: 'maxlength',
        type: Number
    })
    public maxLength?: number;

    /**
     * Defines the rows property of the text area.
     */
    @property({ type: Number })
    public rows = 3;

    /**
     * Determines whether to show the length of the text value.
     */
    @property({
        attribute: 'showlength',
        type: Boolean
    })
    public showLength = false;

    /** @inheritdoc */
    protected delaySave = true;

    /** @inheritdoc */
    protected render() {
        return html`
            <textarea
                ${ref(this.focusElement)}
                type="textarea"
                maxlength=${ifDefined(this.maxLength)}
                .disabled=${this.disabled}
                .id=${this.inputId}
                .rows=${this.rows}
                .value=${this.value || ''}
                @input=${(ev: HTMLInputEvent<HTMLTextAreaElement>) => (this.value = ev.target.value)}
            ></textarea>
            ${this.getLengthLabel()}
        `;
    }

    /**
     * Gets the label that denotes the length of the text area.
     * @returns {unknown} The template used to render the length of the value.
     */
    private getLengthLabel(): unknown {
        if (this.showLength || this.maxLength) {
            const maxLengthLabel = this.maxLength ? html`/${this.maxLength}` : undefined;
            return html`<label class="length" for=${this.inputId}>${this.value?.length || 0}${maxLengthLabel}</label>`;
        }

        return undefined;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-textarea': Textarea;
    }
}
