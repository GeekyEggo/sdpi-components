import { delay } from './timeout';
import store from '../stream-deck/store';

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
 * Dispatches the change event.
 * @param input The input to dispatch the change event on.
 */
export function dispatchChange(input: HTMLInput) {
    input.dispatchEvent(new Event('change'));
}

/**
 * A wrapper function that monitors and maps changes to/from the input to/from the underlying store.
 * @param key The settings key.
 * @param global Determines whether the setting is global.
 * @param input The input element.
 * @param timeout The delay before the changes are saved; when undefined the save will occur on change.
 */
export function useStore(key: string, global: boolean, input: HTMLInput, timeout: number | null = 250): void {
    const save = store.register(key, global, (value?: any) => {
        if (input.value != value) {
            input.value = value || '';
            dispatchChange(input);
        }
    });

    if ((input.type.toLowerCase() === 'text' || input.tagName.toLowerCase() === 'textarea') && timeout) {
        input.addEventListener('input', delay(() => save(input.value), timeout));
    } else {
        input.addEventListener('change', () => save(input.value));
    }
}
