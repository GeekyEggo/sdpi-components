import SDPIElement from './sdpi-element';
import store, { StoreSetter, useStore } from '../core/store';
import { CssClass } from 'sdpi';
import { PlatformType } from 'stream-deck';

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
        this.button = document.createElement('label');
    }

    private info: HTMLLabelElement;
    private button: HTMLLabelElement;

    /**
     * Gets the observed attributes.
     * @returns {string[]} The observed attributes.
     */
    public static get observedAttributes(): string[] {
        return super.observedAttributes.concat([
            'accept'
        ]);
    }

    /**
     * Gets the sanitized value from the file input.
     */
    public get value(): string {
        // decode and sanitize the path, changing slashes depending on the platform
        let value = decodeURIComponent(this.input.value.replace(/^C:\\fakepath\\/, ''));
        if (store.client?.connection.info.application.platform == PlatformType.Windows)
        {
            return value.replace(new RegExp('/', 'g'), '\\')
        }

        return value;
    }

    /**
     * Called every time the element is inserted into the DOM.
     */
    public connectedCallback(): void {
        super.connectedCallback();

        const grp = document.createElement('div')
        grp.classList.add(CssClass.ItemGroup, 'file');
        
        this.input.hidden = true;
        this.input.type = 'file';
        
        this.info.classList.add(CssClass.FileInfo)
        this.info.htmlFor = this.input.id;
        
        this.button.classList.add(CssClass.FileLabel);
        this.button.innerText = 'Choose file...'
        this.button.htmlFor = this.input.id;
        
        if (this.input) {
            const { save } = useStore(this.id, this.global, (value: any) => this.updateInfo(value));
            this.input.addEventListener('change', () => this.onChanged(save));
            
            grp.appendChild(this.input);
            grp.appendChild(this.info);
            grp.appendChild(this.button);

            this.appendChild(grp);
        }
    }

    /**
     * Called when an observed attribute has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the observedAttributes property will receive this callback.
     * @param attrName The attribute name.
     * @param oldValue The attributes old value.
     * @param newValue The attributes new value.
     */
    public attributeChangedCallback(attrName: string, oldValue: string | null, newValue: string | null): void {
        super.attributeChangedCallback(attrName, oldValue, newValue);
        super.cloneAttribute(attrName, this.input);
    }
    
    /**
     * Handles the value of the input changing.
     * @param save The delegate used to update the store.
     */
    private onChanged(save: StoreSetter): void {
        const value = this.value;

        save(value);
        this.updateInfo(value);
    }

    /**
     * Updates the visual display that represents the file value.
     * @param value The value.
     */
    private updateInfo(value: string): void {
        if (value?.length) {
            this.info.textContent = value;
            this.info.title = value;
        } else {
            this.info.textContent = 'No file.';
            this.info.title = '';
        }
    }
}

customElements.define('sdpi-file', SDPIFile);
