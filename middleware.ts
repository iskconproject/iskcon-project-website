// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get payment related paths
  console.log('entered middleware')
  console.log('referrer', request.headers.get("referer"));
  const isPaymentPage =
    request.nextUrl.pathname === "/payment-success" ||
    request.nextUrl.pathname === "/payment-failure";

  if (isPaymentPage) {
    // Check for payment gateway referrer or custom token
    const referrer = request.headers.get("referer");
    const paymentToken = request.nextUrl.searchParams.get("token");

    const validReferrer = referrer?.includes("https://eazypay.icicibank.com");
    const validToken = paymentToken && paymentToken.length > 0;

    // Redirect to 404 if direct access
    if (!validReferrer && !validToken) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
  }

  return NextResponse.next();
}

// Configure middleware to run only on payment routes
export const config = {
  matcher: ["/payment-success", "/payment-failure"],
};
