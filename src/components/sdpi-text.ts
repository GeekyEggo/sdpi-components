import SDPIInput from './sdpi-input';

export default class SDPIText extends SDPIInput<HTMLInputElement> {
    /* Gets the value that determines whether saving should be delayed; this typically applies to inputs that can change frequently. */
    public get isDelayed(): boolean {
        return true;
    }

    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');

        root.appendChild(this.input);
        super.render(root);
    }
}

customElements.define('sdpi-text', SDPIText);
