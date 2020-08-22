import { CssClass } from 'sdpi';
import { HTMLInput } from '../core/input';

/**
 * Provides a base Stream Deck property inspector element.
 */
export default abstract class SDPIElement<T extends HTMLInput> extends HTMLElement {
    /**
     * Initializes a new SDPI element.
     * @param input The input.
     */
    constructor(input: T) {
        super();

        this.input = input;
        this.label = document.createElement('label');
        this.label.toggleAttribute('hidden', true);
    }

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return [
            'disabled',
            'label'
        ];
    }

    /**
     * Gets the disabled state.
     */
    public get disabled(): boolean {
        return this.input.hasAttribute('disabled');
    }

    /**
     * Sets the disabled state.
     */
    public set disabled(value: boolean) {
        this.input.toggleAttribute('disabled', value);
    }

    /**
     * Gets the value.
     */
    public get value(): any {
        return this.input.value;
    }

    /**
     * Sets the value.
     */
    public set value(value: any) {
        this.input.value = value;
        this.input.dispatchEvent(new Event('change'));
    }

    /**
     * Gets or sets the main input.
     */
    protected input: T;
    
    /**
     * Gets or sets the main label.
     */
    private label: HTMLLabelElement;

    /**
     * Gets a value indicating whether the setting is global.
     */
    protected get global(): boolean {
        return this.hasAttribute('global');
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        if (this.input && this.id) {
            this.input.id = `sdpi__${this.id}`;
            this.label.htmlFor = this.input.id;
        }

        // assign the classes.
        this.classList.add(CssClass.Item);
        this.label.classList.add(CssClass.ItemLabel);
        this.input.classList.add(CssClass.ItemValue);

        this.appendChild(this.label);
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        switch (attrName) {
            case 'disabled':
                this.disabled = this.hasAttribute(attrName);
                break;

            case 'label':
                this.label.innerText = this.getAttribute('label') ?? '';
                this.label.toggleAttribute('hidden', this.label.innerText === '');
                break;
        }
    }

    /**
     * Clones the attribute presence and value from this element to the target element.
     * @param attrName The attribute name.
     * @param target The element to clone the attribute to.
     */
    protected cloneAttribute(attrName: string, target: HTMLElement, ): void {
        const value = this.getAttribute(attrName);

        if (value !== undefined && value !== null) {
            target.setAttribute(attrName, value);
        } else {
            target.removeAttribute(attrName);
        }
    }
}
