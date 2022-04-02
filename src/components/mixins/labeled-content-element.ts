import { css, CSSResultGroup, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { reduceStyles } from '../../core/styles';

/**
 * Provides a mixin that renders content in two columns, typically representing a label on the left, and the input or content on the right.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const LabeledContentElement = <T extends Constructor<LitElement> & { styles?: CSSResultGroup }>(superClass: T) => {
    class LabeledContentElement extends superClass {
        /** @inheritdoc */
        public static get styles() {
            return reduceStyles(
                super.styles,
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
            );
        }

        /**
         * Gets or sets the value that determines whether to render the label column; when `false`, the container is not rendered, but the contents are.
         */
        @property({
            attribute: 'show-label-column',
            type: Boolean
        })
        public showLabelColumn = true;

        /**
         * Renders the contents and the optional label.
         * @param contents The contents to render, displayed in the right column.
         * @param label The label to render, displayed in the left column.
         * @returns The contents.
         */
        public renderContents(contents: unknown, label?: unknown): unknown {
            if (this.showLabelColumn) {
                return html`
                    <div class="container">
                        <div>${label}</div>
                        <div>${contents}</div>
                    </div>
                `;
            } else {
                return contents;
            }
        }
    }

    return LabeledContentElement;
};
