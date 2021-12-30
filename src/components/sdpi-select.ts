import { createElement, observeChildList } from '../core/element';
import { clearOptions, createOption, createOptionGroup, setOnlyOption } from '../core/input';
import streamDeckClient from '../stream-deck/stream-deck-client';
import SDPIInput, { IFieldContent } from './sdpi-input';

interface Option {
    children?: Option[];
    label: string;
    value?: string;
}

export default class SDPISelect extends SDPIInput<HTMLSelectElement> {
    private _disabled: boolean = false;
    private refresh?: HTMLButtonElement;

    /* Gets the disabled state of this component */
    public get disabled(): boolean {
        return this._disabled;
    }

    /* Sets the input, and refresh button, to disabled */
    public set disabled(value: boolean) {
        if (this.input) {
            this.input.disabled = value;
        }

        if (this.refresh) {
            this.refresh.disabled = value;
        }
    }

    /**
     * Creates the content contained within the input column.
     * @returns The object that contains the input element, and the optional content wrapper.
     */
    protected createContent(): IFieldContent<HTMLSelectElement> {
        let parent = null;
        this.input = document.createElement('select');

        const dataSourceEndpoint = this.getAttribute('datasource');
        if (dataSourceEndpoint) {
            const refreshEndpoint = this.getAttribute('refresh');
            if (refreshEndpoint) {
                this.refresh = createElement('button', ['refresh-icon']);
                parent = createElement(
                    'div',
                    'row',
                    [
                        createElement('div', ['col', 'f-stretch'], [this.input]),
                        createElement('div', ['col', 'ml-2'], [this.refresh])
                    ]);

                this.refresh.addEventListener('click', () => this.loadOptions(refreshEndpoint));
            }

            this.loadOptions(dataSourceEndpoint);
        } else {
            observeChildList(this, (added: Node) => this.input?.appendChild(added), 'OPTGROUP', 'OPTION');
        }

        return {
            parent: parent,
            input: this.input
        };
    }

    /**
     * Loads the options from the specified data source, and populates the input.
     * @param dataSourceEndpoint The name of the endpoint to retrieve the options from.
     */
    private async loadOptions(dataSourceEndpoint: string): Promise<void> {
        if (!this.input) {
            return;
        }

        // Load the options.
        const request = streamDeckClient.get(dataSourceEndpoint);
        this.disabled = true;
        setOnlyOption(this.input, 'Loading...');

        // Set the options.
        const dataSource = await request;
        if (dataSource.payload && dataSource.payload.options) {
            this.setOptions(<Option[]>dataSource.payload.options);
        } else {
            setOnlyOption(this.input, 'Failed to load');
        }

        this.disabled = false;

    }

    /**
     * Sets the options of the input to the specified options.
     * @param options The options.
     */
    private setOptions(options?: Option[]): void {
        if (!this.input || !options) {
            return;
        }

        const mapOptions = (item: Option): HTMLOptGroupElement | HTMLOptionElement => {
            return item.children && item.children instanceof Array
                ? createOptionGroup(item.label, item.children?.map(mapOptions))
                : createOption(item.label, item.value);
        }

        clearOptions(this.input);
        options.map(mapOptions).forEach(option => this.input?.options.add(option));

        this.input.value = this.value || this.getAttribute('defaultvalue');
    }
}

customElements.define('sdpi-select', SDPISelect);
