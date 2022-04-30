import { ReactiveController, ReactiveControllerHost } from 'lit';

import { FilteredMutationObserver } from '../core';

/**
 * Provides a controller that observes the child nodes of the host, and exposes them via `childNodes`.
 */
export class FilteredMutationController<K extends keyof HTMLElementTagNameMap> implements ReactiveController {
    private observer: FilteredMutationObserver<K>;

    /**
     * Initializes a new child node controller capable of observing the child nodes of the host, exposed via `childNodes`.
     * @param host The host node.
     * @param nodeNames The name of the node types to observe.
     */
    constructor(private host: ReactiveControllerHost & Node, nodeNames: K[]) {
        this.host.addController(this);
        this.observer = new FilteredMutationObserver(nodeNames, this.handleMutation.bind(this));
    }

    /**
     * Gets the child nodes associated with the host.
     */
    public get items(): HTMLElementTagNameMap[K][] {
        return this.observer.items;
    }

    /** @inheritdoc */
    public hostConnected(): void {
        this.observer.observe(this.host);
    }

    /** @inheritdoc */
    public hostDisconnected?(): void {
        this.observer.disconnect();
    }

    /**
     * Invoked when an element matching the observed `nodeNames` is added or removed; occurs before `requestUpdate`.
     * @param ev The event arguments.
     */
    protected mutated?(ev: { preventRequestUpdate: boolean }): void;

    /**
     * Handles the invocation of the internal observer, propagating the change to the host.
     */
    private handleMutation(): void {
        if (this.mutated) {
            const args = { preventRequestUpdate: false };
            this.mutated(args);

            if (args.preventRequestUpdate) {
                return;
            }
        }

        this.host.requestUpdate();
    }
}
