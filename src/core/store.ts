import StreamDeckConnection from '../streamdeck/streamDeckConnection';
import { StreamDeckPayloadEventArgs, ActionPayload } from '../streamdeck/streamDeck';

/**
 * Defines the events that can be dispatched by the store.
 */
export const STORE_EVENT = {
    settingsChange: 'settingsChange'
}

/**
 * Provides a store for managing settings stored within the Stream Deck.
 */
class Store extends EventTarget {
    private settings: any;
    private connection?: StreamDeckConnection;

    /**
     * Attaches the Stream Deck connection to the store.
     * @param connection The connection to the Stream Deck.
     */
    public attach(connection: StreamDeckConnection): void {
        this.connection = connection;
        this.connection.addEventListener('message', this.onConnectionMessage.bind(this));

        this.dispatchSettings(connection.actionInfo.payload.settings);
    }

    /**
     * Sets the value for the specified key on the action settings.
     * @param key The settings key.
     * @param value The settings value.
     */
    public set(key: string, value?: any): void {
        this.settings[key] = value;

        if (this.connection) {
            this.connection.send('setSettings', this.settings);
        }
    }

    /**
     * Dispatches changes to the settings
     * @param settings The settings.
     */
    private dispatchSettings(settings: any): void {
        this.settings = settings || {};
        this.dispatchEvent(new MessageEvent(STORE_EVENT.settingsChange, {
            data: this.settings
        }))
    }
    
    /**
     * Handles receiving a message from the Stream Deck connection.
     * @param ev The event arguments.
     */
    private onConnectionMessage(ev: Event): void {
        let sdEvent = <StreamDeckPayloadEventArgs<ActionPayload>>(<MessageEvent>ev).data;
        if (sdEvent.event === 'didReceiveSettings') {
            this.dispatchSettings(sdEvent.payload.settings);
        }
    }
}

const store = new Store();
export default store;
