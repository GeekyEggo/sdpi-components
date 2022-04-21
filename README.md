# 🪶 sdpi-components

Stream Deck Property Inspector Components (or sdpi-components for short) is a collection of web components designed to make persisting your plugin's settings simple, whilst also ensuring an accessibility-friendly and consistent experience for Stream Deck users.

-   [✏️ Getting Started](#%EF%B8%8F-getting-started)
-   [🚧 Components](#-components)
-   [📖 Documentation](#-documentation)

## ✏️ Getting Started

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

---

## 🚧 Components

This library is very much a work-in-progress, with the current objective to support inputs documented on the official [Stream Deck Developer Portal](https://developer.elgato.com/documentation/stream-deck/sdk/property-inspector/). Pull requests are welcomed. 💖

### ⚙️ Inputs

| Component                                       | Status | sdpi-component       |
| ----------------------------------------------- | ------ | -------------------- |
| [Button](#%EF%B8%8F-button)                     | ✅     | `sdpi-button`        |
| [Checkbox (Single)](#%EF%B8%8F-checkbox)        | ✅     | `sdpi-checkbox`      |
| [Checkbox (Multiple)](#%EF%B8%8F-checkbox-list) | ✅     | `sdpi-checkbox-list` |
| [Color](#%EF%B8%8F-color)                       | ✅     | `sdpi-color`         |
| Date                                            | ❌     |                      |
| Date (Month)                                    | ❌     |                      |
| Date (Week)                                     | ❌     |                      |
| [File](#%EF%B8%8F-file)                         | ✅     | `sdpi-file`          |
| [Password](#%EF%B8%8F-password)                 | ✅     | `sdpi-password`      |
| [Radio](#%EF%B8%8F-radio)                       | ✅     | `sdpi-radio`         |
| Range                                           | ❌     |                      |
| [Textarea](#%EF%B8%8F-textarea)                 | ✅     | `sdpi-textarea`      |
| [Textfield](#%EF%B8%8F-textfield)               | ✅     | `sdpi-textfield`     |
| [Select](#%EF%B8%8F-select)                     | ✅     | `sdpi-select`        |

### 🖌️ Styling

| Component                             | Status | sdpi-component | Notes                                                |
| ------------------------------------- | ------ | -------------- | ---------------------------------------------------- |
| [Field Items](#%EF%B8%8F-field-items) | ✅     | `sdpi-item`    |                                                      |
| Headings, Groups, Dividers            | ❌     |                | `h1..5`, `section`, `hr`                             |
| Lists                                 | ❌     |                | `ul`, `ol`, `li`                                     |
| Meter                                 | ❌     |                | `meter`                                              |
| Progress                              | ❌     |                | `progress`                                           |
| Tables                                | ❌     |                | `table`, `thead`, `tbody`, `tfoot`, `tr`, `td`, `th` |
| Details                               | ❌     |                | `detail`, `summary`                                  |

---

## 📖 Documentation

### 🖌️ Field Items

The `sdpi-item` component is designed to complement inputs by providing a recognisable layout, as well as a label associated with the input. An `sdpi-item` will typically represent a single piece of information within the settings, although is not limited to.

<!-- prettier-ignore -->
```html
<sdpi-item label="Name">
    <!-- Input goes here... -->
</sdpi-item>
```

**Configuration**

| Name    | Type     | Description                                                                                           |
| ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `label` | `string` | Label text that represents the field; when clicked, the first input within the component gains focus. |

---

### ⚙️ Button

![An input button in the Stream Deck property inspector using the sdpi-button web component](assets/sdpi-button.png?raw=true 'sdpi-button example')

<!-- prettier-ignore -->
```html
<sdpi-button onclick="javascript:alert('Hello World')">
    Click me
</sdpi-button>
```

**Configuration**

| Name       | Type      | Description                               |
| ---------- | --------- | ----------------------------------------- |
| `disabled` | `boolean` | Determines whether the input is disabled. |
| `value`    | `string`  | The value of the component.               |

---

### ☑️ Checkbox

![A checkbox input in the Stream Deck property inspector using the sdpi-checkbox web component](assets/sdpi-checkbox.png?raw=true 'sdpi-checkbox example')

<!-- prettier-ignore -->
```html
<sdpi-checkbox
    global
    setting="is_okay"
    label="Is everything okay?">
</sdpi-checkbox>
```

**Configuration**

| Name       | Type      | Description                                                                      |
| ---------- | --------- | -------------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings.    |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.                |
| `disabled` | `boolean` | Determines whether the input is disabled.                                        |
| `label`    | `string`  | Optional label text shown to the right of the checkbox.                          |
| `value`    | `boolean` | The value of the component (comparable to `checked`), and the persisted setting. |

---

### ☑️ Checkbox List

![A list of checkbox inputs in the Stream Deck property inspector using the sdpi-checkbox-list web component](assets/sdpi-checkbox-list.png?raw=true 'sdpi-checkbox-list example')

<!-- prettier-ignore -->
```html
<sdpi-checkbox-list setting="fav_numbers" columns="2">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</sdpi-checkbox-list>
```

**Configuration**

| Name       | Type       | Description                                                                   |
| ---------- | ---------- | ----------------------------------------------------------------------------- |
| `setting`  | `string`   | The path to the property where the value should be persisted in the settings. |
| `global`   | `boolean`  | When present, the value will be persisted to the global settings.             |
| `columns`  | `number`   | The number of columns to render the inputs in; valid values are 1-6.          |
| `disabled` | `boolean`  | Determines whether the inputs are disabled.                                   |
| `value`    | `string[]` | The value of the component, and the persisted setting.                        |

NB. Unlike `sdpi-checkbox`, the persisted setting of the `sdpi-checkbox-list` is `Set<string>` for the checked options. e.g.

```json
{
    "fav_numbers": ["1"]
}
```

---

### 🎨 Color

![A color picker input in the Stream Deck property inspector using the sdpi-color web component](assets/sdpi-color.png?raw=true 'sdpi-color example')

```html
<sdpi-color setting="selected_color"></sdpi-color>
```

**Configuration**

| Name      | Type      | Description                                                                   |
| --------- | --------- | ----------------------------------------------------------------------------- |
| `setting` | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`  | `boolean` | When present, the value will be persisted to the global settings.             |
| `value`   | `string`  | The value of the component, and the persisted setting.                        |

---

### 💾 File

![A file input in the Stream Deck property inspector using the sdpi-file web component](assets/sdpi-file.png?raw=true 'sdpi-file example')

<!-- prettier-ignore -->
```html
<sdpi-file
    setting="avatar"
    accept="image/png, image/jpeg">
</sdpi-file>
```

**Configuration**

| Name       | Type      | Description                                                                                 |
| ---------- | --------- | ------------------------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings.               |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.                           |
| `accept`   | `string`  | The types of files that can be selected; directly mapped to the input's `accept` attribute. |
| `disabled` | `boolean` | Determines whether the inputs are disabled.                                                 |
| `label`    | `string`  | Optional label displayed in the button used to activate the file selector (default `...`).  |
| `value`    | `string`  | The value of the component, and the persisted setting.                                      |

---

### 🔒 Password

![A password field input in the Stream Deck property inspector using the sdpi-password web component](assets/sdpi-password.png?raw=true 'sdpi-password example')

<!-- prettier-ignore -->
```html
<sdpi-password setting="api_key"></sdpi-password>
```

**Configuration**

| Name        | Type      | Description                                                                   |
| ----------- | --------- | ----------------------------------------------------------------------------- |
| `setting`   | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`    | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`  | `boolean` | Determines whether the input is disabled.                                     |
| `maxlength` | `number`  | Optional maximum length of the value.                                         |
| `value`     | `string`  | The value of the component, and the persisted setting.                        |

### 🔘 Radio

![A collection of radio inputs in the Stream Deck property inspector using the sdpi-radio web component](assets/sdpi-radio.png?raw=true 'sdpi-radio example')

```html
<sdpi-radio setting="fav_number" columns="3">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</sdpi-radio>
```

**Configuration**

| Name       | Type      | Description                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.             |
| `columns`  | `number`  | The number of columns to render the inputs in; valid values are 1-6.          |
| `disabled` | `boolean` | Determines whether the inputs are disabled.                                   |
| `value`    | `string`  | The value of the component, and the persisted setting.                        |

---

### 📚 Select

![A select input in the Stream Deck property inspector using the sdpi-select web component](assets/sdpi-select.png?raw=true 'sdpi-select example')

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

**Configuration**

| Name          | Type      | Description                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| `setting`     | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`      | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`    | `boolean` | Determines whether the input is disabled.                                     |
| `placeholder` | `string`  | Optional placeholder text shown in the input.                                 |
| `value`       | `string`  | The value of the component, and the persisted setting.                        |

---

### 📝 Textarea

![A textarea input in the Stream Deck property inspector using the sdpi-textarea web component](assets/sdpi-textarea.png?raw=true 'sdpi-textarea example')

<!-- prettier-ignore -->
```html
<sdpi-textarea
    setting="short_description"
    maxlength="250"
    rows="3"
    showlength>
</sdpi-textarea>
```

**Configuration**

| Name         | Type      | Description                                                                   |
| ------------ | --------- | ----------------------------------------------------------------------------- |
| `setting`    | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`     | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`   | `boolean` | Determines whether the input is disabled.                                     |
| `maxlength`  | `number`  | Optional maximum length of the value.                                         |
| `rows`       | `number`  | Defines the size, in rows, of the text area.                                  |
| `showlength` | `boolean` | When present, the current length and maximum length will be disabled.         |
| `value`      | `string`  | The value of the component, and the persisted setting.                        |

---

### 📝 Textfield

![A text field input in the Stream Deck property inspector using the sdpi-textfield web component](assets/sdpi-textfield.png?raw=true 'sdpi-textfield example')

<!-- prettier-ignore -->
```html
<sdpi-textfield
    setting="first_name"
    pattern="/^[a-z ,.'-]+$/i"
    placeholder="First name"
    required>
</sdpi-textfield>
```

**Configuration**

| Name          | Type      | Description                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| `setting`     | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`      | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`    | `boolean` | Determines whether the input is disabled.                                     |
| `maxlength`   | `number`  | Optional maximum length of the value.                                         |
| `pattern`     | `string`  | Optional regular expression used to validate the input.                       |
| `placeholder` | `string`  | Optional placeholder text shown in the input.                                 |
| `required`    | `boolean` | When present, an icon is shown in the input if the value is empty.            |
| `value`       | `string`  | The value of the component, and the persisted setting.                        |
