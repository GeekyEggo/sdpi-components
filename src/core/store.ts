import StreamDeckConnection from '../streamdeck/streamDeckConnection';
import { StreamDeckPayloadEventArgs, SettingsPayload } from '../streamdeck/streamDeck';
import { delay } from './timeout';

const SETTINGS_MESSAGE = 'settings';
const GLOBAL_SETTINGS_MESSAGE = 'globalSettings';

/**
 * Defines a dispatch message.
 */
interface DispatchMessage {
    type: typeof SETTINGS_MESSAGE | typeof GLOBAL_SETTINGS_MESSAGE;
    data: any;
}

/**
 * Provides a store for managing settings stored within the Stream Deck.
 */
class Store extends EventTarget {
    private connection?: StreamDeckConnection;
    private settings : Record<string, any> = { };

    /**
     * Attaches the Stream Deck connection to the store.
     * @param connection The connection to the Stream Deck.
     */
    public attach(connection: StreamDeckConnection): void {
        this.connection = connection;
        this.connection.addEventListener('message', this.onConnectionMessage.bind(this));
        this.connection.send('getGlobalSettings');

        this.dispatch({
            type: SETTINGS_MESSAGE,
            data: connection.actionInfo.payload.settings
        });
    }

    /**
     * Sets the value for the specified key on the action settings.
     * @param key The settings key.
     * @param value The settings value.
     * @param global Determines whether the setting is a global setting.
     */
    public set(key: string, value?: any, global: boolean = false): void {
        const settings = this.settings[global ? GLOBAL_SETTINGS_MESSAGE : SETTINGS_MESSAGE];
        settings[key] = value;

        if (this.connection) {
            this.connection.send(global ? 'setGlobalSettings' : 'setSettings', settings);
        }
    }

    /**
     * Updates the settings and dispatches the changes.
     * @param msg The dispatch message.
     */
    private dispatch(msg: DispatchMessage): void {
        this.settings[msg.type] = msg.data || { };
        this.dispatchEvent(new MessageEvent(msg.type, {
            data: msg.data
        }));
    }
    
    /**
     * Handles receiving a message from the Stream Deck connection.
     * @param ev The event arguments.
     */
    private onConnectionMessage(ev: Event): void {
        const sdEvent = <StreamDeckPayloadEventArgs<SettingsPayload>>(<MessageEvent>ev).data;

        if (sdEvent.event === 'didReceiveSettings') {
            this.dispatch({
                type: SETTINGS_MESSAGE,
                data: sdEvent.payload.settings
            });
        } else if (sdEvent.event === 'didReceiveGlobalSettings') {
            this.dispatch({
                type: GLOBAL_SETTINGS_MESSAGE,
                data: sdEvent.payload.settings
            });
        }
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
    // monitor for changes from the Stream Deck
    store.addEventListener(global ? GLOBAL_SETTINGS_MESSAGE : SETTINGS_MESSAGE, (ev: Event) => {
        const data = (<MessageEvent>ev).data;
        if (data) {
            updateCallback(data[key]);
        }
    });
    
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
export function useStoreWithInput(key: string, global: boolean, input: HTMLInputElement, timeout?: number | null): void {
    const { set } = useStore(key, global, (value?: any) => {
        input.value = value || '';
    });

    if (timeout) {
        input.addEventListener('input', delay(() => set(input.value), timeout));
    } else {
        input.addEventListener('change', () => set(input.value));
    }
}
