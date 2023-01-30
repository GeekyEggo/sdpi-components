<!--

## {version}

🚨 Break
✨ Add
🐞 Fix
♻️ Update

-->

# Change Log

## v2.6.2

-   🐞 Fix alignment of checkbox and radio button labels.

## v2.6.1

-   🐞 Fix height of `sdpi-color`.

## v2.6.0

-   ✨ Add formatting to `sdpi-delegate` value.

## v2.5.0

-   ✨ Add `sdpi-delegate` component.
-   🐞 Fix overflow of long options in `sdpi-select`.
-   🐞 Fix `sdpi-color` not activating when label is selected.

## v2.4.0

-   ✨ Add `label-setting` to `sdpi-select`; allows the label to be persisted, and rendered if the option becomes unavailable.
-   ✨ Add `show-refresh` button option for `sdpi-select`.
-   ✨ Add `default` value option to `sdpi-calendar`, `sdpi-checkbox`, `sdpi-color`, `sdpi-radio`, `sdpi-range`, and `sdpi-select`.
-   ✨ Add `min` and `max` slots to `sdpi-range`, allowing for custom labels.
-   ✨ Add support for `placeholder` and `required` attributes to `sdpi-password`.
-   🐞 Fix font size and styling on Windows.
-   🐞 Fix `placeholder` always being set on `sdpi-textfield`.
-   🐞 Fix `pattern` always being set on `sdpi-textfield`, resulting in a validation warning.
-   ♻️ Improve performance of saving.

## v2.3.1

-   🐞 Fix `sdpi-select` not correctly selecting nested options.
-   ♻️ Update dependencies, including Lit, Jest, and rollup.

## v2.3.0

-   ✨ Add hot reload to Checkbox List, Radio, and Select data sources (see [`hot-reload`](https://sdpi-components.dev/docs/helpers/data-source)).
-   ✨ Add value casting to Checkbox List, Radio, and Select values (see `value-type`).

## v2.2.0

-   ✨ Add ability to refresh datasource of Checkbox List, Radio, and Select (see [`refresh()`](https://sdpi-components.dev/docs/helpers/data-source)).

## v2.1.0

-   ✨ Add support for localizations.
-   🐞 Fix Stream Deck typings.
-   ♻️ Update `useSettings` and `useGlobalSettings` to be asynchronous.
-   ♻️ Remove unnecessary extra call to get global settings even if `useGlobalSettings` was not used.

## v2.0.1

-   🐞 Fix version in license.

## v2.0.0

-   🐞 Fix jsDelivr cache.

## v1.4.0

-   ♻️ Remove debug logging from `Focusable` mixin.

## v1.3.0

-   ✨ Add minification for HTML and CSS literal templates.
-   🐞 Fix example reference link to use @v1.
-   🐞 Fix package.json dependencies.
-   ♻️ Update package builder from webpack to rollup.

## v1.2.0

-   ✨ Add `streamDeckClient` to public namespace. ([read more](https://sdpi-components.dev/docs/helpers/stream-deck-client))
-   ✨ Add event handler for `sendToPropertyInspector` messages. ([ref](https://github.com/GeekyEggo/sdpi-components/blob/v1.2/src/stream-deck/stream-deck-client.ts#L17))
-   🐞 Fix type definitions for Stream Deck payloads. ([ref](https://github.com/GeekyEggo/sdpi-components/blob/v1.2/src/typings/stream-deck.d.ts))
-   ♻️ Update `streamDeckClient.get(...)` method to accept expected `receive` event name. ([ref](https://github.com/GeekyEggo/sdpi-components/blob/v1.2/src/stream-deck/stream-deck-client.ts#L114...L119))

## v1.1.0

-   ✨ Add namespace `SDPIComponents` to window to expose useful helpers.
-   ✨ Add `useGlobalSettings` hook to public namespace
-   ✨ Add `useSettings` hook to public namespace.

## v1.0.0

Initial release. 🥳

-   ✨ Add all inputs as components. ([read more](https://sdpi-components.dev/docs/components))
