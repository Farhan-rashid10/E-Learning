import React, { useState } from 'react';
import './Pages.css';
import Sidebar from './Sidebar';

const faqData = [
 
  // HTML FAQs
  {
    question: "What is HTML?",
    answer: "HTML (HyperText Markup Language) is the standard markup language used to create web pages."
  },
  {
    question: "What are HTML elements?",
    answer: "HTML elements are the building blocks of HTML pages. They are represented by tags such as <div>, <p>, <a>, etc."
  },
  {
    question: "What is the purpose of the <!DOCTYPE> declaration?",
    answer: "The <!DOCTYPE> declaration defines the document type and version of HTML used in the document, helping browsers to render the content correctly."
  },
  {
    question: "What are semantic HTML elements?",
    answer: "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way, such as <header>, <footer>, <article>, and <section>."
  },
  // CSS FAQs
  {
    question: "What is CSS?",
    answer: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML."
  },
  {
    question: "What are CSS selectors?",
    answer: "CSS selectors are used to select and style HTML elements based on their id, class, type, attribute, and more."
  },
  {
    question: "What is the box model in CSS?",
    answer: "The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of margins, borders, padding, and the content area."
  },
  {
    question: "What are CSS Flexbox and Grid?",
    answer: "CSS Flexbox and Grid are layout models that allow you to design complex layouts easily and efficiently. Flexbox is one-dimensional, while Grid is two-dimensional."
  },
  // Data Analysis FAQs
  {
    question: "What is data analysis?",
    answer: "Data analysis involves inspecting, cleansing, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making."
  },
  {
    question: "What tools are commonly used for data analysis?",
    answer: "Common tools for data analysis include Python (with libraries like Pandas and NumPy), R, SQL, Excel, and data visualization tools like Tableau and Power BI."
  },
  {
    question: "What is exploratory data analysis (EDA)?",
    answer: "EDA is an approach to analyzing data sets to summarize their main characteristics, often using visual methods, before applying more formal modeling or hypothesis testing."
  },
  {
    question: "What is the difference between supervised and unsupervised learning?",
    answer: "In supervised learning, the model is trained on labeled data, while in unsupervised learning, the model identifies patterns and relationships in unlabeled data."
  },
  // Node.js FAQs
  {
    question: "What is Node.js?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to run JavaScript on the server side."
  },
  {
    question: "What are the advantages of using Node.js?",
    answer: "Advantages of Node.js include its asynchronous and event-driven architecture, its performance, scalability, and the vast ecosystem of packages available via npm."
  },
  {
    question: "What is npm?",
    answer: "npm (Node Package Manager) is a package manager for JavaScript, and it is the default package manager for Node.js. It allows developers to share and reuse code."
  },
  {
    question: "What is Express.js?",
    answer: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
  },
 // React FAQs
{
  question: "What is React?",
  answer: "React is a JavaScript library for building user interfaces."
},
{
  question: "How do I use React?",
  answer: "You use React by creating components, which are reusable pieces of code that represent parts of a user interface."
},
{
  question: "Why should I use React?",
  answer: "React is great for building fast and interactive user interfaces, and it allows you to write modular and reusable code."
},
{
  question: "What is JSX?",
  answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like."
},
{
  question: "What are components?",
  answer: "Components are the building blocks of a React application. They can be functional or class-based and are used to encapsulate code that renders a part of the user interface."
},
{
  question: "What is a state in React?",
  answer: "State is an object that holds some information that may change over the lifetime of the component. State allows React components to react to changes by re-rendering."
},
{
  question: "What are props in React?",
  answer: "Props (short for properties) are read-only attributes passed from parent components to child components. They allow data to flow between components."
},
{
  question: "What is the Virtual DOM?",
  answer: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates and improve performance. React updates the Virtual DOM first, then compares it to the actual DOM and makes only the necessary changes."
},
{
  question: "What is React Router?",
  answer: "React Router is a library that enables navigation and routing in React applications, allowing you to create single-page applications with multiple views."
},
{
  question: "How do you handle events in React?",
  answer: "Events in React are handled using event handlers, which are functions defined in your component that are triggered by user interactions like clicks, key presses, or form submissions."
}
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {faq.question}
      </div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

const Pages = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredFaqData = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm)
  );

  return (
    <>
    <Sidebar />
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      {filteredFaqData.length > 0 ? (
        filteredFaqData.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
    </>
  );
};

export default Pages;
