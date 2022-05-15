import { ActionInfo, ConnectionInfo, RegistrationInfo } from 'stream-deck';

import { StreamDeckClient } from '../stream-deck-client';

/**
 * Mock inActionInfo object supplied to the connectElgatoStreamDeckSocket.
 */
export const actionInfo: ActionInfo = {
    action: 'com.sdpi.test.action',
    context: '534DFGJLKAOIU56UIO2398SDF8902HJK',
    device: '55F16B35884A859CCE4FFA1FC8D3DE5B',
    payload: {
        settings: {
            foo: 'bar',
            isMock: true,
            folder: {
                file: 'Test.txt'
            }
        },
        coordinates: {
            column: 2,
            row: 1
        }
    }
};

/**
 * Mock inInfo object supplied to the connectElgatoStreamDeckSocket.
 */
export const info: RegistrationInfo = {
    application: {
        font: 'Arial',
        language: 'en',
        platform: 'windows',
        platformVersion: '11',
        version: '5.0.0.14247'
    },
    plugin: {
        uuid: 'com.sdpi.test',
        version: '1.4'
    },
    devicePixelRatio: 2,
    colors: {
        buttonPressedBackgroundColor: '#303030FF',
        buttonPressedBorderColor: '#646464FF',
        buttonPressedTextColor: '#969696FF',
        disabledColor: '#F7821B59',
        highlightColor: '#F7821BFF',
        mouseDownColor: '#CF6304FF'
    },
    devices: [
        {
            id: '55F16B35884A859CCE4FFA1FC8D3DE5B',
            name: 'Main Device',
            size: {
                columns: 5,
                rows: 3
            },
            type: 0
        }
    ]
};

/**
 * Mock Stream Deck client instance.
 */
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
