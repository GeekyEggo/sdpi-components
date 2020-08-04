/**
 * Registers the event listener to change and input events.
 * @param input The input to monitor.
 * @param listener The event listener.
 */
export function anyChange(input: HTMLInputElement | HTMLTextAreaElement, listener: EventListenerOrEventListenerObject) {
    input.addEventListener('change', listener);
    input.addEventListener('input', listener);
}
