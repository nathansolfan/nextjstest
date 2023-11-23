const { createMiddlewareClient } = require("@supabase/auth-helpers-nextjs");
const { NextResponse } = require("next/server");

// user session is tracked in a cookie and middleware allow to read and write it.

export default async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data } = await supabase.auth.getSession();
  if (!data.session && req.nextUrl.pathname.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
