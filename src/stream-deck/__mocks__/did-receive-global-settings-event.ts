import { DidReceiveGlobalSettingsEvent } from 'stream-deck';

const data: DidReceiveGlobalSettingsEvent = {
    event: 'didReceiveGlobalSettings',
    payload: {
        settings: {
            foo: 'bar'
        }
    }
};

export default data;
