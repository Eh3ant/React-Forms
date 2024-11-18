import React, { useState } from 'react'

const UserForm = () => {
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    const INISIALSTATE = {
        username: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(INISIALSTATE)
    const handleChange = e => {
        const [name, value] = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`created user , ${formData.username} w/ ${formData.email}`)
        setFormData(INISIALSTATE)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username </label>
            <input
                id="username"
                name='username'
                type="text"
                placeholder='username'
                value={formData.username}
                onChange={handleChange}
            />
            <label htmlFor='email'>Email </label>
            <input
                id='email'
                name='email'
                type='email'
                placeholder='email'
                value={formData.email} onChange={handleChange} />
            <label htmlFor='password'>Password </label>
            <input
                id='password'
                name='password'
                type='password'
                placeholder='password'
                value={formData.password} onChange={handleChange} />
            <button >Add me to list!</button>
        </form>
    )
}

export default UserForm;