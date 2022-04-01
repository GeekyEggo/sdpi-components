import streamDeckClient from '../stream-deck/stream-deck-client';

/**
 * Gets the file name from the path.
 * @param path The path.
 * @returns {string} Gets the name of the file.
 */
export async function getFileName(path: string): Promise<string> {
    const divider = (await isWindows()) ? '\\' : '/';
    const segments = path.split(divider);

    return segments.length == 1 ? path : segments[segments.length - 1];
}

/**
 * Gets the sanitized path.
 * @param path The raw path (i.e. those returned by an input).
 * @returns {string} The sanitized path.
 */
export async function sanitize(path: string): Promise<string> {
    // Decode and sanitize the value.
    const decodedValue = decodeURIComponent(path.replace(/^C:\\fakepath\\/, ''));
    return (await isWindows()) ? decodedValue.replace(new RegExp('/', 'g'), '\\') : decodedValue;
}

/**
 * Determines whether the platform is Windows or Mac based on the connection.
 * @returns {boolean} true when the platform is windows; otherwise false.
 */
export async function isWindows(): Promise<boolean> {
    const connectionInfo = await streamDeckClient.getConnectionInfo();
    return connectionInfo.info.application.platform == 'windows';
}
