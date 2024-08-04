// src/components/Home.js
import React from 'react';
import PopularCourses from './Popular';
import Category from './Category';
import Card from './Card';
import Header from './Header';
const Home = () => {
  return (
    <div>
      <Header />
     
        <Card />
      <PopularCourses />
      <Category />
    </div>
  );
};

export default Home;
