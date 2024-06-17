---
titile: Segment
discription: 
constructorName: ShSegment
---

The {{ $doc.constructorName }} component represent the most flexible component as it 
encapsulates one block or container of markdown and HTML content that can be styled.

## Usage
### Basic ShSegment
This is and example of how a basic `ShSegment` component is displayed:

::ShSegment
---
ui:
  wrapper: bg-cyan-300 rounded-xl border shadow-md p-4 transition duration-300 ease-in-out # Comment
---

This is a specific block of *Markdown* content that can be styled.

This is a HTML <a href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">anchor (a)</a>


::

This is how the above `ShSegment` is written in markdown:

```mdc
::ShSegment
---
ui:
  wrapper: bg-cyan-300 rounded-xl border shadow-md p-4 transition duration-300 ease-in-out # Comment

---

This is a specific block of *Markdown* content that can be styled.

This is a HTML <a href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">anchor (a)</a>

::
```

The content can be markdown or HTML text of any length. All elements are supported as in
the *normal* text.

### Complex ShSegment
This is how a complex example of the `ShSegment` is displayed. When hovering over the content is zoom in/out and contains different type of content:
* Markdown content
* HTML Table
* An embedded `ShSegment`that contains an image.

::ShSegment
---
ui:
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-110 # Comment
---

Content inside of the {{ $doc.constructorName }} can be of any length or structure.

It can have any general *Markdown* formatting structure: lists, order lists, or 
tables.

* item
* item
* and one more item

1. First element 
1. Second element
1. third element

This is a table written in HTML:
<table border="2">
  <tr>
    <td>Row 1, Col 1</td>
    <td>Row 1, Col 2</td>
  </tr>
  <tr>
    <td>Row 2, Col 1</td>
    <td>Row 2, Col 2</td>
  </tr>
</table>

It can also include other components. For example another {{ $doc.constructorName }}.

:::ShSegment
---
ui:
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded shadow-2xl
---
This is a nested segment with its own specific styling and an image.


![image](https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png)

That is making this used to show this component flexibility.
:::

::

This is how the above `ShSegment` is written:

```mdc
::ShSegment
---
ui:
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-110 # Comment
---

Content inside of the {{ $doc.constructorName }} can be of any length or structure.

It can have any general *Markdown* formatting structure: lists, order lists, or 
tables.

* item
* item
* and one more item

1. First element 
1. Second element
1. third element

This is a table written in HTML:
<table border="2">
  <tr>
    <td>Row 1, Col 1</td>
    <td>Row 1, Col 2</td>
  </tr>
  <tr>
    <td>Row 2, Col 1</td>
    <td>Row 2, Col 2</td>
  </tr>
</table>

It can also include other components. For example another {{ $doc.constructorName }}.

:::ShSegment
---
ui:
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded shadow-2xl
---
This is a nested segment with its own specific styling and an image.


![image](https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png)

That is making this used to show this component flexibility.
:::

::
```

## ShSegment Properties
The `ShSegment` consturctor supports only one property: `ui`.

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
      <td rowspan="2"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShSegment</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the segment component. The <code>ui</code> property contains only one attribute that targets the framework on how `ShSegment` is displayed. Below is the description of of the single attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>n/a</td>
      <td>Defines the overall styling for the container that holds all the elements inside of the `ShSegment`. The attribute <code>shadow-xl</code> is used to provide a shadow effect around the wrapper.</td>
    </tr>
  </tbody>
</table>    

## ShSegment Config
The {{ $doc.constructorName }} component or constructor contains a single property `ui` with a single attribute `wrapper` which doesn't contains any default value.

```ts
{
  wrapper: ""
}
```

### Attributes Descriptions
This section indicates the class values utilized in the `ShSegment` constructor. These values are customizable and can be strengthened or overridden through the `wrapper` attributes.

_**wrapper**_
*  **Value**: <code>bg-gradient-to-r from-blue-500 text-3xl p-4 rounded shadow-2xl</code> (these are the values used by the embedded `ShSegment` of the above example. 
*  **Description**: This defines the overall styling for the container holding the segment elements:

    * `bg-gradient-to-r`: Applies a background gradient that transitions to the right.
    * `from-blue-500`: Sets the starting color of the gradient to a medium shade of blue.
    * `text-3xl`: Sets the text size to 3 times larger than the base size.
    * `p-4`: Applies padding of 1rem (16px) on all sides.
rounded: Adds rounded corners to the element.
    * `shadow-2xl`: Applies a large shadow effect to the element. 

* **Value**: <code>bg-gradient-to-r from-blue-500 text-3xl p-4 rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-110</code>

* **Description**: This defines the overall styling for the container holding the segment elements:

* `bg-gradient-to-r`: Applies a background gradient that transitions to the right.
* `from-blue-500`: Sets the starting color of the gradient to a medium shade of blue.
* `text-3xl`: Sets the text size to 3 times larger than the base size.
* `p-4`: Applies padding of 1rem (16px) on all sides.
* `rounded-xl`: Adds extra-large rounded corners to the element.
* `shadow-2xl`: Applies a large shadow effect to the element.
* `duration-300`: Sets the duration of the transition to 300 milliseconds.
* `ease-in-out`: Applies a smooth transition effect that starts slowly, speeds up, and then slows down again.
* `hover:scale-110`: Scales the element to 110% of its original size when hovered over.

This combination of styles creates a visually appealing, interactive container with smooth transitions and a subtle shadow effect, enhancing the user experience.






