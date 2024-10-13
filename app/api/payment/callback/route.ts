import { NextRequest, NextResponse } from 'next/server';
import { verifySignature } from '@/services/eazypay';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const transactionId = searchParams.get('transactionId');
  const status = searchParams.get('status');
  const signature = searchParams.get('signature');

  const data = `${transactionId}|${status}`;
  const isValid = verifySignature(data, signature || '');

  if (isValid && status === 'Success') {
    return NextResponse.redirect('/payment-success');
  } else {
    return NextResponse.redirect('/payment-failed');
  }
}
