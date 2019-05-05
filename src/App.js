import React, { useState, useEffect } from 'react'
import './App.css'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'

function App() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [ users, setUsers ] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...usersData, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  const [editing, setEditing] = useState(false)

  const initFormState = { id: null, name: '', username: '' }

  const [currentUser, setCurrentUser] = useState(initFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updates) => {
    setEditing(false)
    setUsers(users.map(user => user.id === id ? updates : user))
  }

  useEffect(() => {
   document.title = `current users count: ${users.length}`
  })

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          { editing ? <EditUserForm
            currentUser={currentUser}
            setEditing={setEditing}
            updateUser={updateUser}
          /> : <AddUserForm addUser={addUser} /> }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App;
