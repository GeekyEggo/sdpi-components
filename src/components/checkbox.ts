import { HTMLInputEvent } from 'dom';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SettingElement } from './shared/setting-element';

@customElement('sdpi-checkbox')
export class Checkbox extends SettingElement<boolean> {
    /** @inheritdoc */
    public static get styles() {
        return [
            ...super.styles,
            css`
                :host {
                    --checkbox-size: 16px;
                }

                .checkbox-container {
                    align-items: center;
                    display: inline-flex;
                    margin: var(--spacer) 0;
                    user-select: none;
                    width: auto;
                }

                input {
                    display: none;
                }

                .checkmark {
                    background: var(--color-secondary-bg);
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 3px;
                    flex: var(--checkbox-size) var(--checkbox-size);
                    height: var(--checkbox-size);
                    width: var(--checkbox-size);
                }

                .text {
                    flex: 1 1;
                    margin: 0 0 0 var(--spacer);
                }

                input:not(:disabled) ~ span {
                    cursor: pointer;
                }

                input:disabled ~ span {
                    opacity: 0.5;
                }

                input:checked ~ .checkmark {
                    background: #77f no-repeat center center;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpolygon fill='%23FFF' points='7.2 7.5 7.2 -1.3 8.7 -1.3 8.6 9.1 2.7 8.7 2.7 7.2' transform='rotate(37 5.718 3.896)'/%3E%3C/svg%3E%0A");
                    border: 1px solid rgba(0, 0, 0, 0.4);
                }
            `
        ];
    }

    /**
     * Gets the optional text to be shown next to the check-box.
     */
    @property()
    public text?: string;

    /** @inheritdoc */
    protected renderContents(): unknown {
        const text = this.text ? html`<span class="text">${this.text}</span>` : undefined;

        return html`
            <label class="checkbox-container">
                <input
                    type="checkbox"
                    .id=${this.inputID}
                    .checked=${this.value || false}
                    .disabled=${this.disabled}
                    @change=${(ev: HTMLInputEvent<HTMLInputElement>) => this.save(ev.target.checked)}
                />
                <span class="checkmark" role="checkbox" aria-checked=${this.value || false}></span>
                ${text}
            </label>
        `;
    }
}
