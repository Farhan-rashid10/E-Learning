// src/components/Courses.js
import React from 'react';
import Sidebar from './Sidebar';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-container">
      <Sidebar />
      <div className="courses-content">
        <h1>Courses</h1>
        <p>Select a course from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default Courses;
