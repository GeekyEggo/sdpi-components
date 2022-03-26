import {
    ActionEventArgsWithPayload, SettingsPayload, StreamDeckEventArgsWithPayload
} from 'stream-deck';

import { delay } from '../core/timeout';
import streamDeckClient from './stream-deck-client';

/**
 * Provides a store for managing settings stored within the Stream Deck.
 */
class Settings {
    private _globalSettings?: Record<string, unknown>;
    private _settings?: Record<string, unknown>;

    /**
     * Initializes a new instance of the `Settings`.
     */
    constructor() {
        streamDeckClient.didReceiveGlobalSettings.subscribe((data: StreamDeckEventArgsWithPayload<SettingsPayload>) => (this._globalSettings = data.payload.settings));
        streamDeckClient.didReceiveSettings.subscribe((data: ActionEventArgsWithPayload<SettingsPayload>) => (this._settings = data.payload.settings));

        streamDeckClient.getGlobalSettings();
    }

    /**
     * Registers the the given key as a setting to be persisted in the Stream Deck; when the settings change, the callback is invoked. This returns a function capable of persisting the value against the key.
     * @param key The settings key.
     * @param isGlobal Determines whether the setting is a global setting.
     * @param onChange The callback invoked when the setting changes.
     * @returns A delegate that allows for updating the setting value.
     */
    public register<T>(key: string, isGlobal: boolean, onChange: (value: T) => void, timeout: number | null = 250): (value?: unknown) => void {
        const settingChangeHandler = (data: StreamDeckEventArgsWithPayload<SettingsPayload>): void => {
            if (data && data.payload && data.payload.settings) {
                onChange(data.payload.settings[key] || '');
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
            if (this._globalSettings) {
                this._globalSettings[key] = value;
            }
            streamDeckClient.setGlobalSettings(this._globalSettings);
        } else {
            if (this._settings) {
                this._settings[key] = value;
            }
            streamDeckClient.setSettings(this._settings);
        }
    }
}

const settings = new Settings();
export const useSettings = settings.register;
