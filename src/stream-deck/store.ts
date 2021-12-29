import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import streamDeckClient from './stream-deck-client';
import { ActionEventArgsWithPayload, StreamDeckEventArgsWithPayload, SettingsPayload, ActionPayload } from 'stream-deck';

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
     * Dispatches the settings change.
     * @param data The data containing the settings.
     */
    private dispatchSettings(data: ActionEventArgsWithPayload<SettingsPayload>) {
        this.settings = data.payload.settings;
        this._settingsChange.dispatch(this.settings);
    }
}

const store = new Store();
export default store;
