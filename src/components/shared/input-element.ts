import { css, html } from 'lit';
import { property } from 'lit/decorators.js';

import { getUUID } from '../../core/utils';
import { LabeledContentElement } from './labeled-content-element';

/**
 * An input element that denotes a method of inputing data, selecting an option, pressing a button, etc.
 */
export abstract class InputElement extends LabeledContentElement {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
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
        ];
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

    /** @inheritdoc */
    protected renderLabel(): unknown {
        if (this.label) {
            return html`<label for=${this.inputID}>${this.label}:</label>`;
        }

        return undefined;
    }
}
