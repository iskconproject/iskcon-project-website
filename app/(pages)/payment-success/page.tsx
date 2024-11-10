// pages/payment-success.tsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

interface PaymentData {
  uniqueRefNumber: string;
  responseCode: string;
  totalAmount: string;
  transactionAmount: string;
  paymentMode: string;
  id: string;
}

const PaymentSuccessPage = () => {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    const fetchPaymentData = async () => {
      const response = await fetch("/api/get-payment-data");
      if (response.ok) {
        const data = await response.json();
        setPaymentData(data);
      } else {
        // Optionally, handle errors or redirect to a custom error page
        console.error("Failed to fetch payment data.");
      }
    };

    fetchPaymentData();
  }, []);

  if (!paymentData) {
    return <p>Loading...</p>;
  }

  const { uniqueRefNumber, totalAmount, transactionAmount, paymentMode, id } = paymentData;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <CheckCircleIcon className="h-16 w-16 text-green-500 dark:text-green-400" />
      <h1 className="text-3xl font-bold mt-2">Hare Krishna! Payment Successful</h1>

      <div className="pt-2 text-center text-sm">
        <p className="text-gray-600">
          We are deeply grateful for your generous donation. Here are the details of your transaction:
        </p>
      </div>
      <Card className="mt-8 w-full max-w-md lg:max-w-xl p-4">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Reference Number:</p>
            <p className="text-sm">{uniqueRefNumber}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Amount:</p>
            <p className="text-sm">{totalAmount}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Transaction Amount:</p>
            <p className="text-sm">{transactionAmount}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Payment Mode:</p>
            <p className="text-sm">{paymentMode}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Transaction ID:</p>
            <p className="text-sm">{id}</p>
          </div>
        </CardContent>
        <blockquote className="text-gray-500 italic text-sm mb-8 p-4">
          "True devotion is not a transient emotion, but a state of being where the consciousness of the Lord is always present." - Srila Prabhupada
        </blockquote>
      </Card>

      <div className="mt-8">
        <Link href="/">
          <Button className="mr-4">Go to Home</Button>
        </Link>
        <Link href="/donation">
          <Button variant="secondary" className="mr-4">
            View Donations
          </Button>
        </Link>
        <Link href="/contact-us">
          <Button variant="secondary">Contact Us</Button>
        </Link>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;