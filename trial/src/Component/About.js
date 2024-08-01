// src/components/About.js
import React from 'react';
import './About.css';
const About = () => {
  return (
    <>
    <div className='about'>
    </div>
    <div className='abouts'>
    <p>About Us</p>
    <span>Educating and empowering <br />the community</span>
    </div>


    <div className='ranking'>
        <img src='https://img.freepik.com/premium-photo/front-view-four-concentrated-multiethnic-young-people-college-students-preparing-their-homework-library-room_161094-3287.jpg?ga=GA1.1.421194447.1722059295&semt=sph' alt='' />
<h2>        Perspiciatis unde omnis iste natus error inventore.
</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic excepturi quae fugit architecto fuga sit vitae magni adipisci sunt quia repellat officia numquam aliquam, dolorem earum doloribus rerum ipsum ab quasi omnis enim quam totam perferendis fugiat. Aperiam, recusandae et.</p>
      <h2>        Perspiciatis unde omnis iste natus error inventore.
      </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic excepturi quae fugit architecto fuga sit vitae magni adipisci sunt quia repellat officia numquam aliquam, dolorem earum doloribus rerum ipsum ab quasi omnis enim quam totam perferendis fugiat. Aperiam, recusandae et.</p>

    </div>
    <div className='sponsor'>
      <h1>our sponsors</h1>
<div className="card6">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTeUSKk9d77oeVAkH2i5u2dW1yITqWjNsJw&s" className="socialContainer containerOne" alt=''/>
  
  <img src="https://empowerwithit.org/wp-content/uploads/2024/03/Educate-Innovate-Empower.png" className="socialContainer containerTwo" alt=''/>
    
  <img src="https://uiverse.io/assets/logo-png-BXFOQKfc.png" className="socialContainer containerThree" alt=''/>
  
  <img src="data:image/png;base64,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" className="socialContainer containerFour" alt=''/>
</div>             

</div>

    </>

  );
};

export default About;
