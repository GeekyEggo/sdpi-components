import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";

import { LocalizedMessage, localizedMessagePropertyOptions } from "../core/";

import { Focusable, Input, Persisted } from "../mixins";

@customElement("sdpi-number")
export class NumberElement extends Persisted(Focusable(Input<typeof LitElement, number>(LitElement))) {
	/** @inheritdoc */
	public static get styles() {
		return [
			...super.styles,
			css`
				input {
					background-color: var(--input-bg-color);
					padding: calc(var(--spacer) + 3px) var(--spacer);
					flex: 1;
					min-width: unset;
					max-width: unset;
				}

				::-webkit-inner-spin-button {
					-webkit-appearance: none;
				}

				input:disabled {
					opacity: var(--opacity-disabled);
				}

				.number-container {
					display: flex;
					width: 100%;
				}
			`
		];
	}

	/**
	 * The maximum value.
	 */
	@property({ type: Number })
	public max?: number;

	/**
	 * The minimum value.
	 */
	@property({ type: Number })
	public min?: number;

	/**
	 * Specifies the granularity that the value must adhere to.
	 */
	@property({ type: Number })
	public step?: number;

	/**
	 * Specifies the placeholder
	 */
	@property(localizedMessagePropertyOptions)
	public placeholder?: LocalizedMessage;

	/**
	 * When specified, the user input will be clamped to the maximum and maximum values provided
	 */
	@property({
		attribute: "clamp",
		type: Boolean,
	})
	public clamp = false;

	/** @inheritdoc */
	protected delaySave = true;

	/** @inheritdoc */
	protected render() {
		const value = this.value?.toString() || this.defaultValue?.toString() || "";
		return html`
			<label class="number-container">
				<input
				${ref(this.focusElement)}
				type="number"
				max=${ifDefined(this.max)}
				min=${ifDefined(this.min)}
				step=${ifDefined(this.step)}
				placeholder=${ifDefined(this.placeholder)}
				.disabled=${this.disabled}
				.value=${value}
				@change=${(ev: HTMLInputEvent<HTMLInputElement>) => (this.setValue(ev))}
				/>
				<slot name="suffix"></slot>
			</label>`;
	}

	private setValue(ev: HTMLInputEvent<HTMLInputElement>): void {
		let value = ev.target.valueAsNumber;
		if (Number.isNaN(value)) {
			// No value provided
			this.value = undefined;
			return
		}

		// Constrain value to min and max if provided
		const min = this.clamp ? this.min : undefined;
		const max = this.clamp ? this.max : undefined;
		if (max != undefined) {
			value = Math.min(value, max);
		}
		if (min != undefined) {
			value = Math.max(value, min);
		}

		// Force step size
		if (this.step != undefined) {
			// This matches the native step size on the number type input
			const stepStart = this.min ?? 0.0;
			value = Math.round((value - stepStart) / this.step) * this.step + stepStart;
		}

		this.value = value;
		ev.target.value = String(this.value);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"sdpi-number": NumberElement;
	}
}
