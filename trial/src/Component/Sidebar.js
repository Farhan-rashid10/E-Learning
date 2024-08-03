// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCalendar, faCircleUser, faComment, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

  return (
    <div className="sidebar">
    
    <Link to="/dashboard" className='hover-link'>
    <h1 className='hover-title'><FontAwesomeIcon icon={faTachometerAlt} size='3x' style={{background:"white"}}/><br/><span>Dashboard</span></h1>
    </Link>
    <Link to="/user" className='hover-link'>
    <h1 className='hover-title'><FontAwesomeIcon icon={faCircleUser} size='3x'/><br/><span>users</span></h1>
    </Link>
    <Link to="/Pages" className='hover-link'>
    <h1 className='hover-title'><FontAwesomeIcon icon={faBook} size='3x' /><br/><span>Questions</span></h1>
    </Link>
    <Link to="/calender" className='hover-link'>
    <h1 className='hover-title'><FontAwesomeIcon icon={faCalendar} size='3x'/><br/><span>Calendar</span></h1>
    </Link>
    <Link to="/comment" className='hover-link'>
    <h1 className='hover-title'><FontAwesomeIcon icon={faComment} size='3x'/><br/><span>Comments</span></h1>
    </Link>
      
    
    </div>
  );
};

export default Sidebar;
