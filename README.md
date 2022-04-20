# 🪶 sdpi-components

Stream Deck Property Inspector Components (or sdpi-components for short) is a collection of web components designed to make persisting your plugin's settings simple, whilst also ensuring an accessibility-friendly and consistent experience for Stream Deck users.

-   [✏️ Getting Stared](#-basic-usage-example)
-   [🚧 Supported Components](#-supported-components)
-   [📖 Documentation](#-documentation)

## ✏️ Getting Stared

An example of a property inspector HTML file using the web components can be found [here](https://github.com/GeekyEggo/sdpi-components/blob/main/example/pi/index.html).

```html
<!DOCTYPE html>
<head lang="en-gb">
    <meta charset="utf-8" />
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

## 🚧 Supported Components

This library is very much a work-in-progress, with the current objective to support inputs documented on the official [Stream Deck Developer Portal](https://developer.elgato.com/documentation/stream-deck/sdk/property-inspector/). Pull requests are welcomed. 💖

### Inputs

| Component                 | Status | sdpi-component   | Notes                  |
| ------------------------- | ------ | ---------------- | ---------------------- |
| Button                    | ✅     | `sdpi-button`    |                        |
| Checkbox (Single)         | ✅     | `sdpi-checkbox`  |                        |
| Checkbox (Many)           | ❌     |                  | Partially implemented. |
| Color                     | ❌     |                  |                        |
| Date                      | ❌     |                  |                        |
| Date (Month)              | ❌     |                  |                        |
| Date (Week)               | ❌     |                  |                        |
| Elements                  | ✅     | `sdpi-item`      |                        |
| File                      | ❌     |                  |                        |
| File (Property Inspector) | ❌     |                  |                        |
| Radio                     | ✅     | `sdpi-radio`     |                        |
| Range                     | ❌     |                  |                        |
| Textarea                  | ✅     | `sdpi-textarea`  |                        |
| Textfield                 | ✅     | `sdpi-textfield` |                        |
| Select                    | ✅     | `sdpi-select`    |                        |

### Styling

| Component                  | Status | sdpi-component | Notes                                                |
| -------------------------- | ------ | -------------- | ---------------------------------------------------- |
| Headings, Groups, Dividers | ❌     |                | `h1..5`, `section`, `hr`                             |
| Lists                      | ❌     |                | `ul`, `ol`, `li`                                     |
| Meter                      | ❌     |                | `meter`                                              |
| Progress                   | ❌     |                | `progress`                                           |
| Tables                     | ❌     |                | `table`, `thead`, `tbody`, `tfoot`, `tr`, `td`, `th` |
| Details                    | ❌     |                | `detail`, `summary`                                  |

## 📖 Documentation

### Inputs

-   [Button](#-button), `sdpi-button`
-   [Checkbox (Single)](#-checkbox), `sdpi-checkbox`
-   Checkbox (Many)
-   Color
-   Date
-   Date (Month)
-   Date (Week)
-   File
-   [Radio](#-radio), `sdpi-radio`
-   Range
-   [Textarea](#-textarea), `sdpi-textarea`
-   [Textfield](#-textfield), `sdpi-textfield`
-   [Select](#-select), `sdpi-select`

---

### ℹ️ Field Items

The `sdpi-item` component is designed to complement inputs by providing a recognisable layout, as well as a label associated with the input. An `sdpi-item` will typically represent a single piece of information within the settings, although is not limited to.

#### Example

<!-- prettier-ignore -->
```html
<sdpi-item label="Name">
    <!-- Input goes here... -->
</sdpi-item>
```

#### Attributes

| Name    | Type     | Description                                                                                           |
| ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `label` | `string` | Label text that represents the field; when clicked, the first input within the component gains focus. |

---

### 📝 Button

#### Example

<!-- prettier-ignore -->
```html
<sdpi-button onclick="javascript:alert('Hello World')">
    Click me
</sdpi-button>
```

![An input button in the Stream Deck property inspector using the sdpi-button web component](assets/sdpi-button.png?raw=true 'sdpi-button example')

#### Attributes

| Name       | Type      | Description                               |
| ---------- | --------- | ----------------------------------------- |
| `disabled` | `boolean` | Determines whether the input is disabled. |
| `value`    | `string`  | Value of the input.                       |

---

### 📝 Checkbox

#### Example

<!-- prettier-ignore -->
```html
<sdpi-checkbox
    global
    setting="is_okay"
    label="Is everything okay?">
</sdpi-checkbox>
```

![A checkbox input in the Stream Deck property inspector using the sdpi-checkbox web component](assets/sdpi-checkbox.png?raw=true 'sdpi-checkbox checkbox')

#### Attributes

| Name       | Type      | Description                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled` | `boolean` | Determines whether the input is disabled.                                     |
| `label`    | `string`  | Optional label text shown to the right of the checkbox.                       |
| `value`    | `boolean` | Value of the input (comparable to `checked`).                                 |

---

### 📝 Radio

#### Example

```html
<sdpi-radio setting="fav_number" cols="3">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</sdpi-radio>
```

![A collection of radio inputs in the Stream Deck property inspector using the sdpi-radio web component](assets/sdpi-radio.png?raw=true 'sdpi-radio example')

#### Attributes

| Name       | Type      | Description                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.             |
| `cols`     | `number`  | The number of columns to render the radio inputs in; valid values are 1-6.    |
| `disabled` | `boolean` | Determines whether the input is disabled.                                     |
| `value`    | `string`  | Value of the input.                                                           |

---

### 📝 Select

#### Example

```html
<sdpi-select setting="color" placeholder="Please choose a color">
    <optgroup label="Primary Colors">
        <option value="#ff0000">Red</option>
        <option value="#00ff00">Green</option>
        <option value="#0000ff">Blue</option>
    </optgroup>
    <option value="#000000">Black</option>
    <option value="#ffffff">White</option>
</sdpi-select>
```

![A select input in the Stream Deck property inspector using the sdpi-select web component](assets/sdpi-select.png?raw=true 'sdpi-select example')

#### Attributes

| Name          | Type      | Description                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| `setting`     | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`      | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`    | `boolean` | Determines whether the input is disabled.                                     |
| `placeholder` | `string`  | Optional placeholder text shown in the input.                                 |
| `value`       | `string`  | Value of the input.                                                           |

---

### 📝 Textarea

#### Example

<!-- prettier-ignore -->
```html
<sdpi-textarea
    setting="short_description"
    maxlength="250"
    rows="3"
    showlength>
</sdpi-textarea>
```

![A textarea input in the Stream Deck property inspector using the sdpi-textarea web component](assets/sdpi-textarea.png?raw=true 'sdpi-textarea example')

#### Attributes

| Name         | Type      | Description                                                                   |
| ------------ | --------- | ----------------------------------------------------------------------------- |
| `setting`    | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`     | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`   | `boolean` | Determines whether the input is disabled.                                     |
| `maxlength`  | `number`  | Optional maximum length of the value.                                         |
| `rows`       | `number`  | Defines the size, in rows, of the text area.                                  |
| `showlength` | `boolean` | When present, the current length and maximum length will be disabled.         |
| `value`      | `string`  | Value of the input.                                                           |

---

### 📝 Textfield

#### Example

<!-- prettier-ignore -->
```html
<sdpi-textfield
    setting="first_name"
    pattern="/^[a-z ,.'-]+$/i"
    placeholder="First name"
    required>
</sdpi-textfield>
```

![A text field input in the Stream Deck property inspector using the sdpi-textfield web component](assets/sdpi-textfield.png?raw=true 'sdpi-textfield example')

#### Attributes

| Name          | Type      | Description                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| `setting`     | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`      | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`    | `boolean` | Determines whether the input is disabled.                                     |
| `pattern`     | `string`  | Optional regular expression used to validate the input.                       |
| `placeholder` | `string`  | Optional placeholder text shown in the input.                                 |
| `required`    | `boolean` | When present, an icon is shown in the input if the value is empty.            |
| `value`       | `string`  | Value of the input.                                                           |
