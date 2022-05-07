import * as _settings from '../stream-deck/settings';
import * as _streamDeckClient from '../stream-deck/stream-deck-client';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace SDPIComponents {
    export const streamDeckClient = _streamDeckClient.default;

    export const useGlobalSettings = _settings.useGlobalSettings;
    export const useSettings = _settings.useSettings;
}

export default SDPIComponents;
