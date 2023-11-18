const { createMiddlewareClient } = require("@supabase/auth-helpers-nextjs");
const { NextResponse } = require("next/server");

// user session is tracked in a cookie and middleware allow to read and write it.
NextResponse;

import React from "react";

export default async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
