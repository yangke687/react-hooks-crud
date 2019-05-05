import React, { useState } from 'react'

const AddUserForm = props => {
  const initState = { id: null, name: '', username: '' }

  const [user, setUser] = useState(initState)

  const handleChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initState)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleChange}  />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm