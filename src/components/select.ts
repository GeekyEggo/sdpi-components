import { TaskStatus } from '@lit-labs/task';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { DataSourced, Focusable, Input, Persisted } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-select')
export class Select extends Persisted(Focusable(DataSourced(Input<typeof LitElement, string>(LitElement)))) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            hostStyle,
            css`
                select {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }

                select:focus {
                    box-shadow: inset 0 0 1px var(--font-color);
                }

                select:disabled {
                    opacity: 0.5;
                }
            `
        ];
    }

    /**
     * The optional placeholder text; added as the first item within the select, as a disable option, and selected by default.
     */
    @property()
    public placeholder?: string;

    /** @inheritdoc */
    protected render() {
        return html`
            <select
                ${ref(this.focusElement)}
                .disabled=${this.disabled || this.items.status !== TaskStatus.COMPLETE}
                .value=${this.items.status === TaskStatus.COMPLETE ? this.value || '' : ''}
                @change=${(ev: HTMLInputEvent<HTMLSelectElement>) => (this.value = ev.target.value)}
            >
                ${this.items.render({
                    pending: () => html`<option value="" disabled selected>${this.loadingText}</option>`,
                    complete: () => html`
                        <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined} .selected=${this.value === undefined}>${this.placeholder}</option>
                        ${this.renderDataSource(
                            (item) => html`<option .disabled=${item.disabled || false} .value=${item.value} .selected=${item.value === this.value}>${item.label}</option>`,
                            (group, children) => html`<optgroup .label=${group.label || ''}>${children}</optgroup>`
                        )}
                    `
                })}
            </select>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-select': Select;
    }
}
