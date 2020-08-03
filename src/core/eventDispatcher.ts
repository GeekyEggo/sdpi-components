/**
 * An event subscriber.
 */
export interface IEventSubscriber<T> {
    subscribe(handler: IEventHandler<T>): void;
}

/**
 * An event dispatcher.
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

/**
 * Provides an event dispatcher whereby handlers can subscribe to events that are later dispatched.
 */
export default class EventDispatcher<T> implements IEventDispatcher<T> {
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
     * @param handler The handler.
     */
    public subscribe(handler: IEventHandler<T>): void {
        this.handlers.push(handler);
    }
}
