import { PromiseCompletionSource } from './promises';

/**
 * Invokes the `callback` after the given `timeout`; calling the returning function will reset the timeout, thus allowing for a delay in the invocation of the `callback`.
 * @param callback The callback to invoke when the timeout expires.
 * @param timeout The timeout duration.
 * @returns A function that allows for the timeout to be re-set.
 */
export function delay(callback: ((data?: unknown | undefined) => Promise<void>) | ((data?: unknown | undefined) => void), timeout: number): (data?: unknown | undefined) => Promise<void> {
    let handle: number | undefined;
    let pcs: PromiseCompletionSource<void> | undefined;

    return (data: unknown | undefined, ...args: unknown[]): Promise<void> => {
        clearTimeout(handle);

        pcs = pcs || new PromiseCompletionSource();
        handle = setTimeout(
            async () => {
                const innerPcs = pcs;
                pcs = undefined;

                await callback(data);
                innerPcs?.setResult();
            },
            timeout,
            args
        );

        return pcs.promise;
    };
}
