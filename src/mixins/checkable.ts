import { css, CSSResultGroup, html, LitElement } from 'lit';

import { asArray } from '../core/utils';

/**
 * Provides a mixin that contains functionality for rendering inputs that can be checked, i.e. radio buttons and checkboxes, and renders their check state using more user-friendly representations.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Checkable = <TBase extends Constructor<LitElement> & { styles?: CSSResultGroup }>(superClass: TBase) => {
    class Checkable extends superClass {
        /** @inheritdoc */
        public static get styles() {
            return [
                asArray(super.styles),
                css`
                    :host {
                        --checkbox-size: 16px;
                    }

                    .checkable-container {
                        align-items: center;
                        display: inline-flex;
                        margin: var(--spacer) 0;
                        user-select: none;
                        width: auto;
                    }

                    input {
                        display: none;
                    }

                    input:not(:disabled) ~ span {
                        cursor: pointer;
                    }

                    input:disabled ~ span {
                        opacity: 0.5;
                    }

                    .checkable-symbol {
                        background: var(--input-bg-color);
                        border: 1px solid rgba(0, 0, 0, 0.2);
                        border-radius: 3px;
                        flex: var(--checkbox-size) var(--checkbox-size);
                        height: var(--checkbox-size);
                        width: var(--checkbox-size);
                    }

                    input[type='radio'] ~ .checkable-symbol {
                        border-radius: 50%;
                    }

                    .checkable-text {
                        flex: 1 1;
                        margin: 0 0 0 var(--spacer);
                    }

                    input:checked ~ .checkable-symbol {
                        background: #77f no-repeat center center;
                        border: 1px solid rgba(0, 0, 0, 0.4);
                    }

                    input[type='checkbox']:checked ~ .checkable-symbol {
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpolygon fill='%23FFF' points='7.2 7.5 7.2 -1.3 8.7 -1.3 8.6 9.1 2.7 8.7 2.7 7.2' transform='rotate(37 5.718 3.896)'/%3E%3C/svg%3E%0A");
                    }

                    input[type='radio']:checked ~ .checkable-symbol {
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Ccircle cx='3' cy='3' r='3' fill='%23FFF'/%3E%3C/svg%3E%0A");
                    }
                `
            ];
        }

        /**
         * Renders the given `input` in a more user-friendly way, whilst also maintaining accessibility.
         * @param type The type of the input.
         * @param input The input to substitute.
         * @param label Optional label to be displayed next to the input.
         * @returns
         */
        public renderCheckable(type: 'checkbox' | 'radio', input: unknown, label?: string): unknown {
            return html`
                <label class="checkable-container">
                    ${input}
                    <span class="checkable-symbol" role=${type}></span>
                    ${label ? html`<span class="checkable-text">${label}</span>` : undefined}
                </label>
            `;
        }
    }

    return Checkable;
};
