import type { Config } from '@jest/types';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const config: Config.InitialOptions = {
    coverageReporters: ['json-summary', 'text'],
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

export default config;
