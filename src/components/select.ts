import { TaskStatus } from '@lit-labs/task';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { until } from 'lit/directives/until.js';

import { LocalizedMessage, localizedMessagePropertyOptions } from '../core';
import { DataSourced, DataSourceResult, DynamicValueType, Focusable, Input, Persisted } from '../mixins';
import { useSettings } from '../stream-deck/settings';
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
     * Gets the setting path where the label of the selected option should be stored; when specified, if the value is not present, this label is displayed.
     */
    @property({ attribute: 'label-setting' })
    public labelSetting?: string;

    /**
     * The optional placeholder text; added as the first item within the select, as a disable option, and selected by default.
     */
    @property(localizedMessagePropertyOptions)
    public placeholder?: LocalizedMessage;

    /** @inheritdoc */
    protected firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void {
        super.firstUpdated(_changedProperties);

        if (this.labelSetting) {
            [this.getLabel, this.setLabel] = useSettings<string>(this.labelSetting, null, null, false);
        }
    }

    /** @inheritdoc */
    protected render() {
        const selectedValue = this.getSelectedValueFrom(this.items?.value ?? []) || this.defaultValue;

        return html`
            <select
                ${ref(this.focusElement)}
                .disabled=${this.disabled || this.items.status !== TaskStatus.COMPLETE}
                .value=${selectedValue?.toString() || ''}
                @change=${(ev: HTMLInputEvent<HTMLSelectElement>) => {
                    this.setLabel && this.setLabel(ev.target[ev.target.selectedIndex].innerText);
                    this.value = this.parseValue(ev.target.value);
                }}
            >
                ${this.items.render({
                    pending: () => html`<option value="" disabled selected>${this.loadingText}</option>`,
                    complete: () => html`
                        ${selectedValue === undefined ? until(this.getLabelOrPlaceholder()) : undefined}
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
     * Attempts to get the label that was persisted when the value was originally selected, the placeholder if defined, otherwise nothing.
     * @returns The option that represents the label, the placeholder, or nothing.
     */
    private async getLabelOrPlaceholder(): Promise<unknown> {
        // When we have a label, render it as the selected but disabled option.
        if (this.getLabel) {
            const label = await this.getLabel();
            if (label !== undefined) {
                return html`<option value="" disabled selected>${label}</option>`;
            }
        }

        // Otherwise, try to render a placeholder.
        if (this.placeholder) {
            return html`<option value="" disabled hidden selected>${this.placeholder}</option>`;
        }

        return undefined;
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

    /**
     * Gets the value that represents the label.
     */
    private getLabel?(): Promise<string | undefined>;

    /**
     * Saves the label to the settings.
     * @param value The label value.
     */
    private setLabel?(value: string | undefined): Promise<void>;
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-select': Select;
    }
}
