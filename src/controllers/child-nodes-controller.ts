import { ReactiveController, ReactiveControllerHost } from 'lit';

type ReactiveControllerHostNode = ReactiveControllerHost & Node;

/**
 * Provides a controller that observes the child nodes of the host, and exposes them via `childNodes`.
 */
export class ChildNodesController<K extends keyof HTMLElementTagNameMap> implements ReactiveController {
    private _host: ReactiveControllerHostNode;
    private _observer: MutationObserver;
    private _nodeNames: string[];

    /**
     * Initializes a new child node controller capable of observing the child nodes of the host, exposed via `childNodes`.
     * @param host The host node.
     */
    constructor(host: ReactiveControllerHostNode, nodeNames: K[]) {
        (this._host = host).addController(this);

        this._nodeNames = nodeNames;
        this._observer = new MutationObserver(this.handleMutation.bind(this));
    }

    /**
     * Gets the child nodes associated with the host.
     */
    public items: HTMLElementTagNameMap[K][] = [];

    /** @inheritdoc */
    public hostConnected(): void {
        this._observer.observe(this._host, { childList: true });
    }

    /** @inheritdoc */
    public hostDisconnected?(): void {
        this._observer.disconnect();
    }

    /**
     * Invoked when a mutation occurs within the `_observer`, i.e. a node was added or removed from the `_host`.
     * @param mutations The mutations that occurred.
     */
    private handleMutation(mutations: MutationRecord[]): void {
        mutations.forEach((mutation) => {
            // Add new nodes.
            for (const added of mutation.addedNodes) {
                if (this._nodeNames.indexOf(added.nodeName.toLowerCase()) > -1) {
                    this.items.push(added as HTMLElementTagNameMap[K]);
                }
            }

            // Remove old nodes.
            mutation.removedNodes.forEach((node) => {
                const index = this.items.indexOf(node as HTMLElementTagNameMap[K]);
                if (index !== -1) {
                    this.items.splice(index, 1);
                }
            });
        });

        this._host.requestUpdate();
    }
}
