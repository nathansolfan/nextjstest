const { default: supabase } = require("../Supabase");
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export default function MyApp() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);
  }, []);
  return (
    <>
      <Navbar user={user} />
    </>
  );
}
