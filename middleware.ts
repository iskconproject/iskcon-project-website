import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/crypto";

// middleware.ts
export async function middleware(request: NextRequest) {
  const isPaymentPage =
    request.nextUrl.pathname === "/payment-success" ||
    request.nextUrl.pathname === "/payment-failure";

  if (isPaymentPage) {
    const encryptedToken = request.nextUrl.searchParams.get("token");

    if (!encryptedToken) {
      return NextResponse.redirect(new URL("/404", request.url));
    }

    try {
      const paymentData = await verifyToken(encryptedToken);

      if (!paymentData) {
        return NextResponse.redirect(new URL("/404", request.url));
      }

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
