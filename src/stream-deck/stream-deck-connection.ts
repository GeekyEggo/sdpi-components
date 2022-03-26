import {
    ActionEventArgsWithPayload, ActionPayload, RegistrationInfo, StreamDeckEventArgs
} from 'stream-deck';

import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import PromiseCompletionSource from '../core/promise-completion-source';

export interface IConnectionInfo {
    actionInfo: ActionEventArgsWithPayload<ActionPayload>;
    info: RegistrationInfo;
    propertyInspectorUUID: string;
    registerEvent: string;
}

/**
 * Provides a connection between the property inspector and the Stream Deck.
 */
class StreamDeckConnection {
    private readonly _connection: PromiseCompletionSource<WebSocket> = new PromiseCompletionSource<WebSocket>();
    private readonly _connectionInfo: PromiseCompletionSource<IConnectionInfo> = new PromiseCompletionSource<IConnectionInfo>();
    private readonly _message: EventManager<StreamDeckEventArgs> = new EventManager();
    private _webSocket?: WebSocket;

    public get message(): IEventSubscriber<StreamDeckEventArgs> {
        return this._message;
    }

    /**
     * Connects to the Stream Deck.
     * @param {string} port The port that should be used to create the WebSocket.
     * @param {string} propertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
     * @param {string} registerEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
     * @param {string} info A JSON object containing information about the application.
     * @param {string} actionInfo A JSON object containing information about the action.
     */
    public async connect(port: string, propertyInspectorUUID: string, registerEvent: string, info: string, actionInfo: string): Promise<void> {
        if (!this._webSocket) {
            this._connectionInfo.setResult({
                actionInfo: JSON.parse(actionInfo),
                info: JSON.parse(info),
                propertyInspectorUUID: propertyInspectorUUID,
                registerEvent: registerEvent
            });

            // Register the web socket.
            this._webSocket = new WebSocket(`ws://localhost:${port}`);
            this._webSocket.addEventListener('message', (ev: MessageEvent) => this._message.dispatch(JSON.parse(ev.data)));
            this._webSocket.addEventListener('open', this.onOpen.bind(this));
        }
    }

    /**
     * Sends a request to the Stream Deck, and awaits the first message matching the `waitFor` parameter.
     * @param {string} event The event name.
     * @param {StreamDeckEventArgs|any} canCallback The delegate used to determine if the event fulfils the callback requirements.
     * @param {StreamDeckEventArgs|any} payload The optional payload.
     * @returns {object} The promise containing the result of the request.
     */
    public async get(event: string, canCallback: (payload: StreamDeckEventArgs | any) => boolean, payload?: StreamDeckEventArgs | any): Promise<any> {
        const resolver = new PromiseCompletionSource<StreamDeckEventArgs | any>();

        // Construct the temporary listener that is removed when the callback can be fulilled.
        const listener = (args: StreamDeckEventArgs) => {
            if (canCallback(args)) {
                this.message.unsubscribe(listener);
                resolver.setResult(args);
            }
        };

        // Await message, and send the request.
        this.message.subscribe(listener);
        await this.send(event, payload);

        return resolver.promise;
    }

    /**
     * Gets the connection information, once it has been set.
     * @returns The connection info.
     */
    public async getConnectionInfo(): Promise<IConnectionInfo> {
        return this._connectionInfo.promise;
    }

    /**
     * Sends a request to the Stream Deck.
     * @param {string} event The event name.
     * @param {any} payload The optional payload.
     */
    public async send(event: string, payload?: unknown): Promise<void> {
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
     * Waits for an active connection to be established.
     */
    public async waitForConnection(): Promise<void> {
        await this._connection.promise;
    }

    /**
     * Handles the open event of the web socket.
     */
    private async onOpen(): Promise<void> {
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
}

const streamDeckConnection = new StreamDeckConnection();
export default streamDeckConnection;
