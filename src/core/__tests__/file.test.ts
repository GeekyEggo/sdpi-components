import { MockStreamDeckClient } from '../../stream-deck/__mocks__/stream-deck-client';
import * as __streamDeckClient from '../../stream-deck/stream-deck-client';
import { getFileName, sanitize } from '../file';

jest.mock('../../stream-deck/stream-deck-client');
const streamDeckClient = __streamDeckClient.default as MockStreamDeckClient;

const rawPath = 'C:\\fakepath\\C%3A%2FHello%2FWorld%2FFoo.txt';

describe('mac', () => {
    beforeAll(() => (streamDeckClient.__connectionInfo.info.application.platform = 'mac'));

    /**
     * getFileName
     */
    describe('getFileName', () => {
        it('should return the file name of a sanitized path with forward slash dividers', async () => {
            // given, when, then.
            const fileName = await getFileName('home/Foo/Bar/Hello world.txt');
            expect(fileName).toBe('Hello world.txt');
        });

        it('should return the path when there are no dividers', async () => {
            // given, when, then.
            const fileName = await getFileName('Hello world.txt');
            expect(fileName).toBe(fileName);
        });
    });

    /**
     * sanitize
     */
    describe('sanitize', () => {
        it('should decode and format the path with forward slashes', async () => {
            // given, when, then.
            const path = await sanitize(rawPath);
            expect(path).toBe('C:/Hello/World/Foo.txt');
        });
    });
});

describe('windows', () => {
    beforeAll(() => (streamDeckClient.__connectionInfo.info.application.platform = 'windows'));

    /**
     * getFileName
     */
    describe('getFileName', () => {
        it('should get the file name of a sanitized path with bash slash dividers', async () => {
            // given, when, then.
            const fileName = await getFileName('C:\\Foo\\Bar\\Hello world.txt');
            expect(fileName).toBe('Hello world.txt');
        });

        it('should return the path when there are no dividers', async () => {
            // given, when, then.
            const fileName = await getFileName('Hello world.txt');
            expect(fileName).toBe(fileName);
        });
    });

    /**
     * sanitize
     */
    describe('sanitize', () => {
        it('should decode and format the path with back slashes', async () => {
            // given, when, then.
            const path = await sanitize(rawPath);
            expect(path).toBe('C:\\Hello\\World\\Foo.txt');
        });
    });
});
