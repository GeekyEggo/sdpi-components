import StreamDeckConnection from '../streamdeck/streamDeckConnection';
import { StreamDeckPayloadEventArgs, ActionPayload } from '../streamdeck/streamDeck';

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
        this.dispatchEvent(new MessageEvent('settingsChange', {
            data: this.settings
        }))
    }
    
    private onConnectionMessage(ev: Event): void {
        let sdEvent = <StreamDeckPayloadEventArgs<ActionPayload>>(<MessageEvent>ev).data;
        if (sdEvent.event === 'didReceiveSettings') {
            this.dispatchSettings(sdEvent.payload.settings);
        }
    }
}

const store = new Store();
export default store;
