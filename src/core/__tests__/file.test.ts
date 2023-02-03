import { getFileName, getSegmentsInReverse, sanitize } from '../file';

const fileTestCases = {
    Unix: [
        {
            name: 'path',
            path: '/home/folder/Unix.pdf',
            filename: 'Unix.pdf',
            sanitized: '/home/folder/Unix.pdf'
        },
        {
            name: 'fakepath',
            path: 'C:\\fakepath\\/home/folder/Unix.pdf',
            filename: 'Unix.pdf',
            sanitized: '/home/folder/Unix.pdf'
        },
        {
            name: 'encoded paths',
            path: '%2Fhome%2Ffolder%2FUnix.pdf',
            filename: 'Unix.pdf',
            sanitized: '/home/folder/Unix.pdf'
        },
        {
            name: 'encoded fakepath',
            path: 'C:\\fakepath\\%2Fhome%2Ffolder%2FUnix.pdf',
            filename: 'Unix.pdf',
            sanitized: '/home/folder/Unix.pdf'
        }
    ],
    Windows: [
        {
            name: 'path',
            path: 'C:\\home\\folder\\Windows.pdf',
            filename: 'Windows.pdf',
            sanitized: 'C:\\home\\folder\\Windows.pdf'
        },
        {
            name: 'fakepath',
            path: 'C:\\fakepath\\C:\\home\\folder\\Windows.pdf',
            filename: 'Windows.pdf',
            sanitized: 'C:\\home\\folder\\Windows.pdf'
        },
        {
            name: 'encoded paths',
            path: 'C%3A%5Chome%5Cfolder%5CWindows.pdf',
            filename: 'Windows.pdf',
            sanitized: 'C:\\home\\folder\\Windows.pdf'
        },
        {
            name: 'encoded fakepath',
            path: 'C:\\fakepath\\C%3A%5Chome%5Cfolder%5CWindows.pdf',
            filename: 'Windows.pdf',
            sanitized: 'C:\\home\\folder\\Windows.pdf'
        }
    ],
    Miscellaneous: [
        {
            name: 'only file names',
            path: 'Document.pdf',
            filename: 'Document.pdf',
            sanitized: 'Document.pdf'
        },
        {
            name: 'only file names with fakepath',
            path: 'C:\\fakepath\\Document.pdf',
            filename: 'Document.pdf',
            sanitized: 'Document.pdf'
        },
        {
            name: 'encoded file names',
            path: 'Hello%20world.pdf',
            filename: 'Hello world.pdf',
            sanitized: 'Hello world.pdf'
        },
        {
            name: 'encoded file names with fakepath',
            path: 'C:\\fakepath\\Hello%20world.pdf',
            filename: 'Hello world.pdf',
            sanitized: 'Hello world.pdf'
        },
        {
            name: 'empty path',
            path: '',
            filename: '',
            sanitized: ''
        }
    ]
};

describe('getFileName', () => {
    describe('Unix', () => test.each(fileTestCases.Unix)('$name', verify));
    describe('Windows', () => test.each(fileTestCases.Windows)('$name', verify));
    describe('Miscellaneous', () => test.each(fileTestCases.Miscellaneous)('$name', verify));

    /**
     * Verifies `getFileName` returns `filename` from the specified `path`.
     * @param {string, string} testCase The test case.
     */
    function verify({ path, filename }: { path: string; filename: string }) {
        expect(getFileName(path)).toBe(filename);
    }
});

describe('getSegmentsInReverse', () => {
    describe('Unix', () => {
        test.each([
            {
                name: 'path',
                path: 'One/Two/Three',
                expected: ['Three', 'Two', 'One']
            },
            {
                name: 'path leading slash',
                path: '//One/Two',
                expected: ['Two', 'One']
            },
            {
                name: 'path trailing slash',
                path: 'One/Two//',
                expected: ['Two', 'One']
            },
            {
                name: 'path leading and trailing slash',
                path: '//One/Two//',
                expected: ['Two', 'One']
            },
            {
                name: 'path with fakepath',
                path: 'C:\\fakepath\\home/folder/Unix.pdf',
                expected: ['Unix.pdf', 'folder', 'home']
            },
            {
                name: 'encoded path with fakepath',
                path: 'C:\\fakepath\\home%2Ffolder%2FUnix%20File.pdf',
                expected: ['Unix File.pdf', 'folder', 'home']
            }
        ])('$name', verify);
    });

    describe('Windows', () => {
        test.each([
            {
                name: 'path',
                path: 'One\\Two\\Three',
                expected: ['Three', 'Two', 'One']
            },
            {
                name: 'path leading slash',
                path: '\\\\One\\Two',
                expected: ['Two', 'One']
            },
            {
                name: 'path trailing slash',
                path: 'One\\Two\\\\',
                expected: ['Two', 'One']
            },
            {
                name: 'path leading and trailing slash',
                path: '\\\\One\\Two\\\\',
                expected: ['Two', 'One']
            },
            {
                name: 'path with fakepath',
                path: 'C:\\fakepath\\C:\\folder\\Windows.pdf',
                expected: ['Windows.pdf', 'folder', 'C:']
            },
            {
                name: 'encoded path with fakepath',
                path: 'C:\\fakepath\\C%3A%5Cfolder%5CWindows%20File.pdf',
                expected: ['Windows File.pdf', 'folder', 'C:']
            }
        ])('$name', verify);
    });

    describe('miscellaneous', () => {
        test.each([
            {
                name: 'empty path',
                path: '',
                expected: []
            },
            {
                name: 'single segment',
                path: 'One',
                expected: ['One']
            },
            {
                name: 'mixed dividers',
                path: 'One/Two\\Three',
                expected: ['Three', 'Two', 'One']
            }
        ])('$name', verify);
    });

    /**
     * Verifies `getSegmentsInReverse` returns the `expected` segments from the specified `path`.
     * @param {string, string[]} testCase The test case.
     */
    function verify({ path, expected }: { path: string; expected: string[] }) {
        // given, when.
        const segments = Array.from(getSegmentsInReverse(path));

        // then.
        expect(segments.length).toBe(expected.length);
        for (let i = 0; i < segments.length; i++) {
            expect(segments[i]).toBe(expected[i]);
        }
    }
});

describe('sanitize', () => {
    describe('Unix', () => test.each(fileTestCases.Unix)('$name', verify));
    describe('Windows', () => test.each(fileTestCases.Windows)('$name', verify));
    describe('Miscellaneous', () => test.each(fileTestCases.Miscellaneous)('$name', verify));

    /**
     * Verifies `sanitize` returns `sanitized` from the specified `path`.
     * @param {string, string} testCase The test case.
     */
    function verify({ path, sanitized }: { path: string; sanitized: string }) {
        expect(sanitize(path)).toBe(sanitized);
    }
});
