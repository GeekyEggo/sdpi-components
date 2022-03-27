import { css } from 'lit';

/**
 * Defines common styles shared amongst components.
 */
export default css`
    :host {
        /* Box model */
        --spacer: 4px;

        /* Colors */
        --color-primary: #9a9a9a;
        --color-primary-bg: #2d2d2d;
        --color-secondary: #d8d8d8;
        --color-secondary-bg: #3d3d3d;

        /* Typography */
        --font-family: Arial, 'Segoe UI', Roboto, Helvetica sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        --font-size: 8pt;

        color: var(--color-primary);
        font-size: var(--font-size);
        font-weight: normal;
        font-family: var(--font-family);
    }

    .container {
        align-items: start;
        display: grid;
        grid-template-columns: 103px 1fr;
        margin: 5px 0 10px 0;
        max-width: 330px;
        -webkit-user-drag: none;
    }

    .container > div:first-child {
        margin-top: 6px;
        display: inline-block;
        padding-right: 11px;
        text-align: right;
    }
`;
