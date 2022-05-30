import { Task } from '@lit-labs/task';
import { LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

import { FilteredMutationObserver } from '../core';
import i18n, { LocalizedString, localizedStringPropertyOptions } from '../core/i18n';
import streamDeckClient from '../stream-deck/stream-deck-client';

export type DataSourceResult = DataSourceResultItem[];
export type DataSourceResultItem = Item | ItemGroup;

export type Item = {
    disabled?: boolean;
    label?: LocalizedString | string;
    value: string;
};

export type ItemGroup = {
    label?: LocalizedString | string;
    children: Item[];
};

/**
 * Provides a mixin that contains an data-sourcing of items from the Stream Deck.
 * @param superClass The super class that this mixin will extend.
 * @returns The mixin as a class that extends `superClass`.
 */
export const DataSourced = <T extends Constructor<LitElement>>(superClass: T) => {
    class DataSourced extends superClass {
        @state()
        private _itemsDirtyFlag = false;
        private _mutationObserver = new FilteredMutationObserver(['optgroup', 'option'], () => (this._itemsDirtyFlag = !this._itemsDirtyFlag));

        /**
         * Initializes a new instance of the data source mixin.
         * @param args The arguments.
         * @constructor
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args: any[]) {
            super(args);
            this._mutationObserver.observe(this);
        }

        /**
         * When specified, the items will be data sourced from the Stream Deck using the specified `dataSource` as the payload (sub) event.
         */
        @property()
        public dataSource?: string;

        /**
         * The text to display when the data source task is pending.
         */
        @property({
            attribute: 'loading',
            hasChanged: localizedStringPropertyOptions.hasChanged,
            converter: localizedStringPropertyOptions.converter
        })
        public loadingText = new LocalizedString('Loading...');

        /**
         * Gets the items within the data source as a task; these are either loaded from the child nodes, or the Stream Deck, based on the existence of `dataSource`.
         */
        public items = new Task<[string | undefined, boolean], DataSourceResult>(
            this,
            async ([dataSource]) => {
                if (dataSource === undefined) {
                    return this.getItemsFromChildNodes();
                }

                const result = await streamDeckClient.get('sendToPlugin', 'sendToPropertyInspector', (msg) => msg.payload?.event === this.dataSource, { event: this.dataSource });
                return result.payload.items;
            },
            () => [this.dataSource, this._itemsDirtyFlag]
        );

        /**
         * Renders the current items associated with the data source.
         * @param renderItem The delegate responsible for rending an item.
         * @param renderGroup The delegate responsible for rendering an item group.
         * @returns The HTML template that represents each items.
         */
        protected renderDataSource(renderItem: (item: Item) => unknown, renderGroup?: (group: ItemGroup, children: unknown) => unknown): unknown[] {
            if (this.items.value === undefined || this.items.value.length === 0) {
                return [undefined];
            }

            const map = (item: DataSourceResultItem): unknown => {
                if (this.isItemGroup(item)) {
                    return renderGroup ? renderGroup(item, item.children.map(map)) : undefined;
                } else if (this.isItem(item)) {
                    return renderItem(item);
                } else {
                    return undefined;
                }
            };

            return this.items.value.map(map);
        }

        /**
         * Maps the mutation observer's child nodes to a data source result.
         * @returns The items, as reduced from the child nodes within the mutation observer.
         */
        private getItemsFromChildNodes(): DataSourceResult {
            const reducer = (items: DataSourceResult, node: Node): DataSourceResult => {
                if (node instanceof HTMLOptGroupElement) {
                    items.push(<ItemGroup>{
                        label: i18n.translate(node.label),
                        children: Array.from(node.childNodes).reduce(reducer, [])
                    });
                } else if (node instanceof HTMLOptionElement) {
                    items.push(<Item>{
                        disabled: node.disabled,
                        label: i18n.translate(node.text),
                        value: node.value
                    });
                }

                return items;
            };

            return this._mutationObserver.items.reduce(reducer, []);
        }

        /**
         * Determines whether the specified object has the form of an `Item`.
         * @param object The object to check.
         * @returns `true` when the object structure matches.
         */
        private isItem(object: DataSourceResultItem): object is Item {
            return object && (<Item>object).value !== undefined;
        }

        /**
         * Determines whether the specified object has the form of an `ItemGroup`.
         * @param object The object to check.
         * @returns `true` when the object structure matches.
         */
        private isItemGroup(object: DataSourceResultItem): object is ItemGroup {
            return object && (<ItemGroup>object).children !== undefined && Array.isArray((<ItemGroup>object).children);
        }
    }

    return DataSourced;
};
