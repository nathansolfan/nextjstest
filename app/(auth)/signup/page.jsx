"use client"
import React, { useState } from 'react'
import supabase from '../../Supabase'


export default function Signup() {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    

    const {}  = supabase.auth.signUp({
        email,
        password,
        options:{
            emailRedirectTo: `${location.origin}`
        }
    })


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
