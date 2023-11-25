import Link from 'next/link'
import React from 'react'
import LogoutButton from './Logout'

export default function Navbar({user}) {
  console.log("Navbar user prop:", user); // Debugging line

  return (
    <nav>
    <Link href="/">Home</Link>
    <Link href="/signup">Sign up</Link>    
    <Link href="/login">Login</Link>
    <Link href="/about">About</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/blog/create">Create</Link>
    {user && <span> - Hello, {user.email}</span>}
    <LogoutButton/>
    </nav>
  )
}
