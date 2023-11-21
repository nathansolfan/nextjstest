import React from "react";
import Navbar from "./Components/Navbar";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  // get the cookies > session > display email
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <p>Home Mamma mia</p>
      <Navbar user={data.session.user} />
    </main>
  );
}
