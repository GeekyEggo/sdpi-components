import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { StoreController } from '../controllers/store-controller';
import { Focusable, Input, Persisted } from '../mixins';

@customElement('sdpi-color')
export class Color extends Persisted(Focusable(Input<typeof LitElement, string>(LitElement))) {
    private _store = new StoreController(this);

    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            css`
                input {
                    background-color: var(--input-bg-color);
                }

                input:disabled {
                    opacity: 0.5;
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
                .defaultValue=${this.value || ''}
                @change=${(ev: HTMLInputEvent<HTMLInputElement>) => this._store.save(ev.target.value)}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-color': Color;
    }
}
