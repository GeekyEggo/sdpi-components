import { HTMLInputEvent } from 'dom';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { useSettings } from '../stream-deck/settings';

@customElement('sdpi-textfield')
export class Textfield extends LitElement {
    private _setting?: string;
    private _save?: (value: unknown) => void;

    static styles = css`
        :host {
            color: blue;
        }
    `;

    @property()
    public setting?: string;

    @property()
    public value = '';

    @property({ type: Boolean })
    public global = false;

    render() {
        console.log(this.global);
        return html`<input type="text" @input=${this.handleInput} .value=${this.value} /> `;
    }

    protected firstUpdated(): void {
        if (this.setting) {
            this._save = useSettings<string>(this.setting, this.global, (value) => (this.value = value));
        }
    }

    private handleInput(ev: HTMLInputEvent<HTMLInputElement>) {
        this.value = ev.target.value;
        if (this._save) {
            this._save(this.value);
        }
    }
}
