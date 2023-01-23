import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { getFileName, sanitize } from '../core';
import { Delegate, Focusable, Input, Persisted } from '../mixins';

@customElement('sdpi-file')
export class File extends Delegate(Persisted(Focusable(Input<typeof LitElement, string>(LitElement)))) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            css`
                input[type='file'] {
                    display: none;
                }
            `
        ];
    }

    /**
     * Maps to the `accept` attribute of the underlying input.
     */
    @property()
    public accept?: string;

    /** @inheritdoc */
    render() {
        return html`
            ${super.renderDelegate((path?: unknown) => getFileName(path?.toString() || ''))}
            <input
                ${ref(this.focusElement)}
                type="file"
                id="file_input"
                .accept=${this.accept || ''}
                .disabled=${this.disabled}
                @change="${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = sanitize(ev.target.value))}"
            />
        `;
    }

    /** @inheritdoc */
    invoked(): void {
        this.focusElement.value?.click();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-file': File;
    }
}
