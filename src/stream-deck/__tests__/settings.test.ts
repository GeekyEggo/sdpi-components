import { WS as WebSocketServer } from 'jest-websocket-mock';
import { ActionInfo, DidReceiveGlobalSettingsEvent } from 'stream-deck';

import { StreamDeckClient } from '../../stream-deck/stream-deck-client';
import { didReceiveSettings } from '../__mocks__/events';
import { ActionInfoSettings, info } from '../__mocks__/registration';
import { Settings } from '../settings';

describe('useSettings', () => {
    let actionInfo: ActionInfo;
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

    describe('setter', () => {
        it('should update a setting, without a timeout', async () => {
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

        it('should update a setting, without a timeout', async () => {
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
    });
});
