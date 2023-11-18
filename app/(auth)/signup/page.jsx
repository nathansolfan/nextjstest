"use client"
import React, { useState } from 'react'
import supabase from '../../Supabase'


export default function Signup() {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    
// this method is called when user submits - the (e - event) is given when the form is passed

const handleSubmit = async (e) => {
    // prevent default
    e.preventDefault()
    const {user, error}  = await supabase.auth.signUp({
        email,
        password,
        options:{
            emailRedirectTo: `${location.origin}`
        }
    })
// Access to user and error, display it on the log
if(user){
    console.log(user, "signed yea")
}
if(error){
    console.log(error.message)
}
}


  return ( 
  <form onSubmit={(e) => handleSubmit(e, email, password )}>
  <label>
      <span>Email:</span>
      <input
      type="text"
      // the onChange={ has a arrow function}
      // = () => setEmail()
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      required
      />
  </label>
  {/* Password Form */}
  <label>
      <span>Password:</span>
      <input 
      type="password"
      onChange={(e)=> setPassword(e.target.value)} 
      value={password}
      required
      />
  </label>
  {/* When pressed we have access to the Event (e) on the onSubmit() */}
  <button className='btn-primary'>Submit</button>
</form>
  )
}
