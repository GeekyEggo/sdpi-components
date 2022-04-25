import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ChildNodesController } from '../controllers/child-nodes-controller';
import { Checkable, Gridded, Input, Persisted } from '../mixins';

@customElement('sdpi-checkbox-list')
export class CheckboxList extends Gridded(Persisted(Checkable(Input<typeof LitElement, string[]>(LitElement)))) {
    private _childNodes = new ChildNodesController(this, ['option']);

    /** @inheritdoc */
    protected render() {
        return this.renderGrid(
            this._childNodes.items.map((option) =>
                this.renderCheckable(
                    'checkbox',
                    html`<input
                        type="checkbox"
                        .checked=${(this.value && this.value.indexOf(option.value) > -1) || false}
                        .disabled=${this.disabled || option.disabled}
                        .value=${option.value}
                        @change=${this.handleChange}
                    />`,
                    option.text
                )
            )
        );
    }

    /**
     * Handles a checkbox state changing.
     * @param ev The event data.
     */
    private handleChange(ev: HTMLInputEvent<HTMLInputElement>): void {
        const values = new Set(this.value);
        if (ev.target.checked) {
            values.add(ev.target.value);
        } else {
            values.delete(ev.target.value);
        }

        this.value = Array.from(values);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-checkbox-list': CheckboxList;
    }
}
