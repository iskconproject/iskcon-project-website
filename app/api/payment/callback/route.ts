import { NextRequest, NextResponse } from "next/server";
import { verifySignature } from "@/services/eazypay";
import { redirect } from "next/navigation";

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
