import { ActionInfo, AsEvent, ConnectionInfo, DidReceiveGlobalSettingsEvent, DidReceiveSettingsEvent, EventReceived, EventSent, RegistrationInfo, SendToPropertyInspectorEvent } from 'stream-deck';

import { EventManager } from '../core/events';
import { PromiseCompletionSource } from '../core/promises';

/**
 * Provides a Stream Deck client wrapper for the connection.
 */
export class StreamDeckClient {
    private readonly _connection = new PromiseCompletionSource<WebSocket>();
    private readonly _connectionInfo = new PromiseCompletionSource<ConnectionInfo>();
    private _isInitialized = false;

    public readonly message = new EventManager<EventReceived>();

    public readonly didReceiveGlobalSettings = new EventManager<DidReceiveGlobalSettingsEvent>();
    public readonly didReceiveSettings = new EventManager<ActionInfo | DidReceiveSettingsEvent>();
    public readonly sendToPropertyInspector = new EventManager<SendToPropertyInspectorEvent>();

    /**
     * Connects to the Stream Deck.
     * @param port The port that should be used to create the WebSocket.
     * @param propertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
     * @param registerEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
     * @param info The application information.
     * @param actionInfo The action information.
     */
    public async connect(port: string, propertyInspectorUUID: string, registerEvent: string, info: RegistrationInfo, actionInfo: ActionInfo): Promise<void> {
        if (!this._isInitialized) {
            const connectionInfo = {
                actionInfo,
                info,
                propertyInspectorUUID,
                registerEvent
            };

            if (connectionInfo.actionInfo) {
                this.didReceiveSettings.dispatch(connectionInfo.actionInfo);
            }

            this._connectionInfo.setResult(connectionInfo);

            // Register the web socket.
            const webSocket = new WebSocket(`ws://localhost:${port}`);
            webSocket.onmessage = this.handleMessage.bind(this);
            webSocket.onopen = () => {
                webSocket.send(
                    JSON.stringify({
                        event: connectionInfo.registerEvent,
                        uuid: connectionInfo.propertyInspectorUUID
                    })
                );

                this._connection.setResult(webSocket);
            };

            this._isInitialized = true;
        }
    }

    /**
     * Request the global persistent data.
     * @returns The global settings as a promise.
     */
    public async getGlobalSettings(): Promise<Record<string, unknown>> {
        const response = await this.get('getGlobalSettings', 'didReceiveGlobalSettings');
        return response.payload.settings;
    }

    /**
     * Save data securely and globally for the plugin.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#setglobalsettings}
     * @param value The global settings.
     * @returns The promise of sending the message that will set the global settings.
     */
    public setGlobalSettings(value: unknown): Promise<void> {
        return this.send('setGlobalSettings', value);
    }

    /**
     * Gets the settings.
     * @returns The settings as a promise.
     */
    public async getSettings(): Promise<DidReceiveSettingsEvent['payload']> {
        const { actionInfo } = await this.getConnectionInfo();
        const response = await this.get('getSettings', 'didReceiveSettings', (msg) => msg.action == actionInfo.action && msg.context == actionInfo.context && msg.device == actionInfo.device);

        return response.payload;
    }

    /**
     * Save data persistently for the action's instance.
     * {@link https://developer.elgato.com/documentation/stream-deck/sdk/events-sent/#setsettings}
     * @param value The settings.
     * @returns The promise of sending the message that will set the action settings.
     */
    public setSettings(value: unknown): Promise<void> {
        return this.send('setSettings', value);
    }

    /**
     * Gets the connection information used to connect to the Stream Deck.
     * @returns The connection information as a promise.
     */
    public async getConnectionInfo(): Promise<ConnectionInfo> {
        return this._connectionInfo.promise;
    }

    /**
     * Sends the given `send` event along with the `payload` to the Stream Deck, and continually awaits a response message that matches the `receive` event, and the optional `isComplete` delegate.
     * @param send The event to send.
     * @param receive The event to receive.
     * @param isComplete The delegate invokes upon receiving a message from the Stream Deck; when `true`, this promise is fulfilled.
     * @param payload The optional payload.
     * @returns The first matching event that fulfilled the `receive` and optional `isComplete` delegate.
     */
    public async get<TSent extends EventSent['event'], TReceived extends EventReceived['event']>(
        send: TSent,
        receive: TReceived,
        isComplete?: (ev: AsEvent<TReceived>) => boolean,
        payload?: unknown
    ): Promise<AsEvent<TReceived>> {
        const resolver = new PromiseCompletionSource<AsEvent<TReceived>>();

        // Construct the temporary listener that is removed when the callback can be fulilled.
        const listener = (ev: EventReceived) => {
            if (ev.event === receive) {
                const msg = <AsEvent<TReceived>>ev;

                if (isComplete === undefined || isComplete(msg)) {
                    this.message.unsubscribe(listener);
                    resolver.setResult(msg);
                }
            }
        };

        // Await message, and send the request.
        this.message.subscribe(listener);
        await this.send(send, payload);

        return resolver.promise;
    }

    /**
     * Sends a message to the Stream Deck.
     * @param {string} event The event name.
     * @param {unknown} payload The optional payload.
     */
    public async send<T extends EventSent['event']>(event: T, payload?: unknown): Promise<void> {
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

            case 'sendToPropertyInspector':
                this.sendToPropertyInspector.dispatch(<SendToPropertyInspectorEvent>data);
                break;
        }

        this.message.dispatch(data);
    }
}

const streamDeckClient = new StreamDeckClient();
export default streamDeckClient;
