import { CSSResultGroup, CSSResultOrNative } from 'lit';

/**
 * Reduces the current styles, and new styles, into a single set of CSS.
 * @param currentStyles The current styles, or `undefined`.
 * @param styles The stlyes to be applied to the current styles.
 * @returns The reduced set of styles.
 */
export function reduceStyles(currentStyles?: CSSResultGroup, ...styles: CSSResultOrNative[]): CSSResultGroup {
    if (currentStyles === undefined) {
        return [...styles];
    }

    if (Array.isArray(currentStyles)) {
        return [...currentStyles, ...styles];
    }

    return [currentStyles, ...styles];
}
