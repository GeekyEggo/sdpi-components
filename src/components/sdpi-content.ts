import { observeChildList } from '../core/element';
import SDPIElement from './sdpi-element';

export default class SDPIContent extends SDPIElement {
    private readonly container: HTMLElement = document.createElement('div');

    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        root.appendChild(this.container);
        observeChildList(this, (added: Node) => this.container.appendChild(added), 'P');
    }
}

customElements.define('sdpi-content', SDPIContent);
