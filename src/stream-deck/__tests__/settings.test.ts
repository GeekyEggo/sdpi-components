import { WS as WebSocketServer } from 'jest-websocket-mock';
import { ActionInfo, DidReceiveGlobalSettingsEvent } from 'stream-deck';

import { StreamDeckClient } from '../../stream-deck/stream-deck-client';
import { didReceiveSettings } from '../__mocks__/events';
import { ActionInfoSettings, info } from '../__mocks__/registration';
import { Settings } from '../settings';

describe('useSettings', () => {
    let actionInfo: ActionInfo<ActionInfoSettings>;
    let server: WebSocketServer;
    let streamDeckClient: StreamDeckClient;
    let useSettings: Settings<ActionInfo | DidReceiveGlobalSettingsEvent>['use'];

    // before each; reset the streamDeckClient and web socket server.
    beforeEach(async () => {
        actionInfo = (await import('../__mocks__/registration')).actionInfo;
        streamDeckClient = (await import('../stream-deck-client')).default;
        useSettings = (await import('../settings')).useSettings;

        jest.resetModules();

        server = new WebSocketServer('ws://localhost:13', { jsonProtocol: true });
        streamDeckClient.connect('13', 'propertyInspectorUUID', 'registerEvent', info, actionInfo);
        streamDeckClient.setSettings = jest.fn();

        await server.connected;
        await server.nextMessage;
    });

    // after each; clean-up the websocket server.
    afterEach(() => {
        WebSocketServer.clean();
    });

    it('should trigger change callback when receiving settings for simple path', () => {
        // given.
        let changeCallbackValue: string | undefined;
        const [,] = useSettings<string>('foo', (value) => (changeCallbackValue = value));

        // when.
        streamDeckClient.didReceiveSettings.dispatch(didReceiveSettings);

        // then.
        expect(changeCallbackValue).toBe(didReceiveSettings.payload.settings.foo);
    });

    it('should trigger change callback when receiving settings for complex path', () => {
        // given.
        let changeCallbackValue: number | undefined;
        const [,] = useSettings<number>('folder.file', (value) => (changeCallbackValue = value));

        // when.
        streamDeckClient.didReceiveSettings.dispatch(didReceiveSettings);

        // then.
        expect(changeCallbackValue).toBe(didReceiveSettings.payload.settings.folder.file);
    });

    describe('getter', () => {
        it('should return undefined for non-existent paths', async () => {
            // given, when, then.
            const [getValue] = useSettings('__none');
            expect(getValue()).resolves.toBe(undefined);
        });

        it('should return values of simple paths', async () => {
            // given, when, then.
            const [getValue] = useSettings<string>('foo');
            expect(getValue()).resolves.toBe(actionInfo.payload.settings.foo);
        });

        it('should return values of complex paths', async () => {
            // given, when, then.
            const [getValue] = useSettings<string>('folder.file');
            expect(getValue()).resolves.toBe(actionInfo.payload.settings.folder.file);
        });
    });

    describe('setter', () => {
        describe('without timeout', () => {
            it('should not call save when the value has not changed', async () => {
                // given, when.
                const [, setValue] = useSettings<string>('foo', null, null);
                await setValue(actionInfo.payload.settings.foo);

                // then.
                expect(streamDeckClient.setSettings).not.toHaveBeenCalled();
            });

            it('should add a setting', async () => {
                // given, when.
                const [, setValue] = useSettings<number>('__new', null, null);
                await setValue(13);

                // then.
                expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(1);
                expect(streamDeckClient.setSettings).toHaveBeenCalledWith(<ActionInfoSettings & { __new: number }>{
                    __new: 13,
                    ...actionInfo.payload.settings
                });
            });

            it('should update a setting', async () => {
                // given, when.
                const [, setValue] = useSettings<string>('foo', null, null);
                await setValue('Hello world, this is a test');

                // then.
                expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(1);
                expect(streamDeckClient.setSettings).toHaveBeenCalledWith(<ActionInfoSettings>{
                    foo: 'Hello world, this is a test',
                    folder: actionInfo.payload.settings.folder,
                    isMock: actionInfo.payload.settings.isMock
                });
            });
        });

        describe('with timeout', () => {
            it('should not call save when the value has not changed', async () => {
                // given, when.
                const [, setValue] = useSettings<string>('foo', null, null);
                await setValue(actionInfo.payload.settings.foo);

                // then.
                expect(streamDeckClient.setSettings).not.toHaveBeenCalled();
            });

            it('should add a setting', async () => {
                // given, when.
                const [, setValue] = useSettings<number>('__new', null, 100);
                await setValue(13);

                // then.
                expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(1);
                expect(streamDeckClient.setSettings).toHaveBeenCalledWith(<ActionInfoSettings & { __new: number }>{
                    __new: 13,
                    ...actionInfo.payload.settings
                });
            });

            it('should update a setting', async () => {
                // given, when.
                const [, setValue] = useSettings<string>('folder.file', null, 100);
                await setValue('Document.pdf');

                // then.
                expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(1);
                expect(streamDeckClient.setSettings).toHaveBeenCalledWith(<ActionInfoSettings & { __new: number }>{
                    foo: actionInfo.payload.settings.foo,
                    folder: {
                        file: 'Document.pdf'
                    },
                    isMock: actionInfo.payload.settings.isMock
                });
            });
        });
    });
});
