import { ActionInfo, DidReceiveGlobalSettingsEvent } from 'stream-deck';

import { MockStreamDeckClient } from '../__mocks__/stream-deck-client';
import { Settings } from '../settings';

jest.mock('../../stream-deck/stream-deck-client');

describe('useSettings', () => {
    let streamDeckClient: MockStreamDeckClient;
    let useSettings: Settings<ActionInfo | DidReceiveGlobalSettingsEvent>['use'];

    const defaultActionInfo: DeepPartial<ActionInfo> = {
        payload: {
            settings: {
                foo: 'bar',
                folder: {
                    file: 'Document.pdf'
                }
            }
        }
    };

    // Ensure we have fresh module instance before each and every test.
    beforeEach(async () => {
        useSettings = (await import('../settings')).useSettings;
        streamDeckClient = (await import('../../stream-deck/stream-deck-client')).default as MockStreamDeckClient;

        jest.resetModules();
    });

    /**
     * The changeCallback argument of useSettings.
     */
    describe('changeCallback', () => {
        type ChangeCallbackTestCase = {
            name: string;
            key: string;
            value: unknown;
        };

        const changeCallbackTestCases: ChangeCallbackTestCase[] = [
            {
                name: 'should trigger for simple path',
                key: 'foo',
                value: 'bar'
            },
            {
                name: 'should trigger for complex path',
                key: 'folder.file',
                value: 'Document.pdf'
            }
        ];

        changeCallbackTestCases.map((testCase) => {
            it(testCase.name, () => {
                // given.
                let changeCallbackValue: unknown;
                const [,] = useSettings(testCase.key, (value) => (changeCallbackValue = value));

                // when.
                streamDeckClient.didReceiveSettings.dispatch({
                    action: '',
                    context: '',
                    device: '',
                    event: 'didReceiveSettings',
                    payload: {
                        coordinates: {
                            column: 1,
                            row: 1
                        },
                        isInMultiAction: false,
                        settings: {
                            foo: 'bar',
                            folder: {
                                file: 'Document.pdf'
                            }
                        }
                    }
                });

                // then.
                expect(changeCallbackValue).toBe(testCase.value);
            });
        });
    });

    /**
     * The getter of useSettings.
     */
    describe('getter', () => {
        // Connect with the default action info before each test.
        beforeEach(async () => {
            streamDeckClient.__connect({ actionInfo: defaultActionInfo });
        });

        it('should return undefined for non-existent paths', async () => {
            // given, when, then.
            const [getValue] = useSettings('__none');
            expect(getValue()).resolves.toBe(undefined);
        });

        it('should return values of simple paths', async () => {
            // given, when, then.
            const [getValue] = useSettings<string>('foo');
            expect(await getValue()).toBe('bar');
        });

        it('should return values of complex paths', async () => {
            // given, when, then.
            const [getValue] = useSettings<string>('folder.file');
            expect(await getValue()).toBe('Document.pdf');
        });
    });

    /**
     * The setter of useSettings.
     */
    describe('setter', () => {
        type SetterTestCase = {
            name: string;
            key: string;
            value: unknown;
            called: number;
            calledWith?: unknown;
        };

        // Partial test cases for setter; this is doubled, one for with a timeout, and one for without.
        const setterTestCases: SetterTestCase[] = [
            {
                name: 'should add a setting',
                key: '__new',
                value: 'Hello world',
                called: 1,
                calledWith: {
                    __new: 'Hello world',
                    foo: 'bar',
                    folder: {
                        file: 'Document.pdf'
                    }
                }
            },
            {
                name: 'should update a setting',
                key: 'folder.file',
                value: 'Other.pdf',
                called: 1,
                calledWith: {
                    foo: 'bar',
                    folder: {
                        file: 'Other.pdf'
                    }
                }
            },
            {
                name: 'should not save when unchanged',
                key: 'foo',
                value: 'bar',
                called: 0
            }
        ];

        // Connect with the default action info before each test.
        beforeEach(async () => {
            streamDeckClient.setSettings = jest.fn().mockResolvedValue(Promise.resolve());
            streamDeckClient.__connect({ actionInfo: defaultActionInfo });
        });

        // Describe the test cases.
        setterTestCases.map((testCase) => {
            async function setterTest(timeout: number | null): Promise<void> {
                // given.
                const [, setValue] = useSettings(testCase.key, null, timeout);

                // when.
                await setValue(testCase.value);

                // then.
                expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(testCase.called);
                if (testCase.calledWith) {
                    expect(streamDeckClient.setSettings).toHaveBeenCalledWith(testCase.calledWith);
                }
            }

            it(`${testCase.name} (with timeout)`, () => setterTest(null));
            it(`${testCase.name} (without timeout)`, () => setterTest(null));
        });
    });
});
