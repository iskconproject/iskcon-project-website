'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/page-header';
import Link from 'next/link';

const PaymentFailurePage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const uniqueRefNumber = searchParams.get('uniqueRefNumber');
  const status = searchParams.get('status');

  return (
    <main className="">
      <PageHeader className="bg-red-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Payment Failed
          </h1>
          <p>Unfortunately, your payment could not be processed at this time.</p>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 text-center">
        <div className="bg-white rounded-md p-8 shadow-md border">
          {error && (
            <p className="text-red-700 md:text-lg mb-4">
              Error: {error}
            </p>
          )}
          {uniqueRefNumber && (
            <p className="text-gray-600 md:text-lg mb-4">
              Reference Number: {uniqueRefNumber}
            </p>
          )}
          {status && (
            <p className="text-gray-600 md:text-lg mb-4">
              Status Code: {status}
            </p>
          )}
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

export default PaymentFailurePage;