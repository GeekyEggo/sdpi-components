import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { getUUID } from '../core/utils';
import { useSettings } from '../stream-deck/settings';

/**
 * Provides a base element for components that persist settings within the Stream Deck.
 */
export class SettingsElement<T> extends LitElement {
    protected readonly inputID: string;

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
     * The value of the setting.
     */
    @property({ attribute: false })
    public value?: T;

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
}
