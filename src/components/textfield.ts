import { HTMLInputEvent } from 'dom';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { commonCss, inputCss } from '../styles';
import { SettingsElement } from './settings-element';

@customElement('sdpi-textfield')
export class Textfield extends SettingsElement<string> {
    static styles = [
        commonCss,
        inputCss,
        css`
            input {
                background-color: var(--input-bg);
                font-family: var(--font-family);
                height: 25px;
                padding: var(--input-padding);
            }
        `
    ];

    /**
     * The optional pattern to be applied when validating the value.
     */
    @property()
    public pattern = '';

    /**
     * The optional placeholder text to be shown within the input.
     */
    @property()
    public placeholder = '';

    /**
     * Determines whether the setting is required.
     */
    @property({ type: Boolean })
    public required = false;

    /**
     * Renders the component.
     * @returns The HTML template used to render the component.
     */
    render() {
        return html`
            <div class="container">
                <div><label for=${this.inputID}>${this.label ? this.label + ':' : ''}</label></div>
                <div>
                    <input id=${this.inputID} type="text" @input=${this.handleInput} .pattern=${this.pattern} .placeholder=${this.placeholder} .required=${this.required} .value=${this.value || ''} />
                </div>
            </div>
        `;
    }

    /**
     * Handles the input changing
     * @param ev The event arguments.
     */
    private handleInput(ev: HTMLInputEvent<HTMLInputElement>) {
        this.value = ev.target.value;
        if (this.save) {
            this.save(this.value);
        }
    }
}
