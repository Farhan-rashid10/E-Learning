import React from 'react';
import './Css.css';
import Sidebar from '../Sidebar';

function Css() {
  return (
    <>
    <Sidebar />
    <h1 className='css'>CSS Tutorial</h1>
    <div className="content-area">
      

      <h2>Introduction to CSS</h2>
      <p>CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the colors, fonts, and spacing of elements.</p>

      <h3>Features of CSS</h3>
      <ul>
        <li>Separation of content and design</li>
        <li>Improves accessibility</li>
        <li>Reduces complexity and repetition</li>
        <li>Makes the website responsive</li>
        <li>Allows for reusability of styles</li>
      </ul>

      <h3>CSS Syntax</h3>
      <p>A CSS rule consists of a selector and a declaration block.</p>
      <pre>
        <code>
{`selector {
  property: value;
  property: value;
}`}
        </code>
      </pre>
      <p>Example:</p>
      <pre>
        <code>
{`p {
  color: red;
}`}
        </code>
      </pre>

      <h3>Types of CSS</h3>
      <ul>
        <li>Inline CSS</li>
        <li>Internal CSS</li>
        <li>External CSS</li>
      </ul>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yfoY53QXEnI?start=3270" allowFullScreen>youtube</iframe>
      <h4>Inline CSS</h4>
      <p>Inline CSS is used to apply a unique style to a single HTML element. Use the style attribute inside the HTML element.</p>
      <pre>
        <code>
{`<p style="color: red; font-size: 16px;">This is an inline CSS example.</p>`}
        </code>
      </pre>

      <h4>Internal CSS</h4>
      <p>Internal CSS is used to define styles within the &lt;style&gt; element, inside the &lt;head&gt; section of an HTML page.</p>
      <pre>
        <code>
{`<head>
  <style>
    p {
      color: red;
      font-size: 16px;
    }
  </style>
</head>`}
        </code>
      </pre>

      <h4>External CSS</h4>
      <p>External CSS is used to define styles in an external file with a .css extension. Link to the external file using the &lt;link&gt; element inside the &lt;head&gt; section.</p>
      <pre>
        <code>
{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}
        </code>
      </pre>
      <p>Example of an external CSS file (styles.css):</p>
      <pre>
        <code>
{`p {
  color: red;
  font-size: 16px;
}`}
        </code>
      </pre>

      <h3>Selectors</h3>
      <p>CSS selectors are used to select HTML elements to style them. Here are some common selectors:</p>

      <h4>Type Selector</h4>
      <p>Selects all elements of a given type.</p>
      <pre>
        <code>
{`p {
  color: blue;
}`}
        </code>
      </pre>

      <h4>Class Selector</h4>
      <p>Selects elements with a specific class attribute. Classes are defined with a dot (.) prefix.</p>
      <pre>
        <code>
{`.class-name {
  color: green;
}
<p class="class-name">This is a class selector example.</p>`}
        </code>
      </pre>

      <h4>ID Selector</h4>
      <p>Selects a single element with a specific ID attribute. IDs are defined with a hash (#) prefix.</p>
      <pre>
        <code>
{`#id-name {
  color: red;
}
<p id="id-name">This is an ID selector example.</p>`}
        </code>
      </pre>

      <h4>Universal Selector</h4>
      <p>Selects all elements.</p>
      <pre>
        <code>
{`* {
  color: black;
}`}
        </code>
      </pre>

      <h4>Descendant Selector</h4>
      <p>Selects all elements that are descendants of a specified element.</p>
      <pre>
        <code>
{`div p {
  color: purple;
}`}
        </code>
      </pre>

      <h4>Attribute Selector</h4>
      <p>Selects elements with a specific attribute.</p>
      <pre>
        <code>
{`a[target] {
  color: orange;
}`}
        </code>
      </pre>

      <h3>CSS Box Model</h3>
      <p>The CSS box model describes the rectangular boxes generated for elements in the document tree and is used to determine the layout and positioning of elements.</p>
      <ul>
        <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
        <li><strong>Padding:</strong> Clears an area around the content. It is affected by the background color of the element.</li>
        <li><strong>Border:</strong> A border that surrounds the padding (if any) and content.</li>
        <li><strong>Margin:</strong> Clears an area outside the border. It is completely transparent.</li>
      </ul>
      <p>Example:</p>
      <pre>
        <code>
{`div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}`}
        </code>
      </pre>

      <h4>Padding</h4>
      <p>This is the space between the content and the border. Padding can be set for each side of the box (top, right, bottom, left) using padding properties like <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.</p>

      <h4>Border</h4>
      <p>The border surrounds the padding (if any) and content. The border's style, width, and color can be controlled using properties like <code>border-style</code>, <code>border-width</code>, and <code>border-color</code>.</p>

      <h4>Margin</h4>
      <p>This is the space outside the border. Margin can be set for each side of the box (top, right, bottom, left) using margin properties like <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.</p>

      <h3>Flexbox</h3>
      <p>Flexbox is a layout model that allows elements to align and distribute space within a container. It provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.</p>

      <h4>Container Properties</h4>
      <ul>
        <li><strong>display: flex;</strong> Defines a flex container and enables a flex context for all its direct children.</li>
        <li><strong>flex-direction:</strong> Defines the direction in which the flex items are placed in the flex container.
          <ul>
            <li><code>row</code>: The flex container’s main-axis is the same as the text direction.</li>
            <li><code>row-reverse</code>: The main-axis is reversed.</li>
            <li><code>column</code>: The main-axis is from top to bottom.</li>
            <li><code>column-reverse</code>: The main-axis is from bottom to top.</li>
          </ul>
        </li>
        <li><strong>flex-wrap:</strong> Defines whether flex items are forced in a single line or can be wrapped onto multiple lines.
          <ul>
            <li><code>nowrap</code>: All flex items will be on one line.</li>
            <li><code>wrap</code>: Flex items will wrap onto multiple lines, from top to bottom.</li>
            <li><code>wrap-reverse</code>: Flex items will wrap onto multiple lines from bottom to top.</li>
          </ul>
        </li>
        <li><strong>justify-content:</strong> Aligns flex items along the main axis.
          <ul>
            <li><code>flex-start</code>: Items are packed toward the start of the flex-direction.</li>
            <li><code>flex-end</code>: Items are packed toward the end of the flex-direction.</li>
            <li><code>center</code>: Items are centered along the line.</li>
            <li><code>space-between</code>: Items are evenly distributed; the first item is at the start, the last item is at the end.</li>
            <li><code>space-around</code>: Items are evenly distributed with equal space around them.</li>
            <li><code>space-evenly</code>: Items are evenly distributed with equal space between them.</li>
          </ul>
        </li>
        <li><strong>align-items:</strong> Aligns flex items along the cross axis.
          <ul>
            <li><code>stretch</code>: Items are stretched to fit the container.</li>
            <li><code>flex-start</code>: Items are aligned toward the start of the cross-axis.</li>
            <li><code>flex-end</code>: Items are aligned toward the end of the cross-axis.</li>
            <li><code>center</code>: Items are centered along the cross-axis.</li>
            <li><code>baseline</code>: Items are aligned such as their baselines align.</li>
          </ul>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Css;
