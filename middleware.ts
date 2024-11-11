import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("user");
  const isAuthenticated = !!token;

  console.log("Token:", token);
  console.log("Authenticated:", isAuthenticated);
  console.log("Request URL:", request.url);

  const requestPath = request.nextUrl.pathname;

  if (requestPath.startsWith("/login") && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else if (requestPath.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard"],
};
