import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ChildNodesController } from '../controllers/child-nodes-controller';
import { StoreController } from '../controllers/store-controller';
import { Checkable, Input, Persisted } from '../mixins';

@customElement('sdpi-range')
export class Range extends Persisted(Checkable(Input<typeof LitElement, string>(LitElement))) {
    private _childNodes = new ChildNodesController(this, ['option']);
    private _store = new StoreController(this);

    /** @inheritdoc */
    public static get styles() {
        return [...super.styles];
    }

    /** @inheritdoc */
    protected render() {
        return html`
            ${this._childNodes.items.map((option) =>
                this.renderCheckable(
                    'radio',
                    html`<input
                        type="radio"
                        name="_"
                        .checked=${this.value === option.value}
                        .disabled=${this.disabled}
                        .value=${option.value}
                        @change=${(ev: HTMLInputEvent<HTMLInputElement>) => this._store.save(ev.target.value)}
                    />`,
                    option.text
                )
            )}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-range': Range;
    }
}
