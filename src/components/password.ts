import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';

import { StoreController } from '../controllers/store-controller';
import { Focusable, Input, Persisted } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-password')
export class Password extends Persisted(Focusable(Input<typeof LitElement, string>(LitElement))) {
    private _store = new StoreController(this);

    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            hostStyle,
            css`
                input {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                }

                input:disabled {
                    opacity: 0.5;
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

    /** @inheritdoc */
    protected render() {
        return html`
            <input
                ${ref(this.focusElement)}
                type="password"
                maxlength=${ifDefined(this.maxLength)}
                .disabled=${this.disabled}
                .value=${this.value || ''}
                @input=${(ev: HTMLInputEvent<HTMLInputElement>) => this._store.save(ev.target.value)}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-password': Password;
    }
}
