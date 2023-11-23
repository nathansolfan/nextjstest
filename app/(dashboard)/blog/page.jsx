import React, { useState } from 'react'

export default function Blog() {

const [title, setTitle] = useState('')
const [body, setBody] = useState('')


  return (
    <form action="">
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
    </form>
  )
}
