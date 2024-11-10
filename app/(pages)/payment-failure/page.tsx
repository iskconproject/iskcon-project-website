"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PaymentFailurePage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const uniqueRefNumber = searchParams.get("uniqueRefNumber");
  const status = searchParams.get("status");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <AlertTriangle className="h-16 w-16 text-red-500 dark:text-red-400" />
      <h1 className="text-3xl font-bold mt-2">Payment Failed</h1>

      <div className="pt-2 text-center text-sm">
        <p className="text-gray-600">
          Unfortunately, your payment could not be processed at this time.
        </p>
      </div>

      <Card className="mt-8 w-full max-w-md lg:max-w-xl p-4">
        <CardHeader>
          <CardTitle>Error Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {error && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Error:</p>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          {uniqueRefNumber && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Reference Number:</p>
              <p className="text-sm">{uniqueRefNumber}</p>
            </div>
          )}
          {status && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Status Code:</p>
              <p className="text-sm">{status}</p>
            </div>
          )}

          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-yellow-600 h-5 w-5" />
              <p className="font-semibold text-yellow-700">Important Notice</p>
            </div>
            <p className="text-sm text-yellow-800">
              If the amount has been deducted from your bank account, please
              save a screenshot of the transaction for reference and contact us
              immediately. Our team will assist you in resolving this issue.
            </p>
          </div>
        </CardContent>
        <blockquote className="text-gray-500 italic text-sm mb-8 p-4">
          "When one is in difficulty, the consciousness of God comes naturally.
          A sincere devotee prays to the Lord, whether in happiness or
          distress." - Srila Prabhupada
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

export default PaymentFailurePage;
