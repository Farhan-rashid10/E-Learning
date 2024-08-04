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
      
          {comments.map(comment => (
            <button key={comment.id}>{comment.comment}</button>
          ))}
      
      </div>
     
      
        <div className='card-b'>
      <h1>Submitted Contacts</h1>
      <table>
      <tr>
            <th>Name: </th>
            <th>Email: </th>
            <th>Contact Number: </th>
            <th>Message: </th>
          </tr>
         
          {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.firstName} {contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.contactNumber}</td>
            <td> {contact.message}</td>
          </tr>
        ))}
      </table>
      </div>
    </div>
  </>
  );
}

export default Help;
