export type HTMLInput = HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

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
 * Dispatches the change event.
 * @param input The input to dispatch the change event on.
 */
export function dispatchChange(input: HTMLInput) {
    input.dispatchEvent(new Event('change'));
}
