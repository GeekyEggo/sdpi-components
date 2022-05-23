<p align="center">
  <a href="https://sdpi-components.dev" title="sdpi-components"><img src="assets/logo.svg" alt="sdpi-components Logo" height="256" width="256"/></a>
</p>
<h1 align="center">sdpi-components</h1>

[![build-shield]](https://github.com/GeekyEggo/sdpi-components/actions?query=workflow%3Abuild)
[![coverage-shield]](https://github.com/GeekyEggo/sdpi-components/actions?query=workflow%3Abuild)
[![docs-shield]](https://sdpi-components.dev)

[![twitter-shield]](https://twitter.com/geekyeggo)

Designed to complement Stream Deck plugins; sdpi-components provides a collection of web components that focuses on the plugin's property inspector, and makes persisting settings consistent, user-friendly, and hassle-free.

-   [✏️ Getting Started](#%EF%B8%8F-getting-started)
-   [📦 Example](#-example)
-   [🪶 Components](#-components)

## ✏️ Getting Started

Getting started is easy; simply reference the following JavaScript file in your property inspector, and you're ready to start adding [components](https://sdpi-components.dev/docs/components).

```html
<script src="https://cdn.jsdelivr.net/gh/geekyeggo/sdpi-components@v2/dist/sdpi-components.js"></script>
```

## 📦 Example

The example below highlights some of the components available; alternatively you can check out the [property inspector](./example/pi/index.html) in this repositories example plugin.

![The property inspector, in the Elgato Stream Deck software, with components from sdpi-components](./assets/example.png 'Example of sdpi-components in the property inspector')

```html
<!DOCTYPE html>
<head lang="en-gb">
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/gh/geekyeggo/sdpi-components@v2/dist/sdpi-components.js"></script>
</head>
<html>
    <body>
        <!--
            Given the following setup, the plugin's settings would look like this:
            {
                "name": string,
                "show_name": true | false,
                "fav_color": "red" | "green" | "blue"
            }
        -->

        <sdpi-item label="Name">
            <sdpi-textfield setting="name"></sdpi-textfield>
        </sdpi-item>

        <sdpi-item label="Show Name">
            <sdpi-checkbox setting="show_name"></sdpi-checkbox>
        </sdpi-item>

        <sdpi-item label="Favorite Color">
            <sdpi-select setting="fav_color" placeholder="Please choose a color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </sdpi-select>
        </sdpi-item>
    </body>
</html>
```

## 🪶 Components

To discover all of the components available, check out the [documentation](https://sdpi-components.dev/docs/components).

[![The property inspector with all of the components found in the sdpi-components library](./assets/all-components.png 'Some of the components in sdpi-components')](https://sdpi-components.dev/docs/components)

[build-shield]: https://github.com/GeekyEggo/sdpi-components/workflows/Build/badge.svg?branch=main
[coverage-shield]: assets/coverage.svg
[docs-shield]: https://img.shields.io/static/v1?style=flat&message=Documentation&label=&color=orange&logoColor=white&labelColor=grey&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTguOTM4IDguODc1SDE0LjE4OFY3LjYyNUg4LjkzOFpNOC45MzggMTEuODMzSDExLjk3OVYxMC41ODNIOC45MzhaTTguOTM4IDUuOTE3SDE0LjE4OFY0LjY2N0g4LjkzOFpNNy4yMDggMTQuNjI1UTYuMzc1IDE0LjYyNSA1LjgwMiAxNC4wNTJRNS4yMjkgMTMuNDc5IDUuMjI5IDEyLjY0NlYzLjg1NFE1LjIyOSAzLjAyMSA1LjgwMiAyLjQ0OFE2LjM3NSAxLjg3NSA3LjIwOCAxLjg3NUgxNlExNi44MzMgMS44NzUgMTcuNDA2IDIuNDQ4UTE3Ljk3OSAzLjAyMSAxNy45NzkgMy44NTRWMTIuNjQ2UTE3Ljk3OSAxMy40NzkgMTcuNDA2IDE0LjA1MlExNi44MzMgMTQuNjI1IDE2IDE0LjYyNVpNNCAxNy44MzNRMy4xNjcgMTcuODMzIDIuNTk0IDE3LjI2UTIuMDIxIDE2LjY4OCAyLjAyMSAxNS44NTRWNS42MDRIMy40NzlWMTUuODU0UTMuNDc5IDE2LjA2MiAzLjYzNSAxNi4yMTlRMy43OTIgMTYuMzc1IDQgMTYuMzc1SDE0LjI1VjE3LjgzM1oiLz48L3N2Zz4=
[twitter-shield]: https://img.shields.io/static/v1?style=flat&message=GeekyEggo&logo=Twitter&label=&color=blue&logoColor=white&labelColor=grey
