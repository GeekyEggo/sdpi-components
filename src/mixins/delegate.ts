import { css, CSSResultGroup, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { asArray, LocalizedMessage, localizedMessagePropertyOptions } from '../core';
import { IFocusable } from './focusable';
import { IInput } from './input';

export const Delegate = <TBase extends Constructor<LitElement & IFocusable & IInput<unknown>> & { styles?: CSSResultGroup }>(superClass: TBase) => {
    class Delegate extends superClass {
        /** @inheritdoc */
        public static get styles() {
            return [
                ...asArray(super.styles),
                css`
                    .container {
                        width: var(--input-width);
                    }

                    label {
                        align-self: center;
                        background-color: var(--input-bg-color);
                        color: var(--input-font-color);
                        font-family: var(--font-family);
                        font-size: var(--font-size);
                        line-height: 1.5em;
                        min-height: calc(var(--input-height) - calc(var(--spacer) * 3));
                        overflow: hidden;
                        padding: calc(var(--spacer) * 1.5) var(--spacer);
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 100%;
                    }

                    label[aria-disabled='true'] {
                        opacity: var(--opacity-disabled);
                    }

                    sdpi-button > div {
                        min-width: 16px;
                        user-select: none;
                    }
                `
            ];
        }

        /**
         * Gets or sets the label text shown within the button.
         */
        @property(localizedMessagePropertyOptions)
        public label?: LocalizedMessage;

        /**
         * Renders the delegate element.
         * @param getDisplayValue The delegate used when rendering the display value.
         * @returns The HTML that represents the delegate element.
         */
        renderDelegate(getDisplayValue: (value?: unknown) => unknown = (value) => value) {
            const value = this.value !== undefined ? this.value : this.defaultValue;

            return html`
                <div class="flex container">
                    <label class="flex-grow" aria-disabled=${this.disabled} @click=${() => !this.disabled && this.invoked && this.invoked()} .title=${value?.toString() || ''}>
                        ${getDisplayValue(value)}
                    </label>
                    <sdpi-button class="flex-shrink margin-left" ${ref(this.focusElement)} .disabled=${this.disabled} @click=${() => !this.disabled && this.invoked && this.invoked()}>
                        <div>${this.label?.toString() || '...'}</div>
                    </sdpi-button>
                </div>
            `;
        }

        /**
         * Called when the delegate element is invoked, either via focusing, value click, or button click.
         */
        protected invoked?(): void;
    }

    return Delegate;
};
