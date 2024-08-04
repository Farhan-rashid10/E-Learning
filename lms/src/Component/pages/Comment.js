import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import './Pages.css';

const Comments = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    })
    .then((response) => response.json()) 
    .then(result => {
      alert('Comment submitted:', result);
      setComment('');
    })
   
  };

  return (
    <>
      <Sidebar />
      <div className='sidenav'>
        <h2>Comments</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          required></textarea>
          <br />
          <button type='submit'>Send</button>
        </form>
      </div>
    </>
  );
};

export default Comments;
