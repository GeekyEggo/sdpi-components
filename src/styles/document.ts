import { css } from "lit";

/**
 * Provides a common set of CSS styles that are applied to the document.
 */
const style = document.createElement("style");
style.innerHTML = css`
	/* Styles added by sdpi library. */
	html,
	body {
		background-color: #2d2d2d;
	}
	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
	::-webkit-scrollbar-thumb {
		background-color: #666666;
		border-radius: 5px;
	}
`.cssText;

document.head.appendChild(style);
