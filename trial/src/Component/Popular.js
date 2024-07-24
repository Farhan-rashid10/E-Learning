// src/components/PopularCourses.js
import React from 'react';
import './Popular.css';

const PopularCourses = () => {
  const popularCourses = [
    { title: 'React Basics', description: 'Learn the basics of React.' },
    { title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.' },
    { title: 'HTML & CSS', description: 'Build beautiful web pages.' },
    { title: 'Node.js', description: 'Server-side JavaScript.' },
  ];

  return (
    <section className="popular-courses">
      {popularCourses.map((course, index) => (
        <div key={index} className="cards">
          <div class="containers">
          <div class="cloud front">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Learn More</span>
</button>          </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PopularCourses;
