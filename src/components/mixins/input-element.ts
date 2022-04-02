import { css, CSSResultGroup, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { reduceStyles } from '../../core/styles';
import { getUUID } from '../../core/utils';

/**
 * Provides a mixin that represents an input element.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const InputElement = <T extends Constructor<LitElement> & { styles?: CSSResultGroup }>(superClass: T) => {
    class InputElement extends superClass {
        public static get styles() {
            return reduceStyles(
                super.styles,
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
                        color: var(--color-secondary);
                        font-size: var(--font-size);
                        font-family: var(--font-family);
                    }
                `
            );
        }

        /**
         * Determines whether the input is disabled.
         */
        @property({ type: Boolean })
        public disabled = false;

        /**
         * The label displayed next to the input.
         */
        @property()
        public label?: string;

        /**
         * Gets the identifier associated with the input element.
         */
        protected readonly inputID: string = getUUID();

        /**
         * When a `label` is specified, a new HTML template containing the label is returned.
         * @returns The labels' HTML template, otherwise `undefined`.
         */
        protected renderLabel(): unknown {
            if (this.label) {
                return html`<label for=${this.inputID}>${this.label}:</label>`;
            }

            return undefined;
        }
    }

    return InputElement;
};
