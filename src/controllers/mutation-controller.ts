import { type ReactiveController, type ReactiveControllerHost } from "lit";

/**
 * Controller responsible for observing mutations within a host.
 */
export class MutationController<T = unknown> implements ReactiveController {
	/**
	 * Value provided by the callback function, invoked when a mutation occurs.
	 */
	public value: T | undefined;

	/**
	 * Determines whether the mutation observer can observe mutations. This is set to `true` when `disconnect`
	 * was called explicitly, and set to `false` when `observe` is called.
	 */
	private canObserve = true;

	/**
	 * Configuration options.
	 */
	private readonly config?: Configuration<T>;

	/**
	 * Host this controller is attached to.
	 */
	private readonly host: Node & ReactiveControllerHost;

	/**
	 * Determines whether the mutation observer is currently observing the host.
	 */
	private isObserving = false;

	/**
	 * Mutation observer monitoring changes.
	 */
	private readonly observer: MutationObserver;

	/**
	 * Initializes a new instance of the {@link MutationController} class.
	 * @param host Host to attach to, and observe.
	 * @param config Configuration options.
	 */
	constructor(host: Node & ReactiveControllerHost, config?: Configuration<T>) {
		this.host = host;
		this.observer = new MutationObserver((mutations: MutationRecord[]) => this.handleChanges(mutations));
		this.config = config;

		this.host.addController(this);
	}

	/**
	 * Disconnects the mutation observer from the host.
	 */
	public disconnect(): void {
		this.canObserve = false;
		this.hostDisconnected();
	}

	/**
	 * @inheritdoc
	 */
	public hostConnected(): void {
		if (this.canObserve) {
			this.observe();
		}
	}

	/**
	 * @inheritdoc
	 */
	public hostDisconnected(): void {
		this.observer.disconnect();
		this.isObserving = false;
	}

	/**
	 * @inheritdoc
	 */
	public hostUpdated(): void {
		// Eagerly deliver any changes that happened during update.
		const pendingRecords = this.observer.takeRecords();
		if (pendingRecords.length) {
			this.handleChanges(pendingRecords);
		}
	}

	/**
	 * Observes mutations on the host. When mutations are already being observed, nothing happens.
	 */
	public observe(): void {
		this.canObserve = true;

		if (!this.isObserving) {
			const options = Object.assign(
				{
					attributes: true,
					childList: true,
					subtree: true,
				},
				this.config?.options,
			);

			// Start observing.
			this.observer.observe(this.host, options);
			this.isObserving = true;

			// Initialize the value.
			this.handleChanges([]);
		}
	}

	/**
	 * Invokes the callback function, and assigns the result to the controller's `value`.
	 * @param mutations Mutations that occurred.
	 */
	private handleChanges(mutations: MutationRecord[]): void {
		if (this.config?.callback) {
			const newValue = this.config.callback(mutations);
			const oldValue = this.value;

			this.value = newValue;

			if (oldValue !== newValue && this.config.changed) {
				this.config.changed();
			}
		}

		this.host.requestUpdate();
	}
}

/**
 * Configuration options.
 */
type Configuration<T> = {
	/**
	 * Callback function invoked when a mutation occurs.
	 * @param mutations Mutations that occurred.
	 * @returns The new value of the mutation controller.
	 */
	callback(mutations: MutationRecord[]): T;

	changed?(): void;

	/**
	 * Options provided to the mutation observer.
	 */
	options?: MutationObserverInit;
};
