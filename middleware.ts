// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken, PaymentData } from "@/lib/crypto";

export async function middleware(request: NextRequest) {
  const isPaymentPage =
    request.nextUrl.pathname === "/payment-success" ||
    request.nextUrl.pathname === "/payment-failure";

  if (isPaymentPage) {
    const token = request.nextUrl.searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/404", request.url));
    }

    try {
      const paymentData: PaymentData | null = await verifyToken(token);

      if (!paymentData) {
        return NextResponse.redirect(new URL("/404", request.url));
      }

      // Attach payment data to response headers for use in the page
      const response = NextResponse.next();
      response.headers.set("x-payment-data", JSON.stringify(paymentData));
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