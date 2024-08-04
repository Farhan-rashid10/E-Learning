// src/UserList.js
import React, { useEffect, useState } from 'react';
import './Pages.css';
import Sidebar from '../Sidebar';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
      } else {
        console.error('Failed to delete user');
      }
    });
  };

  return (
    <>
  <hr/>
    <Sidebar />
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-button-container">
          <button className="user-button">
            {user.fullName}
            <button 
              className="delete-button" 
              onClick={(e) => {
                e.stopPropagation();
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </button>

        </div>
      ))}
    </div>

    </>
  );
};

export default User;
