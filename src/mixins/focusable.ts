import { LitElement } from 'lit';
import { createRef, Ref } from 'lit/directives/ref.js';

/**
 * Provides a mixin that contains an element that is focusable thus allowing for improved accessibility of components that consume the shadow DOM.
 */
export interface IFocusable {
    /**
     * Determines whether the element can gain focus.
     */
    canFocus: boolean;

    /**
     * The reference to the element that can gain focus.
     */
    focusElement: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLElement>;

    /**
     * Focus the element.
     */
    focus(): void;
}

/**
 * Provides a mixin that contains an element that is focusable thus allowing for improved accessibility of components that consume the shadow DOM.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const Focusable = <T extends Constructor<LitElement>>(superClass: T) => {
    class Focusable extends superClass implements IFocusable {
        /** @inheritdoc */
        public focusElement: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLElement> = createRef();

        /** @inheritdoc */
        public get canFocus(): boolean {
            return this.focusElement.value !== undefined;
        }

        /** @inheritdoc */
        public focus(): void {
            if (this.focusElement.value === undefined) {
                return;
            }

            if (this.focusWithClick()) {
                this.focusElement.value.click();
            } else {
                this.focusElement.value.focus();
            }
        }

        /**
         * Determines whether the current `focusElement` should be focused using the `click()` method.
         * @returns true when the element should be focused using `click()`.
         */
        private focusWithClick(): boolean {
            if (this.focusElement.value === undefined) {
                throw new Error('focusElement cannot be undefined.');
            }

            if (!('type' in this.focusElement.value)) {
                return true;
            }

            return this.focusElement.value.type === 'checkbox' || this.focusElement.value.type === 'color' || this.focusElement.value.type === 'file';
        }
    }

    return Focusable as Constructor<IFocusable> & T;
};
