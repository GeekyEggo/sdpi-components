import { customElement } from 'lit/decorators.js';

import { Textfield } from './textfield';

@customElement('sdpi-password')
export class Password extends Textfield {
    /** @inheritdoc */
    protected type: 'text' | 'password' = 'password';
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-password': Password;
    }
}
