import { css, CSSResultGroup, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { asArray, getUUID } from '../core';
import { commonStyle } from '../styles/common';
import { hostStyle } from '../styles/host';

export interface IInput<TValue> {
    /**
     * Gets or sets the optional default value of the input.
     */
    defaultValue?: TValue;

    /**
     * Gets or sets the value indicating whether the input is disabled.
     */
    disabled: boolean;

    /**
     * Gets or sets the value of the input.
     */
    value?: TValue;
}

/**
 * Provides a mixin that represents the typical properties found on an input.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Input = <TBase extends Constructor<LitElement> & { styles?: CSSResultGroup }, TValue>(superClass: TBase) => {
    class Input extends superClass implements IInput<TValue> {
        /** @inheritdoc */
        public static get styles() {
            return [
                asArray(super.styles),
                hostStyle,
                commonStyle,
                css`
                    button,
                    input,
                    select,
                    textarea {
                        /* Box model */
                        box-sizing: border-box;
                        outline: none;
                        border: none;
                        border-radius: 0;
                        min-width: 100%;
                        max-width: 100%;

                        /* Background and typography */
                        color: var(--input-font-color);
                        font-size: var(--font-size);
                        font-family: var(--font-family);
                    }
                `
            ];
        }

        /** @inheritdoc */
        @property({
            reflect: true,
            type: Boolean
        })
        public disabled = false;

        /** @inheritdoc */
        @property({ attribute: false })
        public value?: TValue;

        /** @inheritdoc */
        @property({ attribute: 'default' })
        public defaultValue?: TValue;

        /**
         * The input identifier.
         */
        protected inputId = getUUID();
    }

    return Input;
};
