import { DidReceiveSettingsEvent } from 'stream-deck';

import actionInfo from './action-info';

const data: DidReceiveSettingsEvent = {
    event: 'didReceiveSettings',
    action: actionInfo.action,
    context: actionInfo.context,
    device: actionInfo.device,
    payload: {
        settings: {
            foo: 'bar'
        },
        coordinates: {
            column: 1,
            row: 2
        },
        isInMultiAction: false
    }
};

export default data;
