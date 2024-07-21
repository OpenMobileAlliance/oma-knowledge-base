---
title: Dynamic Table
description: Table component with dynamic capabiities
constructorName: ShDynamicTable
---


## Usage

The symplest usage of <b>{{ $doc.constructorName }}</b> can be shown in the following example:

::ShDynamicTable
---
dataUrl: "http://dummyjson.com/users"
dataField: "users"
columns:
  - name: "firstName"
    title: "First Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "lastName"
    title: "Last Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "username"
    title: "username"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "email"
    title: "Email"
    filter: false
    query: true
    sortable: false
    type: email
  - name: "gender"
    title: "Gender"
    filter: true
    sortable: true
    order: true
    type: text
  - name: "birthDate"
    title: "Birth Date"
    filter: false
    query: true
    sortable: true
    type: date
  - name: "age"
    title: "Age"
    filter: true
    query: true
    sortable: true
    type: number
ui:
  footer: text-sm p-0.5
  wrapper: shadow-2xl bg-red-50
  header: p-0.5
  search: p-4
header: Dymanic Table example
footer: "*Copyright &copy; 2024*"
---
::

To achieve the above the following code needs do be inserted in your Markdown text.

```mdc
::ShDynamicTable
---
dataUrl: "http://dummyjson.com/users"
dataField: "users"
columns:
  - name: "firstName"
    title: "First Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "lastName"
    title: "Last Name"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "username"
    title: "username"
    filter: false
    query: true
    sortable: true
    type: text
  - name: "email"
    title: "Email"
    filter: false
    query: true
    sortable: false
    type: email
  - name: "gender"
    title: "Gender"
    filter: true
    sortable: true
    order: true
    type: text
  - name: "birthDate"
    title: "Birth Date"
    filter: false
    query: true
    sortable: true
    type: date
  - name: "age"
    title: "Age"
    filter: true
    query: true
    sortable: true
    type: number
ui:
  footer: "text-sm"
header: Dymanic Table example
footer: "*Copyright &copy; 2024*"
---
::
```

The important parts are the `dataUrl`, and `columns`.  The prior one define the
*URL* from witch the data will be fetched. On the other hand, `columns` represent
a list of elements where each table column is described.

Each column is described using the following properties:
* `name` - the property name
* `title` - the label that will be show in the column header
* `filter` - true | false value indication that if the field in question should be used for quick filters
* `query` - true | false value indicating if this filed should be used in query search
* `sortable` - true | false value indication if this field should be used for ordering the data
* `type` - one of the following `[text, number, date]` values defining the type of the field value

Beside the above the `dataField` parameter can be used if the data fetched
holds the table items under a specific property.
This is typical in [REST API](https://aws.amazon.com/what-is/restful-api/){target="_blank"} results.
You can review the one used in [above example](http://dummyjson.com/users){target="_blank"}
where the items that we would like to show in the
table is stored in `users` field.

## Properties

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dataUrl</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>dataField</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>columns</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>header</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>footer</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>perPager</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ui</td>
      <td></td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
  </tbody>
</table>



## Configuration
The <b>{{ $doc.constructorName }}</b> component or constructor contains a
property `ui` with a following stucture:

```json
{
  wrapper: "",
  header: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  footer: "font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",
  search: "pb-4",
  filter: "",
  table: 'min-w-full divide-y divide-gray-300 dark:divide-gray-700',
  tbody: 'divide-y divide-gray-300 dark:divide-gray-700',
  tr: {
    base: '',
    selected: 'bg-gray-50 dark:bg-gray-800/50',
    active: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer'
  },
  th: {
    base: 'text-left rtl:text-right',
    padding: 'px-4 py-3.5',
    color: 'text-gray-900 dark:text-white',
    font: 'font-semibold',
    size: 'text-sm'
  },
  td: {
    base: 'whitespace-nowrap text-pretty ',
    padding: 'px-4 py-4',
    color: 'text-gray-500 dark:text-gray-400',
    font: '',
    size: 'text-sm'
  },
  pagination: '',
  perPage: [10, 25, 50, 100],
  default: {
    perPage: 10,
    sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
    sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
    sortButton: {
      icon: 'i-heroicons-arrows-up-down-20-solid',
      trailing: true,
      square: true,
      color: 'gray' as const,
      variant: 'ghost' as const,
      class: '-m-1.5'
    },
  }
}
```
# Class Descriptions

These represent the class values utilized in the Dynamic Table configuration. These values are customizable and can be adjusted or overridden through the UI properties' attributes.

## wrapper

- **Value**: `""`
- **Description**: This is an empty placeholder for additional wrapper styles that can be customized if needed.

## header

- **Value**: `"font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200"`
- **Description**: This defines the styling for the table header. The value includes a semi-bold font weight (`font-semibold`), centered text alignment (`text-center`), a light slate background in light mode (`bg-slate-200`), a dark slate background in dark mode (`dark:bg-slate-700`), and light slate text color in dark mode (`dark:text-slate-200`).

## footer

- **Value**: `"font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200"`
- **Description**: This specifies the styling for the table footer. It shares the same styling attributes as the header, ensuring consistency in appearance.

## search

- **Value**: `"pb-4"`
- **Description**: This defines the padding at the bottom for the search bar container. The value `pb-4` indicates a padding-bottom of 4 units.

## filter

- **Value**: `""`
- **Description**: This is an empty placeholder for additional filter styles that can be customized if needed.

## table

- **Value**: `"min-w-full divide-y divide-gray-300 dark:divide-gray-700"`
- **Description**: This specifies the base styling for the table element. The value ensures the table takes up the minimum width of its container (`min-w-full`), has horizontal dividers (`divide-y`) with a light gray color in light mode (`divide-gray-300`) and dark gray color in dark mode (`dark:divide-gray-700`).

## tbody

- **Value**: `"divide-y divide-gray-300 dark:divide-gray-700"`
- **Description**: This defines the styling for the table body. Similar to the table, it includes horizontal dividers with light gray color in light mode and dark gray color in dark mode.

## tr

### base

- **Value**: `""`
- **Description**: This is an empty placeholder for additional base styles for table rows.

### selected

- **Value**: `"bg-gray-50 dark:bg-gray-800/50"`
- **Description**: This specifies the background color for selected table rows. The value includes a light gray background in light mode (`bg-gray-50`) and a semi-transparent dark gray background in dark mode (`dark:bg-gray-800/50`).

### active

- **Value**: `"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"`
- **Description**: This defines the hover state for active table rows. The value includes a light gray background on hover in light mode (`hover:bg-gray-50`), a semi-transparent dark gray background on hover in dark mode (`dark:hover:bg-gray-800/50`), and changes the cursor to a pointer (`cursor-pointer`).

## th

### base

- **Value**: `"text-left rtl:text-right"`
- **Description**: This defines the base styling for table headers, ensuring left text alignment in LTR (Left-To-Right) mode (`text-left`) and right text alignment in RTL (Right-To-Left) mode (`rtl:text-right`).

### padding

- **Value**: `"px-4 py-3.5"`
- **Description**: This specifies the padding for table headers, with 4 units of padding on the left and right (`px-4`) and 3.5 units of padding on the top and bottom (`py-3.5`).

### color

- **Value**: `"text-gray-900 dark:text-white"`
- **Description**: This defines the text color for table headers, with dark gray text in light mode (`text-gray-900`) and white text in dark mode (`dark:text-white`).

### font

- **Value**: `"font-semibold"`
- **Description**: This specifies the font weight for table headers, using a semi-bold font (`font-semibold`).

### size

- **Value**: `"text-sm"`
- **Description**: This defines the font size for table headers, using a small font size (`text-sm`).

## td

### base

- **Value**: `"whitespace-nowrap text-pretty "`
- **Description**: This defines the base styling for table cells, ensuring no line breaks within the text (`whitespace-nowrap`) and a customizable class (`text-pretty`).

### padding

- **Value**: `"px-4 py-4"`
- **Description**: This specifies the padding for table cells, with 4 units of padding on all sides (`px-4 py-4`).

### color

- **Value**: `"text-gray-500 dark:text-gray-400"`
- **Description**: This defines the text color for table cells, with medium gray text in light mode (`text-gray-500`) and slightly lighter gray text in dark mode (`dark:text-gray-400`).

### font

- **Value**: `""`
- **Description**: This is an empty placeholder for additional font styles for table cells.

### size

- **Value**: `"text-sm"`
- **Description**: This defines the font size for table cells, using a small font size (`text-sm`).

## pagination

- **Value**: `""`
- **Description**: This is an empty placeholder for additional pagination styles that can be customized if needed.

## perPage

- **Value**: `[10, 25, 50, 100]`
- **Description**: This defines the options for the number of items to display per page, including 10, 25, 50, and 100 items.

## default

### perPage

- **Value**: `10`
- **Description**: This specifies the default number of items to display per page, set to 10.

### sortAscIcon

- **Value**: `"i-heroicons-bars-arrow-up-20-solid"`
- **Description**: This defines the icon used for indicating ascending sort order.

### sortDescIcon

- **Value**: `"i-heroicons-bars-arrow-down-20-solid"`
- **Description**: This defines the icon used for indicating descending sort order.

### sortButton

#### icon

- **Value**: `"i-heroicons-arrows-up-down-20-solid"`
- **Description**: This specifies the icon used for the sort button.

#### trailing

- **Value**: `true`
- **Description**: This indicates that the icon is placed at the trailing end of the button.

#### square

- **Value**: `true`
- **Description**: This ensures that the button has a square shape.

#### color

- **Value**: `"gray" as const`
- **Description**: This sets the color of the sort button to gray.

#### variant

- **Value**: `"ghost" as const`
- **Description**: This specifies the variant of the sort button as ghost, providing a subtle background.

#### class

- **Value**: `"-m-1.5"`
- **Description**: This defines the margin for the sort button, set to -1.5 units on all sides.

These style properties ensure that the Dynamic Table component is visually appealing, functional, and customizable, allowing for a wide range of design requirements to be met.
