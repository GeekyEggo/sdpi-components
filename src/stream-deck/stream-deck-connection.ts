import EventManager, { IEventSubscriber } from '../core/event-dispatcher';
import PromiseCompletionSource from '../core/promise-completion-source';
import { ActionEventArgsWithPayload, ActionPayload, RegistrationInfo, StreamDeckEventArgs } from 'stream-deck';

/**
 * Provides a connection between the property inspector and the Stream Deck.
 */
export default class StreamDeckConnection {
    private readonly _message: EventManager<StreamDeckEventArgs> = new EventManager();
    
    /**
     * Initializes a new instance of a Stream Deck connection.
     * @constructor
     * @param inPort The port that should be used to create the WebSocket
     * @param inPropertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software
     * @param inRegisterEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is
     * @param inInfo A JSON object containing information about the application. (see below Info parameter)
     * @param inActionInfo A JSON object containing information about the action. (see below inActionInfo parameter.
     */
    constructor(inPort: string, inPropertyInspectorUUID: string, inRegisterEvent: string, inInfo: string, inActionInfo: string) {
        // The settings supplied by the Stream Deck.
        this.inPropertyInspectorUUID = inPropertyInspectorUUID;
        this.inRegisterEvent = inRegisterEvent;
        this.info = JSON.parse(inInfo);
        this.actionInfo = JSON.parse(inActionInfo);
        
        // Register the web socket.
        this.webSocket = new WebSocket(`ws://localhost:${inPort}`);
        this.webSocket.addEventListener('message', (ev: MessageEvent) => this._message.dispatch(JSON.parse(ev.data)));
        this.webSocket.addEventListener('open', this.onOpen.bind(this));
    }
    
    public readonly actionInfo: ActionEventArgsWithPayload<ActionPayload>;
    public readonly info: RegistrationInfo;
    public readonly inPropertyInspectorUUID: string;
    public readonly inRegisterEvent: string;
    public get message(): IEventSubscriber<StreamDeckEventArgs> { return this._message; }
    
    private readonly connection: PromiseCompletionSource<StreamDeckConnection> = new PromiseCompletionSource<StreamDeckConnection>();
    private readonly webSocket: WebSocket;

    /**
     * Sends a request to the Stream Deck, and awaits the first message matching the `waitFor` parameter.
     * @param event The event name.
     * @param waitFor The event name to wait for.
     * @param payload The optional payload.
     * @returns The promise containing the result of the request.
     */
    public async get(event: string, waitFor: string, payload?: any): Promise<any> {
        const resolver = new PromiseCompletionSource<any>();

        // Construct the listener; this will set the result and remove itself.
        let listener: (ev: MessageEvent) => void;
        listener = (ev: MessageEvent) => {
            if (ev.data.event === waitFor) {
                this.webSocket.removeEventListener('message', listener);
                resolver.setResult(ev.data);
            }
        };

        // Add the event listener and send the request.
        this.webSocket.addEventListener('message', listener);
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
            await this.connection.promise;

            this.webSocket.send(JSON.stringify({
                event: event,
                context: this.inPropertyInspectorUUID,
                payload: payload,
                action: this.actionInfo.action
            }));
        } catch {
            console.error(`Unable to send request '${event}' as there is no connection.`);
        }
    }

    /**
     * Handles the open event of the web socket.
     * @param ev The event arguments.
     */
    private onOpen(ev: any): void {
        try {
            this.webSocket.send(JSON.stringify({
                event: this.inRegisterEvent,
                uuid: this.inPropertyInspectorUUID
            }));

            this.connection.setResult(this);
        } catch (ex) {
            this.connection.setException(ex);
        }
    }
}
