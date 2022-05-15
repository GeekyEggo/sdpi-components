import { ActionInfo, ConnectionInfo, DidReceiveGlobalSettingsEvent, DidReceiveSettingsEvent } from 'stream-deck';

import { EventManager } from '../../core';
import { StreamDeckClient } from '../stream-deck-client';
import { actionInfo, info } from './registration';

export type MockStreamDeckClient = StreamDeckClient & {
    __connectionInfo: ConnectionInfo;
    didReceiveSettings: StreamDeckClient['didReceiveSettings'];
    didReceiveGlobalSettings: StreamDeckClient['didReceiveGlobalSettings'];
};

const streamDeckClient = jest.createMockFromModule<{ default: jest.MockedObject<StreamDeckClient> }>('../stream-deck-client').default as jest.MockedObject<MockStreamDeckClient>;

streamDeckClient.__connectionInfo = {
    actionInfo,
    info,
    propertyInspectorUUID: 'inRegisterEvent',
    registerEvent: 'SDFG98V8S09D8N2NVPO3BDV9DSBANCFI'
};

streamDeckClient.didReceiveSettings = new EventManager<ActionInfo | DidReceiveSettingsEvent>();
streamDeckClient.didReceiveGlobalSettings = new EventManager<DidReceiveGlobalSettingsEvent>();

streamDeckClient.getConnectionInfo.mockImplementation(() => Promise.resolve(streamDeckClient.__connectionInfo));

export default streamDeckClient;
