import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Provides a mixin that represents a labeled element.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Labeled = <T extends Constructor<LitElement>>(superClass: T) => {
    class Labeled extends superClass {
        /**
         * Gets or sets the label.
         */
        @property()
        public label?: string;

        /**
         * Gets or sets the identifier that label is associated with.
         */
        @property({ attribute: 'for' })
        public labelFor?: string;
    }

    return Labeled;
};
