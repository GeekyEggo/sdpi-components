/**
 * Provides an event dispatcher whereby handlers can subscribe to events that are later dispatched.
 */
export class EventManager<T> implements IEventDispatcher<T>, IEventSubscriber<T> {
    private handlers: IEventHandler<T>[] = [];

    /**
     * Dispatches the event for all handlers.
     * @param args The arguments to invoke each handler with.
     */
    public dispatch(args: T): void {
        for (const handler of this.handlers) {
            handler(args);
        }
    }

    /**
     * Subscribes the handler to the event.
     * @param {IEventHandler<T>} handler The handler to add.
     */
    public subscribe(handler: IEventHandler<T>): void {
        this.handlers.push(handler);
    }

    /**
     * Unsubscribes the handler from the event.
     * @param {IEventHandler<T>} handler The handler to remove.
     */
    public unsubscribe(handler: IEventHandler<T>): void {
        this.handlers = this.handlers.filter((h) => h !== handler);
    }
}

/**
 * An event subscriber.
 */
export interface IEventSubscriber<T> {
    subscribe(handler: IEventHandler<T>): void;
    unsubscribe(handler: IEventHandler<T>): void;
}

/**
 * An event dispatcher
 */
export interface IEventDispatcher<T> {
    dispatch(args: T): void;
}

/**
 * An event handler.
 */
export interface IEventHandler<T> {
    (args: T): void;
}
