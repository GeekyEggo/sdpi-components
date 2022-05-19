/**
 * Gets the file name from the path.
 * @param path The path.
 * @returns {string} Gets the name of the file.
 */
export function getFileName(path: string): string {
    const sanitizedPath = sanitize(path);

    // Check for Unix-based paths.
    let i = sanitizedPath.lastIndexOf('/');
    if (i >= 0) {
        return sanitizedPath.substring(i + 1);
    }

    // Check for Windows-based paths.
    i = sanitizedPath.lastIndexOf('\\');
    if (i >= 0) {
        return sanitizedPath.substring(i + 1);
    }

    return sanitizedPath;
}

/**
 * Gets the sanitized path.
 * @param path The raw path (i.e. those returned by an input).
 * @returns {string} The sanitized path.
 */
export function sanitize(path: string): string {
    return decodeURIComponent(path.replace(/^C:\\fakepath\\/, ''));
}
