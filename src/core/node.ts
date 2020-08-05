/**
 * Observes the child list of the target.
 * @param target The target node to observe.
 * @param addedCallback The callback invoked when nodes were added.
 * @param filter The filter that defines the node list to invoke the added callback for.
 */
export function observeChildList(target: Node, addedCallback: (node: Node) => void, ...filter: string[]) {
    new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
            if (filter.includes(node.nodeName)) {
                addedCallback(node);
            }
        }));
    }).observe(target, { childList: true });
}
