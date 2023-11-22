import Link from 'next/link'
import React from 'react'
import LogoutButton from './Logout'

export default function Navbar( {user}) {
  return (
    <nav>
    <Link href="/">Home</Link>
    <Link href="/signup">Sign up</Link>    
    <Link href="/login">Login</Link>
    <Link href="/about">About</Link>
    {user && <span> - Hello, {user.email}</span>}
    <LogoutButton/>
    </nav>
  )
}
