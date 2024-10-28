import { NextRequest, NextResponse } from "next/server";
import { generateEazypayPaymentUrl } from "@/services/eazypay";

export async function POST(req: NextRequest) {
  try {
    const { amount, email } = await req.json();
    const paymentUrl = generateEazypayPaymentUrl(amount, email);

    return NextResponse.json({ paymentUrl });
  } catch (error) {
    console.error("Error initiating payment:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
