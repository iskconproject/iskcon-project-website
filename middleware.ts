// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isPaymentPage =
    request.nextUrl.pathname === "/payment-success" ||
    request.nextUrl.pathname === "/payment-failure";

  if (isPaymentPage) {
    try {
      const referer = request.headers.get("referer");
      if (!referer || !referer.includes("https://eazypay.icicibank.com")) {
        return NextResponse.redirect(new URL("/404", request.url));
      }

      // Attach payment data to response headers for use in the page
      const response = NextResponse.next();
      return response;
    } catch (error) {
      console.error("Middleware error:", error);
      return NextResponse.redirect(new URL("/404", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/payment-success", "/payment-failure"],
};
