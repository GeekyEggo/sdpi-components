import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Checkable, DataSourced, DynamicValueType, Gridded, Input, Persisted } from '../mixins';

@customElement('sdpi-checkbox-list')
export class CheckboxList extends Gridded(Persisted(Checkable(DataSourced(DynamicValueType(Input<typeof LitElement, Array<boolean | number | string>>(LitElement)))))) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            css`
                .loading {
                    margin: 0;
                    padding: calc(var(--spacer) * 1.5) 0;
                    user-select: none;
                }
            `
        ];
    }

    /** @inheritdoc */
    protected render() {
        return this.items.render({
            pending: () => html`<p class="loading">${this.loadingText}</p>`,
            complete: () =>
                this.renderGrid(
                    this.renderDataSource((item) =>
                        this.renderCheckable(
                            'checkbox',
                            html`
                                <input
                                    type="checkbox"
                                    .checked=${(this.value && this.value.findIndex((v) => v == item.value) > -1) || false}
                                    .disabled=${this.disabled || item.disabled || false}
                                    .value=${item.value}
                                    @change=${this.handleChange}
                                />
                            `,
                            item.label
                        )
                    )
                )
        });
    }

    /**
     * Handles a checkbox state changing.
     * @param ev The event data.
     */
    private handleChange(ev: HTMLInputEvent<HTMLInputElement>): void {
        const value = this.parseValue(ev.target.value);
        if (value === undefined) {
            return;
        }

        const values = new Set(this.value);
        if (ev.target.checked) {
            values.add(value);
        } else {
            values.delete(value);
        }

        this.value = Array.from(values);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-checkbox-list': CheckboxList;
    }
}
