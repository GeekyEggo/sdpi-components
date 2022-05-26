import { ComplexAttributeConverter } from 'lit';

import { get, merge } from './utils';

export type i18nSettings = {
    language: string;
    fallbackLanguage: string;
    locales?: {
        [language in string]: {
            translations: Record<string, string>;
        };
    };
};

/**
 * Provides information about a localized string, and its source.
 */
export class LocalizedString {
    /**
     * Initializes a new localized string.
     * @param language The language.
     * @param key The key of the translation.
     * @param value The translated value.
     */
    constructor(public language?: string, public key?: string, public value?: string) {}

    /** @inheritdoc */
    public toString(): string {
        return this.value || '';
    }
}

/**
 * Provides information and helpers to assist with i18n functionality.
 */
export class Internationalization {
    private _isInitialized = false;
    public settings: i18nSettings;

    /**
     * Initializes a new instance of the i18n helper class.
     */
    constructor() {
        this.settings = {
            language: window.navigator.language ? window.navigator.language.split('-')[0] : 'en',
            fallbackLanguage: 'en'
        };
    }

    /**
     * Initializes internationalization, defining the fallback language, and any available translations.
     * @param settings The internationalization settings.
     */
    public async init(settings: DeepPartial<i18nSettings>): Promise<void> {
        if (this._isInitialized) {
            throw 'Cannot initialize i18n settings after they have been initialized';
        }

        this.settings = merge(this.settings, settings);
        this._isInitialized = true;
    }

    /**
     * Gets the translations for the given key from either the current language, or the fallback language (in that order); when neither are present the key is returned.
     * @param key The key of the translation.
     * @returns The translation; otherwise the key.
     */
    public translate(key: string | undefined): LocalizedString {
        // Determine if we can translate.
        if (!this._isInitialized || !this.settings.locales || !key || !key.startsWith('__') || !key.endsWith('__')) {
            return new LocalizedString(undefined, key, key);
        }

        // Determine the property name, and localize helper.
        const propertyKey = key.substring(2, key.length - 2);
        const localize = (lang: string): LocalizedString | undefined => {
            const translation = get(`${lang}.translations.${propertyKey}`, this.settings?.locales);
            return translation ? new LocalizedString(lang, key, translation) : undefined;
        };

        // When the language and fallback are the same, only check the language.
        if (this.settings.language === this.settings.fallbackLanguage) {
            return localize(this.settings.language) || new LocalizedString(undefined, key, key);
        }

        return localize(this.settings.language) || localize(this.settings.fallbackLanguage) || new LocalizedString(undefined, key, key);
    }
}

/**
 * Provides a coverter for Lit properties that enables the conversion to/from attributes.
 */
export const localizedStringConverter: ComplexAttributeConverter<LocalizedString | undefined> = {
    /** @inheritdoc */
    fromAttribute(value: string | null): LocalizedString | undefined {
        return value !== null ? i18n.translate(value) : undefined;
    },

    /** @inheritdoc */
    toAttribute(value: LocalizedString | undefined): unknown {
        return value?.key;
    }
};

const i18n = new Internationalization();
export default i18n;
