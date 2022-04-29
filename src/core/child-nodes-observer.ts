/**
 * Provides a wrapper around a mutation observers that monitors for specific node types.
 */
export default class ChildNodesObserver<K extends keyof HTMLElementTagNameMap> {
    private observer = new MutationObserver(this.handleMutation.bind(this));

    /**
     * Initializes a mutation observer wrapper.
     * @param nodeNames The name of the node types to observe.
     * @param callback The function invoked when a node matching the node name is added or removed.
     */
    constructor(private nodeNames: K[], private callback: (nodes: HTMLElementTagNameMap[K][]) => void) {}

    /**
     * Gets the child nodes associated with the target node.
     */
    public nodes: HTMLElementTagNameMap[K][] = [];

    /**
     * Observes mutations to the targets child nodes within the DOM.
     * @param target The target to observe.
     */
    public observe(target: Node): void {
        this.observer.observe(target, { childList: true });
    }

    /**
     * Disconnects the observer.
     */
    public disconnect(): void {
        this.observer.disconnect();
    }

    /**
     * Invoked when a mutation occurs within the `observer`, i.e. a node was added to, or removed from, the `target`.
     * @param mutations The mutations that occurred.
     */
    private handleMutation(mutations: MutationRecord[]): void {
        let changed = false;

        mutations.forEach((mutation) => {
            // Nodes added.
            for (const added of mutation.addedNodes) {
                if (this.nodeNames.indexOf(<K>added.nodeName.toLowerCase()) > -1) {
                    changed = true;
                    this.nodes.push(added as HTMLElementTagNameMap[K]);
                }
            }

            // Nodes removed.
            mutation.removedNodes.forEach((node) => {
                const index = this.nodes.indexOf(node as HTMLElementTagNameMap[K]);
                if (index !== -1) {
                    changed = true;
                    this.nodes.splice(index, 1);
                }
            });
        });

        // As a node changed; trigger the mutated handler.
        if (changed) {
            this.callback(this.nodes);
        }
    }
}
