import React from 'react'
import Navbar from '../Components/Navbar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default async function AutoLayout({children}) {
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
    {children}
    </>
  )
}
