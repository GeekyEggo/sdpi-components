import { ConnectionInfo } from 'stream-deck';

import { StreamDeckClient } from '../stream-deck-client';
import { actionInfo, info } from './registration';

export interface IMockStreamDeckClient extends StreamDeckClient {
    __connectionInfo: ConnectionInfo;
}

const streamDeckClient: IMockStreamDeckClient = jest.createMockFromModule('../stream-deck-client');

streamDeckClient.__connectionInfo = {
    actionInfo,
    info,
    propertyInspectorUUID: 'inRegisterEvent',
    registerEvent: 'SDFG98V8S09D8N2NVPO3BDV9DSBANCFI'
};

streamDeckClient.getConnectionInfo = () => Promise.resolve(streamDeckClient.__connectionInfo);

export default streamDeckClient;
