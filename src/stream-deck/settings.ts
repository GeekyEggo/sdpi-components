import { DidReceiveGlobalSettingsEvent, DidReceiveSettingsEvent } from 'stream-deck';

import { delay, get, set } from '../core';
import streamDeckClient from './stream-deck-client';

/**
 * Provides a store for managing settings stored within the Stream Deck.
 */
class Settings {
    private _globalSettings?: Record<string, unknown>;
    private _settings?: Record<string, unknown>;

    /**
     * Initializes a new instance of the settings used to persist data.
     */
    constructor() {
        streamDeckClient.didReceiveGlobalSettings.subscribe((data: DidReceiveGlobalSettingsEvent) => (this._globalSettings = data.payload.settings));
        streamDeckClient.didReceiveSettings.subscribe((data: DidReceiveSettingsEvent) => (this._settings = data.payload.settings));

        streamDeckClient.getGlobalSettings();
    }

    /**
     * Registers the the given key as a setting to be persisted in the Stream Deck; when the settings change, the callback is invoked. This returns a function capable of persisting the value against the key.
     * @param key The settings key.
     * @param isGlobal Determines whether the setting is a global setting.
     * @param onChange The callback invoked when the setting changes.
     * @returns A delegate that allows for updating the setting value.
     */
    public register<T>(key: string, isGlobal: boolean, onChange: (value?: T) => void, timeout: number | null = 250): (value?: unknown) => void {
        const settingChangeHandler = (data: DidReceiveGlobalSettingsEvent | DidReceiveSettingsEvent): void => {
            if (data && data.payload && data.payload.settings) {
                onChange(get(key, data.payload.settings));
            }
        };

        // Subscribe to changes.
        if (isGlobal) {
            streamDeckClient.didReceiveGlobalSettings.subscribe(settingChangeHandler);
        } else {
            streamDeckClient.didReceiveSettings.subscribe(settingChangeHandler);
        }

        // Return the setter that allows for the value to be saved to the store.
        if (timeout) {
            return delay((value) => settings.set(key, isGlobal, value), timeout);
        } else {
            return (value?: unknown) => settings.set(key, isGlobal, value);
        }
    }

    /**
     * Sets the value, for the specified key, to the persistent settings.
     * @param key The settings key.
     * @param isGlobal Determines whether the setting is a global setting.
     * @param value The settings value.
     */
    private set(key: string, isGlobal: boolean, value?: unknown): void {
        if (isGlobal) {
            if (this.tryUpdate(key, value, this._globalSettings)) {
                streamDeckClient.setGlobalSettings(this._globalSettings);
            }
        } else if (this.tryUpdate(key, value, this._settings)) {
            streamDeckClient.setSettings(this._settings);
        }
    }

    /**
     * Update the `settings` when the current value for the `key` differs to the `value`.
     * @param key The settings key.
     * @param value The new value.
     * @param settings The settings to update.
     * @returns `true` when the settings were updated.
     */
    private tryUpdate(key: string, value?: unknown, settings?: Record<string, unknown>): boolean {
        if (settings === undefined) {
            return false;
        }

        const oldValue = get(key, settings);
        if (oldValue === value) {
            return false;
        }

        set(key, settings, value);
        return true;
    }
}

const settings = new Settings();
export const useSettings = settings.register;
