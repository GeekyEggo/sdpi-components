import { ActionInfo, DidReceiveGlobalSettingsEvent } from 'stream-deck';

import { EventManager } from '../../core/events';
import { MockStreamDeckClient } from '../__mocks__/stream-deck-client';
import { Settings, SettingsEventArgs } from '../settings';

jest.mock('../../stream-deck/stream-deck-client');

describe('Settings', () => {
    let evManager: EventManager<SettingsEventArgs>;
    let settings: Settings<SettingsEventArgs>;

    beforeEach(() => (evManager = new EventManager<SettingsEventArgs>()));

    describe('changeCallback', () => {
        beforeEach(() => (settings = new Settings(evManager, () => Promise.resolve())));

        const testCases = [
            {
                name: 'should callback for simple paths',
                key: 'foo',
                calledTimes: 1,
                calledWith: 'bar'
            },
            {
                name: 'should callback for nested paths',
                key: 'nested.item',
                calledTimes: 1,
                calledWith: 13
            },
            {
                name: 'should callback for paths that do not exist',
                key: '__none',
                calledTimes: 1,
                calledWith: undefined
            }
        ];

        testCases.map((testCase) => {
            it(testCase.name, async () => {
                // given.
                const changeCallback = jest.fn();
                settings.use(testCase.key, changeCallback);

                // when.
                evManager.dispatch({
                    payload: {
                        settings: {
                            foo: 'bar',
                            nested: { item: 13 }
                        }
                    }
                });

                // then.
                expect(changeCallback).toHaveBeenCalledTimes(testCase.calledTimes);
                expect(changeCallback).toHaveBeenCalledWith(testCase.calledWith);
            });
        });
    });

    /**
     * [getter, ] = use(...)
     */
    describe('getter', () => {
        beforeEach(() => {
            settings = new Settings(evManager, () => Promise.resolve());
            evManager.dispatch({
                payload: {
                    settings: {
                        foo: 'bar',
                        nested: {
                            item: 13
                        }
                    }
                }
            });
        });

        const testCases = [
            {
                name: 'should return undefined for non-existent paths',
                key: '__none',
                value: undefined
            },
            {
                name: 'should return values of simple paths',
                key: 'foo',
                value: 'bar'
            },
            {
                name: 'should return values of nested paths',
                key: 'nested.item',
                value: 13
            }
        ];

        testCases.map((testCase) => {
            it(testCase.name, async () => {
                // given, when, then.
                const [getValue] = settings.use(testCase.key);
                expect(await getValue()).toBe(testCase.value);
            });
        });
    });

    /**
     * [, setter] = use(...)
     */
    describe('setter', () => {
        let mockSave: (settings: unknown) => Promise<void>;

        beforeEach(() => {
            mockSave = jest.fn().mockReturnValue(Promise.resolve());

            settings = new Settings(evManager, mockSave);
            evManager.dispatch({
                payload: {
                    settings: {
                        nested: {
                            item: 13
                        }
                    }
                }
            });
        });

        const testCases = [
            {
                name: 'should add a setting',
                key: '__new',
                value: 'Hello world',
                calledTimes: 1,
                calledWith: {
                    __new: 'Hello world',
                    nested: {
                        item: 13
                    }
                }
            },
            {
                name: 'should update a setting',
                key: 'nested.item',
                value: 100,
                calledTimes: 1,
                calledWith: {
                    nested: {
                        item: 100
                    }
                }
            },
            {
                name: 'should not save when unchanged',
                key: 'nested.item',
                value: 13,
                calledTimes: 0,
                calledWith: undefined
            }
        ];

        testCases.map((testCase) => {
            const test = async (timeout: number | null): Promise<void> => {
                // given, when.
                const [, setValue] = settings.use(testCase.key, null, timeout);
                await setValue(testCase.value);

                // then.
                expect(mockSave).toHaveBeenCalledTimes(testCase.calledTimes);
                if (testCase.calledWith !== undefined) {
                    expect(mockSave).toHaveBeenCalledWith(testCase.calledWith);
                }
            };

            it(`${testCase.name} (with timeout)`, () => test(10));
            it(`${testCase.name} (without timeout)`, () => test(null));
        });
    });
});

describe('useSettings', () => {
    let streamDeckClient: MockStreamDeckClient;
    let useSettings: Settings<ActionInfo | DidReceiveGlobalSettingsEvent>['use'];

    // Ensure we have fresh module instance before each and every test.
    beforeEach(async () => {
        jest.resetModules();
        streamDeckClient = (await import('../../stream-deck/stream-deck-client')).default as MockStreamDeckClient;
        useSettings = (await import('../settings')).useSettings;
    });

    it('should subscribe to didReceiveSettings', () => {
        // given.
        const changeCallback = jest.fn();
        useSettings('foo', changeCallback);

        // when.
        streamDeckClient.didReceiveSettings.dispatch({
            action: 'com.sdpi.plugin.action',
            context: '<uniqueValue>',
            device: '<uniqueValue>',
            event: 'didReceiveSettings',
            payload: {
                coordinates: {
                    column: 1,
                    row: 1
                },
                isInMultiAction: false,
                settings: {
                    foo: 'bar'
                }
            }
        });

        // then.
        expect(changeCallback).toHaveBeenCalledTimes(1);
        expect(changeCallback).toHaveBeenCalledWith('bar');
    });

    it('should call setSettings when saving', async () => {
        // given.
        streamDeckClient.setSettings = jest.fn().mockResolvedValue(Promise.resolve());
        const [, setValue] = useSettings('foo');

        streamDeckClient.didReceiveSettings.dispatch({
            action: 'com.sdpi.plugin.action',
            context: '<uniqueValue>',
            device: '<uniqueValue>',
            event: 'didReceiveSettings',
            payload: {
                coordinates: {
                    column: 1,
                    row: 1
                },
                isInMultiAction: false,
                settings: {}
            }
        });

        // when.
        await setValue('Hello world');

        // then.
        expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(1);
        expect(streamDeckClient.setSettings).toHaveBeenCalledWith({
            foo: 'Hello world'
        });
    });

    it('should not call setSettings when not permitted', async () => {
        // given.
        streamDeckClient.setSettings = jest.fn().mockResolvedValue(Promise.resolve());
        const [, setUnsavedValue] = useSettings('hello', null, null, false);
        const [, setValue] = useSettings('good');

        streamDeckClient.didReceiveSettings.dispatch({
            action: 'com.sdpi.plugin.action',
            context: '<uniqueValue>',
            device: '<uniqueValue>',
            event: 'didReceiveSettings',
            payload: {
                coordinates: {
                    column: 1,
                    row: 1
                },
                isInMultiAction: false,
                settings: {}
            }
        });

        // when, then.
        await setUnsavedValue('world');
        expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(0);

        // when, then.
        await setValue('bye');
        expect(streamDeckClient.setSettings).toHaveBeenCalledTimes(1);
        expect(streamDeckClient.setSettings).toHaveBeenCalledWith({
            hello: 'world',
            good: 'bye'
        });
    });
});

describe('useGlobalSettings', () => {
    let streamDeckClient: MockStreamDeckClient;
    let useGlobalSettings: Settings<DidReceiveGlobalSettingsEvent>['use'];

    // Ensure we have fresh module instance before each and every test.
    beforeEach(async () => {
        jest.resetModules();
        streamDeckClient = (await import('../../stream-deck/stream-deck-client')).default as MockStreamDeckClient;
        useGlobalSettings = (await import('../settings')).useGlobalSettings;
    });

    it('should request global settings', () => {
        // given, when.
        streamDeckClient.getGlobalSettings = jest.fn();
        useGlobalSettings('foo');

        // then.
        expect(streamDeckClient.getGlobalSettings).toHaveBeenCalledTimes(1);
    });

    it('should not request global settings without being used', async () => {
        // given.
        jest.resetModules();
        streamDeckClient = (await import('../../stream-deck/stream-deck-client')).default as MockStreamDeckClient;
        streamDeckClient.getGlobalSettings = jest.fn();

        // when
        useGlobalSettings = (await import('../settings')).useGlobalSettings;

        // then
        expect(streamDeckClient.getGlobalSettings).not.toHaveBeenCalled();
    });

    it('should subscribe to didReceiveGlobalSettings', () => {
        // given.
        const changeCallback = jest.fn();
        useGlobalSettings('foo', changeCallback);

        // when.
        streamDeckClient.didReceiveGlobalSettings.dispatch({
            event: 'didReceiveGlobalSettings',
            payload: {
                settings: {
                    foo: 'bar'
                }
            }
        });

        // then.
        expect(changeCallback).toHaveBeenCalledTimes(1);
        expect(changeCallback).toHaveBeenCalledWith('bar');
    });

    it('should call setGlobalSettings when saving', async () => {
        // given.
        streamDeckClient.setGlobalSettings = jest.fn().mockResolvedValue(Promise.resolve());
        const [, setValue] = useGlobalSettings('foo');

        streamDeckClient.didReceiveGlobalSettings.dispatch({
            event: 'didReceiveGlobalSettings',
            payload: {
                settings: {
                    foo: 'bar'
                }
            }
        });

        // when.
        await setValue('Hello world');

        // then.
        expect(streamDeckClient.setGlobalSettings).toHaveBeenCalledTimes(1);
        expect(streamDeckClient.setGlobalSettings).toHaveBeenCalledWith({
            foo: 'Hello world'
        });
    });

    it('should not call setSettings when not permitted', async () => {
        // given.
        streamDeckClient.setGlobalSettings = jest.fn().mockResolvedValue(Promise.resolve());
        const [, setValueUnsaved] = useGlobalSettings('hello', null, null, false);
        const [, setValue] = useGlobalSettings('good');

        streamDeckClient.didReceiveGlobalSettings.dispatch({
            event: 'didReceiveGlobalSettings',
            payload: {
                settings: {}
            }
        });

        // when, then.
        await setValueUnsaved('world');
        expect(streamDeckClient.setGlobalSettings).toHaveBeenCalledTimes(0);

        // then.
        await setValue('bye');
        expect(streamDeckClient.setGlobalSettings).toHaveBeenCalledTimes(1);
        expect(streamDeckClient.setGlobalSettings).toHaveBeenCalledWith({
            hello: 'world',
            good: 'bye'
        });
    });
});
