import { ComplexAttributeConverter, PropertyDeclaration } from 'lit';

import { LocalizedString as _LocalizedString, i18nSettings, Internationalization, LocalizedString } from '../i18n';

describe('i18n', () => {
    let i18n: Internationalization;

    beforeEach(async () => {
        i18n = (await import('../i18n')).default;
        jest.resetModules();
    });

    describe('default language', () => {
        afterAll(() => jest.spyOn(window.navigator, 'language', 'get').mockReturnValue('en-GB'));

        const testCases = [
            {
                name: 'should read window.navigator.language when localized',
                navigator: 'es-ES',
                language: 'es'
            },
            {
                name: 'should read window.navigator.language when not localized',
                navigator: 'fr',
                language: 'fr'
            },
            {
                name: 'should fallback to en when empty',
                navigator: '',
                language: 'en'
            }
        ];

        testCases.map((testCase) => {
            it(testCase.name, async () => {
                // given.
                jest.spyOn(window.navigator, 'language', 'get').mockReturnValue(testCase.navigator);

                // when
                const i18n = (await import('../i18n')).default;
                jest.resetModules();

                // then.
                expect(i18n.settings.language).toBe(testCase.language);
            });
        });
    });

    describe('init', () => {
        it('should throw if initialized more than once', () => {
            // given.
            i18n.init({});

            // when, then.
            expect(() => i18n.init({})).toThrow();
        });
    });

    describe('translate', () => {
        const locales: i18nSettings['locales'] = {
            en: {
                translations: {
                    greeting: 'Hello',
                    farewell: 'Good bye'
                }
            },
            es: {
                translations: {
                    greeting: 'Hola'
                }
            },
            fr: {
                translations: {
                    greeting: 'Salut',
                    farewell: 'Au revoir'
                }
            }
        };

        it('should localize', () => {
            // given.
            i18n.init({
                language: 'es',
                locales
            });

            // when.
            const translation = i18n.translate('__greeting__');

            // then.
            expect(translation?.key).toBe('__greeting__');
            expect(translation?.language).toBe('es');
            expect(translation?.value).toBe('Hola');
        });

        it('should fallback', () => {
            // given.
            i18n.init({
                language: 'es',
                fallbackLanguage: 'fr',
                locales
            });

            // when.
            const translation = i18n.translate('__farewell__');

            // then.
            expect(translation?.key).toBe('__farewell__');
            expect(translation?.language).toBe('fr');
            expect(translation?.value).toBe('Au revoir');
        });

        it('should default to English', () => {
            // given.
            i18n.init({
                locales
            });

            // when.
            const translation = i18n.translate('__farewell__');

            // then.
            expect(translation?.key).toBe('__farewell__');
            expect(translation?.language).toBe('en');
            expect(translation?.value).toBe('Good bye');
        });

        it('should default fallback to English', () => {
            // given.
            i18n.init({
                language: 'es',
                locales
            });

            // when.
            const translation = i18n.translate('__farewell__');

            // then.
            expect(translation?.key).toBe('__farewell__');
            expect(translation?.language).toBe('en');
            expect(translation?.value).toBe('Good bye');
        });

        it('should return key, when not initialized', () => {
            // given, when.
            const translation = i18n.translate('__farewell__');

            // then.
            expect(translation?.key).toBe('__farewell__');
            expect(translation?.language).toBe(undefined);
            expect(translation?.value).toBe('__farewell__');
        });

        it('should return key, when language not found', () => {
            // given.
            i18n.init({
                language: 'de',
                fallbackLanguage: 'de',
                locales
            });

            // when.
            const translation = i18n.translate('__farewell__');

            // then.
            expect(translation?.key).toBe('__farewell__');
            expect(translation?.language).toBe(undefined);
            expect(translation?.value).toBe('__farewell__');
        });

        it('should return key, when key not found', () => {
            // given.
            i18n.init({
                locales
            });

            // when.
            const translation = i18n.translate('__other__');

            // then.
            expect(translation?.key).toBe('__other__');
            expect(translation?.language).toBe(undefined);
            expect(translation?.value).toBe('__other__');
        });
    });
});

describe('LocalizedString', () => {
    let LocalizedString: typeof _LocalizedString;

    beforeEach(async () => {
        LocalizedString = (await import('../i18n')).LocalizedString;
        jest.resetModules();
    });

    it('should stringify to the value', () => {
        // given, when, then.
        const translation = new LocalizedString('Hello world');
        expect(translation.toString()).toBe('Hello world');
    });

    it('should set the key as the value, when key is undefined', () => {
        // given, when.
        const translation = new LocalizedString('foo');

        // then.
        expect(translation.key).toBe('foo');
        expect(translation.value).toBe('foo');
        expect(translation.language).toBeUndefined();
    });
});

describe('localizedStringPropertyOptions', () => {
    let i18n: Internationalization;
    let localizedStringPropertyOptions!: PropertyDeclaration<_LocalizedString | undefined>;

    beforeEach(async () => {
        const importedModule = await import('../i18n');
        i18n = importedModule.default;
        localizedStringPropertyOptions = importedModule.localizedStringPropertyOptions;

        jest.resetModules();
    });

    describe('converter', () => {
        let converter: ComplexAttributeConverter<LocalizedString | undefined>;
        beforeEach(() => (converter = <ComplexAttributeConverter<LocalizedString | undefined>>localizedStringPropertyOptions.converter));

        describe('toAttribute', () => {
            it('should convert when undefined', () => {
                // given, when.
                validateNotUndefined(converter.toAttribute);
                const attr = converter.toAttribute(undefined);

                // then.
                expect(attr).toBeUndefined();
            });

            it('should convert', () => {
                // given, when.
                validateNotUndefined(converter.toAttribute);
                const attr = converter.toAttribute({
                    key: 'greeting'
                });

                // then.
                expect(attr).toBe('greeting');
            });
        });

        describe('fromAttribute', () => {
            it('should convert when null', () => {
                // given, when.
                validateNotUndefined(converter.fromAttribute);
                const value = converter.fromAttribute(null);

                // then.
                expect(value).toBeUndefined();
            });

            it('should convert', () => {
                // given
                validateNotUndefined(converter.fromAttribute);
                i18n.init({
                    locales: {
                        en: {
                            translations: {
                                greeting: 'Hello world'
                            }
                        }
                    }
                });

                // when.
                const value = converter.fromAttribute('__greeting__');

                // then.
                expect(value?.key).toBe('__greeting__');
                expect(value?.language).toBe('en');
                expect(value?.value).toBe('Hello world');
            });
        });

        function validateNotUndefined(value: unknown): asserts value {
            if (!value) {
                throw new Error('Value cannot be undefined');
            }
        }
    });

    describe('hasChanged', () => {
        const testCases = [
            {
                name: 'should return false when both undefined',
                value: undefined,
                oldValue: undefined,
                hasChanged: false
            },
            {
                name: 'should return true when only value is defined',
                value: {},
                oldValue: undefined,
                hasChanged: true
            },
            {
                name: 'should return true when only oldValue is defined',
                value: undefined,
                oldValue: {},
                hasChanged: true
            },
            {
                name: 'should return true when language differs',
                value: {
                    language: 'en',
                    key: 'greeting'
                },
                oldValue: {
                    language: 'de',
                    key: 'greeting'
                },
                hasChanged: true
            },
            {
                name: 'should return true when key differs',
                value: {
                    language: 'en',
                    key: 'greeting'
                },
                oldValue: {
                    language: 'en',
                    key: 'farewell'
                },
                hasChanged: true
            },
            {
                name: 'should return false when language and key are same',
                value: {
                    language: 'en',
                    key: 'greeting'
                },
                oldValue: {
                    language: 'en',
                    key: 'greeting'
                },
                hasChanged: false
            }
        ];

        testCases.map((testCase) => {
            it(testCase.name, () => {
                if (localizedStringPropertyOptions.hasChanged) {
                    const hasChanged = localizedStringPropertyOptions.hasChanged(testCase.value, testCase.oldValue);
                    expect(hasChanged).toBe(testCase.hasChanged);
                } else {
                    fail('hasChanged is not defined.');
                }
            });
        });
    });
});
