import { WS as WebSocketServer } from 'jest-websocket-mock';
import { Client } from 'mock-socket';
import { EventSent, SendToPropertyInspectorEvent } from 'stream-deck';

import actionInfo from '../__mocks__/action-info';
import didReceiveGlobalSettingsEvent from '../__mocks__/did-receive-global-settings-event';
import didReceiveSettingsEvent from '../__mocks__/did-receive-settings-event';
import registrationInfo from '../__mocks__/registration-info';
import { StreamDeckClient } from '../stream-deck-client';

/**
 * With an unconnected Stream Deck client.
 */
describe('streamDeckClient', () => {
    let streamDeckClient: StreamDeckClient;
    let server: WebSocketServer;

    // before each; reset the streamDeckClient and web socket server.
    beforeEach(async () => {
        streamDeckClient = (await import('../stream-deck-client')).default;
        jest.resetModules();

        server = new WebSocketServer('ws://localhost:13', { jsonProtocol: true });
    });

    // after each; clean-up the websocket server.
    afterEach(() => {
        WebSocketServer.clean();
    });

    it('should connect and register with the event and uuid', async () => {
        // given, when.
        streamDeckClient.connect('13', 'ABC123', 'registerPropertyInspector', registrationInfo, actionInfo);

        // then.
        await server.connected;
        await expect(server).toReceiveMessage({
            event: 'registerPropertyInspector',
            uuid: 'ABC123'
        });
    });

    it('should save the connection settings after connecting', async () => {
        // given, when.
        streamDeckClient.connect('13', 'ABC123', 'registerPropertyInspector', registrationInfo, actionInfo);
        const connectionInfo = await streamDeckClient.getConnectionInfo();
        await server.connected;

        // then.
        expect(connectionInfo.propertyInspectorUUID).toBe('ABC123');
        expect(connectionInfo.registerEvent).toBe('registerPropertyInspector');
        expect(connectionInfo.info).toStrictEqual(registrationInfo);
        expect(connectionInfo.actionInfo).toStrictEqual(actionInfo);
    });

    /**
     * Whilst the client is connected.
     */
    describe('whilst connected', () => {
        let client: Client;

        beforeEach(async () => {
            server.on('connection', (socket) => (client = socket));
            streamDeckClient.connect('13', 'ABC123', 'registerPropertyInspector', registrationInfo, actionInfo);
            await server.connected;
        });

        it('should dispatch didReceiveGlobalSettings', () => {
            // given.
            const handler = jest.fn();
            streamDeckClient.didReceiveGlobalSettings.subscribe(handler);

            // when.
            server.send(didReceiveGlobalSettingsEvent);

            // then.
            expect(handler).toHaveBeenCalledTimes(1);
            expect(handler).toHaveBeenCalledWith(didReceiveGlobalSettingsEvent);
        });

        it('should dispatch didReceiveSettings', () => {
            // given.
            const handler = jest.fn();
            streamDeckClient.didReceiveSettings.subscribe(handler);

            // when.
            server.send(didReceiveSettingsEvent);

            // then.
            expect(handler).toHaveBeenCalledTimes(1);
            expect(handler).toHaveBeenCalledWith(didReceiveSettingsEvent);
        });

        it('should dispatch message', () => {
            // given.
            const handler = jest.fn();
            streamDeckClient.message.subscribe(handler);

            // when.
            const msg = {
                event: 'other'
            };

            server.send(msg);

            // then.
            expect(handler).toHaveBeenCalledTimes(1);
            expect(handler).toHaveBeenCalledWith(msg);
        });

        it('should dispatch sendToPropertyInspector', () => {
            // given.
            const handler = jest.fn();
            streamDeckClient.sendToPropertyInspector.subscribe(handler);

            // when.
            const msg: SendToPropertyInspectorEvent = {
                event: 'sendToPropertyInspector',
                action: 'com.sdpi.plugin.action',
                context: 'ABC123',
                payload: {
                    foo: 'bar'
                }
            };

            server.send(msg);

            // then.
            expect(handler).toHaveBeenCalledTimes(1);
            expect(handler).toHaveBeenCalledWith(msg);
        });

        it('should get global settings and wait for them', async () => {
            // given.
            client.on('message', (msg) => {
                const data: EventSent = JSON.parse(msg.toString());
                if (data.event === 'getGlobalSettings') {
                    server.send(didReceiveGlobalSettingsEvent);
                }
            });

            // when.
            const globalSettings = await streamDeckClient.getGlobalSettings();

            // then.
            expect(globalSettings).toStrictEqual(didReceiveGlobalSettingsEvent.payload.settings);
        });

        it('should get settings and wait for them', async () => {
            // given.
            client.on('message', (msg) => {
                const data: EventSent = JSON.parse(msg.toString());
                if (data.event === 'getSettings') {
                    server.send(didReceiveSettingsEvent);
                }
            });

            // when.
            const settings = await streamDeckClient.getSettings();

            // then.
            expect(settings.coordinates).toStrictEqual(didReceiveSettingsEvent.payload.coordinates);
            expect(settings.isInMultiAction).toStrictEqual(didReceiveSettingsEvent.payload.isInMultiAction);
            expect(settings.settings).toStrictEqual(didReceiveSettingsEvent.payload.settings);
        });
    });
});
