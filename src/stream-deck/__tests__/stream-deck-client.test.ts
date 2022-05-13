import { WS as WebSocketServer } from 'jest-websocket-mock';
import { Client } from 'mock-socket';
import { EventSent, SendToPropertyInspectorEvent, SetGlobalSettingsEvent, SetSettingsEvent } from 'stream-deck';

import actionInfo from '../__mocks__/action-info';
import didReceiveGlobalSettingsEvent from '../__mocks__/did-receive-global-settings-event';
import didReceiveSettingsEvent from '../__mocks__/did-receive-settings-event';
import registrationInfo from '../__mocks__/registration-info';
import { StreamDeckClient } from '../stream-deck-client';

/**
 * With an unconnected Stream Deck client.
 */
describe('streamDeckClient', () => {
    const port = '13';
    const propertyInspectorUUID = 'ABC123';
    const registerEvent = 'registerPropertyInspector';

    let streamDeckClient: StreamDeckClient;
    let server: WebSocketServer;

    // before each; reset the streamDeckClient and web socket server.
    beforeEach(async () => {
        streamDeckClient = (await import('../stream-deck-client')).default;
        jest.resetModules();

        server = new WebSocketServer(`ws://localhost:${port}`, { jsonProtocol: true });
    });

    // after each; clean-up the websocket server.
    afterEach(() => {
        WebSocketServer.clean();
    });

    it('should connect and register with the event and uuid', async () => {
        // given, when.
        streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, registrationInfo, actionInfo);

        // then.
        await server.connected;
        await expect(server).toReceiveMessage({
            event: registerEvent,
            uuid: propertyInspectorUUID
        });
    });

    it('should save the connection settings after connecting', async () => {
        // given, when.
        streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, registrationInfo, actionInfo);
        const connectionInfo = await streamDeckClient.getConnectionInfo();
        await server.connected;

        // then.
        expect(connectionInfo.propertyInspectorUUID).toBe(propertyInspectorUUID);
        expect(connectionInfo.registerEvent).toBe(registerEvent);
        expect(connectionInfo.info).toStrictEqual(registrationInfo);
        expect(connectionInfo.actionInfo).toStrictEqual(actionInfo);
    });

    /**
     * Whilst the client is connected.
     */
    describe('whilst connected', () => {
        let connection: Client;

        beforeEach(async () => {
            server.on('connection', (socket) => (connection = socket));
            streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, registrationInfo, actionInfo);

            await server.connected;
            await server.nextMessage;
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
                context: propertyInspectorUUID,
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
            connection.on('message', (msg) => {
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
            connection.on('message', (msg) => {
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

        it('should set global settings', async () => {
            // given.
            const settings = {
                hello: 'world',
                foo: {
                    bar: true
                }
            };

            // when.
            await streamDeckClient.setGlobalSettings(settings);

            // then.
            expect(server).toReceiveMessage(<SetGlobalSettingsEvent>{
                action: actionInfo.action,
                context: propertyInspectorUUID,
                event: 'setGlobalSettings',
                payload: settings
            });
        });

        it('should set settings', async () => {
            // given.
            const settings = {
                hello: 'world',
                foo: {
                    bar: true
                }
            };

            // when.
            await streamDeckClient.setSettings(settings);

            // then.
            expect(server).toReceiveMessage(<SetSettingsEvent>{
                event: 'setSettings',
                context: propertyInspectorUUID,
                payload: settings
            });
        });
    });
});
