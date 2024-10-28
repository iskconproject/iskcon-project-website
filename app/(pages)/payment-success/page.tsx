'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/page-header';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();
  const uniqueRefNumber = searchParams.get('uniqueRefNumber');
  const amount = searchParams.get('amount');


  return (
    <main className="">
      <PageHeader className="bg-green-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Payment Successful
          </h1>
          <p>Thank you for your donation! Your payment has been successfully processed.</p>
        </div>
      </PageHeader>
      <div className="container mx-auto py-4 text-center">
        <CheckCircle2 className="text-green-500 w-16 h-16 mx-auto my-4" />
        <div className="bg-white rounded-md p-8 shadow-md border">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">
            Hare Krishna!
          </h2>
          <p className="text-gray-600 md:text-lg mb-4">
            We are deeply grateful for your generous donation. Here are the details of your transaction:
          </p>
          {uniqueRefNumber && (
            <p className="text-gray-600 md:text-lg mb-4">
              <strong>Reference Number:</strong> {uniqueRefNumber}
            </p>
          )}
          {amount && (
            <p className="text-gray-600 md:text-lg mb-4">
              <strong>Amount:</strong> ${amount}
            </p>
          )}
          <blockquote className="text-gray-500 italic md:text-lg mb-8">
            "In this age of Kali, the holy name of the Lord, the Hare Krishna maha-mantra, is the incarnation of Lord Krishna. Simply by chanting the holy name, one associates with the Lord directly. Anyone who does this is certainly delivered." - Chaitanya Charitamrita, Adi-lila 17.22
          </blockquote>
          <div className="mt-8">
            <Link href="/">
              <Button className="mr-4">
                Go to Home
              </Button>
            </Link>
            <Link href="/donation">
              <Button variant="secondary" className="mr-4">
                View Donations
              </Button>
            </Link>
            <Link href="/contact-support">
              <Button variant="secondary">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;