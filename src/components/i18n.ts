import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { i18n } from '../core';

@customElement('sdpi-i18n')
export class i18nElement extends LitElement {
    @property()
    public key?: string;

    /** @inheritdoc */
    render() {
        return this.key ? html`${i18n.getMessage(this.key)}` : undefined;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-i18n': i18nElement;
    }
}
