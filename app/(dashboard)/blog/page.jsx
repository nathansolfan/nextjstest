"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Blog() {

const router = useRouter()
const [title, setTitle] = useState('')
const [body, setBody] = useState('')

const handleSubmit = async (e) =>{
  e.preventDefault()

  const blog = {
    title, body }

    const response = await fetch('http://localhost:3000/api/blog', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    

    const jsondata = await response.json()
    if(jsondata.error){
      console.log(error.message)
    }
    if(jsondata.data){
      router.refresh()
      router.push('/')     
    }    
}

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Title:</span>
            <input type="text"
            required
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            />
        </label>
        <label>
            <span>Express your mind:</span>
            <input type="text"
            required
            onChange={(e)=> setBody(e.target.value)}
            value={body}
            />
        </label>
        <button>Add</button>
    </form>
  )
}
