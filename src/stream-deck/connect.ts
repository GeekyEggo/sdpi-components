import streamDeckClient from './stream-deck-client';

const existing = window.connectElgatoStreamDeckSocket;

/**
 * Called by the Stream Deck to enable registration of the property inspector.
 * @param port The port that should be used to create the WebSocket.
 * @param propertyInspectorUUID A unique identifier string to register Property Inspector with Stream Deck software.
 * @param registerEvent The event type that should be used to register the plugin once the WebSocket is opened. For Property Inspector this is "registerPropertyInspector".
 * @param info A json object containing information about the application.
 * @param actionInfo A json object containing information about the action.
 */
window.connectElgatoStreamDeckSocket = (port: string, propertyInspectorUUID: string, registerEvent: string, info: string, actionInfo: string) => {
    if (existing) {
        existing(port, propertyInspectorUUID, registerEvent, info, actionInfo);
    }

    streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, JSON.parse(info), JSON.parse(actionInfo));
};
