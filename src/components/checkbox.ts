import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { Checkable, Focusable, Input, Persisted } from '../mixins';

@customElement('sdpi-checkbox')
export class Checkbox extends Persisted(Focusable(Checkable(Input<typeof LitElement, boolean>(LitElement)))) {
    /**
     * Gets the optional label to be shown next to the check-box.
     */
    @property()
    public label?: string;

    /** @inheritdoc */
    render() {
        return this.renderCheckable(
            'checkbox',
            html`<input
                ${ref(this.focusElement)}
                type="checkbox"
                .checked=${this.value || false}
                .disabled=${this.disabled}
                @change=${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = ev.target.checked)}
            />`,
            this.label
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-checkbox': Checkbox;
    }
}
