import { ReactiveController, ReactiveControllerHost } from 'lit';

import { useSettings } from '../stream-deck/settings';

type ReactiveStoreControllerHost<T> = ReactiveControllerHost & {
    isGlobal: boolean;
    setting?: string;
    value?: T;
};

/**
 * Provides a controller that is capable of persisting and retrieving data to and from the Stream Decks settings.
 */
export class StoreController<T> implements ReactiveController {
    /**
     * Initializes a new child node controller capable of observing the child nodes of the host, exposed via `childNodes`.
     * @param host The host node.
     */
    constructor(host: ReactiveStoreControllerHost<T>) {
        (this._host = host).addController(this);
    }

    /**
     * The host the controller is connected to.
     */
    private _host: ReactiveStoreControllerHost<T>;

    /** @inheritdoc */
    public hostConnected(): void {
        if (this._host.setting) {
            this._save = useSettings<T>(this._host.setting, this._host.isGlobal, (value) => (this._host.value = value));
        }
    }

    /**
     * Saves the `value` to the Stream Deck settings.
     * @param value The value to save.
     */
    public save(value: T): void {
        this._host.value = value;

        if (this._save) {
            this._save(value);
        }
    }

    /**
     * Persists the `value` to the Stream Deck settings.
     * @param value The value to persist.
     */
    private _save?: (value: T) => void;
}
