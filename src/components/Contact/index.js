import React, { useState } from 'react';

function Contact(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const reset = () => [setName, setEmail, setMessage].forEach(fn => fn(''))
    return (

<div className="container">
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log({ name, email, message })
            reset()
        }}>
            <h1 className="headish">Contact me</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                    required />

            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                    required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5"
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    value={message}
                    required />
            </div>
            <button type="submit">Submit</button>
        </form></div>
    );
}
export default Contact;