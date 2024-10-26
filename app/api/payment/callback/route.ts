import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Read the plain text response
    console.log("Request body:", body);

    // Parse the plain text response into an object
    const params = new URLSearchParams(body);

    console.log(params, "params");
    const responseCode = params.get("Response Code");
    const uniqueRefNumber = params.get("Unique Ref Number");
    const totalAmount = params.get("Total Amount");
    const transactionAmount = params.get("Transaction Amount");
    const paymentMode = params.get("Payment Mode");
    const id = params.get("ID");
    const rs = params.get("RS");

    console.log({
      responseCode,
      uniqueRefNumber,
      totalAmount,
      transactionAmount,
      paymentMode,
      id,
      rs,
    });

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
      const queryParams = new URLSearchParams();
      queryParams.append("error", "missing-parameters");
      queryParams.append("uniqueRefNumber", uniqueRefNumber || "");
      return redirect(`/payment-failure?${queryParams.toString()}`);
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
        const successUrl = new URL("https://iskconproject.com/payment-success");
        successUrl.searchParams.append("amount", transactionAmount || "");
        successUrl.searchParams.append("reference", uniqueRefNumber || "");

        return NextResponse.redirect(successUrl.toString(), 303);
      } else {
        return NextResponse.redirect(
          "https://iskconproject.com/payment-failure",
          303
        );
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
    const queryParams = new URLSearchParams();
    queryParams.append("error", "internal-server-error");
    queryParams.append("status", "500");
    return redirect(`/payment-failure?${queryParams.toString()}`);
  }
}
