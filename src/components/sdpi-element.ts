/**
 * Provides a base Stream Deck property inspector element.
 */
export default class SDPIElement extends HTMLElement {
    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get attributess(): string[] {
        return [];
    }

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return this.attributess;
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element
     */
    public connectedCallback(): void {
        this.render && this.render();
    }

    /**
     * Renders the element to the DOM.
     */
    protected render?(): void;
}