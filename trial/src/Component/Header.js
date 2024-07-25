// src/components/Header.js
import React from 'react';
import './Header.css';
import { faDraftingCompass, faHistory,  faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = () => {

  
  return (
    <>
    <header className="header">
      <div className="bg-image">
        <h1>Welcome to the Learning Management System</h1>

        <form class="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="tan" type="submit">Search</button>
    </form>

       </div>
    </header>
       <div className='class'>
       <section className='courses'> 
    <button className='buttons'><h4> <FontAwesomeIcon icon={faDraftingCompass} size='6x' className='fa-icon'style={{color: "#FFD43B",}}/>
    Software Engineering<br /><span className='span'>bbbbbbbbbb</span></h4></button>
    <button className='buttons'><h4> <FontAwesomeIcon icon={faUserCircle} size='6x' className='fa-icon'style={{color: "#FFD43B",}}/>
      Software Engineering<br /><span className='span'>bbbbbbbbbb</span></h4></button>
      <button className='buttons'><h4> <FontAwesomeIcon icon={faHistory} size='6x' className='fa-icon'style={{color: "#FFD43B",}}/>
      Software Engineering<br /><span className='span'>bbbbmmmmmmmmmmmmmbbbbbb</span></h4></button>
      </section>

    </div>
    
      
    </>
  );
};

export default Header;
