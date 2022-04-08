import { ActionInfo, AsEvent, DidReceiveGlobalSettingsEvent, DidReceiveSettingsEvent, EventReceived, EventSent, RegistrationInfo } from 'stream-deck';

import { EventManager } from '../core/events';
import { PromiseCompletionSource } from '../core/promises';

export interface IConnectionInfo {
    actionInfo: ActionInfo;
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

    public readonly didReceiveGlobalSettings = new EventManager<DidReceiveGlobalSettingsEvent>();
    public readonly didReceiveSettings = new EventManager<DidReceiveSettingsEvent>();
    public readonly message = new EventManager<EventReceived>();

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
    public getGlobalSettings(): Promise<DidReceiveGlobalSettingsEvent> {
        return this.get('getGlobalSettings', (ev) => ev.event === 'didReceiveGlobalSettings');
    }

    /**
     * Save data securely and globally for the plugin.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#setglobalsettings}
     * @param value The global settings.
     */
    public setGlobalSettings(value?: unknown): void {
        this.send('setGlobalSettings', value);
    }

    /**
     * Gets the settings.
     * @returns The settings as a promise.
     */
    public getSettings(): Promise<DidReceiveSettingsEvent> {
        return this.get('getSettings', (ev) => ev.event === 'didReceiveSettings');
    }

    /**
     * Save data persistently for the action's instance.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#setsettings}
     * @param value The settings.
     */
    public setSettings(value?: unknown): void {
        this.send('setSettings', value);
    }

    /**
     * Gets the connection information used to connect to the Stream Deck.
     * @returns The connection information as a promise.
     */
    public async getConnectionInfo(): Promise<IConnectionInfo> {
        return this._connectionInfo.promise;
    }

    /**
     * Sends the given `send` event along with the `payload` to the Stream Deck, and continually awaits a response message that matches the `isComplete` delegate.
     * @param {string} send The event to send.
     * @param {Function} isComplete The delegate invokes upon receiving a message from the Stream Deck; when `true`, this promise is fulfilled.
     * @param {unknown} payload The optional payload.
     * @returns {AsEvent<TReceived>} The first event received that fulfilled the `isComplete` delegate.
     */
    private async get<TSent extends EventSent['event'], TReceived extends EventReceived['event']>(
        send: TSent,
        isComplete: (ev: EventReceived) => boolean,
        payload?: unknown
    ): Promise<AsEvent<TReceived>> {
        const resolver = new PromiseCompletionSource<AsEvent<TReceived>>();

        // Construct the temporary listener that is removed when the callback can be fulilled.
        const listener = (args: EventReceived) => {
            if (isComplete(args)) {
                this.message.unsubscribe(listener);
                resolver.setResult(<AsEvent<TReceived>>args);
            }
        };

        // Await message, and send the request.
        this.message.subscribe(listener);
        await this.send(send, payload);

        return resolver.promise;
    }

    /**
     * Sends a request to the Stream Deck.
     * @param {string} event The event name.
     * @param {unknown} payload The optional payload.
     */
    private async send<T extends EventSent['event']>(event: T, payload?: unknown): Promise<void> {
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
        const data: EventReceived = JSON.parse(ev.data);

        switch (data.event) {
            case 'didReceiveGlobalSettings':
                this.didReceiveGlobalSettings.dispatch(<DidReceiveGlobalSettingsEvent>data);
                break;

            case 'didReceiveSettings':
                this.didReceiveSettings.dispatch(<DidReceiveSettingsEvent>data);
                break;
        }
    }
}

const streamDeckClient = new StreamDeckClient();
export default streamDeckClient;
