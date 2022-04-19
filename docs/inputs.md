# Inputs

-   [Button](#📝-button), `sdpi-button`
-   [Checkbox (Single)](#📝-checkbox), `sdpi-checkbox`
-   Checkbox (Many)
-   Color
-   Date
-   Date (Month)
-   Date (Week)
-   File
-   Radio
-   Range
-   [Textarea](#📝-textarea), `sdpi-textarea`
-   [Textfield](#📝-textfield), `sdpi-textfield`
-   [Select](#📝-select), `sdpi-select`

## ℹ️ Field Items

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

## 📝 Button

#### Example

<!-- prettier-ignore -->
```html
<sdpi-button onclick="javascript:alert('Hello World')">
    Click me
</sdpi-button>
```

![An input button in the Stream Deck property inspector using the sdpi-button web component](imgs/sdpi-button.png?raw=true 'sdpi-button example')

#### Attributes

| Name       | Type      | Description                               |
| ---------- | --------- | ----------------------------------------- |
| `disabled` | `boolean` | Determines whether the input is disabled. |
| `value`    | `string`  | Value of the input.                       |

## 📝 Checkbox

#### Example

<!-- prettier-ignore -->
```html
<sdpi-checkbox
    global
    setting="is_okay"
    label="Is everything okay?">
</sdpi-checkbox>
```

![A checkbox input in the Stream Deck property inspector using the sdpi-checkbox web component](imgs/sdpi-checkbox.png?raw=true 'sdpi-checkbox checkbox')

#### Attributes

| Name       | Type      | Description                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled` | `boolean` | Determines whether the input is disabled.                                     |
| `label`    | `string`  | Optional label text shown to the right of the checkbox.                       |
| `value`    | `boolean` | Value of the input (comparable to `checked`).                                 |

## 📝 Select

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

![A select input in the Stream Deck property inspector using the sdpi-select web component](imgs/sdpi-select.png?raw=true 'sdpi-select example')

#### Attributes

| Name          | Type      | Description                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| `setting`     | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`      | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`    | `boolean` | Determines whether the input is disabled.                                     |
| `placeholder` | `string`  | Optional placeholder text shown in the input.                                 |
| `value`       | `string`  | Value of the input.                                                           |

## 📝 Textarea

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

![A textarea input in the Stream Deck property inspector using the sdpi-textarea web component](imgs/sdpi-textarea.png?raw=true 'sdpi-textarea example')

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

## 📝 Textfield

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

![A text field input in the Stream Deck property inspector using the sdpi-textfield web component](imgs/sdpi-textfield.png?raw=true 'sdpi-textfield example')

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
