import EventDispatcher, { IEventSubscriber } from '../core/event-dispatcher';
import StreamDeckConnection from './stream-deck-connection';
import { ActionEventArgsWithPayload, SettingsPayload, StreamDeckEventArgs, StreamDeckEventArgsWithPayload } from 'stream-deck';

// received
export const DID_RECEIVE_GLOBAL_SETTINGS_MESSAGE = 'didReceiveGlobalSettings';
export const DID_RECEIVE_SETTINGS_MESSAGE = 'didReceiveSettings';

export type DidReceiveGlobalSettingsEventArgs = StreamDeckEventArgsWithPayload<SettingsPayload>
export type DidReceiveSettingsEventArgs = ActionEventArgsWithPayload<SettingsPayload>;

// sent
const SET_SETTINGS_MESSAGE = 'setSettings';
const GET_SETTINGS_MESSAGE = 'getSettings';
const SET_GLOBAL_SETTINGS_MESSAGE = 'setGlobalSettings';
const GET_GLOBAL_MESSAGE = 'getGlobalSettings';
const OPEN_URL_MESSAGE = 'openUrl';
const LOG_MESSAGE_MESSAGE = 'logMessage';
const SEND_TO_PLUGIN_MESSAGE = 'sendToPlugin';

/**
 * Provides a Stream Deck client wrapper for the connection.
 */
export default class StreamDeckClient {
    constructor(connection: StreamDeckConnection) {
        this._connection = connection;
        this.connection.message.subscribe(this.onMessage.bind(this));
    }
    
    private _connection: StreamDeckConnection;
    private _didReceiveGlobalSettings: EventDispatcher<DidReceiveGlobalSettingsEventArgs> = new EventDispatcher<DidReceiveGlobalSettingsEventArgs>();
    private _didReceiveSettings: EventDispatcher<DidReceiveSettingsEventArgs> = new EventDispatcher<DidReceiveSettingsEventArgs>();

    /**
     * Gets the connection to the Stream Deck.
     */
    public get connection(): StreamDeckConnection {
        return this._connection;
    }

    /**
     * Gets the event subscriber for receiving the global settings.
     */
    public get didReceiveGlobalSettings(): IEventSubscriber<DidReceiveGlobalSettingsEventArgs> {
        return this._didReceiveGlobalSettings;
    }
    
    /**
     * Gets the event subscriber for receiving the settings.
     */
    public get didReceiveSettings(): IEventSubscriber<DidReceiveSettingsEventArgs> {
        return this._didReceiveSettings;
    }

    /**
     * Gets the global settings.
     * @returns The global settings as a promise.
     */
    public getGlobalSettings(): Promise<DidReceiveGlobalSettingsEventArgs> {
        return this.connection.get(GET_GLOBAL_MESSAGE, DID_RECEIVE_GLOBAL_SETTINGS_MESSAGE);
    }

    /**
     * Sets the global settings.
     * @param value The global settings.
     */
    public setGlobalSettings(value?: any): void {
        this.connection.send(SET_GLOBAL_SETTINGS_MESSAGE, value);
    }

    /**
     * Gets the settings.
     * @returns The settings as a promise.
     */
    public getSettings(): Promise<DidReceiveSettingsEventArgs> {
        return this.connection.get(GET_SETTINGS_MESSAGE, DID_RECEIVE_SETTINGS_MESSAGE);
    }

    /**
     * Sets the settings.
     * @param value The settings.
     */
    public setSettings(value?: any): void {
        this.connection.send(SET_SETTINGS_MESSAGE, value);
    }    

    /**
     * Handles receiving a message from the connection.
     * @param data The data received from the Stream Deck connection.
     */
    private onMessage(data: StreamDeckEventArgs): void {
        switch (data.event) {
            case DID_RECEIVE_GLOBAL_SETTINGS_MESSAGE:
                this._didReceiveGlobalSettings.dispatch(<DidReceiveGlobalSettingsEventArgs>data);
                break;

            case DID_RECEIVE_SETTINGS_MESSAGE:
                this._didReceiveSettings.dispatch(<DidReceiveSettingsEventArgs>data);
                break;
        }
    }
}
