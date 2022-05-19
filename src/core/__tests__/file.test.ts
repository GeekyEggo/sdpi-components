import { getFileName, sanitize } from '../file';

const testCases = [
    {
        name: 'should handle Unix-based paths',
        path: '/home/folder/Unix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'should handle Unix-based paths with fakepath',
        path: 'C:\\fakepath\\/home/folder/Unix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'should handle encoded Unix-based paths',
        path: '%2Fhome%2Ffolder%2FUnix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'should handle encoded Unix-based paths with fakepath',
        path: 'C:\\fakepath\\%2Fhome%2Ffolder%2FUnix.pdf',
        filename: 'Unix.pdf',
        sanitized: '/home/folder/Unix.pdf'
    },
    {
        name: 'should handle Windows-based paths',
        path: 'C:\\home\\folder\\Windows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
    {
        name: 'should handle Windows-based paths with fakepath',
        path: 'C:\\fakepath\\C:\\home\\folder\\Windows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
    {
        name: 'should handle encoded Windows-based paths',
        path: 'C%3A%5Chome%5Cfolder%5CWindows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
    {
        name: 'should handle encoded Windows-based paths with fakepath',
        path: 'C:\\fakepath\\C%3A%5Chome%5Cfolder%5CWindows.pdf',
        filename: 'Windows.pdf',
        sanitized: 'C:\\home\\folder\\Windows.pdf'
    },
    {
        name: 'should handle only file names',
        path: 'Document.pdf',
        filename: 'Document.pdf',
        sanitized: 'Document.pdf'
    },
    {
        name: 'should handle only file names with fakepath',
        path: 'Document.pdf',
        filename: 'Document.pdf',
        sanitized: 'Document.pdf'
    },
    {
        name: 'should handle encoded file names',
        path: 'Hello%20world.pdf',
        filename: 'Hello world.pdf',
        sanitized: 'Hello world.pdf'
    },
    {
        name: 'should handle encoded file names with fakepath',
        path: 'C:\\fakepath\\Hello%20world.pdf',
        filename: 'Hello world.pdf',
        sanitized: 'Hello world.pdf'
    }
];

describe('getFileName', () => {
    testCases.map((testCase) => {
        it(testCase.name, () => {
            // given, when, then.
            expect(getFileName(testCase.path)).toBe(testCase.filename);
        });
    });
});

describe('sanitize', () => {
    testCases.map((testCase) => {
        it(testCase.name, () => {
            // given, when, then.
            expect(sanitize(testCase.path)).toBe(testCase.sanitized);
        });
    });
});
