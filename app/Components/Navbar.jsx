import Link from 'next/link'
import React from 'react'

export default function Navbar( {user}) {
  return (
    <nav>
    <Link href="/">Home</Link>
    <Link href="/signup">Sign up</Link>
    <Link href="/about">About</Link>
    <Link href="/login">Login</Link>
    {user && <span> - Hello, {user.email}</span>}
    </nav>
  )
}
