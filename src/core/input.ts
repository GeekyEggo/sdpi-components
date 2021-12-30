export type HTMLInput
    = HTMLButtonElement
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;

/**
 * Registers the event listener to change and input events.
 * @param input The input to monitor.
 * @param listener The event listener.
 */
export function anyChange(input: HTMLInput, listener: EventListenerOrEventListenerObject) {
    input.addEventListener('change', listener);
    input.addEventListener('input', listener);
}

/**
 * Removes all options from the input.
 * @param input The input.
 */
export function clearOptions(input: HTMLSelectElement): void {
    if (input.options) {
        let i = input.options.length;
        while (i--) {
            input.options.remove(i);
        }
    }
}

/**
 * Creates a new option element.
 * @param text The option text.
 * @param value The option value.
 * @returns The option.
 */
export function createOption(text: string, value?: any): HTMLOptionElement {
    const option = document.createElement('option');
    option.text = text;
    option.value = value;

    return option;
}

/**
 * Creates a new option group element.
 * @param label The option group label.
 * @param children The optional children.
 * @returns The option group.
 */
export function createOptionGroup(label: string, children?: HTMLOptGroupElement[] | HTMLOptionElement[]): HTMLOptGroupElement {
    const optGroup = document.createElement('optgroup');
    optGroup.label = label;

    if (children) {
        children.forEach(child => optGroup.appendChild(child));
    }

    return optGroup;
}

/**
 * Dispatches the change event.
 * @param input The input to dispatch the change event on.
 */
export function dispatchChange(input: HTMLInput) {
    input.dispatchEvent(new Event('change'));
}
