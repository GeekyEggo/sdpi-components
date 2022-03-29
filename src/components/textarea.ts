import { HTMLInputEvent } from 'dom';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { SettingElement } from './shared/setting-element';

@customElement('sdpi-textarea')
export class Textarea extends SettingElement<string> {
    /**
     * Gets the styles associated with the component.
     */
    public static get styles() {
        return [
            ...super.styles,
            css`
                textarea {
                    background-color: var(--color-secondary-bg);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                    resize: none;
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

    /**
     * Renders HTML template that represents the contents.
     * @returns {unknown} The HTML template.
     */
    protected override renderContents(): unknown {
        return html`
            <textarea
                type="textarea"
                maxlength=${ifDefined(this.maxLength)}
                .id=${this.inputID}
                .disabled=${this.disabled}
                .rows=${this.rows}
                .value=${this.value || ''}
                @input=${(ev: HTMLInputEvent<HTMLTextAreaElement>) => this.save(ev.target.value)}
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
            return html`<label id="length" for=${this.inputID}>${this.value?.length}${maxLengthLabel}</label>`;
        }

        return undefined;
    }
}
