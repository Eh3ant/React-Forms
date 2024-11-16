import React, { useState } from 'react'

const UserForm = () => {
    const [username, setUsername] = useState("ehsan")
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`created user , ${username}`)
        setUsername("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username </label>
            <input id="username" type="text" placeholder='username' value={username} onChange={handleChange} />
            <button >Add me to list!</button>
        </form>
    )
}

export default UserForm;