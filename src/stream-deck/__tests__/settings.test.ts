import { MockStreamDeckClient } from '../../stream-deck/__mocks__/stream-deck-client';
import * as __streamDeckClient from '../../stream-deck/stream-deck-client';
import { didReceiveSettings } from '../__mocks__/events';
import { useSettings } from '../settings';

jest.mock('../../stream-deck/stream-deck-client');
const streamDeckClient = __streamDeckClient.default as MockStreamDeckClient;

describe('useSettings', () => {
    it('should trigger change callback when receiving settings for simple path', () => {
        // given.
        let changeCallbackValue: string | undefined;
        const [,] = useSettings<string>('foo', (value) => (changeCallbackValue = value));

        // when.
        streamDeckClient.didReceiveSettings.dispatch(didReceiveSettings);

        // then.
        expect(changeCallbackValue).toBe(didReceiveSettings.payload.settings.foo);
    });

    it('should trigger change callback when receiving settings for complex path', () => {
        // given.
        let changeCallbackValue: number | undefined;
        const [,] = useSettings<number>('nested.value', (value) => (changeCallbackValue = value));

        // when.
        streamDeckClient.didReceiveSettings.dispatch(didReceiveSettings);

        // then.
        expect(changeCallbackValue).toBe(didReceiveSettings.payload.settings.nested.value);
    });
});
