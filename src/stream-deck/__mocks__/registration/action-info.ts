import { ActionInfo } from 'stream-deck';

export type ActionInfoSettings = {
    foo: string;
    isMock: boolean;
    folder: {
        file: string;
    };
};

export const actionInfo: ActionInfo<ActionInfoSettings> = {
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
