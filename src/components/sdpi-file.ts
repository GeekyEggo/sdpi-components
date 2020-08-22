import SDPIElement from './sdpi-element';
import { CssClass } from 'sdpi';
import { getFileName, sanitize as sanitizePath } from '../core/file';
import { StoreSetter, useStore } from '../core/store';

/**
 * A Stream Deck property inspector file input. 
 */
class SDPIFile extends SDPIElement<HTMLInputElement> {
    /**
     * Initializes a new file field.
     */
    constructor() {
        super(document.createElement('input'));

        this.info = document.createElement('label');
    }

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat([
            'accept',
            'show-name'
        ]);
    }

    /**
     * Gets the value indicating whether only the name should be shown in the info.
     */
    public get showName(): boolean {
        return this.hasAttribute('show-name');
    }

    /**
     * Sets the value indicating whether only the name should be shown in the info.
     */
    public set showName(value: boolean) {
        this.toggleAttribute('show-name', value);
    }

    /**
     * Gets the value.
     */
    public get value(): any {
        return this._value;
    }

    /**
     * Sets the value.
     */
    public set value(value: any) {
        this._value = sanitizePath(value);
        this.refreshInfo();
    }
    
    private _value: string | undefined;
    private info: HTMLLabelElement;
    private save?: StoreSetter;

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        super.connectedCallback();
        this.save = useStore(this.id, this.global, (value: any) => this.value = value).save;
        
        const grp = document.createElement('div')
        grp.classList.add(CssClass.ItemGroup, 'file');
        
        this.input.addEventListener('change', () => this.onChanged());        
        this.input.hidden = true;
        this.input.type = 'file';
        grp.appendChild(this.input);
        
        this.info.classList.add(CssClass.FileInfo)
        this.info.htmlFor = this.input.id;
        grp.appendChild(this.info);
        
        const button = document.createElement('label');
        button.classList.add(CssClass.FileLabel);
        button.htmlFor = this.input.id;
        button.innerText = 'Choose File';
        grp.appendChild(button);

        this.appendChild(grp);
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        super.attributeChangedCallback(attrName, oldValue, newValue);

        switch (attrName) {
            case 'show-name':
                this.refreshInfo();
                break;

            default:
                super.cloneAttribute(attrName, this.input);
                break;
        }
    }
    
    /**
     * Handles the value of the input changing.
     * @param save The delegate used to update the store.
     */
    private onChanged(): void {
        this.value = this.input.value;
        if (this.save) {
            this.save(this.value);
        }
    }

    /**
     * Refreshes the information label that displays the value.
     */
    private refreshInfo(): void {
        if (this.value?.length) {
            this.info.textContent = this.showName ? getFileName(this.value) : this.value;
            this.info.title = this.value;
        } else {
            this.info.textContent = 'No file.';
            this.info.title = '';
        }
    }
}

customElements.define('sdpi-file', SDPIFile);
