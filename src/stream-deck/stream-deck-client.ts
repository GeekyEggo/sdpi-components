import EventDispatcher, { IEventSubscriber } from '../core/event-dispatcher';
import StreamDeckConnection from './stream-deck-connection';
import { ActionEventArgsWithPayload, SettingsPayload, StreamDeckEventArgs, StreamDeckEventArgsWithPayload } from 'stream-deck';

export type DidReceiveGlobalSettingsEventArgs = StreamDeckEventArgsWithPayload<SettingsPayload>
export type DidReceiveSettingsEventArgs = ActionEventArgsWithPayload<SettingsPayload>;

enum Message {
    // sent
    GET_SETTINGS = 'getSettings',
    GET_GLOBAL_SETTINGS = 'getGlobalSettings',
    LOG_MESSAGE = 'logMessage',
    OPEN_URL = 'openUrl',
    SET_SETTINGS = 'setSettings',
    SET_GLOBAL_SETTINGS = 'setGlobalSettings',
    SEND_TO_PLUGIN = 'sendToPlugin',

    // received
    DID_RECEIVE_GLOBAL_SETTINGS = 'didReceiveGlobalSettings',
    DID_RECEIVE_SETTINGS = 'didReceiveSettings'
}

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
        return this.connection.get(Message.GET_GLOBAL_SETTINGS, Message.DID_RECEIVE_GLOBAL_SETTINGS);
    }

    /**
     * Sets the global settings.
     * @param value The global settings.
     */
    public setGlobalSettings(value?: any): void {
        this.connection.send(Message.SET_GLOBAL_SETTINGS, value);
    }

    /**
     * Gets the settings.
     * @returns The settings as a promise.
     */
    public getSettings(): Promise<DidReceiveSettingsEventArgs> {
        return this.connection.get(Message.GET_SETTINGS, Message.DID_RECEIVE_SETTINGS);
    }

    /**
     * Sets the settings.
     * @param value The settings.
     */
    public setSettings(value?: any): void {
        this.connection.send(Message.SET_SETTINGS, value);
    }    

    /**
     * Handles receiving a message from the connection.
     * @param data The data received from the Stream Deck connection.
     */
    private onMessage(data: StreamDeckEventArgs): void {
        switch (data.event) {
            case Message.DID_RECEIVE_GLOBAL_SETTINGS:
                this._didReceiveGlobalSettings.dispatch(<DidReceiveGlobalSettingsEventArgs>data);
                break;

            case Message.DID_RECEIVE_SETTINGS:
                this._didReceiveSettings.dispatch(<DidReceiveSettingsEventArgs>data);
                break;
        }
    }
}
