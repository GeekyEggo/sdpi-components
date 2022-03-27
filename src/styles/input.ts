import { css } from 'lit';

/**
 * Defines styles of elements commonly found in forms.
 */
export default css`
    :host {
        --input-padding: calc(var(--spacer) + 2px) var(--spacer);
    }

    button,
    input,
    select,
    textarea {
        /* Box model */
        box-sizing: border-box;
        outline: none;
        border: none;
        border-radius: 0;
        min-width: 100%;
        max-width: 100%;

        /* Background and typography */
        color: var(--color-secondary);
        font-size: var(--font-size);
        font-family: var(--font-family);
    }
`;
