"use client"
import React, { useState } from 'react'

export default function Blog() {

const [title, setTitle] = useState('')
const [body, setBody] = useState('')

const handleSubmit = (e) =>{
  e.preventDefault()

  const blog = {
    title, body }

    const response = fetch('http://localhost:3000')


    
}

  return (
    <form onSubmit={(e) => handleSubmit()}>
        <label>
            <span>Title:</span>
            <input type="text"
            required
            onChange={()=> setTitle}
            value={title}
            />
        </label>
        <label>
            <span>Express your mind:</span>
            <input type="text"
            required
            onChange={()=> setBody}
            value={body}
            />
        </label>
        <button></button>
    </form>
  )
}
