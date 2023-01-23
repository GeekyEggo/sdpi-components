import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';

import { LocalizedMessage, localizedMessagePropertyOptions } from '../core';
import { Focusable, Input, Persisted } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-textfield')
export class Textfield extends Persisted(Focusable(Input<typeof LitElement, string>(LitElement))) {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            hostStyle,
            css`
                input {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 3px) var(--spacer);
                }

                input:disabled {
                    opacity: var(--opacity-disabled);
                }

                input:required {
                    background-position: 98% center;
                    background-repeat: no-repeat;
                }

                input:required:valid {
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPjxwb2x5Z29uIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iNS4yIDEgNi4yIDEgNi4yIDcgMy4yIDcgMy4yIDYgNS4yIDYiIHRyYW5zZm9ybT0icm90YXRlKDQwIDQuNjc3IDQpIi8+PC9zdmc+);
                }

                input:required:invalid {
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPgogICAgPHBhdGggZmlsbD0iI0Q4RDhEOCIgZD0iTTQuNSwwIEM2Ljk4NTI4MTM3LC00LjU2NTM4NzgyZS0xNiA5LDIuMDE0NzE4NjMgOSw0LjUgQzksNi45ODUyODEzNyA2Ljk4NTI4MTM3LDkgNC41LDkgQzIuMDE0NzE4NjMsOSAzLjA0MzU5MTg4ZS0xNiw2Ljk4NTI4MTM3IDAsNC41IEMtMy4wNDM1OTE4OGUtMTYsMi4wMTQ3MTg2MyAyLjAxNDcxODYzLDQuNTY1Mzg3ODJlLTE2IDQuNSwwIFogTTQsMSBMNCw2IEw1LDYgTDUsMSBMNCwxIFogTTQuNSw4IEM0Ljc3NjE0MjM3LDggNSw3Ljc3NjE0MjM3IDUsNy41IEM1LDcuMjIzODU3NjMgNC43NzYxNDIzNyw3IDQuNSw3IEM0LjIyMzg1NzYzLDcgNCw3LjIyMzg1NzYzIDQsNy41IEM0LDcuNzc2MTQyMzcgNC4yMjM4NTc2Myw4IDQuNSw4IFoiLz4KICA8L3N2Zz4);
                }
            `
        ];
    }

    /**
     * The maximum length the text value can be.
     */
    @property({
        attribute: 'maxlength',
        type: Number
    })
    public maxLength?: number;

    /**
     * The optional pattern to be applied when validating the value.
     */
    @property()
    public pattern?: string;

    /**
     * The optional placeholder text to be shown within the input.
     */
    @property(localizedMessagePropertyOptions)
    public placeholder?: LocalizedMessage;

    /**
     * Determines whether the setting is required.
     */
    @property({ type: Boolean })
    public required = false;

    /** @inheritdoc */
    protected delaySave = true;

    /**
     * Gets the input type; default is 'text'.
     */
    protected type: 'text' | 'password' = 'text';

    /** @inheritdoc */
    protected render() {
        return html`
            <input
                ${ref(this.focusElement)}
                pattern=${ifDefined(this.pattern)}
                placeholder=${ifDefined(this.placeholder?.toString())}
                maxlength=${ifDefined(this.maxLength)}
                .disabled=${this.disabled}
                .required=${this.required}
                .type=${this.type}
                .value=${this.value || ''}
                @input=${(ev: HTMLInputEvent<HTMLInputElement>) => (this.value = ev.target.value)}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-textfield': Textfield;
    }
}
