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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { referenceNo, status, signature } = body;

    // Verify signature if your payment gateway returns one
    const data = `${referenceNo}|${status}`;
    const isValid = verifySignature(data, signature || "");

    if (isValid && status === "Success") {
      return NextResponse.redirect("/payment-success");
    } else {
      return NextResponse.redirect("/payment-failure");
    }
  } catch (error) {
    console.error("Error processing payment callback:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
