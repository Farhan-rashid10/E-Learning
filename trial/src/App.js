// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Pages from './Component/Pages';
import Category from './Component/Category';
import Footer from './Component/Footer';
import Sign from './Component/Signup';
import Contact from './Component/Contact';
import Login from './Component/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Courses from './Component/Courses';
import Dashboard from './Component/pages/Dashboard';
import Units from './Component/pages/Units';
import Users from './Component/pages/User';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/units" element={<Units />} />
          <Route path="/users" element={<Users />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
        <Route path="/section1" element={<Dashboard title="Section 1" />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
