import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { parseBoolean, parseNumber } from '../core/utils';

/**
 * Provides a mixin that contains functions for converting the value to either a boolean, number, or string.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const DynamicValueType = <TBase extends Constructor<LitElement>>(superClass: TBase) => {
    class DynamicValueType extends superClass {
        /**
         * The prefered type of the value.
         */
        @property({ attribute: 'value-type' })
        public valueType?: 'boolean' | 'number' | 'string' | undefined;

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
    }

    return DynamicValueType;
};
