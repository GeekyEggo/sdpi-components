import * as _settings from './settings';
import * as _streamDeckClient from './stream-deck-client';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace SDPIComponents {
    export const streamDeckClient = _streamDeckClient.default;

    export const useGlobalSettings = _settings.useGlobalSettings;
    export const useSettings = _settings.useSettings;
}

window.SDPIComponents = SDPIComponents;
