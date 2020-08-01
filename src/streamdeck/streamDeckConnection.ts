import { ActionInfo, Info } from './streamdeck';
import PromiseCompletionSource from '../core/promiseCompletionSource';

/**
 * Provides a connection between the property inspector and the Stream Deck.
 */
export default class StreamDeckConnection extends EventTarget {
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
        super();

        // the settings supplied by the Stream Deck
        this.inPropertyInspectorUUID = inPropertyInspectorUUID;
        this.inRegisterEvent = inRegisterEvent;
        this.info = JSON.parse(inInfo);
        this.actionInfo = JSON.parse(inActionInfo);

        // register the web socket
        this.webSocket = new WebSocket(`ws://localhost:${inPort}`);
        this.webSocket.addEventListener('message', this.onMessage.bind(this));
        this.webSocket.addEventListener('open', this.onOpen.bind(this));
    }

    public actionInfo: ActionInfo;
    public info: Info;
    public inPropertyInspectorUUID: string;
    public inRegisterEvent: string;

    private connection: PromiseCompletionSource<StreamDeckConnection> = new PromiseCompletionSource<StreamDeckConnection>();
    private webSocket: WebSocket;

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
     * Handles the message event of the web socket.
     * @param ev The event arguments.
     */
    private onMessage(ev: any): void {
        this.dispatchEvent(new MessageEvent('message', {
            data: JSON.parse(ev.data)
        }));
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
