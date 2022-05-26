import { i18nSettings, Internationalization } from '../i18n';

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

describe('translate', () => {
    let i18n: Internationalization;

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

    beforeEach(async () => {
        i18n = (await import('../i18n')).default;
        jest.resetModules();
    });

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
