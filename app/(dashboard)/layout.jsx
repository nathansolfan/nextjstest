import React from 'react'
import Navbar from '../Components/Navbar'

export default function DashboardLayout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}
