import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { getUUID } from '../../core/utils';
import { inputCss } from '../../styles';
import { LabeledContentElement } from './labeled-content-element';

/**
 * An input element that denotes a method of inputing data, selecting an option, pressing a button, etc.
 */
export abstract class InputElement extends LabeledContentElement {
    /**
     * @inheritdoc
     */
    public static get styles() {
        return [...super.styles, inputCss];
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
     * @inheritdoc
     */
    protected renderLabel(): unknown {
        if (this.label) {
            return html`<label for=${this.inputID}>${this.label}:</label>`;
        }

        return undefined;
    }
}
