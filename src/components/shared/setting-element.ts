import { property } from 'lit/decorators.js';
import { useSettings } from '../../stream-deck/settings';

import { InputElement } from './input-element';

/**
 * An element that is persisted to the Stream Deck, and is represented as a label, and the input.
 */
export abstract class SettingElement<TValue> extends InputElement {
    /**
     * When true, the setting will be persisted against the global settings.
     */
    @property({
        attribute: 'global',
        type: Boolean
    })
    public isGlobal = false;

    /**
     * The property key of which the value is persisted against in the settings, e.g. 'name' would result in the settings being { 'name': value, ... }.
     */
    @property()
    public setting?: string;

    /**
     * Gets or sets the underlying value that this element represents, and persists.
     */
    @property({ attribute: false })
    public value?: TValue;

    /** @inheritdoc */
    protected firstUpdated(): void {
        super.firstUpdated;

        if (this.setting) {
            this._save = useSettings<TValue>(this.setting, this.isGlobal, (value) => (this.value = value));
        }
    }

    /**
     * Saves the `value` to the Stream Deck settings.
     * @param value The value to save.
     */
    protected save(value: TValue): void {
        this.value = value;

        if (this._save) {
            this._save(this.value);
        }
    }

    /**
     * Persists the `value` to the Stream Deck settings.
     * @param value The value to persist.
     */
    private _save?: (value: TValue) => void;
}
