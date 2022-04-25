import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ChildNodesController } from '../controllers/child-nodes-controller';
import { Checkable, Gridded, Input, Persisted } from '../mixins';

@customElement('sdpi-radio')
export class Radio extends Gridded(Persisted(Checkable(Input<typeof LitElement, string>(LitElement)))) {
    private _childNodes = new ChildNodesController(this, ['option']);

    /** @inheritdoc */
    protected render() {
        return this.renderGrid(
            this._childNodes.items.map((option) =>
                this.renderCheckable(
                    'radio',
                    html`<input
                        type="radio"
                        name="_"
                        .checked=${this.value === option.value}
                        .disabled=${this.disabled || option.disabled}
                        .value=${option.value}
                        @change=${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = ev.target.value)}
                    />`,
                    option.text
                )
            )
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-radio': Radio;
    }
}
