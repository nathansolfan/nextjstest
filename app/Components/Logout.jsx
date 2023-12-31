"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LogoutButton() {
    const router = useRouter()

    const handleSignOut = async () => {
        const supabase = createClientComponentClient()
        const {error } = await supabase.auth.signOut()
        if(!error){
            router.push('/')
            router.refresh()
        }
      }

  return (
    <button onClick={handleSignOut}> Logout </button>
  )
}
