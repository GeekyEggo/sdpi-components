<!--

## {version}

### 🚨 Breaking
### ✨ Added
### 🐞 Fixed
### ♻️ Updated

-->

# Change Log

## vNext

### ♻️ Updated

-   Remove debug logging from `Focusable` mixin.

## v1.3

### ✨ Added

-   Add minification for HTML and CSS literal templates.

### 🐞 Fixed

-   Fix example reference link to use @v1.
-   Fix package.json dependencies.

### ♻️ Updated

-   Update package builder from webpack to rollup.

## v1.2

### ✨ Added

-   Add `streamDeckClient` to public namespace. ([read more](https://sdpi-components.dev/docs/helpers/stream-deck-client))
-   Add event handler for `sendToPropertyInspector` messages. ([ref](https://github.com/GeekyEggo/sdpi-components/blob/v1.2/src/stream-deck/stream-deck-client.ts#L17))

### ♻️ Updated

-   Update `streamDeckClient.get(...)` method to accept expected `receive` event name. ([ref](https://github.com/GeekyEggo/sdpi-components/blob/v1.2/src/stream-deck/stream-deck-client.ts#L114...L119))

### 🐞 Fixed

-   Fix type definitions for Stream Deck payloads. ([ref](https://github.com/GeekyEggo/sdpi-components/blob/v1.2/src/typings/stream-deck.d.ts))

## v1.1

### ✨ Added

-   Add namespace `SDPIComponents` to window to expose useful helpers.
-   Add `useGlobalSettings` hook to public namespace
-   Add `useSettings` hook to public namespace.

## v1.0

Initial release. 🥳

### ✨ Added

-   Add all inputs as components. ([read more](https://sdpi-components.dev/docs/components))
