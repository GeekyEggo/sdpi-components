import { observeChildList } from '../core/element';
import { clearOptions, createOption, createOptionGroup } from '../core/input';
import streamDeckClient from '../stream-deck/stream-deck-client';
import SDPIInput, { IFieldContent } from './sdpi-input';

interface Option {
    children?: Option[];
    label: string;
    value?: string;
}

export default class SDPISelect extends SDPIInput<HTMLSelectElement> {
    /**
     * Creates the content contained within the input column.
     * @returns The object that contains the input element, and the optional content wrapper.
     */
    protected createContent(): IFieldContent<HTMLSelectElement> {
        const select = document.createElement('select');

        const dataSourceEndpoint = this.getAttribute('data-source');
        if (dataSourceEndpoint) {
            this.loadOptions(select, dataSourceEndpoint);
        } else {
            observeChildList(this, (added: Node) => select.appendChild(added), 'OPTGROUP', 'OPTION');
        }

        return {
            input: select
        };
    }

    /**
     * Loads the options from the specified data source, and populates the input.
     * @param select The select input to populate.
     * @param dataSourceEndpoint The name of the endpoint to retrieve the options from.
     */
    private async loadOptions(select: HTMLSelectElement, dataSourceEndpoint: string): Promise<void> {
        const request = streamDeckClient.get(dataSourceEndpoint);

        // Set the loading state of the dropdown.
        select.disabled = true;
        clearOptions(select);
        select.options.add(createOption(this.getAttribute('loading-text') || 'Loading...', ''));
        select.value = '';

        // Wait for the data source, and then populate the select element.
        const dataSource = await request;
        if (dataSource.payload.options) {
            const mapOptions = (item: Option): HTMLOptGroupElement | HTMLOptionElement => {
                return item.children && item.children instanceof Array
                    ? createOptionGroup(item.label, item.children?.map(mapOptions))
                    : createOption(item.label, item.value);
            }

            clearOptions(select);
            dataSource.payload.options.map(mapOptions).forEach((option: HTMLOptionElement | HTMLOptionElement) => select.options.add(option));
            select.value = this.value;
        }

        select.disabled = false;
    }
}

customElements.define('sdpi-select', SDPISelect);
