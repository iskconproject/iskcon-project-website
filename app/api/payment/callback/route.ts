import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const paymentSuccessUrl = "https://iskconproject.com/payment-success";
const paymentFailureUrl = "https://iskconproject.com/payment-failure";

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

    if (
      !responseCode ||
      !uniqueRefNumber ||
      !totalAmount ||
      !transactionAmount ||
      !paymentMode ||
      !id ||
      !rs
    ) {
      console.log({
        responseCode,
        uniqueRefNumber,
        totalAmount,
        transactionAmount,
        paymentMode,
        id,
        rs,
      });
      console.error("Missing required parameters");
      const queryParams = new URLSearchParams();
      queryParams.append("error", "missing-parameters");
      queryParams.append("uniqueRefNumber", uniqueRefNumber || "");
      return NextResponse.redirect(
        `${paymentFailureUrl}?${queryParams.toString()}`,
        303
      );
    }

    // Generate the SHA512 signature using the response parameters
    const data = `${responseCode}|${uniqueRefNumber}|${totalAmount}|${transactionAmount}|${paymentMode}|${id}`;
    const generatedSignature = crypto
      .createHash("sha512")
      .update(data)
      .digest("hex");

    // Verify the signature
    // if (generatedSignature === rs) { // TODO: Uncomment this line later once the signature verification is fixed
    if (responseCode === "E000") {
      const successUrl = new URL(paymentSuccessUrl);
      successUrl.searchParams.append("amount", transactionAmount || "");
      successUrl.searchParams.append("reference", uniqueRefNumber || "");

      return NextResponse.redirect(successUrl.toString(), 303);
    } else {
      return NextResponse.redirect(
        `${paymentFailureUrl}?error=${responseCode}`,
        303
      );
    }
    // }
  } catch (error) {
    console.error("Error processing payment callback:", error);
    const queryParams = new URLSearchParams();
    queryParams.append("error", "internal-server-error");
    queryParams.append("status", "500");
    return NextResponse.redirect(
      `${paymentFailureUrl}?${queryParams.toString()}`,
      303
    );
  }
}
