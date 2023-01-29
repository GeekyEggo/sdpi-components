import { getFileName, getSegmentsInReverse, sanitize } from '../file';

const fileTestCases = [
    {
        name: 'Unix-based paths',
        path: '/home/folder/Unix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'Unix-based paths with fakepath',
        path: 'C:\\fakepath\\/home/folder/Unix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'encoded Unix-based paths',
        path: '%2Fhome%2Ffolder%2FUnix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'encoded Unix-based paths with fakepath',
        path: 'C:\\fakepath\\%2Fhome%2Ffolder%2FUnix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'Windows-based paths',
        path: 'C:\\home\\folder\\Windows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
    {
        name: 'Windows-based paths with fakepath',
        path: 'C:\\fakepath\\C:\\home\\folder\\Windows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
    {
        name: 'encoded Windows-based paths',
        path: 'C%3A%5Chome%5Cfolder%5CWindows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
    {
        name: 'encoded Windows-based paths with fakepath',
        path: 'C:\\fakepath\\C%3A%5Chome%5Cfolder%5CWindows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
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
];

describe('getFileName', () => {
    fileTestCases.map((testCase) => {
        it(testCase.name, () => {
            // given, when, then.
            expect(getFileName(testCase.path)).toBe(testCase.filename);
        });
    });
});

describe('getSegmentsInReverse', () => {
    describe('Unix', () => {
        it('path', verify('One/Two/Three', ['Three', 'Two', 'One']));
        it('path leading slash', verify('//One/Two', ['Two', 'One']));
        it('path trailing slash', verify('One/Two//', ['Two', 'One']));
        it('path leading and trailing slash', verify('//One/Two//', ['Two', 'One']));
        it('path with fakepath', verify('C:\\fakepath\\home/folder/Unix.pdf', ['Unix.pdf', 'folder', 'home']));
        it('encoded path with fakepath', verify('C:\\fakepath\\home%2Ffolder%2FUnix%20File.pdf', ['Unix File.pdf', 'folder', 'home']));
    });

    describe('Windows', () => {
        it('path', verify('One\\Two\\Three', ['Three', 'Two', 'One']));
        it('path leading slash', verify('\\\\One\\Two', ['Two', 'One']));
        it('path trailing slash', verify('One\\Two\\\\', ['Two', 'One']));
        it('path leading and trailing slash', verify('\\\\One\\Two\\\\', ['Two', 'One']));
        it('path with fakepath', verify('C:\\fakepath\\C:\\folder\\Windows.pdf', ['Windows.pdf', 'folder', 'C:']));
        it('encoded path with fakepath', verify('C:\\fakepath\\C%3A%5Cfolder%5CWindows%20File.pdf', ['Windows File.pdf', 'folder', 'C:']));
    });

    it('empty path', verify('', []));
    it('single segment', verify('One', ['One']));
    it('mixed dividers', verify('One/Two\\Three', ['Three', 'Two', 'One']));

    /**
     * Verifies the specified `path` returns the `expectedSegments` when invoking `getSegmentsInReverse`.
     * @param path The path.
     * @param expectedSegments The expected segmnets.
     * @returns The test case, as a delegate.
     */
    function verify(path: string, expectedSegments: string[]): () => void {
        return () => {
            // given, when.
            const segments = Array.from(getSegmentsInReverse(path));

            // then.
            expect(segments.length).toBe(expectedSegments.length);
            for (let i = 0; i < segments.length; i++) {
                expect(segments[i]).toBe(expectedSegments[i]);
            }
        };
    }
});

describe('sanitize', () => {
    fileTestCases.map((testCase) => {
        it(testCase.name, () => {
            // given, when, then.
            expect(sanitize(testCase.path)).toBe(testCase.sanitized);
        });
    });
});
