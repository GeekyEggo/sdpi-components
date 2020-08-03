/**
 * A helper method for triggering and delaying a timeout.
 * @param callback The callback to invoke when the timeout expires.
 * @param timeout The timeout duration.
 */
export function delay(callback: () => void, timeout: number): () => void {
    let handle: number | undefined;
    return (...args: any[]) => {
        clearTimeout(handle);
        handle = setTimeout(callback, timeout, args);
    };
}
