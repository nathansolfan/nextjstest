const { createRouteHandlerClient } = require("@supabase/auth-helpers-nextjs");
const { cookies } = require("next/headers");
const { NextResponse } = require("next/server");

import React from "react";

export async function GET(request) {
  const requestURL = new URL(request.url);
  const code = requestURL.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    await supabase.auth.exchangeCodeForSession(code);
  }
  return NextResponse.redirect(requestURL.origin);
}
