import React, { useState } from 'react';
import ActionComponent from './components/functional';
import './App.css'

function App() {
  const { userList, newUser, addUser, setNewUser } = ActionComponent();

  return (
    <div className='container'>
      <div className='container-inner'>
        <h1>Users</h1>
        {userList}
        <h2>Add a new user</h2>
        <input
          type="text"
          placeholder="name"
          value={newUser.name}
          onChange={(event) => setNewUser({ ...newUser, name: event.target.value })}
        />
        <input
          type="text"
          placeholder="email"
          value={newUser.email}
          onChange={(event) => setNewUser({ ...newUser, email: event.target.value })}
        />
        <button onClick={addUser}>add</button>
      </div>
    </div>
  );
}

export default App;