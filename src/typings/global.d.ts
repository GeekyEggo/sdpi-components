/**
 * Initializes a new instance of `T`.
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

/**
 * An event triggered by an HTML input element, that allows for the target to be typed.
 */
type HTMLInputEvent<Target> = InputEvent & { target: Target };
