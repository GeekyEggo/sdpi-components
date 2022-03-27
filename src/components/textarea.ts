import { HTMLInputEvent } from 'dom';
import { css, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { commonCss, inputCss } from '../styles';
import { SettingsElement } from './settings-element';

@customElement('sdpi-textarea')
export class Textarea extends SettingsElement<string> {
    static styles = [
        commonCss,
        inputCss,
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

    @state()
    private _length = 0;

    /**
     * Renders the component.
     * @returns The HTML template used to render the component.
     */
    render() {
        return html`
            <div class="container">
                <div>${this.getLabel()}</div>
                <div>
                    <textarea
                        type="textarea"
                        maxlength=${ifDefined(this.maxLength)}
                        .id=${this.inputID}
                        .rows=${this.rows}
                        .value=${this.value || ''}
                        @input=${(ev: HTMLInputEvent<HTMLTextAreaElement>) => this.save(ev.target.value)}
                    ></textarea>
                    ${this.getLengthLabel()}
                </div>
            </div>
        `;
    }

    /**
     * Gets the label that denotes the length of the text area.
     * @returns The template used to render the length of the value.
     */
    private getLengthLabel(): TemplateResult<1> | undefined {
        if (this.showLength || this.maxLength) {
            const maxLengthLabel = this.maxLength ? html`/${this.maxLength}` : undefined;
            return html`<label id="length" for=${this.inputID}>${this._length}${maxLengthLabel}</label>`;
        }

        return undefined;
    }

    /**
     * Occurs before rendering, after a property or state has changed.
     * @param _changedProperties The changed properties.
     */
    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has('value')) {
            this._length = this.value ? this.value.length : 0;
        }
    }
}
