import { ReactiveController, ReactiveControllerHost } from 'lit';

type ReactiveControllerHostNode = ReactiveControllerHost & Node;

/**
 * Provides a controller that observes the child nodes of the host, and exposes them via `childNodes`.
 */
export class ChildNodesController implements ReactiveController {
    /**
     * Initializes a new child node controller capable of observing the child nodes of the host, exposed via `childNodes`.
     * @param host The host node.
     */
    constructor(host: ReactiveControllerHostNode) {
        (this._host = host).addController(this);
        this._observer = new MutationObserver(this.handleMutation.bind(this));
    }

    /**
     * Gets the child nodes associated with the host.
     */
    public childNodes: Node[] = [];

    /**
     * The host the controller is connected to.
     */
    private _host: ReactiveControllerHostNode;

    /**
     * The observer responsible for monitoring the child nodes of the host.
     */
    private _observer: MutationObserver;

    /**
     * Called when the host is connected to the component tree. For custom element hosts, this corresponds to the `connectedCallback()` lifecycle, which is only called when the component is connected to the document.
     */
    public hostConnected(): void {
        this._observer.observe(this._host, { childList: true });
    }

    /**
     * Called when the host is disconnected from the component tree. For custom  element hosts, this corresponds to the `disconnectedCallback()` lifecycle, which is called the host or an ancestor component is disconnected from the document.
     */
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
                this.childNodes.push(added);
            }

            // Remove old nodes.
            mutation.removedNodes.forEach((node) => {
                const index = this.childNodes.indexOf(node);
                if (index !== -1) {
                    this.childNodes.splice(index, 1);
                }
            });
        });

        this._host.requestUpdate();
    }
}
