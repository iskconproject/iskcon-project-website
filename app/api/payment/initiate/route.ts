import { NextRequest, NextResponse } from "next/server";
import { generatePaymentUrl } from "@/services/eazypay";

export async function POST(req: NextRequest) {
  try {
    const { amount, email } = await req.json();
    const paymentUrl = generatePaymentUrl(amount, email);

    return NextResponse.json({ paymentUrl });
  } catch (error) {
    console.error("Error initiating payment:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
