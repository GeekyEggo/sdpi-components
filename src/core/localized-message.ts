import { PropertyDeclaration } from 'lit';

import i18n from './i18n';

/**
 * Provides information about a localized string.
 */
export class LocalizedMessage {
    /**
     * Initializes a new localized string.
     * @param key The key; this should follow the format `__MSG_messageName__`.
     */
    constructor(public key: string) {
        const parsed = LocalizedMessage.tryParseMessageName(key);
        this.value = (parsed.success ? i18n.getMessage(parsed.messageName) : key) || key;
    }

    /**
     * The value that represents the localized message.
     */
    public value?: string;

    /**
     * Gets the localized string associated with the `key`.
     * @param key The message name; this should follow the format `__MSG_messageName__`.
     * @returns The localized string.
     */
    public static getMessage(key: string): string {
        return new LocalizedMessage(key).toString();
    }

    /**
     * Attempts to parse the given value as a message name.
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
    public equals(other?: LocalizedMessage): boolean {
        return other !== undefined && this.key == other.key && this.value == other.value;
    }

    /** @inheritdoc */
    public toString(): string {
        return this.value || '';
    }
}

/**
 * Provides the options for a property that represents a LocalizedMessage.
 */
export const localizedMessagePropertyOptions: PropertyDeclaration<LocalizedMessage | undefined> = {
    /** @inheritdoc */
    hasChanged(value: LocalizedMessage | undefined, oldValue: LocalizedMessage | undefined): boolean {
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
        fromAttribute(value: string | null): LocalizedMessage | undefined {
            return value === null ? undefined : new LocalizedMessage(value);
        },

        /** @inheritdoc */
        toAttribute(value: LocalizedMessage | undefined): unknown {
            return value?.key;
        }
    }
};
