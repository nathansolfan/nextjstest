import React from 'react'
import Navbar from '../Components/Navbar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function DashboardLayout({children}) {

    const supabase = createServerComponentClient({cookies})
    const {data} = await supabase.auth.getSession()

    // cant use Router in server components
if(!data.session){
    // when user is in the dashboard, but not logged in, Sends it to /login
    redirect('/login')
  }
  return (
    <>
    
    <Navbar user={data.session.user}/>
    <p>Title before children, or the page.js</p>
    {children}
    </>
  )
}