import Image from "next/image";
import { cn } from "@/lib/utils";
import { CreditCard, Building2, QrCode, Phone } from "lucide-react";

interface OfflinePaymentProps {
  className?: string;
}

const OfflinePayment = ({ className }: OfflinePaymentProps) => {
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 mb-3">
            Offline <span className="text-saffron-600">Payment Options</span>
          </h2>
          <p className="text-maroon-600 max-w-lg mx-auto">
            Prefer traditional payment methods? You can also donate via bank transfer or at our temple
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bank Transfer */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-cream-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-maroon-800 mb-4">
              Bank Transfer
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-cream-100">
                <span className="text-maroon-500">Account Name</span>
                <span className="text-maroon-800 font-medium">ISKCON Asansol</span>
              </div>
              <div className="flex justify-between py-2 border-b border-cream-100">
                <span className="text-maroon-500">Bank</span>
                <span className="text-maroon-800 font-medium">State Bank of India</span>
              </div>
              <div className="flex justify-between py-2 border-b border-cream-100">
                <span className="text-maroon-500">Account No.</span>
                <span className="text-maroon-800 font-medium">38891892011</span>
              </div>
              <div className="flex justify-between py-2 border-b border-cream-100">
                <span className="text-maroon-500">IFSC Code</span>
                <span className="text-maroon-800 font-medium">SBIN0010123</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-maroon-500">Branch</span>
                <span className="text-maroon-800 font-medium">Asansol Main</span>
              </div>
            </div>
          </div>

          {/* UPI / QR */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-cream-200">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white mb-4">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-maroon-800 mb-4">
              Scan & Pay (UPI)
            </h3>
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 bg-cream-50 rounded-xl p-2 mb-4">
                <Image
                  src="/images/namhatta-trust-qr.png"
                  alt="UPI QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-maroon-600 text-sm text-center">
                Scan this QR code with any UPI app to make an instant payment
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Help */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-saffron-50 rounded-full text-saffron-700">
            <Phone className="w-5 h-5" />
            <span className="font-medium">Need help? Call us at</span>
            <a href="tel:+919433320314" className="font-bold hover:underline">
              +91 94333 20314
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfflinePayment;
