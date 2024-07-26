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
   

        {/* <h1 className='headings'>Educate!</h1>
        <span className='headings'>Smart Is Greate</span>

        <div class="input-container">
  <input type="text" placeholder="search" />
  <button class="button2">search</button>
</div> */}

       </div>
    </header>
       <div className='class'>
       <section className='card'> 
    <button className='buttons'><h2> <FontAwesomeIcon icon={faDraftingCompass} size='2x' className='fa-icons'style={{color: "#FFD43B",}}/>
    100,000 online courses<br /><span className='span'>Explore a variety of fresh topics</span></h2></button>
    <button className='buttons'><h2> <FontAwesomeIcon icon={faUserCircle} size='2x' className='fa-icons'style={{color: "#FFD43B",}}/>
    Instant Expert instruction<br /><span className='span'>Find the right instructor for you</span></h2></button>
      <button className='buttons'><h2> <FontAwesomeIcon icon={faHistory} size='2x' className='fa-icons'style={{color: "#FFD43B",}}/>
      Lifetime course access<br /><span className='span'>Learn on your schedule anytime</span></h2></button>
      </section>

    </div>
    
      
    </>
  );
};

export default Header;
