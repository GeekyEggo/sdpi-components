import StreamDeckConnection from '../streamdeck/streamDeckConnection';
import { StreamDeckPayloadEventArgs, SettingsPayload } from '../streamdeck/streamDeck';
import { delay } from './timeout';

/**
 * Defines the events that can be dispatched by the store.
 */
export const STORE_EVENT = {
    settings: 'settings',
    globalSettings: 'globalSettings'
}

/**
 * Defines an internal dispatch message
 */
interface DispatchMessage {
    data: any;
    event: string;
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
            event: STORE_EVENT.settings,
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
        const settings = this.settings[global ? STORE_EVENT.globalSettings : STORE_EVENT.settings];
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
        this.settings[msg.event] = msg.data || { };
        this.dispatchEvent(new MessageEvent(msg.event, {
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
                event: STORE_EVENT.settings,
                data: sdEvent.payload.settings
            });
        } else if (sdEvent.event === 'didReceiveGlobalSettings') {
            this.dispatch({
                event: STORE_EVENT.globalSettings,
                data: sdEvent.payload.settings
            });
        }
    }
}

const store = new Store();

/**
 * Registers the update callback against the store for the given key, and returns a setter.
 * @param key The settings key.
 * @param global Determines whether the setting is global.
 * @param updateCallback The update callback invoked when the settings were updated from the Stream Deck.
 * @returns A function to be used to persist the setting to the Stream Deck.
 */
export function useStore(key: string, global: boolean, updateCallback: (value: any) => void): (value?: any) => void {
    // monitor for changes from the Stream Deck
    store.addEventListener(global ? STORE_EVENT.globalSettings : STORE_EVENT.settings, (ev: Event) => {
        const data = (<MessageEvent>ev).data;
        if (data) {
            updateCallback(data[key]);
        }
    });
    
    // return the setter
    return (value?: any) => {
        store.set(key, value, global);
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
    const save = useStore(key, global, (value?: any) => {
        input.value = value || '';
    })

    if (timeout) {
        delay(() => save(input.value), timeout, input);
    } else {
        input.addEventListener('change', _ => save(input.value));
    }
}

export default store;
