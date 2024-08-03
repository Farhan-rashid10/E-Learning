import React from 'react'
import Sidebar from '../Sidebar';
import './Html.css'

function Html() {
  return (
    <>
    <Sidebar />
        <div class="content-area">
    <h1>Introduction to HTML</h1>
    <p>HTML (HyperText Markup Language) is the standard markup language used to create web pages. It describes the structure of a web page and its content using a series of elements represented by tags. HTML elements tell the browser how to display the content.</p>

    <h2>Basic HTML Structure</h2>
    <p>An HTML document has a basic structure that includes the following elements:</p>
    <ul>
      <li><strong>&lt;!DOCTYPE html&gt;:</strong> Declares the document type and version of HTML.</li>
      <li><strong>&lt;html&gt;:</strong> The root element of an HTML document.</li>
      <li><strong>&lt;head&gt;:</strong> Contains meta-information about the document, such as the title and links to stylesheets.</li>
      <li><strong>&lt;title&gt;:</strong> Specifies the title of the document, which is displayed in the browser's title bar or tab.</li>
      <li><strong>&lt;body&gt;:</strong> Contains the content of the document, such as text, images, links, and other elements.</li>
    </ul>
    <h2>Features Of HTML</h2>
    <ul>
      <li>The learning curve is very easy (easy to modify)</li>
      <li>Creating effective presentations</li>
      <li>Adding Links wherein we can add references</li>
      <li>Can display documents on platforms like Mac, Windows, Linux, etc</li>
      <li>Adding videos, graphics, and audios making it more attractive</li>
      <li>Case insensitive language</li>
    </ul>
  
    <h2>HTML Editor</h2>
    <ul>
      <li>Simple editor: Notepad</li>
      <li>Notepad++</li>
      <li>Atom</li>
      <li>Best editor: VS <code></code></li>
    </ul>
  
    <h2>HTML Skeleton</h2>
    <pre>
      <code>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
          &lt;title&gt;&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
        
        &lt;/body&gt;
        &lt;/html&gt;
      </code>
    </pre>
    <h2>Common HTML Tags</h2>
    <p>Here are some common HTML tags used in web development:</p>
    <ul>
      <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Heading tags, with &lt;h1&gt; being the highest level and &lt;h6&gt; the lowest.</li>
      <li><strong>&lt;p&gt;:</strong> Paragraph tag, used to define blocks of text.</li>
      <li><strong>&lt;a&gt;:</strong> Anchor tag, used to create hyperlinks.</li>
      <li><strong>&lt;img&gt;:</strong> Image tag, used to embed images.</li>
      <li><strong>&lt;ul&gt; and &lt;ol&gt;:</strong> Unordered and ordered list tags, used to create lists.</li>
      <li><strong>&lt;li&gt;:</strong> List item tag, used within &lt;ul&gt; or &lt;ol&gt; to define individual list items.</li>
    </ul>
    <iframe src="https://www.youtube.com/embed/HD13eq_Pmp8?start=443" allowfullscreen >youtube</iframe>
    </div>
    
    </>
  )
}

export default Html;
