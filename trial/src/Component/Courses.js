// src/components/Courses.js
import React from 'react';

import './Courses.css';
import Sidebar from './Sidebar';

const Courses = () => {
  return (
    <div className="courses-container">
     
     <Sidebar />
     <h1 className='heading'>Popular Courses</h1>
    
    </div>
  );
};

export default Courses;
