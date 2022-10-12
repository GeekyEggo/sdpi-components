import type { Config } from '@jest/types';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const config: Config.InitialOptions = {
    coverageReporters: ['json-summary', 'text'],
    maxWorkers: 1,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': [
            'ts-jest',
            {
                isolatedModules: true
            }
        ]
    }
};

export default config;
