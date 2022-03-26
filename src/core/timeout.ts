/**
 * Invokes the `callback` after the given `timeout`; calling the returning function will reset the timeout, thus allowing for a delay in the invocation of the `callback`.
 * @param callback The callback to invoke when the timeout expires.
 * @param timeout The timeout duration.
 * @returns A function that allows for the timeout to be re-set.
 */
export function delay(callback: (data: unknown | undefined) => void, timeout: number): (data: unknown | undefined) => void {
    let handle: number | undefined;
    return (data: unknown | undefined, ...args: unknown[]) => {
        clearTimeout(handle);
        handle = setTimeout(() => callback(data), timeout, args);
    };
}
