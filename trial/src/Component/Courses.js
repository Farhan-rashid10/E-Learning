// src/components/Courses.js
import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


const Courses = () => {
  return (
    <>
    <div className='category'>
      <p>top category</p>
      <h1>Pick the right category Build <br /> your career</h1>
    </div>
    <section className="courses">
      <button className='button'><h4> <FontAwesomeIcon icon={faLaptopCode} size='1x' className='fa-icon'style={{color: "darkblue",}}/>
      Software Engineering</h4></button>
      <button className='button'><h4>Affiliate Marketing</h4></button>      
      <button className='button'><h4>Graphic Design</h4></button>
      <button className='button'><h4>Graphic Design</h4></button>
          </section>
          <section className="courses">
      <button className='button'><h4>Software Engineering</h4></button>
      <button className='button'><h4>Affiliate Marketing</h4></button>      
      <button className='button'><h4>Graphic Design</h4></button>
      <button className='button'><h4>Graphic Design</h4></button>
          </section>

    </>
  );
};

export default Courses;
