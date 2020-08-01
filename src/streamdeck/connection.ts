import { ActionInfo, Info } from './streamdeck';

/**
 * Provides a connection between the property inspector and the Stream Deck.
 */
class StreamDeckConnection extends EventTarget {
    /**
     * Initializes a new instance of a Stream Deck connection.
     * @constructor 
     */
    constructor() {
        super();

        this.connection = new Promise<StreamDeckConnection>((resolve, reject) => {
            this.resolveConnection = resolve;
            this.rejectConnection = reject;
        });
    }

    public actionInfo?: ActionInfo;
    public info?: Info;
    public inPropertyInspectorUUID?: string;
    public inRegisterEvent?: string;

    private connection: Promise<StreamDeckConnection>;
    private resolveConnection?: (value: StreamDeckConnection) => void;
    private rejectConnection?: (value: StreamDeckConnection) => void;
    private webSocket?: WebSocket;

    /**
     * Registers the connection with the Elgato Stream Deck
     * @param inPort The port that should be used to create the WebSocket
     * @param inPropertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software
     * @param inRegisterEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is
     * @param inInfo A JSON object containing information about the application. (see below Info parameter)
     * @param inActionInfo A JSON object containing information about the action. (see below inActionInfo parameter.
     */
    public register(inPort: string, inPropertyInspectorUUID: string, inRegisterEvent: string, inInfo: string, inActionInfo: string) {
        // set the local state of the connection
        this.inPropertyInspectorUUID = inPropertyInspectorUUID;
        this.inRegisterEvent = inRegisterEvent;
        this.info = JSON.parse(inInfo);
        this.actionInfo = JSON.parse(inActionInfo);

        // register the web socket
        this.webSocket = new WebSocket(`ws://localhost:${inPort}`);
        this.webSocket.addEventListener("message", this.onMessage.bind(this));
        this.webSocket.addEventListener("open", this.onOpen.bind(this));
    }

    /**
     * Sends a request to the Stream Deck.
     * @param {string} event The event name.
     * @param {any} payload The optional payload.
     */
    public async send(event: string, payload?: any) {
        try {
            await this.connection;
            if (!this.webSocket) {
                throw new Error();
            }

            this.webSocket.send(JSON.stringify({
                event: event,
                context: this.inPropertyInspectorUUID,
                payload: payload,
                action: this.actionInfo?.action
            }));
        } catch {
            console.error(`Unable to send request '${event}' as there is no connection.`);
        }

    }

    /**
     * Handles the message event of the web socket.
     * @param ev The event arguments.
     */
    private onMessage(ev: any) {
        console.log(ev);
        this.dispatchEvent(new MessageEvent("message", {
            data: JSON.parse(ev.data)
        }));
    }

    /**
     * Handles the open event of the web socket.
     * @param ev The event arguments.
     */
    private onOpen(ev: any) {
        try {
            if (!this.webSocket) {
                throw new Error();
            }

            this.webSocket.send(JSON.stringify({
                event: this.inRegisterEvent,
                uuid: this.inPropertyInspectorUUID
            }));

            if (this.resolveConnection) {
                this.resolveConnection(this);
            }
        } catch {
            if (this.rejectConnection) {
                this.rejectConnection(this);
            }
        }
    }
}

const connection = new StreamDeckConnection();
export default connection;
