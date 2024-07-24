// src/components/Home.js
import React from 'react';
import PopularCourses from './Popular';
import Courses from './Courses';
const Home = () => {
  return (
    <div>
        <Courses />
      <PopularCourses />
    </div>
  );
};

export default Home;
