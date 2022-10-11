import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { parseBoolean, parseNumber } from '../core/utils';
import { useGlobalSettings, useSettings } from '../stream-deck/settings';

/**
 * Provides a mixin that contains information relating to persisting data within the Stream Deck settings.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Persisted = <TBase extends Constructor<LitElement>, TValue>(superClass: TBase) => {
    class Persisted extends superClass {
        /**
         * When true, the setting will be persisted against the global settings.
         */
        @property({
            attribute: 'global',
            type: Boolean
        })
        public isGlobal = false;

        /**
         * The property key of which the value is persisted against in the settings, e.g. 'name' would result in the settings being { 'name': value, ... }.
         */
        @property()
        public setting?: string;

        /**
         * The prefered type of the value.
         */
        @property({ attribute: 'value-type' })
        public valueType?: 'boolean' | 'number' | 'string' | undefined;

        /**
         * The persisted value; this is loaded from, and saved to, the Stream Deck settings.
         */
        @property({ attribute: false })
        public value?: TValue;

        /** @inheritdoc */
        protected firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void {
            super.firstUpdated(_changedProperties);

            if (this.setting) {
                if (this.isGlobal) {
                    [, this.save] = useGlobalSettings<TValue>(this.setting, (value) => (this.value = value));
                } else {
                    [, this.save] = useSettings<TValue>(this.setting, (value) => (this.value = value));
                }
            }
        }

        /** @inheritdoc */
        protected willUpdate(_changedProperties: Map<PropertyKey, unknown>): void {
            if (_changedProperties.has('value') && this.save) {
                this.save(this.value);
            }
        }

        /**
         * Parses the value based on the `valueType`.
         * @param value The value to parse.
         * @returns The parsed value; otherwise undefined.
         */
        protected parseValue(value: boolean | number | string): boolean | number | string | undefined {
            switch (this.valueType) {
                case 'boolean':
                    return parseBoolean(value);
                case 'number':
                    return parseNumber(value);
                case 'string':
                    return value.toString();
                default:
                    return value;
            }
        }

        /**
         * Saves the given value to the Stream Deck settings.
         * @param {TValue} value The value to save.
         */
        private save?: (value?: TValue) => void;
    }

    return Persisted;
};
