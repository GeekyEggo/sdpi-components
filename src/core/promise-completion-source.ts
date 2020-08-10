/**
 * Provides a promise completion source whereby a promise can be resolved at a later stage.
 */
export default class PromiseCompletionSource<T> {
    private _promise: Promise<T>;

    /**
     * Initializes a new instance of a promise completion source.
     */
    constructor() {
        this._promise = new Promise<T>((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }

    private reject: (reason?: any) => void = _ => { };
    private resolve: (value?: T | undefined) => void = _ => { };

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
    public setResult(value?: T | undefined): void {
        this.resolve(value);
    }

    /**
     * Rejects the inner promise.
     * @param reason The reason.
     */
    public setException(reason?: any): void {
        this.reject(reason);
    }
}
