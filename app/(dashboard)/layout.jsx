import React from 'react'
import Navbar from '../Components/Navbar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export default async function DashboardLayout({children}) {

    const supabase = createServerComponentClient({cookies})
    const {data} = await supabase.auth.getSession()
    
    let user = null;
    if (data.session) {
      user = data.session.user;
      console.log("User data:", user); // Debugging line

      // Optionally, redirect to /login if not logged in
      // if (!user) {
      //   redirect("/login");
      // }
    }
  return (
    <>    
<Navbar user={user}/>    
{/* I can add <p> or w/. here if i want */}
    {children}
    </>
  )
}
