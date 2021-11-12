import React, { useState } from 'react';


function Contact(props){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
return (
    <form>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" 
          onChange={(e) => {
              setName(e.target.value)}}
             // onBlur=()=>{}
              value={name}/>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email"
                    onChange={(e) => {
                        setEmail(e.target.value)}}
                       // onBlur=()=>{}
                        value={email}/> 
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" 
                    onChange={(e) => {
                        setMessage(e.target.value)}}
                       // onBlur=()=>{}
                        value={message}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </form>
    );}
export default Contact;