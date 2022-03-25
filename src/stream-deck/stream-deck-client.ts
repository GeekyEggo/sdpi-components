import { PropertyInspectorPayload } from 'sharp-deck';
import {
    ActionEventArgsWithPayload, SettingsPayload, StreamDeckEventArgs, StreamDeckEventArgsWithPayload
} from 'stream-deck';

import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import { getUUID } from '../core/utils';
import streamDeckConnection from './stream-deck-connection';

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
    DID_RECEIVE_SETTINGS = 'didReceiveSettings',
    SEND_TO_PROPERTY_INSPECTOR = 'sendToPropertyInspector'
}

/**
 * Provides a Stream Deck client wrapper for the connection.
 */
export class StreamDeckClient {
    private readonly _didReceiveGlobalSettings: EventManager<StreamDeckEventArgsWithPayload<SettingsPayload>> = new EventManager<StreamDeckEventArgsWithPayload<SettingsPayload>>();
    private readonly _didReceiveSettings: EventManager<ActionEventArgsWithPayload<SettingsPayload>> = new EventManager<ActionEventArgsWithPayload<SettingsPayload>>();

    /**
     * Initializes a new instance of the Stream Deck client class.
     * @constructor
     */
    constructor() {
        streamDeckConnection.message.subscribe(this.onMessage.bind(this));
    }

    public get didReceiveGlobalSettings(): IEventSubscriber<StreamDeckEventArgsWithPayload<SettingsPayload>> { return this._didReceiveGlobalSettings; }
    public get didReceiveSettings(): IEventSubscriber<ActionEventArgsWithPayload<SettingsPayload>> { return this._didReceiveSettings; }

    /**
     * Sends a `get` request to the plugin, utilising SharpDeck libraries `PropertyInspectorMethod` attribute.
     * @param {string} event The name of the event or method, i.e. URI endpoint.
     * @param {object} parameters The optional object that contains the parameters
     * @returns {object} A promise containing the result.
     */
    public async get<T>(event: string, parameters?: any): Promise<StreamDeckEventArgsWithPayload<PropertyInspectorPayload<T>>> {
        const request = {
            event: event,
            requestId: getUUID()
        };

        return await streamDeckConnection.get(
            Message.SEND_TO_PLUGIN,
            args => args.event == Message.SEND_TO_PROPERTY_INSPECTOR && args.payload && args.payload.requestId == request.requestId,
            { parameters: { ...parameters }, ...request });
    };

    /**
     * Gets the global settings.
     * @returns The global settings as a promise.
     */
    public getGlobalSettings(): Promise<StreamDeckEventArgsWithPayload<SettingsPayload>> {
        return streamDeckConnection.get(Message.GET_GLOBAL_SETTINGS, payload => payload.event == Message.DID_RECEIVE_GLOBAL_SETTINGS);
    }

    /**
     * Sets the global settings.
     * @param value The global settings.
     */
    public setGlobalSettings(value?: any): void {
        streamDeckConnection.send(Message.SET_GLOBAL_SETTINGS, value);
    }

    /**
     * Gets the settings.
     * @returns The settings as a promise.
     */
    public getSettings(): Promise<ActionEventArgsWithPayload<SettingsPayload>> {
        return streamDeckConnection.get(Message.GET_SETTINGS, payload => payload.event == Message.DID_RECEIVE_SETTINGS);
    }

    /**
     * Sets the settings.
     * @param value The settings.
     */
    public setSettings(value?: any): void {
        streamDeckConnection.send(Message.SET_SETTINGS, value);
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
