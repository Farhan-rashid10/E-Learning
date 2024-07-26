// src/components/PopularCourses.js
import React from 'react';
import './Popular.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';








const PopularCourses = () => {
  const popularCourses = [
    { icon: <FontAwesomeIcon icon={faHtml5} size='10x' style={{color: "#FFD43B",}}/>, title: 'HTML5 for Begginer', description: '(HyperText Markup Language) is the standard markup language used to create web pages.' },
    { icon: <FontAwesomeIcon icon={faCss3Alt}size='10x' style={{color: "#FFD43B",}}/>, title: 'Advance CSS3 Animation', description: 'CSS (Cascading Style Sheets) is used to control the presentation of web pages' },
    { icon: <FontAwesomeIcon icon={faJs} size='10x' style={{color: "#FFD43B",}}/>, title: 'Core Advanced JavaScript', description: 'JS is a versatile programming language primarily used to create interactive effects within web ' },
  
  ];
  const courses = [
    { icons: <FontAwesomeIcon icon={faReact} size='10x' style={{color: "#FFD43B",}}/>,titles: 'React Basics', descriptions: 'React is a popular JavaScript library for building user interfaces, particularly single-page app.' },
    { icons: <FontAwesomeIcon icon={faPython} size='10x' style={{color: "#FFD43B",}}/>,titles: 'Python', descriptions: 'Python is a high-level, interpreted programming language known for its readability and simplicity.' },
    { icons: <FontAwesomeIcon icon={faNodeJs} size='10x' style={{color: "#FFD43B",}}/>,titles: 'Node.js', descriptions: "Node.js is a JS runtime built on Chrome's V8 JS engine. It allows you to run JS code on the server side." },

  ]

  return (
    <>
      <h1 className='heading'>Popular Courses</h1>
      <section className="popular-courses">
        {popularCourses.map((course, index) => (
          <div key={index} className="cards">
            <div className="containers">
              <div className="cloud front">
                {course.icon && <div className="icon">{course.icon}</div>}
                <hr />
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="popular-courses">
        {courses.map((item, index) => (
          <div key={index} className="cards">
            <div className="containers">
              <div className="cloud front">
                {item.icons && <div className="icon">{item.icons}</div>}
                <hr />
                <h4>{item.titles}</h4>
                <p>{item.descriptions}</p>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default PopularCourses;
