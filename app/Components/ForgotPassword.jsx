import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'

export default async function ForgotPassword(user) {
    const supabase = createClientComponentClient()
    await supabase.auth.resetPasswordForEmail((user.email), {
        redirectTo: `${location.origin}`,
      })
  return  (
  <button>Forgot email</button>)
}
