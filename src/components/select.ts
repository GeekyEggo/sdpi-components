import { HTMLInputEvent } from 'dom';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChildNodesController } from '../controllers/childNodesController';

import { SettingElement } from './shared/setting-element';

@customElement('sdpi-select')
export class Select extends SettingElement<string> {
    /**
     * @inheritdoc
     */
    public static get styles() {
        return [
            ...super.styles,
            css`
                select {
                    background-color: var(--color-secondary-bg);
                    font-family: var(--font-family);
                    font-size: var(--font-size);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }
            `
        ];
    }

    /**
     * Initializes a new instance of a custom Stream Deck property inspector select input.
     */
    constructor() {
        super();
        this._childNodesController = new ChildNodesController(this);
    }

    /**
     * The optional placeholder text; added as the first item within the select, as a disable option, and selected by default.
     */
    @property()
    public placeholder?: string;

    /**
     * Provides an observer that monitors the child nodes of the component on the DOM.
     */
    private _childNodesController: ChildNodesController;

    /**
     * @inheritdoc
     */
    protected override renderContents(): unknown {
        return html`
            <select .id=${this.inputID} .disabled=${this.disabled} .value=${this.value || ''} @change=${(ev: HTMLInputEvent<HTMLSelectElement>) => this.save(ev.target.value)}>
                <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined}>${this.placeholder}</option>
                ${this.renderChildNodes()}
            </select>
        `;
    }

    /**
     * Gets the option groups and options associated with the `_childNodesController.childNodes`.
     * @returns {unknown} The HTML template that contains the options.
     */
    private renderChildNodes(): unknown {
        if (this.childNodes.length === 0) {
            return undefined;
        }

        const mapOptions = (item: Node): unknown => {
            switch (item.nodeName) {
                case 'OPTGROUP':
                    return html`<optgroup .label=${(<HTMLOptGroupElement>item).label}>${Array.from(item.childNodes).map(mapOptions)}</optgroup>`;
                case 'OPTION':
                    return html`<option .disabled=${(<HTMLOptionElement>item).disabled} .value=${(<HTMLOptionElement>item).text}>${(<HTMLOptionElement>item).label}</option>`;
                default:
                    return undefined;
            }
        };

        return html`${this._childNodesController.childNodes.map(mapOptions)}`;
    }
}
