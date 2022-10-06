<!--

## {version}

🚨 Break
✨ Add
🐞 Fix
♻️ Update

-->

# Change Log

## v2.1.1

-   ✨ Add `refresh()` to all data-sourced inputs.

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
