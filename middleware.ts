// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/crypto";

export async function middleware(request: NextRequest) {
  const isPaymentPage =
    request.nextUrl.pathname === "/payment-success" ||
    request.nextUrl.pathname === "/payment-failure";

  if (isPaymentPage) {
    // Get encrypted token from query params
    const encryptedToken = request.nextUrl.searchParams.get("token");

    if (!encryptedToken) {
      return NextResponse.redirect(new URL("/404", request.url));
    }

    try {
      // Verify and decrypt token
      const isValid = await verifyToken(encryptedToken);

      if (!isValid) {
        return NextResponse.redirect(new URL("/404", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/payment-success", "/payment-failure"],
};
