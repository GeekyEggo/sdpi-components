import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { getFileName, sanitize } from '../core';
import { Focusable, Input, Persisted } from '../mixins';

@customElement('sdpi-file')
export class File extends Persisted(Focusable(Input<typeof LitElement, string>(LitElement))) {
    public static get styles() {
        return [
            ...super.styles,
            css`
                .container {
                    align-items: stretch;
                    display: flex;
                }

                input {
                    display: none;
                }

                input:disabled ~ label.value {
                    opacity: 0.5;
                }

                label.value {
                    background-color: var(--input-bg-color);
                    color: var(--input-font-color);
                    display: flex;
                    flex: 1 1 auto;
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                    line-height: 1.5em;
                    padding: var(--spacer);
                }

                label.value > span {
                    align-self: center;
                }

                label.button {
                    margin-left: var(--spacer);
                    flex: 0 0 auto;
                }
            `
        ];
    }

    /**
     * Maps to the `accept` attribute of the underlying input.
     */
    @property()
    public accept?: string;

    /**
     * The label displayed in the button used to activate the file input.
     */
    @property()
    public label = '...';

    /** @inheritdoc */
    render() {
        return html`
            <div class="container">
                <input
                    ${ref(this.focusElement)}
                    type="file"
                    id="file_input"
                    .accept=${this.accept || ''}
                    .disabled=${this.disabled}
                    @change="${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = sanitize(ev.target.value))}"
                />
                <label class="value" for="file_input">
                    <span .title=${this.value || ''}>${getFileName(this.value || '')}</span>
                </label>
                <label class="button">
                    <sdpi-button .disabled=${this.disabled} @click=${() => this.focusElement.value?.click()}> ${this.label} </sdpi-button>
                </label>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-file': File;
    }
}
