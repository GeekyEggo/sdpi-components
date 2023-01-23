import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Delegate, Focusable, Input, Persisted } from '../mixins';
import streamDeckClient from '../stream-deck/stream-deck-client';

@customElement('sdpi-delegate')
export class DelegateElement extends Delegate(Persisted(Focusable(Input<typeof LitElement, string>(LitElement)))) {
    /**
     * When specified, the `invoke` name will be sent to the plug-in using the `sendToPlugin` event, allowing for the delegation of setting the value to the plug-in.
     */
    @property()
    public invoke?: string;

    /** @inheritdoc */
    render() {
        return this.renderDelegate();
    }

    /** @inheritdoc */
    invoked() {
        if (this.disabled) {
            return;
        }

        if (this.invoke === undefined) {
            console.warn(
                'Delegation failed, consider setting the "invoke" attribute. When defined, `sendToPlugin` is invoked with the specified attribute value, allowing for the plug-in to determine the persisted value.'
            );
        } else {
            streamDeckClient.send('sendToPlugin', { event: this.invoke });
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sdpi-delegate': DelegateElement;
    }
}
