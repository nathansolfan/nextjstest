const { createRouteHandlerClient } = require("@supabase/auth-helpers-nextjs");
const { cookies } = require("next/headers");
const { NextResponse } = require("next/server");

export async function GET(request) {
  const requestURL = new URL(request.url);
  const code = requestURL.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Error code mano", error);
    }
  }
  return NextResponse.redirect(requestURL.origin);
}
