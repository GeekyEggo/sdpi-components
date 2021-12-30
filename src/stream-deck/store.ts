import {
    ActionEventArgsWithPayload, ActionPayload, SettingsPayload, StreamDeckEventArgsWithPayload
} from 'stream-deck';

import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import { delay } from '../core/timeout';
import streamDeckClient from './stream-deck-client';
import streamDeckConnection from './stream-deck-connection';

export interface IStoreObject {
    value?: any;
    change: IEventSubscriber<void>;
}

/**
 * Provides a store for managing settings stored within the Stream Deck.
 */
class Store {
    private readonly _globalSettingsChange: EventManager<any> = new EventManager<any>();
    private readonly _settingsChange: EventManager<any> = new EventManager<any>();

    public get globalSettingsChange(): IEventSubscriber<any> {
        return this._globalSettingsChange;
    }
    public get settingsChange(): IEventSubscriber<any> {
        return this._settingsChange;
    }

    private globalSettings: any;
    private settings: any;

    /**
     * Attaches the Stream Deck client to the store.
     * @param client The Stream Deck client.
     */
    public connect(actionInfo: ActionEventArgsWithPayload<ActionPayload>): void {
        streamDeckClient.didReceiveGlobalSettings.subscribe((data: StreamDeckEventArgsWithPayload<SettingsPayload>) => {
            this.globalSettings = data.payload.settings;
            this._globalSettingsChange.dispatch(this.globalSettings);
        })

        streamDeckClient.didReceiveSettings.subscribe((data: ActionEventArgsWithPayload<SettingsPayload>) => {
            this.dispatchSettings(data);
        })

        this.dispatchSettings(actionInfo);
        streamDeckClient.getGlobalSettings();
    }

    /**
     * Registers the the given key as a setting to be persisted in the Stream Deck; when the settings change, the callback is invoked. This returns a function capable of persisting the value against the key.
     * @param key The settings key.
     * @param global Determines whether the setting is global.
     * @param settingsChangeCallback The callback invoked when the settings change.
     * @returns A delegate that allows for updating the store value.
     */
    public register(key: string, global: boolean, settingsChangeCallback: (value: any) => void): (value?: any) => void {
        const settingsChangeHandler = (data: any): void => {
            if (data) {
                settingsChangeCallback(data[key]);
            }
        }

        // Subscribe to changes.
        if (global) {
            store.globalSettingsChange.subscribe(settingsChangeHandler);
        } else {
            store.settingsChange.subscribe(settingsChangeHandler);
        }

        // Return the setter that allows for the value to be saved to the store.
        return (value?: any) => {
            store.set(key, value, global);
        }
    }

    /**
     * Sets the value for the specified key on the action settings.
     * @param key The settings key.
     * @param value The settings value.
     * @param global Determines whether the setting is a global setting.
     */
    public set(key: string, value?: any, global: boolean = false): void {
        if (global) {
            this.globalSettings[key] = value;
            streamDeckClient.setGlobalSettings(this.globalSettings);
        } else {
            this.settings[key] = value;
            streamDeckClient.setSettings(this.settings);
        }
    }

    /**
     * A wrapper function that monitors and maps changes to/from the value provider to/from the underlying store.
     * @param obj The source object that provides value mapping.
     * @param key The settings key.
     * @param global Determines whether the setting is global.
     * @param timeout The delay before the changes are saved; when undefined the save will occur on change.
     */
    public use(obj: IStoreObject, key: string, global: boolean, timeout: number | null = 250): void {
        const save = store.register(key, global, (value?: any) => {
            if (obj.value != value) {
                obj.value = value || '';
            }
        });

        if (timeout) {
            obj.change.subscribe(delay(() => save(obj.value), timeout));
        } else {
            obj.change.subscribe(() => save(obj.value));
        }
    }

    /**
     * Dispatches the settings change.
     * @param data The data containing the settings.
     */
    private dispatchSettings(data: ActionEventArgsWithPayload<SettingsPayload>) {
        this.settings = data.payload.settings;
        this._settingsChange.dispatch(this.settings);
    }
}

const store = new Store();
(async function () {
    await streamDeckConnection.waitForConnection();

    const connectionInfo = await streamDeckConnection.getConnectionInfo();
    store.connect(connectionInfo.actionInfo);
})();

export default store;
