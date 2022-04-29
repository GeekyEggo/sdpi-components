import { css, CSSResultGroup, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { asArray } from '../core';

/**
 * Provides a mixin that contains helper methods for creating elements that should be rendered in a grid using columns.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Gridded = <TBase extends Constructor<LitElement> & { styles?: CSSResultGroup }>(superClass: TBase) => {
    class Gridded extends superClass {
        /** @inheritdoc */
        public static get styles() {
            return [
                asArray(super.styles),
                css`
                    .gridded-container {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .gridded-container > .gridded-item {
                        box-sizing: border-box;
                        margin: 0 var(--spacer) 0 0;
                        flex: 0 1;
                    }

                    .gridded-container > .gridded-col-1 {
                        flex-basis: 100%;
                    }

                    .gridded-container > .gridded-col-2 {
                        flex-basis: calc((100% / 2) - (var(--spacer) * 1 / 2));
                    }

                    .gridded-container > .gridded-col-3 {
                        flex-basis: calc((100% / 3 - (var(--spacer) * 2 / 3)));
                    }

                    .gridded-container > .gridded-col-4 {
                        flex-basis: calc((100% / 4 - (var(--spacer) * 3 / 4)));
                    }

                    .gridded-container > .gridded-col-5 {
                        flex-basis: calc((100% / 5 - (var(--spacer) * 4 / 5)));
                    }

                    .gridded-container > .gridded-col-6 {
                        flex-basis: calc((100% / 6 - (var(--spacer) * 5 / 6)));
                    }

                    .gridded-container > .gridded-col-1,
                    .gridded-container > .gridded-col-2:nth-child(2n),
                    .gridded-container > .gridded-col-3:nth-child(3n),
                    .gridded-container > .gridded-col-4:nth-child(4n),
                    .gridded-container > .gridded-col-5:nth-child(5n),
                    .gridded-container > .gridded-col-6:nth-child(6n) {
                        margin-right: 0;
                    }
                `
            ];
        }

        /**
         * Gets or sets the number of columns the grid contains.
         */
        @property({ type: Number })
        public columns = 1;

        /**
         * Renders the given items to a grid with the specified `columns`.
         * @param items The items to render.
         * @returns The HTML template that contains the items rendered in a grid.
         */
        protected renderGrid(items: unknown[]): unknown {
            if (items.length === 0) {
                return undefined;
            }

            return html`<div class="gridded-container">${items.map((item) => html`<div class="gridded-item gridded-col-${this.columns}">${item}</div>`)}</div>`;
        }
    }

    return Gridded;
};
