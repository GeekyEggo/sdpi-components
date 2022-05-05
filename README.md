<p align="center">
  <a href="https://sdpi-components.dev" title="sdpi-components"><img src="assets/logo.svg" alt="sdpi-components Logo" height="256" width="256"/></a>
</p>
<h1 align="center">sdpi-components</h1>

[![docs-shield]](https://sdpi-components.dev) [![twitter-shield]](https://twitter.com/geekyeggo)

Designed to complement Stream Deck plugins; sdpi-components provides a collection of web components that focuses on the plugin's property inspector, and makes persisting settings consistent, user-friendly, and hassle-free.

-   [✏️ Getting Started](#%EF%B8%8F-getting-started)
-   [📦 Example](#-example)
-   [🪶 Components](#-components)

## ✏️ Getting Started

Getting started is easy; simply reference the following JavaScript file in your property inspector, and you're ready to start adding [components](https://sdpi-components.dev/docs/components).

```html
<script src="https://cdn.jsdelivr.net/gh/geekyeggo/sdpi-components/dist/sdpi-components.js"></script>
```

## 📦 Example

The example below highlights some of the components available; alternatively you can check out the [property inspector](./example/pi/index.html) in this repositories example plugin.

![The property inspector, in the Elgato Stream Deck software, with components from sdpi-components](./assets/example.png 'Example of sdpi-components in the property inspector')

```html
<!DOCTYPE html>
<head lang="en-gb">
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/gh/geekyeggo/sdpi-components/dist/sdpi-components.js"></script>
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

[twitter-shield]: https://img.shields.io/static/v1?style=flat-square&message=GeekyEggo&logo=Twitter&label=&color=blue&logoColor=white&labelColor=grey
[docs-shield]: https://img.shields.io/static/v1?style=flat-square&message=Documentation&logo=readthedocs&label=&color=orange&logoColor=white&labelColor=grey
