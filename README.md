# 🪶 sdpi-components

Stream Deck Property Inspector Components (or sdpi-components for short) is a collection of web components designed to make persisting your plugin's settings simple, whilst also ensuring an accessibility-friendly and consistent experience for Stream Deck users.

-   [✏️ Getting Started](#%EF%B8%8F-getting-started)
-   [🚧 Components](#-components)
-   [📖 Documentation](#-documentation)
-   [⚡ Extensions](#-extensions)

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

| Component                                 | Status | sdpi-component                          |
| ----------------------------------------- | ------ | --------------------------------------- |
| [Button](#%EF%B8%8F-button)               | ✅     | `sdpi-button`                           |
| [Checkbox](#%EF%B8%8F-checkbox)           | ✅     | `sdpi-checkbox`                         |
| [Checkbox List](#%EF%B8%8F-checkbox-list) | ✅     | `sdpi-checkbox-list`                    |
| [Color](#-color)                          | ✅     | `sdpi-color`                            |
| [Date](#%EF%B8%8F-calendar)               | ✅     | `sdpi-calendar`, `date` type.           |
| [Datetime (Local)](#%EF%B8%8F-calendar)   | ✅     | `sdpi-calendar`, `datetime-local` type. |
| [File](#-file)                            | ✅     | `sdpi-file`                             |
| [Month](#%EF%B8%8F-calendar)              | ✅     | `sdpi-calendar`, `month` type           |
| [Password](#-password)                    | ✅     | `sdpi-password`                         |
| [Radio](#-radio)                          | ✅     | `sdpi-radio`                            |
| [Range](#%EF%B8%8F-range)                 | ✅     | `sdpi-range`                            |
| [Select](#-select)                        | ✅     | `sdpi-select`                           |
| [Textarea](#-textarea)                    | ✅     | `sdpi-textarea`                         |
| [Textfield](#-textfield)                  | ✅     | `sdpi-textfield`                        |
| [Time](#%EF%B8%8F-calendar)               | ✅     | `sdpi-calendar`, `time` type            |
| [Week](#%EF%B8%8F-calendar)               | ✅     | `sdpi-calendar`, `week` type            |

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

The `sdpi-item` component is designed to complement inputs by providing a recognisable layout, as well as a label associated with the input. An `sdpi-item` will typically represent a single piece of information within the settings, although is not limited to such.

❌ Without `sdpi-item`

![An input text field in the Stream Deck property inspector that is not wrapped with an sdpi-item component, the layout is inconsistent](assets/sdpi-item_without.png?raw=true 'Without sdpi-item example')

✅ With `sdpi-item`

![An input text field in the Stream Deck property inspector wrapped in an sdpi-item component, the results are a consistent layout](assets/sdpi-item_with.png?raw=true 'With sdpi-item example')

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

| Name         | Type       | Description                                                                       |
| ------------ | ---------- | --------------------------------------------------------------------------------- |
| `setting`    | `string`   | The path to the property where the value should be persisted in the settings.     |
| `global`     | `boolean`  | When present, the value will be persisted to the global settings.                 |
| `columns`    | `number`   | The number of columns to render the inputs in; valid values are 1-6.              |
| `datasource` | `string`   | The optional remote data source ([read more](#🔃-data-source)).                   |
| `disabled`   | `boolean`  | Determines whether the input is disabled.                                         |
| `loading`    | `string`   | When a `datasource` is specified, this text is shown whilst the items are loaded. |
| `value`      | `string[]` | The value of the component, and the persisted setting.                            |

NB. Unlike `sdpi-checkbox`, the persisted setting of the `sdpi-checkbox-list` is `Set<string>` for the checked options. e.g.

```json
{
    "fav_numbers": ["1"]
}
```

---

### 🗓️ Calendar

The `sdpi-calendar` component encompasses capturing the input of dates and times based on the `type` attribute and supports [`date`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date), [`datetime-local`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local), [`month`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month), [`week`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week), and [`time`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time).

#### `date`

![A date input in the Stream Deck property inspector using the sdpi-calendar web component](assets/sdpi-calendar_date.png?raw=true 'sdpi-calendar date example')

<!-- prettier-ignore -->
```html
<sdpi-calendar
    setting="important_date"
    type="date">
</sdpi-calendar>
```

#### `datetime-local`

![A localised date time input in the Stream Deck property inspector using the sdpi-calendar web component](assets/sdpi-calendar_datetime.png?raw=true 'sdpi-calendar date time example')

<!-- prettier-ignore -->
```html
<sdpi-calendar
    setting="fav_datetime"
    type="datetime-local">
</sdpi-calendar>
```

#### `month`

![A month input in the Stream Deck property inspector using the sdpi-calendar web component](assets/sdpi-calendar_month.png?raw=true 'sdpi-calendar month example')

<!-- prettier-ignore -->
```html
<sdpi-calendar
    setting="suniest_month"
    type="month">
</sdpi-calendar>
```

#### `week`

![A week input in the Stream Deck property inspector using the sdpi-calendar web component](assets/sdpi-calendar_week.png?raw=true 'sdpi-calendar week example')

<!-- prettier-ignore -->
```html
<sdpi-calendar
    setting="week_of_the_year"
    type="week">
</sdpi-calendar>
```

#### `time`

![A time input in the Stream Deck property inspector using the sdpi-calendar web component](assets/sdpi-calendar_time.png?raw=true 'sdpi-calendar time example')

<!-- prettier-ignore -->
```html
<sdpi-calendar
    setting="time_of_day"
    type="time">
</sdpi-calendar>
```

**Configuration**

| Name       | Type      | Description                                                                                                                                       |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings.                                                                     |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.                                                                                 |
| `disabled` | `boolean` | Determines whether the input is disabled.                                                                                                         |
| `max`      | `sting`   | The latest acceptable date.                                                                                                                       |
| `min`      | `sting`   | The earliest acceptable date.                                                                                                                     |
| `step`     | `number`  | Specifies the granularity that the value must adhere to ([read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#step)). |
| `type`     | `string`  | Defines the type of input; valid values are `date`, `datetime-local`, `month`, `week`, or `time`.                                                 |
| `value`    | `string`  | The value of the component, and the persisted setting.                                                                                            |

---

### 🎨 Color

![A color picker input in the Stream Deck property inspector using the sdpi-color web component](assets/sdpi-color.png?raw=true 'sdpi-color example')

```html
<sdpi-color setting="selected_color"></sdpi-color>
```

**Configuration**

| Name       | Type      | Description                                                                   |
| ---------- | --------- | ----------------------------------------------------------------------------- |
| `setting`  | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`   | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled` | `boolean` | Determines whether the input is disabled.                                     |
| `value`    | `string`  | The value of the component, and the persisted setting.                        |

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
| `disabled` | `boolean` | Determines whether the input is disabled.                                                   |
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

| Name         | Type      | Description                                                                       |
| ------------ | --------- | --------------------------------------------------------------------------------- |
| `setting`    | `string`  | The path to the property where the value should be persisted in the settings.     |
| `global`     | `boolean` | When present, the value will be persisted to the global settings.                 |
| `columns`    | `number`  | The number of columns to render the inputs in; valid values are 1-6.              |
| `datasource` | `string`  | The optional remote data source ([read more](#🔃-data-source)).                   |
| `disabled`   | `boolean` | Determines whether the input is disabled.                                         |
| `loading`    | `string`  | When a `datasource` is specified, this text is shown whilst the items are loaded. |
| `value`      | `string`  | The value of the component, and the persisted setting.                            |

---

### 🎚️ Range

![A range input in the Stream Deck property inspector using the sdpi-range web component](assets/sdpi-range.png?raw=true 'sdpi-range example')

<!-- prettier-ignore -->
```html
<sdpi-range
    setting="brightness"
    min="0"
    max="100"
    step="5"
    showlabels>
</sdpi-range>
```

**Configuration**

| Name         | Type      | Description                                                                   |
| ------------ | --------- | ----------------------------------------------------------------------------- |
| `setting`    | `string`  | The path to the property where the value should be persisted in the settings. |
| `global`     | `boolean` | When present, the value will be persisted to the global settings.             |
| `disabled`   | `boolean` | Determines whether the inputs are disabled.                                   |
| `max`        | `number`  | Mmaximum possible value.                                                      |
| `min`        | `number`  | Minimum possible value.                                                       |
| `showlabels` | `boolean` | When specified, the minimum and maximum labels are shown.                     |
| `step`       | `number`  | Specifies the granularity that the value must adhere to.                      |
| `value`      | `string`  | The value of the component, and the persisted setting.                        |

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

| Name          | Type      | Description                                                                       |
| ------------- | --------- | --------------------------------------------------------------------------------- |
| `setting`     | `string`  | The path to the property where the value should be persisted in the settings.     |
| `global`      | `boolean` | When present, the value will be persisted to the global settings.                 |
| `datasource`  | `string`  | The optional remote data source ([read more](#🔃-data-source)).                   |
| `disabled`    | `boolean` | Determines whether the input is disabled.                                         |
| `loading`     | `string`  | When a `datasource` is specified, this text is shown whilst the items are loaded. |
| `placeholder` | `string`  | Optional placeholder text shown in the input.                                     |
| `value`       | `string`  | The value of the component, and the persisted setting.                            |

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

---

## ⚡ Extensions

### 🔃 Data Source

_Relates to `sdpi-checkbox-list`, `sdpi-radio`, `sdpi-select`._

Sometimes it's necessary to load options for an input dynamically, e.g. a drop down that displays the computers audio devices, or OBS scenes. Thankfully this can easily be achieved through the use of the `datasource` attribute, e.g.

<!-- prettier-ignore -->
```html
<sdpi-select
    setting="color"
    datasource="getColors"
    loading="Fetching colors...">
</sdpi-select>
```

When a `datasource` attribute is specified, the following occurs:

```mermaid
sequenceDiagram
    participant i as Input Component
    participant pi as Property Inspector
    participant p as Plugin
    i ->> pi: Component with datasource attribute
    pi ->> p: `sendToPlugin` requests data source
    note over  p: { ..., payload: { event: <datasource> } }
    p ->> pi: `sendToPropertyInspector` returns data source
    note over pi: { ..., payload: { event: <datasource>, items: <items> } }
    pi ->> i: Data source rendered as options
```

⚠️ NB. The data source `items` must match the required schema.

```typescript
declare type DataSourceResult = DataSourceResultItem[];
declare type DataSourceResultItem = Item | ItemGroup;

declare type Item = {
    disabled?: boolean;
    label?: string;
    value: string;
};

declare type ItemGroup = {
    label?: string;
    children: Item[];
};
```

#### Example

To generate an `sdpi-select` like the image below, you would use the following JSON payload.

![An sdpi-select component demonstrating the use of the datasource attribute](assets/datasource-example.png?raw=true 'datasource example')

```js
{
    action: "com.geekyeggo.sdpi.action",
    event: "sendToPropertyInspector",
    context: uniqueValue,
    payload: {
        event: "getColors",
        items: [{
            label: 'Primary Colors',
            children: [{
                label: 'Red',
                value: '#ff0000'
            }, {
                label: 'Green',
                value: '#00ff00'
            }, {
                label: 'Blue',
                value: '#0000ff'
            }]
        }, {
            label: 'Black',
            value: '#000000'
        }, {
            label: 'White',
            value: '#ffffff'
        }]
    }
}
```
