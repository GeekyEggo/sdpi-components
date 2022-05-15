import { WS as WebSocketServer } from 'jest-websocket-mock';
import { Client } from 'mock-socket';
import { EventSent, SendToPropertyInspectorEvent, SetGlobalSettingsEvent, SetSettingsEvent } from 'stream-deck';

import { didReceiveGlobalSettings, didReceiveSettings } from '../__mocks__/events';
import { actionInfo, info } from '../__mocks__/registration';
import { StreamDeckClient } from '../stream-deck-client';

/**
 * With a Stream Deck client.
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
        streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, info, actionInfo);

        // then.
        await server.connected;
        await expect(server).toReceiveMessage({
            event: registerEvent,
            uuid: propertyInspectorUUID
        });
    });

    it('should save the connection settings after connecting', async () => {
        // given, when.
        streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, info, actionInfo);
        const connectionInfo = await streamDeckClient.getConnectionInfo();
        await server.connected;

        // then.
        expect(connectionInfo.propertyInspectorUUID).toBe(propertyInspectorUUID);
        expect(connectionInfo.registerEvent).toBe(registerEvent);
        expect(connectionInfo.info).toStrictEqual(info);
        expect(connectionInfo.actionInfo).toStrictEqual(actionInfo);
    });

    /**
     * With a connected Stream Deck client.
     */
    describe('whilst connected', () => {
        let connection: Client;

        beforeEach(async () => {
            server.on('connection', (socket) => (connection = socket));
            streamDeckClient.connect(port, propertyInspectorUUID, registerEvent, info, actionInfo);

            await server.connected;
            await server.nextMessage;
        });

        it('should dispatch didReceiveGlobalSettings', () => {
            // given.
            const handler = jest.fn();
            streamDeckClient.didReceiveGlobalSettings.subscribe(handler);

            // when.
            server.send(didReceiveGlobalSettings);

            // then.
            expect(handler).toHaveBeenCalledTimes(1);
            expect(handler).toHaveBeenCalledWith(didReceiveGlobalSettings);
        });

        it('should dispatch didReceiveSettings', () => {
            // given.
            const handler = jest.fn();
            streamDeckClient.didReceiveSettings.subscribe(handler);

            // when.
            server.send(didReceiveSettings);

            // then.
            expect(handler).toHaveBeenCalledTimes(1);
            expect(handler).toHaveBeenCalledWith(didReceiveSettings);
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
                    server.send(didReceiveGlobalSettings);
                }
            });

            // when.
            const globalSettings = await streamDeckClient.getGlobalSettings();

            // then.
            expect(globalSettings).toStrictEqual(didReceiveGlobalSettings.payload.settings);
        });

        it('should get settings and wait for them', async () => {
            // given.
            connection.on('message', (msg) => {
                const data: EventSent = JSON.parse(msg.toString());
                if (data.event === 'getSettings') {
                    server.send(didReceiveSettings);
                }
            });

            // when.
            const settings = await streamDeckClient.getSettings();

            // then.
            expect(settings.coordinates).toStrictEqual(didReceiveSettings.payload.coordinates);
            expect(settings.isInMultiAction).toStrictEqual(didReceiveSettings.payload.isInMultiAction);
            expect(settings.settings).toStrictEqual(didReceiveSettings.payload.settings);
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
