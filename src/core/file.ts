/**
 * Gets the file name from the path.
 * @param path The path.
 * @returns {string} Gets the name of the file.
 */
export function getFileName(path: string): string {
    const { done, value } = getSegmentsInReverse(path).next();
    return done ? '' : value;
}

/**
 * Gets each segment from the `path`, split by either forward or backward slash, in reverse.
 * @param path The path.
 * @returns Each segment from the path.
 */
export function* getSegmentsInReverse(path: string): IterableIterator<string> {
    const sanitizedPath = sanitize(path);
    if (sanitizedPath.length === 0) {
        return;
    }

    let end = sanitizedPath.length;
    for (let i = sanitizedPath.length; i > 0; i--) {
        if (sanitizedPath[i - 1] === '/' || sanitizedPath[i - 1] === '\\') {
            if (i != sanitizedPath.length) {
                const segment = sanitizedPath.substring(i, end);
                if (segment.length > 0) {
                    yield segment;
                }
            }

            end = i - 1;
        }
    }

    const segment = sanitizedPath.substring(0, end);
    if (segment.length > 0) {
        yield segment;
    }
}

/**
 * Gets the sanitized path.
 * @param path The raw path (i.e. those returned by an input).
 * @returns {string} The sanitized path.
 */
export function sanitize(path: string): string {
    return decodeURIComponent(path.replace(/^C:\\fakepath\\/, ''));
}
