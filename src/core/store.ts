import { dispatchChange, HTMLInput } from '../core/input';
import { delay } from './timeout';
import EventDispatcher, { IEventSubscriber } from './eventDispatcher';
import StreamDeckClient, { DidReceiveGlobalSettingsEventArgs, DidReceiveSettingsEventArgs } from '../streamDeck/streamDeckClient';
import { ActionEventArgs, ActionInfoPayload } from '../streamDeck/streamDeck';

type PartialActionSettingsEventArgs = DidReceiveSettingsEventArgs | ActionEventArgs<ActionInfoPayload>;

/**
 * Provides a store for managing settings stored within the Stream Deck.
 */
class Store {
    /**
     * Attaches the Stream Deck client to the store.
     * @param client The Stream Deck client.
     */
    public attach(client: StreamDeckClient): void {
        this.client = client;

        this.client.didReceiveGlobalSettings.subscribe((data: DidReceiveGlobalSettingsEventArgs) => {
            this.globalSettings = data.payload.settings;
            this._globalSettingsChange.dispatch(this.globalSettings);
        })

        this.client.didReceiveSettings.subscribe((data: DidReceiveSettingsEventArgs) => {
            this.dispatchSettings(data);
        })

        this.client.getGlobalSettings();
        this.dispatchSettings(this.client.connection.actionInfo);
    }
    
    private _globalSettingsChange: EventDispatcher<any> = new EventDispatcher<any>();
    private _settingsChange: EventDispatcher<any> = new EventDispatcher<any>();
    private client?: StreamDeckClient;
    private globalSettings: any;
    private settings: any;

    public get globalSettingsChange(): IEventSubscriber<any> {
        return this._globalSettingsChange;
    }
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
            this.client?.setGlobalSettings(this.globalSettings);
        } else {
            this.settings[key] = value;
            this.client?.setSettings(this.settings);
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

/**
 * The interface returned when using the store.
 */
interface IUseStore { 
    set(value?: any): void
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
        set: (value?: any) => {
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
    const { set } = useStore(key, global, (value?: any) => {
        if (input.value != value) {
            input.value = value || '';
            dispatchChange(input);
        }
    });

    if (timeout) {
        input.addEventListener('input', delay(() => set(input.value), timeout));
    } else {
        input.addEventListener('change', () => set(input.value));
    }
}
