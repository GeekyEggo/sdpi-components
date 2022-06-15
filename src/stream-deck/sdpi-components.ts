import * as _i18n from '../core/i18n';
import * as _settings from './settings';
import * as _streamDeckClient from './stream-deck-client';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace SDPIComponents {
    export const streamDeckClient = _streamDeckClient.default;

    export const useGlobalSettings = _settings.useGlobalSettings;
    export const useSettings = _settings.useSettings;

    export const i18n = _i18n.default;
}

window.SDPIComponents = SDPIComponents;
