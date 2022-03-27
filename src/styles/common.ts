import { css } from 'lit';

/**
 * Defines common styles shared amongst components.
 */
export default css`
    :host {
        /* Box model variables */
        --spacer: 4px;

        /* Background and typography variables */
        --color-primary: #9a9a9a;
        --color-primary-bg: #2d2d2d;
        --color-secondary: #d8d8d8;
        --color-secondary-bg: #3d3d3d;
        --color-input-bg: #969696;
        --font-size: 8pt;

        /* Background and typography */
        background-color: var(--color-primary-bg);
        color: var(--color-primary);
        font-size: var(--font-size);
        font-weight: normal;
        font-family: Tahoma, Verdana, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }

    .container {
        display: grid;
        grid-template-columns: 103px 1fr;
        align-items: center;
        margin: 5px 0 10px 0;
        max-width: 330px;
        -webkit-user-drag: none;
    }

    .container > div:first-child {
        text-align: right;
        padding-right: 11px;
    }
`;
