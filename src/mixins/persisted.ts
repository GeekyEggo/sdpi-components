import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { useGlobalSettings, useSettings } from '../stream-deck/settings';

/**
 * Provides a mixin that contains information relating to persisting data within the Stream Deck settings.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Persisted = <TBase extends Constructor<LitElement>, TValue>(superClass: TBase) => {
    class Persisted extends superClass {
        private _value?: TValue;

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
         * Gets the persisted value; this is loaded from, and saved to, the Stream Deck settings.
         */
        @property({ attribute: false })
        public get value() {
            return this._value;
        }

        /**
         * Sets the persisted value; this is loaded from, and saved to, the Stream Deck settings.
         */
        public set value(value: TValue | undefined) {
            if (this._value != value) {
                const oldValue = this._value;
                this._value = value;

                this.requestUpdate('value', oldValue);
                this.dispatchEvent(new Event('valuechange'));
            }
        }

        /**
         * Gets or sets a value indicating whether the save should be delayed; this is useful for inputs whereby the onchange is called in quick succession, e.g. a text input.
         */
        protected delaySave?: boolean;

        /** @inheritdoc */
        protected firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void {
            super.firstUpdated(_changedProperties);

            if (this.setting) {
                const delay = this.delaySave ? 200 : null;
                if (this.isGlobal) {
                    [, this.save] = useGlobalSettings<TValue>(this.setting, (value) => (this.value = value), delay);
                } else {
                    [, this.save] = useSettings<TValue>(this.setting, (value) => (this.value = value), delay);
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
         * Saves the given value to the Stream Deck settings.
         * @param {TValue} value The value to save.
         */
        private save?: (value?: TValue) => void;
    }

    return Persisted;
};
