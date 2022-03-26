import {
    ActionEventArgsWithPayload, ActionPayload, RegistrationInfo, SettingsPayload,
    StreamDeckEventArgs, StreamDeckEventArgsWithPayload
} from 'stream-deck';

import EventManager from '../core/event-dispatcher';
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
    DID_RECEIVE_SETTINGS = 'didReceiveSettings',
    SEND_TO_PROPERTY_INSPECTOR = 'sendToPropertyInspector'
}

export interface IConnectionInfo {
    actionInfo: ActionEventArgsWithPayload<ActionPayload>;
    info: RegistrationInfo;
    propertyInspectorUUID: string;
    registerEvent: string;
}

/**
 * Provides a Stream Deck client wrapper for the connection.
 */
export class StreamDeckClient {
    private readonly _connection = new PromiseCompletionSource<WebSocket>();
    private readonly _connectionInfo = new PromiseCompletionSource<IConnectionInfo>();
    private _webSocket?: WebSocket;

    public readonly didReceiveGlobalSettings = new EventManager<StreamDeckEventArgsWithPayload<SettingsPayload>>();
    public readonly didReceiveSettings = new EventManager<ActionEventArgsWithPayload<SettingsPayload>>();
    public readonly message = new EventManager<StreamDeckEventArgs>();

    /**
     * Connects to the Stream Deck.
     * @param {string} port The port that should be used to create the WebSocket.
     * @param {string} propertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
     * @param {string} registerEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
     * @param {string} info A JSON object containing information about the application.
     * @param {string} actionInfo A JSON object containing information about the action.
     */
    public async connect(port: string, propertyInspectorUUID: string, registerEvent: string, info: string, actionInfo?: string | undefined): Promise<void> {
        if (!this._webSocket) {
            const connectionInfo = {
                actionInfo: actionInfo ? JSON.parse(actionInfo) : null,
                info: JSON.parse(info),
                propertyInspectorUUID: propertyInspectorUUID,
                registerEvent: registerEvent
            };

            if (connectionInfo.actionInfo) {
                this.didReceiveSettings.dispatch(connectionInfo.actionInfo);
            }

            this._connectionInfo.setResult(connectionInfo);

            // Register the web socket.
            this._webSocket = new WebSocket(`ws://localhost:${port}`);
            this._webSocket.onopen = this.handleOpen.bind(this);
            this._webSocket.onmessage = this.handleMessage.bind(this);
        }
    }

    /**
     * Request the global persistent data.
     * @returns The global settings as a promise.
     */
    public getGlobalSettings(): Promise<StreamDeckEventArgsWithPayload<SettingsPayload>> {
        return this.get(Message.GET_GLOBAL_SETTINGS, (payload) => payload.event == Message.DID_RECEIVE_GLOBAL_SETTINGS);
    }

    /**
     * Sets the global persistent data.
     * @param value The global settings.
     */
    public setGlobalSettings(value?: unknown): void {
        this.send(Message.SET_GLOBAL_SETTINGS, value);
    }

    /**
     * Gets the settings.
     * @returns The settings as a promise.
     */
    public getSettings(): Promise<ActionEventArgsWithPayload<SettingsPayload>> {
        return this.get(Message.GET_SETTINGS, (payload) => payload.event == Message.DID_RECEIVE_SETTINGS);
    }

    /**
     * Sets the settings.
     * @param value The settings.
     */
    public setSettings(value?: unknown): void {
        this.send(Message.SET_SETTINGS, value);
    }

    /**
     * Gets the connection information used to connect to the Stream Deck.
     * @returns The connection information as a promise.
     */
    public async getConnectionInfo(): Promise<IConnectionInfo> {
        return this._connectionInfo.promise;
    }

    /**
     * Sends a request to the Stream Deck, and awaits the first message matching the `canCallback` parameter.
     * @param {string} event The event name.
     * @param {T} canCallback The delegate used to determine if the event fulfils the callback requirements.
     * @param {unknown} payload The optional payload.
     * @returns {Promise<T>} The promise containing the result of the request.
     */
    private async get<T extends StreamDeckEventArgs>(event: string, canCallback: (payload: T) => boolean, payload?: unknown): Promise<T> {
        const resolver = new PromiseCompletionSource<T>();

        // Construct the temporary listener that is removed when the callback can be fulilled.
        const listener = (args: StreamDeckEventArgs) => {
            if (canCallback(<T>args)) {
                this.message.unsubscribe(listener);
                resolver.setResult(<T>args);
            }
        };

        // Await message, and send the request.
        this.message.subscribe(listener);
        await this.send(event, payload);

        return resolver.promise;
    }

    /**
     * Sends a request to the Stream Deck.
     * @param {string} event The event name.
     * @param {unknown} payload The optional payload.
     */
    private async send(event: string, payload?: unknown): Promise<void> {
        try {
            const connectionInfo = await this._connectionInfo.promise;
            const connection = await this._connection.promise;

            connection.send(
                JSON.stringify({
                    event: event,
                    context: connectionInfo.propertyInspectorUUID,
                    payload: payload,
                    action: connectionInfo.actionInfo.action
                })
            );
        } catch {
            console.error(`Unable to send request '${event}' as there is no connection.`);
        }
    }

    /**
     * Handles the underlying web socket connection being established with the Stream Deck.
     */
    private async handleOpen(): Promise<void> {
        try {
            const connectionInfo = await this._connectionInfo.promise;
            if (this._webSocket) {
                this._webSocket.send(
                    JSON.stringify({
                        event: connectionInfo.registerEvent,
                        uuid: connectionInfo.propertyInspectorUUID
                    })
                );

                this._connection.setResult(this._webSocket);
            }
        } catch (ex) {
            this._connection.setException(ex);
        }
    }

    /**
     * Handles receiving a message from the Stream Deck.
     * @param ev The message event that contains the data received.
     */
    private handleMessage(ev: MessageEvent<string>): void {
        const data = JSON.parse(ev.data);
        switch (data.event) {
            case Message.DID_RECEIVE_GLOBAL_SETTINGS:
                this.didReceiveGlobalSettings.dispatch(<StreamDeckEventArgsWithPayload<SettingsPayload>>data);
                break;

            case Message.DID_RECEIVE_SETTINGS:
                this.didReceiveSettings.dispatch(<ActionEventArgsWithPayload<SettingsPayload>>data);
                break;
        }
    }
}

const streamDeckClient = new StreamDeckClient();
export default streamDeckClient;
