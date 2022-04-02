import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ChildNodesController } from '../controllers/child-nodes-controller';
import { StoreController } from '../controllers/store-controller';
import { Input, Labeled, Persisted } from '../mixins';
import { hostStyle } from '../styles/host';

@customElement('sdpi-select')
export class Select extends Labeled(Persisted(Input<typeof LitElement, string>(LitElement))) {
    private _childNodes = new ChildNodesController(this);
    private _store = new StoreController(this);

    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            hostStyle,
            css`
                select {
                    background-color: var(--input-bg-color);
                    padding: calc(var(--spacer) + 1px) 0;
                    text-overflow: ellipsis;
                }

                select:disabled {
                    opacity: 0.5;
                }
            `
        ];
    }

    /**
     * The optional placeholder text; added as the first item within the select, as a disable option, and selected by default.
     */
    @property()
    public placeholder?: string;

    /** @inheritdoc */
    protected render() {
        return html`
            <sdpi-item .label=${this.label}>
                <select .disabled=${this.disabled} .value=${this.value || ''} @change=${(ev: HTMLInputEvent<HTMLSelectElement>) => this._store.save(ev.target.value)}>
                    <option value="" disabled .hidden=${!this.placeholder || this.value !== undefined}>${this.placeholder}</option>
                    ${this.renderChildNodes()}
                </select>
            </sdpi-item>
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

        return html`${this._childNodes.childNodes.map(mapOptions)}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-select': Select;
    }
}
