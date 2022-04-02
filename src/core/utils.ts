import { CSSResultArray, CSSResultGroup, CSSResultOrNative } from 'lit';

/**
 * Converts a `CSSResultGroup` to an array.
 * @param styles The styles to convert.
 * @returns The array of `CSSResultOrNative` or `CSSResultArray`.
 */
export function asArray(styles?: CSSResultGroup): (CSSResultOrNative | CSSResultArray)[] {
    if (styles === undefined) {
        return [];
    }

    if (Array.isArray(styles)) {
        return [...styles];
    }

    return [styles];
}

/**
 * Generates a 'unique' identifier.
 * @returns The unique identifier.
 */
export function getUUID(): string {
    const chr4 = () => Math.random().toString(16).slice(-4);
    return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
}

/**
 * Gets the value at the specified `path` from the `source` object.
 * @param path The path to the property to get.
 * @param source The source object that is being read from.
 * @returns The value of the property.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function get(path: string, source: any): any {
    const props: string[] = Array.isArray(path) ? path : path.split('.');
    return props.reduce((obj, prop) => obj && obj[prop], source);
}

/**
 * Sets the specified `value` on the `target` object at the desired property `path`.
 * @param path The path to the property to set.
 * @param target The target object that is being written to.
 * @param value The value to write.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function set(path: string, target: any, value: unknown): void {
    const parts = path.split('.');
    parts.reduce((obj, prop, i) => {
        return i === parts.length - 1 ? (obj[prop] = value) : obj[prop] || (obj[prop] = {});
    }, target);
}
