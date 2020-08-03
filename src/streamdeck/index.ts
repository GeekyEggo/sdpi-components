import store from '../core/store';
import StreamDeckClient from './streamDeckClient';
import StreamDeckConnection from './streamDeckConnection';

/**
 * Called by the Stream Deck to enable registration of the property inspector.
 * @param inPort The port that should be used to create the WebSocket.
 * @param inPropertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
 * @param inRegisterEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
 * @param inInfo A json object containing information about the application.
 * @param inActionInfo A json object containing information about the action.
 */
window.connectElgatoStreamDeckSocket = (inPort: string, inPropertyInspectorUUID: string, inRegisterEvent: string, inInfo: string, inActionInfo: string): void => {
    const connection = new StreamDeckConnection(inPort, inPropertyInspectorUUID, inRegisterEvent, inInfo, inActionInfo);
    const client = new StreamDeckClient(connection);

    store.attach(client);
}
