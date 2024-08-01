import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
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

    fetch('http://localhost:3000/questions', {
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
    <div className='div'>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <label>
          <input
            className="input"
            type="text"
            name="firstName"
            placeholder="First name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          <input
            className="input"
            type="text"
            name="lastName"
            placeholder="last name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          <input
            className="input"
            type="tel"
            name="contactNumber"
            placeholder="contact number"
            required
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <label>
          <textarea
            className="input01"
            name="message"
            placeholder="message"
            rows="3"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span></span>
        </label>
        <button type="submit" className="fancy">
          <span className="top-key"></span>
          <span className="text">submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
}

export default Contact;
