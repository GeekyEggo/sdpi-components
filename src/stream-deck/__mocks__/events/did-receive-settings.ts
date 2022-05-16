import { DidReceiveSettingsEvent } from 'stream-deck';

import { actionInfo } from '../registration/action-info';

export const didReceiveSettings: DidReceiveSettingsEvent = {
    event: 'didReceiveSettings',
    action: actionInfo.action,
    context: actionInfo.context,
    device: actionInfo.device,
    payload: {
        settings: {
            ...actionInfo.payload.settings
        },
        coordinates: {
            column: 1,
            row: 2
        },
        isInMultiAction: false
    }
};
