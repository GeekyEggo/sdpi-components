import { DidReceiveSettingsEvent } from 'stream-deck';

import { actionInfo } from '../registration/action-info';

declare type MockSettings = {
    foo: string;
    nested: {
        value: number;
    };
};

export const didReceiveSettings: DidReceiveSettingsEvent<MockSettings> = {
    event: 'didReceiveSettings',
    action: actionInfo.action,
    context: actionInfo.context,
    device: actionInfo.device,
    payload: {
        settings: {
            foo: 'bar',
            nested: {
                value: 13
            }
        },
        coordinates: {
            column: 1,
            row: 2
        },
        isInMultiAction: false
    }
};
