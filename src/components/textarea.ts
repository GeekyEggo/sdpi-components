import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { StoreController } from '../controllers/store-controller';
import { Input, Labeled, Persisted } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-textarea')
export class Textarea extends Labeled(Persisted(Input<typeof LitElement, string>(LitElement))) {
    private _store = new StoreController(this);

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
                    opacity: 0.5;
                }

                #length {
                    float: right;
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
    protected render() {
        return html`
            <sdpi-item .label=${this.label}>
                <textarea
                    type="textarea"
                    maxlength=${ifDefined(this.maxLength)}
                    .disabled=${this.disabled}
                    .id=${this.inputId}
                    .rows=${this.rows}
                    .value=${this.value || ''}
                    @input=${(ev: HTMLInputEvent<HTMLTextAreaElement>) => this._store.save(ev.target.value)}
                ></textarea>
                ${this.getLengthLabel()}
            </sdpi-item>
        `;
    }

    /**
     * Gets the label that denotes the length of the text area.
     * @returns {unknown} The template used to render the length of the value.
     */
    private getLengthLabel(): unknown {
        if (this.showLength || this.maxLength) {
            const maxLengthLabel = this.maxLength ? html`/${this.maxLength}` : undefined;
            return html`<label id="length" for=${this.inputId}>${this.value?.length}${maxLengthLabel}</label>`;
        }

        return undefined;
    }
}
