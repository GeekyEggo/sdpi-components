/**
 * Provides a promise completion source whereby a promise can be resolved at a later stage.
 */
export class PromiseCompletionSource<T> {
    private readonly _promise: Promise<T>;

    /**
     * Initializes a new instance of a promise completion source.
     */
    constructor() {
        this._promise = new Promise<T>((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    private reject?: (reason?: unknown) => void;
    private resolve?: (value: T | PromiseLike<T>) => void;

    /**
     * Gets the promise.
     */
    public get promise(): Promise<T> {
        return this._promise;
    }

    /**
     * Sets the result of the inner promise.
     * @param value The value.
     */
    public setResult(value: T | PromiseLike<T>): void {
        if (this.resolve) {
            this.resolve(value);
        }
    }

    /**
     * Rejects the inner promise.
     * @param reason The reason.
     */
    public setException(reason?: unknown): void {
        if (this.reject) {
            this.reject(reason);
        }
    }
}
