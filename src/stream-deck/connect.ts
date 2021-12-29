import store from './store';
import streamDeckClient from './stream-deck-client';
import { IConnectionInfo } from './stream-deck-connection';

/**
 * Called by the Stream Deck to enable registration of the property inspector.
 * @param inPort The port that should be used to create the WebSocket.
 * @param inPropertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
 * @param inRegisterEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
 * @param inInfo A json object containing information about the application.
 * @param inActionInfo A json object containing information about the action.
 */
window.connectElgatoStreamDeckSocket = async (inPort: string, inPropertyInspectorUUID: string, inRegisterEvent: string, inInfo: string, inActionInfo: string): Promise<void> => {
    const info: IConnectionInfo =  {
        actionInfo: JSON.parse(inActionInfo),
        info: JSON.parse(inInfo),
        propertyInspectorUUID: inPropertyInspectorUUID,
        port: inPort,
        registerEvent: inRegisterEvent
    }
    
    await streamDeckClient.connect(info);    
    store.connect(info.actionInfo);
}
