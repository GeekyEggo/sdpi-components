import { ReactiveControllerHost } from 'lit';

import { getUUID } from '../core';
import { FilteredMutationController } from './filtered-mutation-controller';

/**
 * Provides a controller that observes the child nodes of the host for a HTMLDataListElement, and caches a clone of the instance for rendering.
 */
export class DataListController extends FilteredMutationController<'datalist'> {
    /**
     * Gets the current data list.
     */
    public dataList?: HTMLDataListElement;

    /**
     * Initializes a new data list controller responsible for determining the data list associated with the host.
     * @param host The host node.
     */
    constructor(host: ReactiveControllerHost & Node) {
        super(host, ['datalist']);
    }

    /** @inheritdoc */
    protected mutated(ev: { preventRequestUpdate: boolean }): void {
        if (this.items.length === 0) {
            // The data list was removed.
            this.dataList = undefined;
        } else if (this.dataList === undefined || this.dataList.id !== this.items[0].id) {
            // The data list is not set, or differs to the current one.
            this.items[0].id = this.items[0].id || getUUID();
            this.dataList = <HTMLDataListElement>this.items[0].cloneNode(true);
        } else {
            // The [first] data list has not changed.
            ev.preventRequestUpdate = true;
        }
    }
}
