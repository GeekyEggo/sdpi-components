import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { getUUID } from '../core/utils';
import { useSettings } from '../stream-deck/settings';

/**
 * Provides a base element for components that persist settings within the Stream Deck.
 */
export class SettingsElement<T> extends LitElement {
    protected readonly inputID: string;
    private _value?: T;

    /**
     * Initializes a new instance of a Stream Deck Property Inspector element that persists settings.
     */
    constructor() {
        super();
        this.inputID = getUUID();
    }

    /**
     * When true, the setting will be persisted against the global settings.
     */
    @property({ type: Boolean })
    public global = false;

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
     * Gets the value that this instance represents within the persisted settings.
     */
    public get value(): T | undefined {
        return this._value;
    }

    /**
     * Sets the value that this instance represents within the persisted settings.
     */
    public set value(value: T | undefined) {
        if (this._value != value) {
            const oldValue = this._value;
            this._value = value;

            if (this.valueChanged) {
                this.valueChanged(value);
            }

            super.requestUpdate('value', oldValue);
        }
    }

    /**
     * Occurs when the component is first updated, and is responsible for initializing the save method.
     */
    protected firstUpdated(): void {
        super.firstUpdated;
        if (this.setting) {
            this.save = useSettings<T>(this.setting, this.global, (value) => (this.value = value));
        }
    }

    /**
     * Saves the `value` to the Stream Deck settings.
     * @param value The value of the setting.
     */
    protected save?(value: T): void;

    /**
     * Invoked when the value changed.
     * @param value The value of the setting.
     */
    protected valueChanged?(value: T | undefined): void;
}
