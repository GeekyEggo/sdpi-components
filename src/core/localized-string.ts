import { PropertyDeclaration } from 'lit';

import i18n from './i18n';

/**
 * Provides information about a localized string, and its source.
 */
export class LocalizedString {
    /**
     * Initializes a new localized string.
     * @param messageName The message name; this should follow the format `__MSG_messageName__`.
     */
    constructor(public messageName: string) {
        const parse = LocalizedString.tryParseMessageName(messageName);
        this.value = (parse.success ? i18n.getMessage(parse.messageName) : messageName) || messageName;
    }

    /**
     * The value that represents the localized message.
     */
    public value?: string;

    /**
     * Gets the localized string associated with the `messageName`.
     * @param messageName The message name; this should follow the format `__MSG_messageName__`.
     * @returns The localized string.
     */
    public static getMessage(messageName: string): string {
        return new LocalizedString(messageName).toString();
    }

    /**
     * Attempts to parse the given value as a translation message name.
     * @param value The value that possibly represents the message name.
     * @returns An object that determines whether the parsing was successful, and if so, the parsed key.
     */
    public static tryParseMessageName(value?: string): { success: boolean; messageName?: string } {
        return value && value.startsWith('__MSG_') && value.endsWith('__')
            ? {
                  success: true,
                  messageName: value.substring(6, value.length - 2)
              }
            : {
                  success: false
              };
    }

    /**
     * Determines whether this instance is equal to the `other` instance.
     * @param other The other localized message.
     * @returns `true` when this instance is considered the same as the other localized message.
     */
    public equals(other?: LocalizedString): boolean {
        return this.messageName == other?.messageName && this.value == other?.value;
    }

    /** @inheritdoc */
    public toString(): string {
        return this.value || '';
    }
}

/**
 * Provides the options for a property that represents a LocalizedMessage.
 */
export const localizedStringPropertyOptions: PropertyDeclaration<LocalizedString | undefined> = {
    /** @inheritdoc */
    hasChanged(value: LocalizedString | undefined, oldValue: LocalizedString | undefined): boolean {
        // Both are undefined or null, no change.
        if (!value && !oldValue) {
            return false;
        }

        // One is undefined or null, change.
        if (!value || !oldValue) {
            return true;
        }

        return value.equals(oldValue);
    },
    converter: {
        /** @inheritdoc */
        fromAttribute(value: string | null): LocalizedString | undefined {
            return value === null ? undefined : new LocalizedString(value);
        },

        /** @inheritdoc */
        toAttribute(value: LocalizedString | undefined): unknown {
            return value?.messageName;
        }
    }
};
