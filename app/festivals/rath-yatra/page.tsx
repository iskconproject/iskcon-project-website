import PageHeader from "@/components/page-header";
import Image from "next/image";

const rathYatraDate = "7.7.2024";

const RathYatraPage = () => {
  return (
    <main>
      <PageHeader className="relative lg:h-[600px] bg-slate-100">
        <Image
          src={"/images/jagannath_deity.jpg"}
          fill={true}
          alt="Jagannath Rath Yatra"
          className="object-cover object-top"
        />

        <div className="absolute left-0 bottom-0 w-full p-4 transform -translate-1/2 bg-gradient-to-t from-black to-transparent h-[150px] flex items-center justify-center">
          <h1 className="md:text-4xl font-semibold text-yellow-200">
            Jagannath Rath Yatra
          </h1>
        </div>
      </PageHeader>

      <article className="container my-16 space-y-8 text-slate-700">
        <p className="text-orange-600">
          {`The Jagannath Rath Yatra is a significant festival celebrated in honor of
      Lord Jagannath, Lord Balabhadra, and Goddess Subhadra. The festival
      marks the bathing ceremony of the deities, which takes place on the
      full moon day of the Jyestha month. The festival is celebrated with
      great enthusiasm and devotion in the Jagannath Temple in Puri, Odisha,
      and other Jagannath temples worldwide.`}
        </p>

        <p>
          {`Ratha Yatra is a Hindu festival associated with Lord Jagannath to
      commemorate his annual visit to Gundicha Temple via Mausi Maa Temple
      (maternal aunt's home) near Saradha Bali, Puri.`}
        </p>

        <p>
          {`The Ratha Yatra festival is celebrated with great pomp and grandeur in
      Puri, Odisha, and other Jagannath temples around the world. The
      festival involves the procession of the deities on grand chariots
      through the streets, accompanied by singing, dancing, and chanting of
      the holy names of the Lord.`}
        </p>

        <p>
          {`We cordially invite all of you, especially Life members, devotees, and
      well-wishers of ISKCON, to participate in the Jagannath Rath Yatra
      festival at ISKCON Asansol Temple. The festival will take place on
      ${rathYatraDate}, and will include a grand procession of the deities on
      beautifully decorated chariots, followed by a special feast of
      prasadam. The festival promises to be a joyous occasion filled with
      devotion, music, and dance, as we celebrate the divine pastimes of
      Lord Jagannath.`}
        </p>

        <p>
          {`We hope to see you all there, and we pray that Lord Jagannath showers
      his blessings upon you and your family.`}
        </p>
      </article>

      <section className="text-2xl bg-yellow-50 py-8">

        <div className="container my-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D295166652902886%26set%3Da.218707847215434%26type%3D3&show_text=true&width=500&is_preview=true"
                width="500"
                height="533"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder={0}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            <div className="max-w-lg mx-auto">
              {/* rath yatra donation qr code section */}
              <h3 className="text-2xl">Donate for Rath Yatra</h3>
              <div className="text-sm">
                <p>
                  {`You can contribute to the Rath Yatra festival by making a donation
            towards the festival expenses. Your generous donations will help
            us organize a grand celebration and offer a sumptuous feast to the
            devotees.`}
                </p>

                <p>
                  {`To make a donation, please scan the QR code below using your
            UPI-enabled payment app or click on the link to make a donation
            online.`}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center mt-8 mx-auto">
                  <Image
                    src={"/images/jagannath_rath_yatra_qr_code.svg"}
                    alt="jagannath rath yatra qr code"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RathYatraPage;
