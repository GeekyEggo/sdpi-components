import { html, LitElement } from 'lit';
import { commonCss } from '../../styles';

/**
 * An element that represents two columns, a label, and the contents.
 */
export abstract class LabeledContentElement extends LitElement {
    /**
     * Gets the styles associated with the component.
     */
    public static styles = [commonCss];

    /**
     * Renders the component.
     * @returns The HTML template used to render the component.
     */
    protected render() {
        return html`
            <div class="container">
                <div>${this.getLabel && this.getLabel()}</div>
                <div>${this.getContents()}</div>
            </div>
        `;
    }

    /**
     * Gets the contents rendered in the left column, typically representing a label.
     * @returns {unknown} The label.
     */
    protected getLabel?(): unknown;

    /**
     * Gets the contents rendered in the right column, typically representing the input.
     * @returns {unknown} The contents.
     */
    protected abstract getContents(): unknown;
}
