import React, { useEffect, useState } from 'react';
import './Help.css'
function Help() {
  const [comments, setComments] = useState([]);
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/comments')
      
      .then(response => response.json())
      .then(data => setComments(data))

    }, []);
    useEffect(() => {
  fetch('http://localhost:3000/questions')
      
  .then(response => response.json())
  .then(data => setcontacts(data))
}, []);

  return (
    <>
    <div className='comment'>
        <div className='card-c'>
      <h1>Comments</h1>
      (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.comment}</li>
          ))}
        </ul>
      )
      </div>
     
      
        <div className='card-b'>
      <h1>Submitted Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>Name: {contact.firstName} {contact.lastName}</p>
            <p>Email: {contact.email}</p>
            <p>Contact Number: {contact.contactNumber}</p>
            <p>Message: {contact.message}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  </>
  );
}

export default Help;
