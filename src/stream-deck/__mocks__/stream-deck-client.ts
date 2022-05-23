import { WS as WebSocketServer } from 'jest-websocket-mock';
import { ConnectionInfo } from 'stream-deck';

import { merge } from '../../core/utils';
import { StreamDeckClient } from '../stream-deck-client';
import { actionInfo, info } from './registration';

const streamDeckClient: MockStreamDeckClient = jest.requireActual('../stream-deck-client').default;
const server = new WebSocketServer('ws://localhost:13', { jsonProtocol: true });

export type MockStreamDeckClient = StreamDeckClient & {
    __connect(options?: DeepPartial<ConnectionInfo>): Promise<WebSocketServer>;
};

/**
 * Provides wrapper for connecting to the client that uses default options when connecting.
 * @param options The partial options; this allows for the default options to be overriden.
 * @returns A promise that is resolved when the client is connected.
 */
streamDeckClient.__connect = async (options?: DeepPartial<ConnectionInfo>): Promise<WebSocketServer> => {
    const args = merge(
        {
            port: 13,
            propertyInspectorUUID: 'SDFG98V8S09D8N2NVPO3BDV9DSBANCFI',
            registerEvent: 'inRegisterEvent',
            info: info,
            actionInfo: actionInfo
        },
        options || {}
    );

    await streamDeckClient.connect('13', args.propertyInspectorUUID, args.registerEvent, args.info, args.actionInfo);
    return server;
};

export default streamDeckClient;
