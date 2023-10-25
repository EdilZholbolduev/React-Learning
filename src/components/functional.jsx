import React, { useState, useEffect } from 'react';


function ActionComponent() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('error data used', error);
      });
  }, []);

  const deleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  }

  const addUser = () => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    setNewUser({ name: '', email: '' });
  }

  const userList = users.map(user => (
    <div key={user.id}>
      <span>{user.name} - {user.email}</span>
      <button className='btn-after' onClick={() => deleteUser(user.id)}>delete</button>
    </div>
  ));

  return { userList, newUser, addUser, setNewUser };
}

export default ActionComponent;