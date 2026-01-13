import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, BookOpen, Calendar, Globe, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: "History | The Story of ISKCON",
  description: "Learn about the history of ISKCON, founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966 to spread Krishna consciousness worldwide.",
};

const History = () => {
  return (
    <main className="bg-cream-50">
      {/* Hero Header */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/prabhupada_journey_to_usa.svg"
          fill
          className="object-cover object-top"
          alt="Srila Prabhupada's journey to USA"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
          <div className="container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cream-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              The History of <span className="text-gold-300">ISKCON</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-maroon-500 mb-8 pb-8 border-b border-cream-200">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-saffron-500" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-saffron-500" />
                <span>Founded 1966</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-saffron-500" />
                <span>Worldwide Movement</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-maroon max-w-none">
              <p className="text-xl text-maroon-700 leading-relaxed mb-8">
                The establishment of the International Society for Krishna Consciousness (ISKCON) 
                in 1966 in New York City marked a pivotal moment in the propagation of the 
                transcendental message of Sri Chaitanya Mahaprabhu.
              </p>

              {/* Quote Block */}
              <blockquote className="relative bg-gradient-to-br from-saffron-50 to-gold-50 rounded-2xl p-6 md:p-8 my-8 border-l-4 border-saffron-500 not-prose">
                <Quote className="w-8 h-8 text-saffron-400 mb-4" />
                <p className="text-lg text-maroon-800 italic font-medium mb-4">
                  "I have no personal qualification, but I simply tried to satisfy my spiritual master, 
                  and he has kindly sent so many nice boys and girls to help me."
                </p>
                <footer className="text-saffron-600 font-semibold">
                  — Srila Prabhupada
                </footer>
              </blockquote>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 mt-12 mb-6">
                The Divine Messenger
              </h2>

              <p className="text-maroon-700 leading-relaxed mb-6">
                This spiritual movement was initiated by His Divine Grace A.C. Bhaktivedanta 
                Swami Prabhupada, a prominent figure within the Brahma Madhva Gaudiya Vaishnava 
                Sampradaya—one of the four Vaishnava traditions. ISKCON's roots trace back to 
                an authorized disciplic succession, where spiritual preceptors imparted the 
                science of self-realization based on the teachings of the Bhagavad Gita and 
                Srimad Bhagavatam.
              </p>

              <p className="text-maroon-700 leading-relaxed mb-6">
                Sri Chaitanya Mahaprabhu, along with His brother Nityananda Prabhu and the 
                Goswamis of Vrindavana, including Sanatana, Rupa, Jiva, Gopal Bhatta, Raghunatha 
                Dasa, and Raghunatha Bhatta, played a pivotal role in codifying the precepts 
                and practices that form the foundation of ISKCON.
              </p>

              {/* Image with Caption */}
              <figure className="my-10 not-prose">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/prabhupada_smiling.svg"
                    alt="Srila Prabhupada"
                    fill
                    className="object-contain bg-saffron-50"
                  />
                </div>
                <figcaption className="text-center text-sm text-maroon-500 mt-4">
                  His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, Founder-Acharya of ISKCON
                </figcaption>
              </figure>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 mt-12 mb-6">
                Ancient Wisdom for the Modern World
              </h2>

              <p className="text-maroon-700 leading-relaxed mb-6">
                The Bhagavad Gita, considered the principal scripture of the Hare Krishna 
                Movement, has an ancient lineage, with its teachings passed down through oral 
                tradition for over 5000 years before being put into writing.
              </p>

              <p className="text-maroon-700 leading-relaxed mb-6">
                Sri Chaitanya's profound impact on fostering a massive devotional movement in 
                India led to the compilation of numerous volumes on Krishna consciousness 
                philosophy. In the 19th century, Bhaktivinoda Thakura, a distinguished Vaishnava 
                theologian, brought Krishna consciousness to a contemporary audience by dispatching 
                a book on the Teachings of Lord Caitanya to McGill University in Canada in 1896.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 mt-12 mb-6">
                The Journey to the West
              </h2>

              <p className="text-maroon-700 leading-relaxed mb-6">
                Following in this preceptorial line, Bhaktivinoda Thakur's son, Bhaktisiddhanta 
                Sarasvati Goswami, instructed Srila Prabhupada to spread Krishna consciousness 
                among the English-speaking populace of the West.
              </p>

              <p className="text-maroon-700 leading-relaxed mb-6">
                In adherence to this directive, Srila A.C. Bhaktivedanta Swami Prabhupada embarked 
                on a daring journey across the Atlantic Ocean in 1965, arriving in the USA. This 
                marked the inception of The International Society for Krishna Consciousness (ISKCON), 
                a spiritually significant movement aimed at fulfilling his guru's desire.
              </p>

              <p className="text-maroon-700 leading-relaxed mb-6">
                Within a remarkably brief span of 11 years, ISKCON expanded to major cities 
                worldwide, perpetuating the timeless teachings of Sri Chaitanya Mahaprabhu.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12 not-prose">
                {[
                  { number: "1966", label: "Year Founded" },
                  { number: "800+", label: "Temples Worldwide" },
                  { number: "100+", label: "Countries" },
                  { number: "80+", label: "Books Published" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl border border-cream-200 shadow-sm"
                  >
                    <div className="font-heading text-2xl md:text-3xl font-bold text-saffron-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-maroon-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-12 pt-8 border-t border-cream-200">
              <Link
                href="/iskcon/philosophy"
                className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Philosophy
              </Link>
              <Link
                href="/iskcon/founder"
                className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-medium transition-colors"
              >
                Founder Acharya
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default History;
