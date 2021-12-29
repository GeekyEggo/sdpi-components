import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import StreamDeckConnection, { IConnectionInfo } from './stream-deck-connection';
import { ActionEventArgsWithPayload, SettingsPayload, StreamDeckEventArgs, StreamDeckEventArgsWithPayload } from 'stream-deck';
import PromiseCompletionSource from '../core/promise-completion-source';

enum Message {
    // Sent.
    GET_SETTINGS = 'getSettings',
    GET_GLOBAL_SETTINGS = 'getGlobalSettings',
    LOG_MESSAGE = 'logMessage',
    OPEN_URL = 'openUrl',
    SET_SETTINGS = 'setSettings',
    SET_GLOBAL_SETTINGS = 'setGlobalSettings',
    SEND_TO_PLUGIN = 'sendToPlugin',

    // Received.
    DID_RECEIVE_GLOBAL_SETTINGS = 'didReceiveGlobalSettings',
    DID_RECEIVE_SETTINGS = 'didReceiveSettings'
}

/**
 * Provides a Stream Deck client wrapper for the connection.
 */
class StreamDeckClient {
    private readonly _didReceiveGlobalSettings: EventManager<StreamDeckEventArgsWithPayload<SettingsPayload>> = new EventManager<StreamDeckEventArgsWithPayload<SettingsPayload>>();
    private readonly _didReceiveSettings: EventManager<ActionEventArgsWithPayload<SettingsPayload>> = new EventManager<ActionEventArgsWithPayload<SettingsPayload>>();
    private readonly _connectioninfo: PromiseCompletionSource<IConnectionInfo> = new PromiseCompletionSource<IConnectionInfo>();
    
    /**
     * Initializes a new instance of the Stream Deck client class.
     * @constructor
     */
    constructor() {
        this.connection.message.subscribe(this.onMessage.bind(this));
    }
    
    public get didReceiveGlobalSettings(): IEventSubscriber<StreamDeckEventArgsWithPayload<SettingsPayload>> { return this._didReceiveGlobalSettings; }
    public get didReceiveSettings(): IEventSubscriber<ActionEventArgsWithPayload<SettingsPayload>> { return this._didReceiveSettings; }

    private readonly connection: StreamDeckConnection = new StreamDeckConnection();

    /**
     * Connects to the Stream Deck.
     * @param info The connection information.
     */
    public async connect(info: IConnectionInfo): Promise<void> {
        this.connection.connect(info);
        this._connectioninfo.setResult(info);
    }

    /**
     * Gets the connection information.
     * @returns The connection information.
     */
    public getConnectionInfo(): Promise<IConnectionInfo> {
        return this._connectioninfo.promise;
    }

    /**
     * Gets the global settings.
     * @returns The global settings as a promise.
     */
    public getGlobalSettings(): Promise<StreamDeckEventArgsWithPayload<SettingsPayload>> {
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
    public getSettings(): Promise<ActionEventArgsWithPayload<SettingsPayload>> {
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
                this._didReceiveGlobalSettings.dispatch(<StreamDeckEventArgsWithPayload<SettingsPayload>>data);
                break;

            case Message.DID_RECEIVE_SETTINGS:
                this._didReceiveSettings.dispatch(<ActionEventArgsWithPayload<SettingsPayload>>data);
                break;
        }
    }
}

const streamDeckClient = new StreamDeckClient();
export default streamDeckClient;
