import { CSSResultGroup, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { useSettings } from '../../stream-deck/settings';

/**
 * Provides a mixin that is capable of persisting data to the Stream Deck via the `setting` and `value` information.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const SettingsElement = <T extends Constructor<LitElement> & { styles?: CSSResultGroup }, TValue>(superClass: T) => {
    class SettingsElement extends superClass {
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
         * Gets or sets the underlying value that this element represents, and persists.
         */
        @property({ attribute: false })
        public value?: TValue;

        /** @inheritdoc */
        protected firstUpdated(): void {
            super.firstUpdated;

            if (this.setting) {
                this._save = useSettings<TValue>(this.setting, this.isGlobal, (value) => (this.value = value));
            }
        }

        /**
         * Saves the `value` to the Stream Deck settings.
         * @param value The value to save.
         */
        protected save(value: TValue): void {
            this.value = value;

            if (this._save) {
                this._save(this.value);
            }
        }

        /**
         * Persists the `value` to the Stream Deck settings.
         * @param value The value to persist.
         */
        private _save?: (value: TValue) => void;
    }

    return SettingsElement;
};
