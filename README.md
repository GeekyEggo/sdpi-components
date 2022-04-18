# 🪶 sdpi-components

Stream Deck Property Inspector Components (or sdpi-components for short) is a collection of web components designed to make persisting your plugin's settings simple, whilst also ensuring an accessibility-friendly and consistent experience for Stream Deck users.

## ✏️ Basic Usage

```html
<!DOCTYPE html>
<head lang="en-gb">
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/gh/geekyeggo/sdpi-components/dist/sdpi.js"></script>
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
![image](https://user-images.githubusercontent.com/1429781/163813080-33d48b9c-5596-4f4e-8fb3-c94431728b8a.png)

## 🚧 Work In Progress

This library is very much a work-in-progress, with the current objective to support inputs documented on the official [Stream Deck Developer Portal](https://developer.elgato.com/documentation/stream-deck/sdk/property-inspector/). Pull requests are welcomed. 💖

### Inputs

| Component | Status | sdpi-component | Notes |
| --------- | ------ | -------------- | ----- |
| Button | ✅ | `sdpi-button` | |
| Checkbox (Single) | ✅ | `sdpi-checkbox` | |
| Checkbox (Many) | ❌ | | Partially implemented. |
| Color | ❌ | | |
| Date | ❌ | | |
| Date (Month) | ❌ | | |
| Date (Week) | ❌ | | |
| Elements | ✅ | `sdpi-item` | |
| File | ❌ | | |
| File (Property Inspector) | ❌ | | |
| Radio | ❌ | | |
| Range | ❌ | | |
| Textarea | ✅ | `sdpi-textarea` | |
| Textfield | ✅ | `sdpi-textfield` | |
| Select | ✅ | `sdpi-select` | |

### Styling

| Component | Status | sdpi-component | Notes |
| --------- | ------ | -------------- | ----- |
| Headings, Groups, Dividers | ❌ | | `h1..5`, `section`, `hr` |
| Lists | ❌ | | `ul`, `ol`, `li` |
| Meter | ❌ | | `meter` |
| Progress | ❌ | | `progress` |
| Tables | ❌ | | `table`, `thead`, `tbody`, `tfoot`, `tr`, `td`, `th` |
| Details | ❌ | | `detail`, `summary` |
