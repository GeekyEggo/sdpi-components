import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import PromiseCompletionSource from '../core/promise-completion-source';
import { ActionEventArgsWithPayload, ActionPayload, RegistrationInfo, StreamDeckEventArgs } from 'stream-deck';

export interface IConnectionInfo {
    actionInfo: ActionEventArgsWithPayload<ActionPayload>;
    info: RegistrationInfo;
    port: string,
    propertyInspectorUUID: string;
    registerEvent: string;
}

/**
 * Provides a connection between the property inspector and the Stream Deck.
 */
export default class StreamDeckConnection {
    private readonly _connection: PromiseCompletionSource<WebSocket> = new PromiseCompletionSource<WebSocket>();
    private readonly _connectionInfo: PromiseCompletionSource<IConnectionInfo> = new PromiseCompletionSource<IConnectionInfo>();
    private readonly _message: EventManager<StreamDeckEventArgs> = new EventManager();
    private _webSocket?: WebSocket;
    
    public get message(): IEventSubscriber<StreamDeckEventArgs> { return this._message; }
    
    /**
     * Connects to the Stream Deck.
     * @param info The connection information.
     */
    public async connect(info: IConnectionInfo): Promise<void> {
        if (!this._webSocket) {
            this._connectionInfo.setResult(info);
            
            // Register the web socket.
            this._webSocket = new WebSocket(`ws://localhost:${info.port}`);
            this._webSocket.addEventListener('message', (ev: MessageEvent) => this._message.dispatch(JSON.parse(ev.data)));
            this._webSocket.addEventListener('open', this.onOpen.bind(this));
        }
    }

    /**
     * Sends a request to the Stream Deck, and awaits the first message matching the `waitFor` parameter.
     * @param event The event name.
     * @param waitFor The event name to wait for.
     * @param payload The optional payload.
     * @returns The promise containing the result of the request.
     */
    public async get(event: string, waitFor: string, payload?: any): Promise<any> {
        const connection = await this._connection.promise;
        const resolver = new PromiseCompletionSource<any>();

        // Construct the listener; this will set the result and remove itself.
        let listener: (ev: MessageEvent) => void;
        listener = (ev: MessageEvent) => {
            if (ev.data) {
                const payload = JSON.parse(ev.data);
                if (payload.event === waitFor) {
                    connection.removeEventListener('message', listener);
                    resolver.setResult(ev.data);
                }
            }
        };

        // Add the event listener and send the request.
        connection.addEventListener('message', listener);
        await this.send(event, payload);

        return resolver.promise;
    }

    /**
     * Sends a request to the Stream Deck.
     * @param {string} event The event name.
     * @param {any} payload The optional payload.
     */
    public async send(event: string, payload?: any): Promise<void> {
        try {
            const connectionInfo = await this._connectionInfo.promise;
            const connection = await this._connection.promise;

            connection.send(JSON.stringify({
                event: event,
                context: connectionInfo.propertyInspectorUUID,
                payload: payload,
                action: connectionInfo.actionInfo.action
            }));
        } catch {
            console.error(`Unable to send request '${event}' as there is no connection.`);
        }
    }

    /**
     * Handles the open event of the web socket.
     * @param ev The event arguments.
     */
    private async onOpen(ev: any): Promise<void> {
        try {
            const connectionInfo = await this._connectionInfo.promise
            if (this._webSocket) {
                this._webSocket.send(JSON.stringify({
                    event: connectionInfo.registerEvent,
                    uuid: connectionInfo.propertyInspectorUUID
                }));

                this._connection.setResult(this._webSocket);
            }
        } catch (ex) {
            this._connection.setException(ex);
        }
    }
}
