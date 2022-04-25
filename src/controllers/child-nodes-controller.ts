import { ReactiveController, ReactiveControllerHost } from 'lit';

type ReactiveControllerHostNode = ReactiveControllerHost & Node;

/**
 * Provides a controller that observes the child nodes of the host, and exposes them via `childNodes`.
 */
export class ChildNodesController<K extends keyof HTMLElementTagNameMap> implements ReactiveController {
    private observer: MutationObserver;

    /**
     * Initializes a new child node controller capable of observing the child nodes of the host, exposed via `childNodes`.
     * @param host The host node.
     */
    constructor(private host: ReactiveControllerHostNode, private nodeNames: K[]) {
        this.host.addController(this);
        this.observer = new MutationObserver(this.handleMutation.bind(this));
    }

    /**
     * Gets the child nodes associated with the host.
     */
    public items: HTMLElementTagNameMap[K][] = [];

    /** @inheritdoc */
    public hostConnected(): void {
        this.observer.observe(this.host, { childList: true });
    }

    /** @inheritdoc */
    public hostDisconnected?(): void {
        this.observer.disconnect();
    }

    /**
     * Invoked when a mutation occurs within the `observer`, i.e. a node was added or removed from the `host`.
     * @param mutations The mutations that occurred.
     */
    private handleMutation(mutations: MutationRecord[]): void {
        let requestUpdate = false;

        mutations.forEach((mutation) => {
            // Add new nodes.
            for (const added of mutation.addedNodes) {
                if (this.nodeNames.indexOf(<K>added.nodeName.toLowerCase()) > -1) {
                    requestUpdate = true;
                    this.items.push(added as HTMLElementTagNameMap[K]);
                }
            }

            // Remove old nodes.
            mutation.removedNodes.forEach((node) => {
                const index = this.items.indexOf(node as HTMLElementTagNameMap[K]);
                if (index !== -1) {
                    requestUpdate = true;
                    this.items.splice(index, 1);
                }
            });
        });

        if (requestUpdate) {
            this.host.requestUpdate();
        }
    }
}
