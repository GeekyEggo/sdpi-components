import { css, html, LitElement } from 'lit';

/**
 * An element that represents two columns, a label, and the contents.
 */
export abstract class LabeledContentElement extends LitElement {
    /** @inheritdoc */
    public static styles = [
        css`
            :host {
                /* Box model */
                --spacer: 4px;

                /* Colors */
                --color-primary: #9a9a9a;
                --color-primary-bg: #2d2d2d;
                --color-secondary: #d8d8d8;
                --color-secondary-bg: #3d3d3d;
                --scrollbar-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

                /* Typography */
                --font-family: Arial, 'Segoe UI', Roboto, Helvetica sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                --font-size: 8pt;

                color: var(--color-primary);
                font-size: var(--font-size);
                font-weight: normal;
                font-family: var(--font-family);
            }

            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            ::-webkit-scrollbar-thumb {
                background-color: #666666;
                border-radius: 5px;
                outline: 1px solid slategrey;
            }

            .container {
                align-items: start;
                display: grid;
                grid-template-columns: 95px 1fr;
                margin: 0 0 10px 0;
                max-width: 322px;
                -webkit-user-drag: none;
            }

            .container > div:first-child {
                margin-top: 6px;
                justify-self: end;
                padding-right: 11px;
            }
        `
    ];

    /** @inheritdoc */
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
