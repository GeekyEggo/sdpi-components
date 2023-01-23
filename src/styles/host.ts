import { css } from 'lit';

export const hostStyle = css`
    :host {
        /* Box model */
        --spacer: 4px;
        --opacity-disabled: 0.5;

        /* Colors */
        --window-bg-color: #2d2d2d;
        --font-color: #969696;
        --input-bg-color: #3d3d3d;
        --input-font-color: #d8d8d8;

        --scrollbar-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

        /* Typography */
        --font-family: 'Segoe UI', Arial, Roboto, Helvetica sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        --font-size: 9pt;

        /* Pre-determined dimensions */
        --input-width: 227px;
        --input-height: 30px;
    }
`;
