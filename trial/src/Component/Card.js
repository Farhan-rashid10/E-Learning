// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <>
    <div className='ranking'>
        <h1>Ranking Courses</h1>
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
    </div>

    {/* <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div class="login">
				<form class="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input class="input" type="email" name="email" placeholder="Email" required="" />
					<input class="input" type="password" name="pswd" placeholder="Password" required="" />
					<button>Log in</button>
				</form>
			</div>

      <div class="register">
				<form class="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input class="input" type="text" name="txt" placeholder="Username" required="" />
					<input class="input" type="email" name="email" placeholder="Email" required=""/>
					<input class="input" type="password" name="pswd" placeholder="Password" required=""/>
					<button>Register</button>
				</form>
			</div>
	</div> */}
    </>
  );
};

export default Card;
