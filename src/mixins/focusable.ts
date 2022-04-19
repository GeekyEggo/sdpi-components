import { LitElement } from 'lit';
import { createRef, Ref } from 'lit/directives/ref.js';

/**
 * Provides a mixin that contains an element that is focusable.
 */
export declare interface IFocusable {
    /**
     * Determines whether the element can gain focus.
     */
    canFocus: boolean;

    /**
     * The reference to the element that can gain focus.
     */
    focusElement: Ref<HTMLInputElement | HTMLTextAreaElement>;

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
        public focusElement: Ref<HTMLInputElement | HTMLTextAreaElement> = createRef();

        /** @inheritdoc */
        public get canFocus(): boolean {
            return this.focusElement.value !== undefined;
        }

        /** @inheritdoc */
        public focus(): void {
            if (this.focusElement.value) {
                if (this.focusElement.value.type === 'checkbox') {
                    const checkbox = <HTMLInputElement>this.focusElement.value;
                    checkbox.checked = !checkbox.checked;
                } else {
                    this.focusElement.value.focus();
                }
            }
        }
    }

    return Focusable as Constructor<IFocusable> & T;
};