import { css, CSSResultGroup, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { asArray, getUUID } from '../core/utils';
import { hostStyle } from '../styles/host';

/**
 * Provides a mixin that represents the typical properties found on an input.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Input = <TBase extends Constructor<LitElement> & { styles?: CSSResultGroup }, TValue>(superClass: TBase) => {
    class Input extends superClass {
        /** @inheritdoc */
        public static get styles() {
            return [
                asArray(super.styles),
                hostStyle,
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

        /**
         * Gets or sets the value indicating whether the input is disabled.
         */
        @property({ type: Boolean })
        public disabled = false;

        /**
         * Gets or sets the label.
         */
        @property()
        public label?: string;

        /**
         * Gets or sets the value of the input.
         */
        @property({ attribute: false })
        public value?: TValue;

        /**
         * The input identifier.
         */
        protected inputId = getUUID();

        /**
         * Renders the input, and returns the HTML template.
         * @param input The input to render.
         * @returns The template that contains the input, and how it should be rendered.
         */
        public renderInput(input: unknown): unknown {
            return html`<sdpi-item .label=${this.label}>${input}</sdpi-item>`;
        }
    }

    return Input;
};
