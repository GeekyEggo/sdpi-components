/**
 * Generates a "unique" identifier.
 * @returns The unique identifier.
 */
export function getUUID(): string {
    const chr4 = () => Math.random().toString(16).slice(-4);
    return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
}
