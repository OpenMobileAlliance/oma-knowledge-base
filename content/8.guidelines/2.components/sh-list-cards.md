---
title: ShListCards
description: This constructor is designed to showcase a list of cards, each represented by a component with associated properties. It provides a header section with a title, subtitle, and description, and dynamically renders the cards in a grid layout based on the provided settings and cardID.
constructorName: ShListCards
---

### Usage

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase its capabilities.

#### Example Basic

::ShListCards
---
description: This constructor is standalone
title: |
    Featured Projects
subtitle: |
    Check out our latest projects
text: |
    Here are some of the exciting projects we're working on.
cols: 3
gap: gap-6
---
    :::ShCard
    ---
    cardID: 15
    text: |
        15 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. 
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    cardID: 14
    text: |
        14 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    cardID: 200
    text: |
        200 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    cardID: 1
    text: |
        1 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::
::

This is how it is constructed.

```mdc
::ShListCards
---
description: This constructor is standalone
title: |
    Featured Projects
subtitle: |
    Check out our latest projects
text: |
    Here are some of the exciting projects we're working on.
cols: 3
gap: gap-6
---
    :::ShCard
    ---
    cardID: 15
    text: |
        15 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond. 
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    cardID: 14
    text: |
        14 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    cardID: 200
    text: |
        200 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    cardID: 1
    text: |
        1 NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::
::
```

### Props
These are the properties and attributes associated to the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The constructor creates a display format for a list of cards, including a header section and a grid layout for the cards. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShListCards</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the list cards component. Each attribute within the <code>ui</code> property targets a specific part of the list cards display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds the entire list of cards. This typically includes padding, margins, and general layout settings.</td>
    </tr>
    <tr>
      <td><code>header</code></td>
      <td>Styles applied to the header section, including the title, subtitle, and description. This can include font size, color, and alignment settings.</td>
    </tr>
    <tr>
      <td><code>base</code></td>
      <td>Styles applied to the grid layout of the cards. This typically includes grid columns and gap settings.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>The title of the list of cards, displayed prominently at the top of the header section.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>The subtitle, which provides additional context or description for the list of cards.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>n/a</td>
      <td>Additional descriptive text or instructions displayed below the subtitle.</td>
    </tr>
    <tr>
      <td><code>cols</code></td>
      <td>n/a</td>
      <td>The number of columns in the grid layout for the cards.</td>
    </tr>
    <tr>
      <td><code>gap</code></td>
      <td>n/a</td>
      <td>The gap size between the cards in the grid layout.</td>
    </tr>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShListCards
---
ui:
  header: "text-center mb-4"
  title: "text-4xl font-bold text-blue-600"
  subtitle: "text-2xl font-medium text-gray-700"
  text: "text-lg text-gray-600"
  base: "bg-gradient-to-b from-[#8FD2C4] rounded-2xl p-8"
cols: 2
gap: gap-6
title: |
    Featured Projects
subtitle: |
    Check out our latest projects
text: |
    Here are some of the exciting projects we're working on. Click on the cards to learn more!
---
    :::ShCard
    ---
    text: |
        NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    text: |
        NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShListCards
---
ui:
  header: "text-center mb-4"
  title: "text-4xl font-bold text-blue-600"
  subtitle: "text-2xl font-medium text-gray-700"
  text: "text-lg text-gray-600"
  base: "bg-gradient-to-b from-[#8FD2C4] rounded-2xl"
cols: 2
gap: gap-6
title: |
    Featured Projects
subtitle: |
    Check out our latest projects
text: |
    Here are some of the exciting projects we're working on. Click on the cards to learn more!
---
    :::ShCard
    ---
    text: |
        NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::

    :::ShCard
    ---
    text: |
        NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery. At its 20 centers and facilities across the country – and the only National Laboratory in space – [NASA](https://www.nasa.gov/) studies <a href="https://earth.google.com/web/" target="_blank">Earth</a>, including its climate, our Sun, and our solar system and beyond.
    title: |
        NASA Space Program
    subtitle: |
        Per aspera ad astra
    leftLabel: |
        Hello left [label](https://www.nasa.gov)
    centerLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">center</a> label
    rightLabel: |
        Hello <a href="https://earth.google.com/" target="_blank">right</a> label
    imageBackground: https://static.vecteezy.com/system/resources/previews/026/459/005/non_2x/abstract-background-images-wallpaper-ai-generated-free-photo.jpg 
    urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
    urlUpperBase: https://www.nasa.gov
    ---
    :::
::
```

### Config
These style properties can be modified via `ui` and are stored in the `sh-list-cards.ts` file:
```ts
export default {
    wrapper: "p-4 bg-white",
    header: "text-left mb-6",
    title: "text-3xl font-semibold text-black",
    subtitle: "text-xl text-gray-600",
    text: "text-base text-gray-500",
    base: "grid grid-cols-3 gap-4",
    // Default Tailwind CSS values
    default: {
        cols: 3,
        gap: "4"
    }
}
```

### Class Descriptions
These represent the class values utilized in the {{ $doc.constructorName }} constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

#### wrapper
- **Value**: `"p-4 bg-white"`
- **Description**: This defines the overall styling for the container holding the list of cards. The value `"p-4 bg-white"` includes padding of 4 units and a white background color.

#### header
- **Value**: `"text-left mb-6"`
- **Description**: This specifies the styling for the header section. The value `"text-left mb-6"` aligns the text to the left and applies a bottom margin of 6 units.

#### title
- **Value**: `"text-3xl font-semibold text-black"`
- **Description**: This defines the styling for the title. The value `"text-3xl font-semibold text-black"` includes a large font size (`text-3xl`), semi-bold font weight (`font-semibold`), and black text color (`text-black`).

#### subtitle
- **Value**: `"text-xl text-gray-600"`
- **Description**: This specifies the styling for the subtitle. The value `"text-xl text-gray-600"` includes a medium-large font size (`text-xl`) and gray color (`text-gray-600`).

#### text
- **Value**: `"text-base text-gray-500"`
- **Description**: This defines the styling for the descriptive text. The value `"text-base text-gray-500"` includes a base font size (`text-base`) and gray color (`text-gray-500`).

#### base
- **Value**: `"grid grid-cols-3 gap-4"`
- **Description**: This specifies the styling for the grid layout of the cards. The value `"grid grid-cols-3 gap-4"` includes a grid layout with three columns and a gap of 4 units between items.

#### default
- **Value**: `{ cols: 3, gap: "4" }`
- **Description**: This object contains default values for the number of columns and gap size in the grid layout.

These style properties ensure that the {{ $doc.constructorName }} component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.