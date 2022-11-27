import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Checkable, DataSourced, DynamicValueType, Gridded, Input, Persisted } from '../mixins';

@customElement('sdpi-radio')
export class Radio extends Gridded(Persisted(Checkable(DataSourced(DynamicValueType(Input<typeof LitElement, boolean | number | string>(LitElement)))))) {
    /** @inheritdoc */
    static get styles() {
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
                            'radio',
                            html`
                                <input
                                    type="radio"
                                    name="_"
                                    .checked=${this.value == item.value || (this.defaultValue != undefined && this.defaultValue == item.value)}
                                    .disabled=${this.disabled || item.disabled || false}
                                    .value=${item.value}
                                    @change=${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = this.parseValue(ev.target.value))}
                                />
                            `,
                            item.label
                        )
                    )
                )
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-radio': Radio;
    }
}
