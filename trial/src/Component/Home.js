// src/components/Home.js
import React from 'react';
import PopularCourses from './Popular';
import Courses from './Courses';
import Category from './Category';
const Home = () => {
  return (
    <div>
        <Courses />
      <PopularCourses />
      <Category />
    </div>
  );
};

export default Home;
