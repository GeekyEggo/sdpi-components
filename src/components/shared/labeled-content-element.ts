import { html, LitElement } from 'lit';
import { commonCss } from '../../styles';

/**
 * An element that represents two columns, a label, and the contents.
 */
export abstract class LabeledContentElement extends LitElement {
    /**
     * @inheritdoc
     */
    public static styles = [commonCss];

    /**
     * Renders the component.
     * @returns {unknown} The HTML template used to render the component.
     */
    protected render(): unknown {
        return html`
            <div class="container">
                <div>${this.renderLabel && this.renderLabel()}</div>
                <div>${this.renderContents()}</div>
            </div>
        `;
    }

    /**
     * Renders HTML template that represents the contents.
     * @returns {unknown} The HTML template.
     */
    protected abstract renderContents(): unknown;

    /**
     * Renders HTML template that represents the label.
     * @returns {unknown} The HTML template.
     */
    protected renderLabel?(): unknown;
}
