import { ComplexAttributeConverter } from 'lit';

import i18n from '../i18n';
import { LocalizedString, localizedStringPropertyOptions } from '../localized-string';

describe('LocalizedString', () => {
    i18n.locales = {
        en: {
            greeting: 'Hello world'
        }
    };

    it('should handle valid keys', () => {
        // given, when.
        const localization = new LocalizedString('__MSG_greeting__');

        // then.
        expect(localization.messageName).toBe('__MSG_greeting__');
        expect(localization.value).toBe('Hello world');
    });

    it('should handle invalid keys', () => {
        // given, when.
        const localization = new LocalizedString('other');

        // then.
        expect(localization.messageName).toBe('other');
        expect(localization.value).toBe('other');
    });

    describe('toString', () => {
        const testCases = [
            {
                name: 'should use value when key is valid and present',
                key: '__MSG_greeting__',
                expect: 'Hello world'
            },
            {
                name: 'should use the key when the key is valid and not present',
                key: '__MSG_other__',
                expect: '__MSG_other__'
            },
            {
                name: 'should use the key when the key is not valid',
                key: 'other',
                expect: 'other'
            }
        ];

        testCases.map((testCase) => {
            it(testCase.name, () => {
                // given, when, then.
                const localization = new LocalizedString(testCase.key);
                expect(localization.toString()).toBe(testCase.expect);
            });
        });
    });

    describe('equals', () => {
        it('should return true when key/value are equal to other', () => {
            // given.
            const x = new LocalizedString('__MSG_greeting__');
            const y = new LocalizedString('__MSG_greeting__');

            // when, then.
            expect(x.equals(y)).toStrictEqual(true);
        });

        it('should return false when key differs', () => {
            // given.
            const x = new LocalizedString('__MSG_greeting__');
            const y = new LocalizedString('__MSG_farewell__');

            // when, then.
            y.value = x.value;
            expect(x.equals(y)).toStrictEqual(false);
        });

        it('should return false when value differs', () => {
            // given.
            const x = new LocalizedString('__MSG_greeting__');
            const y = new LocalizedString('__MSG_greeting__');

            // when, then.
            y.value = 'Another value';
            expect(x.equals(y)).toStrictEqual(false);
        });
    });

    describe('getMessage', () => {
        it('should return the value', () => {
            // given, when, then.
            const value = LocalizedString.getMessage('__MSG_greeting__');
            expect(value).toBe('Hello world');
        });

        it('should not change partial names by default', () => {
            // given, when, then.
            const value = LocalizedString.getMessage('greeting');
            expect(value).toBe('greeting');
        });

        it('should format a partial name when the options allow', () => {
            // given, when, then.
            const value = LocalizedString.getMessage('greeting', { allowPartialMessageName: true });
            expect(value).toBe('Hello world');
        });
    });
});

describe('localizedStringPropertyOptions', () => {
    beforeEach(async () => {
        i18n.locales = {
            en: {
                greeting: 'Hello world'
            }
        };
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
                // given.
                validateNotUndefined(converter.toAttribute);
                const value = new LocalizedString('greeting');

                // when, then.
                const attr = converter.toAttribute(value);
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
                // given, when.
                validateNotUndefined(converter.fromAttribute);
                const value = converter.fromAttribute('__MSG_greeting__');

                // then.
                expect(value?.messageName).toBe('__MSG_greeting__');
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
        it('should return false when both undefined', () => {
            // given, when, then.
            assertNonNullish(localizedStringPropertyOptions.hasChanged, 'hasChanged cannot be nullish');
            localizedStringPropertyOptions.hasChanged(undefined, undefined);
        });

        it('should return true when only value is defined', () => {
            // given, when, then.
            assertNonNullish(localizedStringPropertyOptions.hasChanged, 'hasChanged cannot be nullish');
            localizedStringPropertyOptions.hasChanged(new LocalizedString('__MSG_greeting__'), undefined);
        });

        it('should return true when only oldValue is defined', () => {
            // given, when, then.
            assertNonNullish(localizedStringPropertyOptions.hasChanged, 'hasChanged cannot be nullish');
            localizedStringPropertyOptions.hasChanged(undefined, new LocalizedString('__MSG_greeting__'));
        });

        it('should use LocalizedString.equals to compare', () => {
            // given.
            assertNonNullish(localizedStringPropertyOptions.hasChanged, 'hasChanged cannot be nullish');

            const value = new LocalizedString('__MSG_greeting');
            const oldValue = new LocalizedString('__MSG_greeting');
            value.equals = jest.fn();

            // when.
            localizedStringPropertyOptions.hasChanged(value, oldValue);

            // then.
            expect(value.equals).toHaveBeenCalledTimes(1);
        });

        function assertNonNullish(value: unknown, msg: string): asserts value {
            if (value === null || value === undefined) {
                throw Error(msg);
            }
        }
    });
});
