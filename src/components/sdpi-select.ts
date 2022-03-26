import { createElement, observeChildList } from '../core/element';
import { clearOptions, createOption, createOptionGroup, setOnlyOption } from '../core/input';
import streamDeckClient from '../stream-deck/stream-deck-client';
import SDPIInput from './sdpi-input';

interface Option {
    children?: Option[];
    label: string;
    value?: string;
}

export default class SDPISelect extends SDPIInput<HTMLSelectElement> {
    private _disabled = false;
    private refreshButton?: HTMLButtonElement;

    /* Gets the disabled state of this component */
    public get disabled(): boolean {
        return this._disabled;
    }

    /* Sets the input, and refresh button, to disabled */
    public set disabled(value: boolean) {
        if (this.input) {
            this.input.disabled = value;
        }

        if (this.refreshButton) {
            this.refreshButton.disabled = value;
        }
    }

    /**
     * Invokes a refresh of the drop down.
     */
    public refresh(): void {
        if (this.refreshButton) {
            this.refreshButton.click();
        } else {
            const dataSourceEndpoint = this.getAttribute('datasource');
            if (dataSourceEndpoint) {
                this.loadOptions(dataSourceEndpoint);
            }
        }
    }

    /**
     * Allows for bespoke rendering to the specified root element.
     * @param root The root element to append items to.
     */
    protected render(root: HTMLElement): void {
        this.input = document.createElement('select');

        // Determine if we should show a refresh button.
        const refreshEndpoint = this.getAttribute('refresh');
        if (refreshEndpoint) {
            this.refreshButton = createElement('button', ['refresh-icon']);
            root.appendChild(
                createElement('div', 'row', [
                    createElement('div', ['col', 'f-stretch'], [this.input]),
                    createElement('div', ['col', 'ml-2'], [this.refreshButton])
                ])
            );

            this.refreshButton.addEventListener('click', () => this.loadOptions(refreshEndpoint));
        } else {
            root.appendChild(this.input);
        }

        // Determine how we should populate the select input.
        const dataSourceEndpoint = this.getAttribute('datasource');
        if (dataSourceEndpoint) {
            this.loadOptions(dataSourceEndpoint);
        } else {
            observeChildList(this, (added: Node) => this.input?.appendChild(added), 'OPTGROUP', 'OPTION');
        }

        super.render(root);
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
        const request = streamDeckClient.get<Option[]>(dataSourceEndpoint);
        this.disabled = true;
        setOnlyOption(this.input, 'Loading...');

        // Set the options.
        const dataSource = await request;
        if (dataSource.payload && dataSource.payload.data) {
            this.setOptions(<Option[]>dataSource.payload.data);
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
        };

        clearOptions(this.input);
        options.map(mapOptions).forEach((option) => this.input?.options.add(option));

        this.input.value = this.value || this.getAttribute('default');
    }
}

customElements.define('sdpi-select', SDPISelect);
