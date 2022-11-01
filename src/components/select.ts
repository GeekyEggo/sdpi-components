import { TaskStatus } from '@lit-labs/task';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { LocalizedMessage, localizedMessagePropertyOptions } from '../core';
import { DataSourced, DataSourceResult, DynamicValueType, Focusable, Input, Item, Persisted } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-select')
export class Select extends Persisted(Focusable(DataSourced(DynamicValueType(Input<typeof LitElement, boolean | number | string>(LitElement))))) {
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
    @property(localizedMessagePropertyOptions)
    public placeholder?: LocalizedMessage;

    /** @inheritdoc */
    protected render() {
        const selectedValue = this.getSelectedValueFrom(this.items?.value ?? []) || undefined;

        return html`
            <select
                ${ref(this.focusElement)}
                .disabled=${this.disabled || this.items.status !== TaskStatus.COMPLETE}
                .value=${selectedValue || ''}
                @change=${(ev: HTMLInputEvent<HTMLSelectElement>) => (this.value = this.parseValue(ev.target.value))}
            >
                ${this.items.render({
                    pending: () => html`<option value="" disabled selected>${this.loadingText}</option>`,
                    complete: () => html`
                        <option value="" disabled .hidden=${!this.placeholder || selectedValue === undefined} .selected=${selectedValue === undefined}>${this.placeholder}</option>
                        ${this.renderDataSource(
                            (item) => html`<option .disabled=${item.disabled || false} .value=${item.value} .selected=${item.value === selectedValue}>${item.label}</option>`,
                            (group, children) => html`<optgroup .label=${group.label?.toString() || ''}>${children}</optgroup>`
                        )}
                    `
                })}
            </select>
        `;
    }

    /**
     * Attempts to get the selected value from the available items.
     * @param items The items to traverse and search.
     * @returns The value as a string; otherwise undefined.
     */
    private getSelectedValueFrom(items: DataSourceResult): string | undefined {
        for (const item of items) {
            if ('children' in item) {
                const value = this.getSelectedValueFrom(item.children);
                if (value !== undefined) {
                    return value;
                }

                continue;
            }

            if ('value' in item && item.value == this.value) {
                return item.value;
            }
        }

        return undefined;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-select': Select;
    }
}
