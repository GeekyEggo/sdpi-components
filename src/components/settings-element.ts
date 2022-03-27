import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

import { getUUID } from '../core/utils';
import { useSettings } from '../stream-deck/settings';

/**
 * Provides a base element for components that persist settings within the Stream Deck.
 */
export class SettingsElement<T> extends LitElement {
    protected readonly inputID: string = getUUID();
    private _value?: T;
    private _save?: (value: T) => void;

    /**
     * When true, the setting will be persisted against the global settings.
     */
    @property({
        attribute: 'global',
        type: Boolean
    })
    public isGlobal = false;

    /**
     * The label displayed next to the input.
     */
    @property()
    public label?: string;

    /**
     * The property key of which the value is persisted against in the settings, e.g. 'name' would result in the settings being { 'name': value, ... }.
     */
    @property()
    public setting?: string;

    /**
     * Gets or sets the underlying value that this element represents, and persists.
     */
    @property({ attribute: false })
    public value?: T;

    /**
     * Occurs when the component is first updated, and is responsible for initializing the save method.
     */
    protected firstUpdated(): void {
        super.firstUpdated;

        if (this.setting) {
            this._save = useSettings<T>(this.setting, this.isGlobal, (value) => (this.value = value));
        }
    }

    /**
     * Gets the template that represents the label.
     * @returns The template.
     */
    protected getLabel(): TemplateResult<1> | undefined {
        if (!this.label) {
            return undefined;
        }

        return html`<label for=${this.inputID}>${this.label}:</label>`;
    }

    /**
     * Saves the `value` to the Stream Deck settings.
     * @param value The value of the setting.
     */
    protected save(value: T): void {
        this.value = value;

        if (this._save) {
            this._save(this.value);
        }
    }
}
