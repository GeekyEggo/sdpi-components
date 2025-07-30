import { type ReactiveControllerHost } from "lit";

import { MutationController } from "./mutation-controller.js";

/**
 * Controller responsible for monitoring options, and option groups, within a host.
 */
export class OptionController extends MutationController<(HTMLOptionElement | HTMLOptGroupElement)[]> {
	/**
	 * Initializes a new instance of the {@link OptionController} class.
	 * @param host Host to attach to, and observe.
	 * @param change Function invoked after the value changed.
	 */
	constructor(host: HTMLElement & ReactiveControllerHost, changed?: () => void) {
		super(host, {
			callback: () => {
				return Array.from(host.querySelectorAll(":scope > option, :scope > sd-optgroup"));
			},
			changed: () => {
				if (changed) {
					changed();
				}
			},
			options: {
				attributes: true,
				childList: true,
				subtree: true,
			},
		});
	}
}
