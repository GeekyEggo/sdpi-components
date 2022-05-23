/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },
    maxWorkers: 1,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    }
};
