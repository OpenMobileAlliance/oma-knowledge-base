---
title: Column
description: Component representing the column with header and footer
constructorName: ShColumn
---

## Usage

The {{ $doc.constructorName }} component is used to organise content of one column in
multi-column layout. The column has `header`, that can render `title` and
`subtitle` in the header accompanied with an image.
Beside the main content the column also can have the `footer` content as well.

### Basic Column (no style)

This is how a basic {{ $doc.constructorName }} without style is displayed:

::ShColumn
---
title: Column Title
subtitle: "*Column Subtitle *"
footerText: "*Footer Text*"
---
This is `ShColumn` component design to show content of the first column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::

This is how the above {{ $doc.constructorName }} constructor is written:

```mdc
::ShColumn
---
title: Column Title #title
subtitle: "*Column Subtitle *" #use quotations
footerText: "*Footer Text*" # use quotations
---
This is `ShColumn` component design to show content of the first column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::
```

### Basic Column (with style)

This is how a basic {{ $doc.constructorName }} with style is displayed:

::ShColumn
---
ui:
  wrapper: border-8 text-center # added border around the column and center the text
title: Column Title
subtitle: "*Column Subtitle *"
footerText: "*Footer Text*"
---
This is `ShColumn` component design to show content of the first column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::

This is how the above {{ $doc.constructorName }} constructor is written:

```mdc
::ShColumn
---
ui:
  wrapper: border-8 text-center # added border around the column and center the text
title: Column Title #title
subtitle: "*Column Subtitle *" #use quotations
footerText: "*Footer Text*" # use quotations
---
This is `ShColumn` component design to show content of the first column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::
```


### Advanced Column
This is an advance example of a {{ $doc.constructorName }} constructor which contains:
* Column Title and Subtitle is centered,
* Markdown text,
* Bullet points,
* An image, and
* The footer contais two inner columns. 

::ShColumn
---
ui:
  wrapper: "border-8" #border to highlight the column contourn 
  header: #header styling
    title: "tracking-wider text-primary text-center" #title styling
    subtitle: "text-center" #subtitle styling
  footer: "text-center" #footer styling
title: Column Title # title
subtitle: "*Column Subtitle*" #subtitle with quotations to incorporate markdown constructor
footerText: | #footer text contains two columns
  :::ShTwoColumns
  ---
  ui:
    wrapper: border-8 bg-yellow-100 # show the border for the two columns with background color
  ---
  The footer can have  
  a complex content

  With great power comes  
  a great responsibility
  :::
---
The `ShColumn` component can contain any typical *Markdown* content, including:
* images 
* lists
* links
* ... or similar
* any supported component

[ ![coffee](https://free-images.com/sm/86a4/aroma_aromatic_beverage_bio.jpg){.w-1/2 .rounded-xl .not-prose .mb-2 .shadow-2xl} ]{.w-full .flex .justify-center}
::

This is how the above advance {{ $doc.constructorName }} is written: 
> Note: the body of the text is written between the end of the front-matter (`---`) and the end of the {{ $doc.constructorName }} constructor (`::`)

```mdc
::ShColumn
---
ui:
  wrapper: border-8 #border to highlight the column contourn
  header: #header styling
    title: "tracking-wider text-primary text-center" #title styling
    subtitle: "text-center" #subtitle styling
  footer: "text-center" #footer styling
title: Column Title # title
subtitle: "*Column Subtitle*" #subtitle with quotations to incorporate markdown constructor
footerText: | #footer text contains two columns
  :::ShTwoColumns
  ---
  ui:
    wrapper: border-8 bg-yellow-100 # show the border for the two columns with background color
  ---
  The footer can have  
  a complex content 

  With great power comes  
  a great responsibility
  :::
---
The `ShColumn` component can contain any typical *Markdown* content, including:
* images 
* lists
* links
* ... or similar
* any supported component

[ ![coffee](https://free-images.com/sm/86a4/aroma_aromatic_beverage_bio.jpg){.w-1/2 .rounded-xl .not-prose .mb-2 .shadow-2xl} ]{.w-full .flex .justify-center} 
::
```

## Column Props
These are the properties and attributes associated to the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The constructor allows you to organize content inside one column and then nest it easily in multi columns. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="7"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShColumn</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the column component. Each attribute within the <code>ui</code> property targets a specific part of the column display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>n/a</td>      
      <td>Defines the overall styling for the container that holds all the elements of the column. The attribute <code>border-8</code> is used to highlight the contur of the wrapper.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>This attribute is part of the <code>header</code> property. Styles applied to the text displaying the title of the column, such as font, size, color, etc.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>This attribute is part of the <code>header</code> property. Styles applied to the text displaying the subtitle of the column, such as font, size, color, etc.</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td>n/a</td>
      <td>Styles applied to the text displaying the footer text of the column, such as font, size, color, etc.</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>"1"</td>
      <td>As the component <code>ShColumn</code> represents a single column its value is not exposed or modified; the default value is "1". Used to determine the size of a column in a grid system</td>
    </tr>
    <tr>
      <td><code>main</code></td>
      <td>n/a</td>
      <td>Styles applied to the main content (text, image, list, etc.). This attribute only can be modified by modifying the logic on `sh-column.vue` file. It cannot be modified via the markdown document.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Title of the column</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Subtitle of the column</td>
    </tr>
    <tr>
      <td><code>footerText</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Text at the footer of the column</td>
    </tr>
  </tbody>
</table>


## Column Config
The style attributes can be modified via `ui` and are stored in the `sh-column.ts` and `sh-grid-sizes.ts` file:

`sh-column.ts`

```ts
{
  wrapper: "",
  header: {
    wrapper: "",
    title: "text-xl not-prose",
    subtitle: "text-slate-400 py-0 not-prose"
  },
  main: "",
  footer: "text-slate-300 py-0 not-prose",
  default: {
    size: 1
  }
}
```

___

`sh-grid-sizes.ts`

```ts
export default {
  gridCols: [
    "grid-cols-none",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
  ],
  colSpan: [
    "col-auto",
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12",
  ],
  gridRows: [
    "grid-rows-none",
    "grid-rows-1",
    "grid-rows-2",
    "grid-rows-3",
    "grid-rows-4",
    "grid-rows-5",
    "grid-rows-6",
    "grid-rows-7",
    "grid-rows-8",
    "grid-rows-9",
    "grid-rows-10",
    "grid-rows-11",
    "grid-rows-12",
  ],
  rowSpan: [
    "row-span-full",
    "row-span-1",
    "row-span-2",
    "row-span-3",
    "row-span-4",
    "row-span-5",
    "row-span-6",
    "row-span-7",
    "row-span-8",
    "row-span-9",
    "row-span-10",
    "row-span-11",
    "row-span-12",
  ]
}
```

### Attributes Description
This section describes the attributes values utilized in the {{ $doc.constructorName }} constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: `""`
*  **Description**: This defines the overall styling for the container. Currently, there are no styles applied to the `wrapper`.

_**header**_  
  *  _**wrapper**_  
     *  **Value**: `""`  
     *  **Description**: This defines the overall styling for the header container. Currently, there are no styles applied to the `wrapper`.  
  *  _**title**_  
     *  **Value**: `"text-xl not-prose"`  
     *  **Description**: This defines the styling for the title element. The value "text-xl not-prose" indicates that the title uses a larger text size (extra-large) and is not formatted as prose.  
  *  _**subTitle**_  
     *  **Value**: `"text-slate-400 py-0 not-prose"`  
     *  **Description**: This defines the styling for the subtitle element. The value "text-slate-400 py-0 not-prose" indicates that the subtitle uses a slate gray color with zero padding on the top and bottom, and is not formatted as prose.


_**main**_
*  **Value**: `""`
*  **Description**: This defines the overall styling for the main content area. Currently, there are no styles applied to the `main`.

_**footer**_
*  **Value**: `"text-slate-300 py-0 not-prose"`
*  **Description**: This defines the styling for the footer element. The value "text-slate-300 py-0 not-prose" indicates that the footer uses a lighter slate gray color with zero padding on the top and bottom, and is not formatted as prose.

_**default**_
*  **Value**: `{ size: 1 }`
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles. In this case, it sets a default size value of 1.

These style properties ensure that the {{ $doc.constructorName }} component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.