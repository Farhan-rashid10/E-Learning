// src/components/Courses.js
import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <>
    <section className="courses">
      <button ><h3> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M21 16V5c0-1.104-.896-2-2-2H5c-1.104 0-2 .896-2 2v11c0 1.104.896 2 2 2h5v2H8v1h8v-1h-2v-2h5c1.104 0 2-.896 2-2zM5 5h14v11H5V5z"/></svg>
      Software Engineering</h3></button>
      <button ><h3>Affiliate Marketing</h3></button>      
      <button ><h3>Graphic Design</h3></button>
          </section>
          <section className="courses">
      <button ><h3>Software Engineering</h3></button>
      <button ><h3>Affiliate Marketing</h3></button>      
      <button ><h3>Graphic Design</h3></button>
          </section>

    </>
  );
};

export default Courses;
