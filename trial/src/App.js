// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Courses from './Component/Courses';
import Pages from './Component/Pages';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Footer from './Component/Footer';
import Header from './Component/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
