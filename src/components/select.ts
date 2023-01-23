import { TaskStatus } from '@lit-labs/task';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { until } from 'lit/directives/until.js';

import { LocalizedMessage, localizedMessagePropertyOptions } from '../core';
import { DataSourced, DataSourceResult, DynamicValueType, Focusable, Input, Persisted } from '../mixins';
import { useSettings } from '../stream-deck/settings';

@customElement('sdpi-select')
export class Select extends Persisted(Focusable(DataSourced(DynamicValueType(Input<typeof LitElement, boolean | number | string>(LitElement))))) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            css`
                select {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 2px) 0;
                    text-overflow: ellipsis;
                    width: 100%;
                }

                select:focus {
                    box-shadow: inset 0 0 1px var(--font-color);
                }

                select:disabled {
                    opacity: var(--opacity-disabled);
                }

                .refresh {
                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjOUM5QzlDIj48cGF0aCBkPSJNMTIgMjBxLTMuMzUgMC01LjY3NS0yLjMyNVE0IDE1LjM1IDQgMTJxMC0zLjM1IDIuMzI1LTUuNjc1UTguNjUgNCAxMiA0cTEuNzI1IDAgMy4zLjcxMyAxLjU3NS43MTIgMi43IDIuMDM3VjRoMnY3aC03VjloNC4ycS0uOC0xLjQtMi4xODctMi4yUTEzLjYyNSA2IDEyIDYgOS41IDYgNy43NSA3Ljc1VDYgMTJxMCAyLjUgMS43NSA0LjI1VDEyIDE4cTEuOTI1IDAgMy40NzUtMS4xVDE3LjY1IDE0aDIuMXEtLjcgMi42NS0yLjg1IDQuMzI1UTE0Ljc1IDIwIDEyIDIwWiIvPjwvc3ZnPg==)
                        no-repeat -1px -1px;
                    width: 16px;
                }

                sdpi-button:not([disabled]):hover .refresh {
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjQ0VDRUNFIj48cGF0aCBkPSJNMTIgMjBxLTMuMzUgMC01LjY3NS0yLjMyNVE0IDE1LjM1IDQgMTJxMC0zLjM1IDIuMzI1LTUuNjc1UTguNjUgNCAxMiA0cTEuNzI1IDAgMy4zLjcxMyAxLjU3NS43MTIgMi43IDIuMDM3VjRoMnY3aC03VjloNC4ycS0uOC0xLjQtMi4xODctMi4yUTEzLjYyNSA2IDEyIDYgOS41IDYgNy43NSA3Ljc1VDYgMTJxMCAyLjUgMS43NSA0LjI1VDEyIDE4cTEuOTI1IDAgMy40NzUtMS4xVDE3LjY1IDE0aDIuMXEtLjcgMi42NS0yLjg1IDQuMzI1UTE0Ljc1IDIwIDEyIDIwWiIvPjwvc3ZnPg==);
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
     * Determines whether to show the refresh button.
     */
    @property({
        attribute: 'show-refresh',
        type: Boolean
    })
    public showRefresh = false;

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
        const disabled = this.disabled || this.items.status !== TaskStatus.COMPLETE;
        const selectedValue = this.getSelectedValueFrom(this.items?.value ?? []) || this.defaultValue;

        const select = html`
            <select
                ${ref(this.focusElement)}
                .disabled=${disabled}
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

        if (!this.showRefresh || this.dataSource === undefined) {
            return select;
        }

        return html`
            <div class="flex">
                <div class="flex-grow">${select}</div>
                <div class="flex-shrink margin-left">
                    <sdpi-button .disabled=${disabled} @click=${() => this.refresh()}>
                        <div class="refresh">&nbsp;</div>
                    </sdpi-button>
                </div>
            </div>
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
