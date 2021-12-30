/**
 * Creates a new element.
 * @param tagName The elements tag name.
 * @param className The optional class name of the element.
 * @param children The optional children to append to the element.
 * @returns The element.
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, classNames?: string | string[], children?: HTMLElement[]): HTMLElementTagNameMap[K] {
    const element = document.createElement(tagName);

    if (classNames) {
        if (typeof classNames === 'string') {
            element.classList.add(classNames);
        } else {
            classNames.forEach(className => element.classList.add(className));
        }
    }

    (children ?? []).forEach(child => element.appendChild(child));
    return element;
}

/**
 * Observes the child list of the target.
 * @param target The target node to observe.
 * @param addedCallback The callback invoked when nodes were added.
 * @param filter The filter that defines the node list to invoke the added callback for.
 */
export function observeChildList(target: Node, addedCallback: (node: Node) => void, ...filter: string[]): void {
    new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
            if (filter.includes(node.nodeName)) {
                addedCallback(node);
            }
        }));
    }).observe(target, { childList: true });
}

/**
 * Sets the attribute when the value is defined; otherwise the attribute is removed.
 * @param target The target element to update.
 * @param attrName The name of the attribute.
 * @param value The optional attribute value.
 */
export function setAttribute(target?: HTMLElement, attrName?: string, value?: string | null): void {
    if (target && attrName) {
        if (value) {
            target.setAttribute(attrName, value);
        } else {
            target.removeAttribute(attrName);
        }
    }
}

/**
 * Invokes the action when the element contains the attribute.
 * @param element The element used to determine if the attribute exists.
 * @param attrName The attribute name.
 * @param success The action to invoke when the attribute present.
 * @param failure The action to invoke when the attribute was not present.
 */
export function withAttribute(element: HTMLElement, attrName: string, success?: (value: string) => void, failure?: () => void): void {
    const value = element.getAttribute(attrName);
    if (value) {
        success && success(value);
    } else {
        failure && failure();
    }
}
