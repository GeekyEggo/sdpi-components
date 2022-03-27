import { HTMLInputEvent } from 'dom';
import { css, html, PropertyValueMap, TemplateResult } from 'lit';
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
                padding: var(--input-padding);
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
    @property({ type: Number })
    public maxlength?: number | undefined;

    /**
     * Defines the rows property of the text area.
     */
    @property({ type: Number })
    public rows = 3;

    /**
     * Determines whether to show the length of the text value.
     */
    @property({ type: Boolean })
    public showlength = false;

    /**
     * The current length of the text area.
     */
    @state()
    private _length = 0;

    /**
     * Renders the component.
     * @returns The HTML template used to render the component.
     */
    render() {
        return html`
            <div class="container">
                <div><label for=${this.inputID}>${this.label ? this.label + ':' : ''}</label></div>
                <div>
                    <textarea type="textarea" id=${this.inputID} @input=${this.handleInput} rows=${this.rows} maxlength=${ifDefined(this.maxlength)} .value=${this.value || ''}></textarea>
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
        if (this.showlength || this.maxlength) {
            const maxLengthLabel = this.maxlength ? html`/${this.maxlength}` : undefined;
            return html`<label id="length" for=${this.inputID}>${this._length}${maxLengthLabel}</label>`;
        }

        return undefined;
    }

    /**
     * Occurs before rendering, after a property or state has changed.
     * @param _changedProperties The changed properties.
     */
    protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        if (_changedProperties.has('value')) {
            this._length = this.value ? this.value.length : 0;
        }
    }

    /**
     * Handles the input changing
     * @param ev The event arguments.
     */
    private handleInput(ev: HTMLInputEvent<HTMLInputElement>) {
        this.value = ev.target.value;
        this._length = this.value.length;

        if (this.save) {
            this.save(this.value);
        }
    }
}
