import { useGlobalSettings, useSettings } from '../../stream-deck/settings';
import '../sdpi-components';
import streamDeckClient from '../stream-deck-client';

describe('SDPIComponents namespace', () => {
    it('should define streamDeckClient', () => {
        // given, when, then.
        expect(window.SDPIComponents.streamDeckClient).toStrictEqual(streamDeckClient);
    });

    it('should define useGlobalSettings', () => {
        // given, when, then.
        expect(window.SDPIComponents.useGlobalSettings).toStrictEqual(useGlobalSettings);
    });

    it('should define useSettings', () => {
        // given, when, then.
        expect(window.SDPIComponents.useSettings).toStrictEqual(useSettings);
    });
});
