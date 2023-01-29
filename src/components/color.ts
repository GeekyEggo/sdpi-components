import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { Focusable, Input, Persisted } from '../mixins';

@customElement('sdpi-color')
export class Color extends Persisted(Focusable(Input<typeof LitElement, string>(LitElement))) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            css`
                input {
                    background-color: var(--input-bg-color);
                    height: var(--input-height);
                }

                input:disabled {
                    opacity: var(--opacity-disabled);
                }
            `
        ];
    }

    /** @inheritdoc */
    protected render() {
        return html`
            <input
                type="color"
                ${ref(this.focusElement)}
                .disabled=${this.disabled}
                .defaultValue=${this.value || this.defaultValue || ''}
                @change=${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = ev.target.value)}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-color': Color;
    }
}
