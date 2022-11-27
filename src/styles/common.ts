import { css } from 'lit';

export const commonStyle = css`
    .flex {
        align-items: stretch;
        display: flex;
    }

    .flex-grow {
        flex: 1 1 auto;
    }

    .flex-shrink {
        flex: 0 0 auto;
    }

    .margin-left {
        margin-left: var(--spacer);
    }
`;
