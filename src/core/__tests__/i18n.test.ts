import { Internationalization } from '../i18n';

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
                expect(i18n.language).toBe(testCase.language);
            });
        });
    });

    describe('getMessage', () => {
        beforeEach(() => {
            i18n.locales = {
                en: {
                    greeting: 'Hello',
                    farewell: 'Good bye'
                },
                es: {
                    greeting: 'Hola'
                },
                fr: {
                    greeting: 'Salut',
                    farewell: 'Au revoir'
                }
            };
        });

        it('should localize', () => {
            // given.
            i18n.language = 'es';

            // when, then.
            const translation = i18n.getMessage('greeting');
            expect(translation).toBe('Hola');
        });

        it('should fallback', () => {
            // given.
            i18n.language = 'es';
            i18n.fallbackLanguage = 'fr';

            // when, then.
            const translation = i18n.getMessage('farewell');
            expect(translation).toBe('Au revoir');
        });

        it('should default to English', () => {
            // given, when, then.
            const translation = i18n.getMessage('farewell');
            expect(translation).toBe('Good bye');
        });

        it('should default fallback to English', () => {
            // given.
            i18n.fallbackLanguage = 'es';

            // when, then.
            const translation = i18n.getMessage('farewell');
            expect(translation).toBe('Good bye');
        });

        it('should return empty string, when no locales', () => {
            // given,
            i18n.locales = undefined;

            // when, then.
            const translation = i18n.getMessage('farewell');
            expect(translation).toBe('');
        });

        it('should return empty string, when language not found', () => {
            // given.
            i18n.language = 'de';
            i18n.fallbackLanguage = 'kr';

            // when, then.
            const translation = i18n.getMessage('farewell');
            expect(translation).toBe('');
        });

        it('should return empty string, when key not found', () => {
            // given, when, then.
            const translation = i18n.getMessage('other');
            expect(translation).toBe('');
        });
    });
});
