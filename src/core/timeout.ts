/**
 * A helper method whereby the callback is invoked when the input value changes, but subsequent changes are delayed.
 * @param callback The callback to invoke when the timeout expires.
 * @param timeout The timeout duration.
 * @param input The input element to observe.
 */
export function delay(callback: () => void, timeout: number, input: HTMLElement): void {
    let handle: number | undefined;
    input.addEventListener('input', _ => {
        // if we have a handle, clear it
        if (handle) {
            clearTimeout(handle)
        }

        // restart the handle
        handle = setTimeout(callback, timeout);
    })
}
