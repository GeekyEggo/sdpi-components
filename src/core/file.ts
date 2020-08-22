import store from './store';
import { PlatformType } from 'stream-deck';

/**
 * Gets the file name from the path.
 * @param path The path.
 */
export function getFileName(path: string): string {
    const divider = isWindows() ? '\\' : '/';
    const segments = path.split(divider);

    return segments.length == 1
        ? path
        : segments[segments.length - 1];
}

/**
 * Gets the sanitized path.
 * @param path The raw path (i.e. those returned by an input).
 */
export function sanitize(path: string): string {
    // decode and sanitize the value
    let decodedValue = decodeURIComponent(path.replace(/^C:\\fakepath\\/, ''));
    return isWindows()
        ? decodedValue.replace(new RegExp('/', 'g'), '\\')
        : decodedValue;
}

/**
 * Determines whether the platform is Windows or Mac based on the connection.
 * @returns {boolean} true when the platform is windows; otherwise false.
 */
function isWindows(): boolean {
    return store.client?.connection.info.application.platform == PlatformType.Windows
}
