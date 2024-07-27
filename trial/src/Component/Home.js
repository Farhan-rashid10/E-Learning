// src/components/Home.js
import React from 'react';
import PopularCourses from './Popular';
import Courses from './Courses';
import Category from './Category';
import Card from './Card';
const Home = () => {
  return (
    <div>
        <Courses />
        <Card />
      <PopularCourses />
      <Category />
    </div>
  );
};

export default Home;
