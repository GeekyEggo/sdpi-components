import EventDispatcher, { IEventSubscriber } from './event-dispatcher';
import StreamDeckClient, { DidReceiveGlobalSettingsEventArgs, DidReceiveSettingsEventArgs } from '../stream-deck/stream-deck-client';
import { ActionEventArgsWithPayload, ActionPayload } from 'stream-deck';
import { delay } from './timeout';
import { dispatchChange, HTMLInput } from '../core/input';

type PartialActionSettingsEventArgs = DidReceiveSettingsEventArgs | ActionEventArgsWithPayload<ActionPayload>;

/**
 * Provides a store for managing settings stored within the Stream Deck.
 */
class Store {
    /**
     * Attaches the Stream Deck client to the store.
     * @param client The Stream Deck client.
     */
    public attach(client: StreamDeckClient): void {
        this._client = client;

        this._client.didReceiveGlobalSettings.subscribe((data: DidReceiveGlobalSettingsEventArgs) => {
            this.globalSettings = data.payload.settings;
            this._globalSettingsChange.dispatch(this.globalSettings);
        })

        this._client.didReceiveSettings.subscribe((data: DidReceiveSettingsEventArgs) => {
            this.dispatchSettings(data);
        })

        this._client.getGlobalSettings();
        this.dispatchSettings(this._client.connection.actionInfo);
    }
    
    private _client?: StreamDeckClient;
    private _globalSettingsChange: EventDispatcher<any> = new EventDispatcher<any>();
    private _settingsChange: EventDispatcher<any> = new EventDispatcher<any>();
    private globalSettings: any;
    private settings: any;

    /**
     * Gets the Stream Deck client associated with the store.
     */
    public get client(): StreamDeckClient | undefined {
        return this._client;
    }

    /**
     * Gets the event subscriber for when the global settings change.
     */
    public get globalSettingsChange(): IEventSubscriber<any> {
        return this._globalSettingsChange;
    }

    /**
     * Gets the event subscriber for when the settings change.
     */
    public get settingsChange(): IEventSubscriber<any> {
        return this._settingsChange;
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
            this._client?.setGlobalSettings(this.globalSettings);
        } else {
            this.settings[key] = value;
            this._client?.setSettings(this.settings);
        }
    }

    /**
     * Dispatches the settings change.
     * @param data The data containing the settings.
     */
    private dispatchSettings(data: PartialActionSettingsEventArgs) {
        this.settings = data.payload.settings;
        this._settingsChange.dispatch(this.settings);
    }
}

const store = new Store();
export default store;

export type StoreSetter = (value?: any) => void;

/**
 * The interface returned when using the store.
 */
interface IUseStore { 
    save: StoreSetter;
}

/**
 * Registers the update callback against the store for the given key, and returns a setter.
 * @param key The settings key.
 * @param global Determines whether the setting is global.
 * @param updateCallback The update callback invoked when the settings were updated from the Stream Deck.
 * @returns An object allowing for interaction with the store.
 */
export function useStore(key: string, global: boolean, updateCallback: (value: any) => void): IUseStore {
    const settingsChangeHandler = (data: any): void => {
        if (data) {
            updateCallback(data[key]);
        }
    }

    // subscribe to changes
    if (global) {
        store.globalSettingsChange.subscribe(settingsChangeHandler);
    } else {
        store.settingsChange.subscribe(settingsChangeHandler);
    }
    
    // return the setter
    return {
        save: (value?: any) => {
            store.set(key, value, global);
        }
    }
}

/**
 * A wrapper function for useStore, whereby changes are automatically watched on the inputs value.
 * @param key The settings key.
 * @param global Determines whether the setting is global.
 * @param input The input element.
 * @param timeout The delay before the changes are saved; when undefined the save will occur on change.
 */
export function useStoreWithInput(key: string, global: boolean, input: HTMLInput, timeout: number | null = 250): void {
    const { save } = useStore(key, global, (value?: any) => {
        if (input.value != value) {
            input.value = value || '';
            dispatchChange(input);
        }
    });

    if (timeout) {
        input.addEventListener('input', delay(() => save(input.value), timeout));
    } else {
        input.addEventListener('change', () => save(input.value));
    }
}
