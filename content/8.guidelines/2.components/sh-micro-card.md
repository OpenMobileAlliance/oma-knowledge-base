---
title: Micro Card
description: Quick show of information in compact form.
constructorName: ShMicroCard
layout: doc
---

### Usage

::ShAlert
---
typeAlert: danger
---
When using links (anchors) in this component, use either `urlWrapper` or create a link from `title`, `subtitle` or `text`.
</br>
Do NOT combine both as it can result in undesired effects.
::

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.

##### Example Basic

::ShSegment
---
ui:
  wrapper: p-10
---
  :::ShMicroCard
  ---
  urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
  urlWrapper: https://www.nasa.gov/
  title: |
      NASA 
  subtitle: |
      Explore the Universe
  text: |
      NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
  ---
  :::
::

This is how it is constructed

```mdc
::ShMicroCard
---
urlImage: https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png
urlWrapper: https://www.nasa.gov/
title: |
  NASA 
subtitle: |
  Explore the Universe
text: |
  NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
---
::
```

<b>{{ $doc.constructorName }}</b> constructor also comes with a `layout` option:

<!--First Two Layouts-->
::ShMultiColumn
---
ui:
  wrapper: p-10 flex-col
cols: 2
---
  :::ShMicroCard
  ---
  layout: translate
  coverImage: https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA Merecury
  icon: game-icons:planet-core
  urlWrapper: https://science.nasa.gov/mercury/
  title: |
      Mercury
  subtitle: |
      God of Translators and Interpreters
  text: |
      The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. 
  ---
  :::

  :::ShMicroCard
  ---
  layout: opacity
  coverImage: https://science.nasa.gov/wp-content/uploads/2023/05/venus-single.png?w=398
  #coverIcon: lineicons:nasa
  #coverText: NASA Venus
  icon: fa6-solid:user-astronaut
  urlWrapper: https://science.nasa.gov/venus/
  title: |
      Venus 
  subtitle: |
      How hot is too hot?
  text: |
      Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.
  ---
  :::
::

<!--How to construct them-->
::ShMultiColumn
---
cols: 2
---
```mdc
::ShMicroCard
---
layout: translate
coverImage: https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg
#coverIcon: lineicons:nasa
#coverText: NASA Mercury
icon: game-icons:planet-core
urlWrapper: https://science.nasa.gov/mercury/
title: |
  Mercury
subtitle: |
  God of Translators and Interpreters
text: |
  The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. 
---
::
```

```mdc
::ShMicroCard
---
layout: opacity
coverImage: https://science.nasa.gov/wp-content/uploads/2023/05/venus-single.png?w=398
#coverIcon: lineicons:nasa
#coverText: NASA Venus
icon: fa6-solid:user-astronaut
urlWrapper: https://science.nasa.gov/venus/
title: |
  Venus 
subtitle: |
  How hot is too hot?
text: |
  Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.
---
::
```
::

<!--Second Two Layouts-->

::ShMultiColumn
---
ui:
  wrapper: p-10 flex-col
cols: 2
---
  :::ShMicroCard
  ---
  layout: flat
  icon: gis:earth-euro-africa-o
  urlWrapper: https://science.nasa.gov/earth/facts/
  title: |
      Earth 
  subtitle: |
      The Blue Marble
  text: |
      Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.
  ---
  :::

  :::ShMicroCard
  ---
  layout: teaser
  coverImage: https://scx2.b-cdn.net/gfx/news/hires/2015/interestingf.jpg
  #coverIcon: lineicons:nasa
  #coverText: NASA Mars
  icon: token-branded:safemars
  urlWrapper: https://science.nasa.gov/mars/
  title: |
      Mars 
  subtitle: |
      Meet the neighbour
  text: |
      Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots
  ---
  :::
::

<!--How to construct them-->
::ShMultiColumn
---
cols: 2
---
```mdc
::ShMicroCard
---
layout: flat
icon: gis:earth-euro-africa-o
urlWrapper: https://science.nasa.gov/earth/facts/
title: |
  Earth 
subtitle: |
  The Blue Marble
text: |
  Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.
---
::
```

```mdc
::ShMicroCard
---
layout: teaser
coverImage: https://scx2.b-cdn.net/gfx/news/hires/2015/interestingf.jpg
#coverIcon: lineicons:nasa
#coverText: NASA Mars
icon: token-branded:safemars
urlWrapper: https://science.nasa.gov/mars/
title: |
  Mars 
subtitle: |
  Meet the neighbour
text: |
  Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots
---
::
```
::

### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor represents a micro card that can shocase a company logo with some punchlines and lighter descriptions. Whole card can be a link to a certain location or website. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

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
      <td rowspan="14"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config[layout]wrapper</code>
      <td>Defines the overall styling for the container that holds all the elements of the component.</td>
    </tr>
    <tr>
      <td><code>coverImage</code></td>
      <td><code>config[layout]coverImage</code>
      <td>Defines the styling for the cover image that spans across the whole constructor</td>
    </tr>
    <tr>
      <td><code>coverText</code></td>
      <td><code>config[layout]coverText</code>
      <td>Defines the styling for the cover text (including the color of the background) that spans across the whole constructor</td>
    </tr>
    <tr>
      <td><code>coverIconWrapper</code></td>
      <td><code>config[layout]coverIconWrapper</code>
      <td>Defines the styling for the wrapper of the <code>coverIcon</code> component</td>
    </tr>
    <tr>
      <td><code>coverIcon</code></td>
      <td><code>config[layout]coverIcon</code>
      <td>Defines the styling for the icon used for covering the constructor</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td><code>config[layout]image</code>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td><code>config[layout]icon</code>
      <td>Styles applied to the icon element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><code>config[layout]title</code>
      <td>Styles applied to the title text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td><code>config[layout]subtitle</code>
      <td>Styles applied to the subtitle text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>config[layout]text</code>
      <td>Styles applied to the text content, such as font size and color.</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
      <td><code>layout</code></td>
      <td>n/a</td>
      <td><code>default</code></td>
      <td>This property allows us to change layout of a constructor which in effect has that our styling is changing and we get different look and effect out of the same component. <b>Options:</b> <code>default</code>, <code>flat</code>, <code>teaser</code>, <code>translate</code> & <code>opacity</code></td>
    </tr>
    <tr>
      <td><code>urlWrapper</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The URL that wraps the component, typically for navigation purposes.</td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>n/a</td>
      <td><code>_self</code></td>
      <td>Specifies where to open the linked document.</td>
    </tr>
    <tr>
      <td><code>coverImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Link to external or internal image that will be presented as a cover across the whole constructor</td>
    </tr>
    <tr>
      <td><code>coverIcon</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Any valid icon from <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a></td>
    </tr>
    <tr>
      <td><code>coverText</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Inscription that will be presented as a cover across the whole constructor (full Markdown support)</td>
    </tr>
    <tr>
      <td><code>urlImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The source URL of the image to be displayed.</td>
    </tr>
    <tr>
      <td><code>altImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Alternative text for the image, used for accessibility and in case the image fails to load.</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Any valid icon from <a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a></td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The title text to be displayed.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The subtitle text to be displayed, if any.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The main text content to be displayed.</td>
    </tr>
    <tr>
      <td><code>clipboard</code></td>
      <td>n/a</td>
      <td><code>false</code></td>
      <td>To show or not the copy button on hover over. It can either be <code>true</code> or <code>false</code></td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
    </tr>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShSegment
---
ui:
  wrapper: p-10
---
  :::ShMicroCard
  ---
  ui:
    default: 
      title: text-red-500
      text: text-oma-purple-300
  urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
  urlWrapper: https://www.axios.com/
  title: |
      Microsoft sets non-profit to cut software related carbon emissions. 
  subtitle: |
      Axios gets you smarter, faster on what matters.
  text: |
      This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
  ---
  :::
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShMicroCard
---
ui:
  default: #if other layout is selected, then its name must be here
    title: text-red-500
    text: text-oma-purple-300
urlImage: https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png
urlWrapper: https://www.axios.com/
title: |
  Microsoft sets non-profit to cut software related carbon emissions. 
subtitle: |
  Axios gets you smarter, faster on what matters.
text: |
  This is a representation of additional field for text, if it is needed. It also has a *full Markdown capability*.
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  default: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pl-4 pr-4 pb-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 flex shrink-0 mx-auto text-[3rem] mb-8 text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20",
    title: "title text-2xl font-medium text-black dark:text-white break-words z-20",
    subtitle: "subtitle text-lg font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20",
    text: "text font-light text-[1.3rem] mt-7 break-words z-20",
  },
  flat: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center bg-transparent dark:bg-transparent",
    //coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    //coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    //coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    //coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[4rem] z-20",
    title: "title text-2xl font-medium text-black dark:text-white break-words z-20",
    subtitle: "subtitle text-lg font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-1 break-words z-20",
    text: "text font-light text-[1.3rem] mt-7 break-words z-20",
  },
  teaser: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-lg duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-60 z-0",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out opacity-100 z-10",
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-center z-0",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-100 duration-500 z-0",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[3rem] transition-transform duration-500 ease-in-out group-hover:translate-y-[-0.3rem] transform z-20",
    title: "title text-2xl font-medium text-black dark:text-white break-words z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-2rem] transform",
    subtitle: "subtitle opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-lg font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-1 break-words z-20",
    text: "text opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out font-light text-[1.3rem] mt-7 break-words z-20",
  },
  translate: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pl-3 pr-3 mx-auto max-w-md w-full h-full justify-items-center text-center border-2 border-golden/[0.6] hover:border-golden dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 text-[4rem] flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20",
    title: "title text-xl font-medium text-black dark:text-white break-words z-20",
    subtitle: "subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20",
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  },
  opacity: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pl-3 pr-3 mx-auto max-w-md w-full h-full justify-items-center text-center border-2 border-golden/[0.6] hover:border-golden dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-cover opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 text-[4rem] flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20",
    title: "title text-xl font-medium text-black dark:text-white break-words z-20",
    subtitle: "subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20",
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  }
}
```

#### Class Descriptions

These class values are used in the <b>{{ $doc.constructorName }}</b> component. The values are customizable and can be adjusted through the `ui` properties' attributes.

</br>

- <code>default:</code></br>

  **_wrapper_**
  - **Value**: `"container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden"`
  - **Description**: A flexible container with a column layout, rounded corners, padding, centered alignment, and a maximum width of medium size. Includes hover effects for scaling, shadow, and border color changes. The component adapts to both light and dark modes with respective background and border styles.

  **_coverImage_**
  - **Value**: `"absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover image absolutely at the bottom left, stretching it across the full width and height. The image will fill the container and maintain full opacity with smooth transition effects.

  **_coverText_**
  - **Value**: `"absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40"`
  - **Description**: Centers the cover text within the container, positioning it absolutely across the entire area. The text is centered both vertically and horizontally with smooth transition effects. The background color changes for light and dark modes.

  **_coverIconWrapper_**
  - **Value**: `"bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40"`
  - **Description**: A wrapper for the cover icon, positioned absolutely across the entire area. It has a background that adapts to light and dark modes and covers the container's full size.

  **_coverIcon_**
  - **Value**: `"absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover icon absolutely across the container, ensuring it covers the entire area. The icon has full opacity and is contained within the wrapper with smooth transition effects.

  **_image_**
  - **Value**: `"relative mt-4 w-full h-auto flex shrink mx-auto z-20"`
  - **Description**: Positions the image relatively with a top margin, full width, and automatic height. The image is centered horizontally with flexible shrinking behavior and placed in front of the cover elements.

  **_icon_**
  - **Value**: `"relative sm:mt-4 w-10 h-10 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20"`
  - **Description**: A small icon with relative positioning, flexible behavior, centered alignment, and responsive top margin. It includes light and dark mode blue text colors with hover effects.

  **_title_**
  - **Value**: `"title text-xl font-medium text-black dark:text-white break-words z-20"`
  - **Description**: Applies medium-weight, large-sized text with black coloring (light mode) or white coloring (dark mode). Allows text wrapping for long words and is placed above other elements in the stack.

  **_subtitle_**
  - **Value**: `"subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20"`
  - **Description**: A thin, base-sized text style with neutral or gray coloring, a top margin, and wrapping for long words. Font weight adjusts for dark mode.

  **_text_**
  - **Value**: `"text font-light text-[1.1rem] mt-7 break-words z-20"`
  - **Description**: Default text style with medium size, top margin, and wrapping for long words. Positioned above other content.

<hr>

- <code>flat:</code></br>

  **_wrapper_**
  - **Value**: `"container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center bg-transparent dark:bg-transparent"`
  - **Description**: A flexible container with a column layout and rounded corners. It includes padding, centers its content both vertically and horizontally, and adapts to different screen sizes with a maximum width of medium size. The background is transparent in both light and dark modes.

  **_coverImage_**
  - **Value**: `"absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover image absolutely at the bottom left, stretching it across the full width and height. The image will fill the container and maintain full opacity with smooth transition effects.

  **_coverText_**
  - **Value**: `"absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40"`
  - **Description**: Centers the cover text within the container, positioning it absolutely across the entire area. The text is centered both vertically and horizontally with smooth transition effects. The background color changes for light and dark modes.

  **_coverIconWrapper_**
  - **Value**: `"bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40"`
  - **Description**: A wrapper for the cover icon, positioned absolutely across the entire area. It has a background that adapts to light and dark modes and covers the container's full size.

  **_coverIcon_**
  - **Value**: `"absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40"`
  - **Description**: Positions the cover icon absolutely across the container, ensuring it covers the entire area. The icon has full opacity and is contained within the wrapper with smooth transition effects.

  **_image_**
  - **Value**: `"relative mt-4 w-full h-auto flex shrink mx-auto z-20"`
  - **Description**: Positions the image relatively with a top margin, full width, and automatic height. The image is centered horizontally with flexible shrinking behavior and placed in front of the cover elements.

  **_icon_**
  - **Value**: `"relative sm:mt-4 w-10 h-10 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200 z-20"`
  - **Description**: A small icon with relative positioning, flexible behavior, centered alignment, and responsive top margin. It includes light and dark mode blue text colors with hover effects.

  **_title_**
  - **Value**: `"title text-xl font-medium text-black dark:text-white break-words z-20"`
  - **Description**: Applies medium-weight, large-sized text with black coloring (light mode) or white coloring (dark mode). Allows text wrapping for long words and is placed above other elements in the stack.

  **_subtitle_**
  - **Value**: `"subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words z-20"`
  - **Description**: A thin, base-sized text style with neutral or gray coloring, a top margin, and wrapping for long words. Font weight adjusts for dark mode.

  **_text_**
  - **Value**: `"text font-light text-[1.1rem] mt-7 break-words z-20"`
  - **Description**: Default text style with medium size, top margin, and wrapping for long words. Positioned above other content.
