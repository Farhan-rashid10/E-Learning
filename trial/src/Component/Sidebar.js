// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/units">Units</Link></li>
        <li><Link to="/units">Users</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
