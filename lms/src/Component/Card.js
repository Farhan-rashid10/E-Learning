// src/components/Card.js
import React from 'react';
import './Card.css';
import './Courses.css';


const Card = () => {
  return (
    <>
     <div className='category'>
      <p>top category</p>
      <h1>Pick the right category Build <br /> your career</h1>
    </div>
    <section className="courses">
      <button className='button'><h4> Software Engineering</h4></button>
      <button className='button'><h4>Affiliate Marketing</h4></button>      
      <button className='button'><h4>Graphic Design</h4></button>
      <button className='button'><h4>Data Analysis</h4></button>
          </section>
          <section className="courses">
      <button className='button'><h4>Community Development</h4></button>
      <button className='button'><h4>Business Management</h4></button>      
      <button className='button'><h4>Cyber-security</h4></button>
      <button className='button'><h4>Computer Science</h4></button>
          </section>
    <div className='ranking'>
        <h1>Ranking Courses of Software Engineering</h1>
         <div class="container">
        <div class="skill-box">
            <span class="title">HTML</span>

            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>

        <div class="skill-box">
            <span class="title">CSS</span>

            <div class="skill-bar">
                <span class="skill-per css">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">JavaScript</span>

            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">NodeJS</span>

            <div class="skill-bar">
                <span class="skill-per nodejs">
                    <span class="tooltip">30%</span>
                </span>
            </div>
        </div>
    </div>



    <form action="" class="form_main">
    <div action="" class="form_main-before">
    <p class="heading">15 Days Free Trial</p>
    </div>
    <div className='input'>
    <div class="inputContainer">
        
    <input type="text" class="inputField" id="username" placeholder="Username" />
    </div>
    
<div class="inputContainer">
    
    <input type="password" class="inputField" id="password" placeholder="Password" />
</div>
<div class="inputContainer">
    
    <input type="password" class="inputField" id="password" placeholder="Password" />
</div>
</div>
           
<button id="button">Get Your Free Trial</button>
</form>
    </div>

    </>
  );
};

export default Card;
