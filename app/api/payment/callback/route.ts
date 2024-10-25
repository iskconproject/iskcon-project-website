import { NextRequest, NextResponse } from "next/server";
import { verifySignature } from "@/services/eazypay";
import { redirect } from "next/navigation";
import crypto from "crypto";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  console.log(searchParams, "search params", req.url);

  const referenceNo = searchParams.get("Reference No");
  const status = searchParams.get("status");
  const signature = searchParams.get("signature");

  // Verify signature if your payment gateway returns one
  const data = `${referenceNo}|${status}`;
  const isValid = verifySignature(data, signature || "");

  if (isValid && status === "Success") {
    return redirect("/payment-success");
  } else {
    return redirect("/payment-failure");
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Read the plain text response
    console.log("Request body:", body);

    // Parse the plain text response into an object
    const params = new URLSearchParams(body);
    const responseCode = params.get("Response Code");
    const uniqueRefNumber = params.get("Unique Ref Number");
    const totalAmount = params.get("Total Amount");
    const transactionAmount = params.get("Transaction Amount");
    const paymentMode = params.get("Payment Mode");
    const id = params.get("ID");
    const rs = params.get("RS");

    if (
      !responseCode ||
      !uniqueRefNumber ||
      !totalAmount ||
      !transactionAmount ||
      !paymentMode ||
      !id ||
      !rs
    ) {
      console.error("Missing required parameters");
      return NextResponse.json(
        { message: "Bad Request: Missing required parameters" },
        { status: 400 }
      );
    }

    // Generate the SHA512 signature using the response parameters
    const data = `${responseCode}|${uniqueRefNumber}|${totalAmount}|${transactionAmount}|${paymentMode}|${id}`;
    const generatedSignature = crypto
      .createHash("sha512")
      .update(data)
      .digest("hex");

    // Verify the signature
    if (generatedSignature === rs) {
      if (responseCode === "Success") {
        return NextResponse.redirect("/payment-success");
      } else {
        return NextResponse.redirect("/payment-failure");
      }
    } else {
      console.error("Invalid signature");
      return NextResponse.json(
        { message: "Unauthorized: Invalid signature" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error processing payment callback:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
