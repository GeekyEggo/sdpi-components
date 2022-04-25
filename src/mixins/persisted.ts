import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { useSettings } from '../stream-deck/settings';

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
         * The persisted value; this is loaded from, and saved to, the Stream Deck settings.
         */
        @property({ attribute: false })
        public value?: TValue;

        /** @inheritdoc */
        protected firstUpdated(): void {
            if (this.setting) {
                this.save = useSettings<TValue>(this.setting, this.isGlobal, (value) => (this.value = value));
            }
        }

        /**
         * Saves the given value to the Stream Deck settings.
         * @param {TValue} value The value to save.
         */
        protected save?: (value?: TValue) => void;

        /** @inheritdoc */
        protected willUpdate(_changedProperties: Map<PropertyKey, unknown>): void {
            if (_changedProperties.has('value') && this.save) {
                this.save(this.value);
            }
        }
    }

    return Persisted;
};
