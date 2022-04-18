import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Provides a mixin that contains information relating to persisting data within the Stream Deck settings.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Persisted = <T extends Constructor<LitElement>>(superClass: T) => {
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
    }

    return Persisted;
};
