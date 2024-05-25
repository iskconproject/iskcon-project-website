import OfflinePayment from "@/components/offline-payment";
import PageHeader from "@/components/page-header";

const BhagwatamClassPage = () => {
  return (
    <main className="">
      <PageHeader className="bg-violet-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Srimad Bhagwatam Class
          </h1>
          <p>
            Join us for the daily Srimad Bhagwatam class. The class is conducted
            by our temple devotees and is open for all. The class is conducted
            in Bengali and is a great way to learn about the teachings of the
            Bhagwatam.
          </p>

          <div className="py-8 px-8 space-y-4 text-red-700 md:text-2xl">
            <p>
              निगमकल्पतरोर्गलितं फलं शुकमुखादमृतद्रवसंयुतम् । पिबत भागवतं
              रसमालयं मुहुरहो रसिका भुवि भावुका: ॥ १.१.३ ॥
            </p>

            <p>
              নিগম-কল্পতরোর্গলিতং ফলং শুক-মুখাদমৃত-দ্রব-সংযুতম্ । পিবত ভাগবতং
              রসমালয়ং মুহুর হো রসিকা ভুবি ভাবুকাঃ ॥ ১.১.৩ ॥
            </p>

            <p className="text-gray-600">
              nigama-kalpa-taror galitaṁ phalaṁ śuka-mukhād amṛta-drava-saṁyutam
              pibata bhāgavataṁ rasam ālayam muhur aho rasikā bhuvi bhāvukāḥ ॥
              1.1.3
            </p>
          </div>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 ">
        <div className="grid md:grid-cols-4 gap-4 mt-4"></div>

        <div className="py-32">
          <OfflinePayment />
        </div>
      </div>
    </main>
  );
};

export default BhagwatamClassPage;
