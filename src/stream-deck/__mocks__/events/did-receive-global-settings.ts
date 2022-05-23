import { DidReceiveGlobalSettingsEvent } from 'stream-deck';

export const didReceiveGlobalSettings: DidReceiveGlobalSettingsEvent = {
    event: 'didReceiveGlobalSettings',
    payload: {
        settings: {
            foo: 'bar'
        }
    }
};
