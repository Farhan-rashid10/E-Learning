import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import './Signup.css';



function Sign() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmpassword: '',
    Username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then(data => {
      alert('Form submission data:', data);
      
    })
  
  };







  return (
    <div class="form-box">
    <form class="form" onSubmit={handleSubmit}>
        <span class="title">Sign up</span>
        <span class="subtitle">Create a free account with your email.</span>
        <div class="form-container">
          <input type="text" class="input" placeholder="Full Name" value={formData.fullName}            name="fullName"

                onChange={handleChange} />
                <input type="text" class="input" placeholder="Username" value={formData.Username}            name="Username"

onChange={handleChange} />
          <input type="email" class="input" placeholder="Email" value={formData.email}            name="email"

                onChange={handleChange}/>
          <input type="password" class="input" placeholder="Password" value={formData.password}            name="password"

                onChange={handleChange}/>
                <input type="password" class="input" placeholder=" Confirm Password" value={formData.confirmpassword}            name="confirmpassword"

                onChange={handleChange}/>
                
        </div>
        <button id='sign'>Sign up</button>
    </form>
    <div class="form-section">
      <p>Have an account?<Link to="/login" > Login</Link>  
      </p>
    </div>
    </div>
    
  );
}

export default Sign;
