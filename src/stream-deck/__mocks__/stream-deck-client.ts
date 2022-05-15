import { ConnectionInfo } from 'stream-deck';

import { StreamDeckClient } from '../stream-deck-client';
import actionInfo from './action-info';
import registrationInfo from './registration-info';

declare type MockStreamDeckClient = StreamDeckClient & {
    __connectionInfo: ConnectionInfo;
};

const streamDeckClient: MockStreamDeckClient = jest.createMockFromModule('../stream-deck-client');
streamDeckClient.__connectionInfo = {
    actionInfo: actionInfo,
    info: registrationInfo,
    propertyInspectorUUID: 'foo',
    registerEvent: 'bar'
};

streamDeckClient.getConnectionInfo = jest.fn(() => {
    return Promise.resolve(streamDeckClient.__connectionInfo);
});

export default streamDeckClient;
