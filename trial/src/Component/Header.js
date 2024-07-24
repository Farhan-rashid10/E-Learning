// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="bg-image">
        <h1>Welcome to the Learning Management System</h1>

        <form class="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="tan" type="submit">Search</button>
    </form>

       </div>
    </header>
  );
};

export default Header;
