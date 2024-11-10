// route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { generateToken, PaymentData } from "@/lib/crypto";

const paymentSuccessUrl = "https://iskconproject.com/payment-success";
const paymentFailureUrl = "https://iskconproject.com/payment-failure";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Read the plain text response

    // Parse the plain text response into an object (assuming URL-encoded)
    const params = new URLSearchParams(body);

    const id = params.get("ID");
    const uniqueRefNumber = params.get("uniqueRefNumber");
    const responseCode = params.get("responseCode");
    const totalAmount = params.get("totalAmount");
    const transactionAmount = params.get("transactionAmount");
    const paymentMode = params.get("paymentMode");

    if (!id || !uniqueRefNumber || !responseCode) {
      throw new Error("Missing required payment parameters.");
    }

    const paymentData: PaymentData = {
      uniqueRefNumber,
      responseCode,
      totalAmount: totalAmount || "",
      transactionAmount: transactionAmount || "",
      paymentMode: paymentMode || "",
      id,
    };

    const token = await generateToken(paymentData);
    console.log("generated token:", token);

    if (responseCode === "E000") { // Replace with your success code
      const successUrlObj = new URL(paymentSuccessUrl);
      successUrlObj.searchParams.append("token", token);

      return NextResponse.redirect(successUrlObj.toString(), 303);
    } else {
      const failureUrlObj = new URL(paymentFailureUrl);
      failureUrlObj.searchParams.append("token", token);

      return NextResponse.redirect(failureUrlObj.toString(), 303);
    }
  } catch (error) {
    console.error("Error processing payment callback:", error);
    return NextResponse.redirect(new URL("/404", req.url));
  }
}