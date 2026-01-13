import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, BookOpen, Calendar, Globe, Quote, Feather } from 'lucide-react';

export const metadata: Metadata = {
  title: "Founder Acharya | Srila Prabhupada",
  description: "Biography of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, the Founder-Acharya of the International Society for Krishna Consciousness (ISKCON).",
};

const Founder = () => {
  return (
    <main className="bg-cream-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Hero Header */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/prabhupada.svg"
          fill
          className="object-cover object-top"
          alt="Srila Prabhupada"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/50 to-transparent dark:from-black/90 dark:via-black/50" />
        
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
              Founder <span className="text-gold-300">Acharya</span>
            </h1>
            <p className="text-cream-100 max-w-2xl mt-2 text-lg md:text-xl font-light">
              His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-maroon-600 dark:text-zinc-400 mb-8 pb-8 border-b border-cream-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-saffron-500" />
                <span>1896 - 1977</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-saffron-500" />
                <span>Global Ambassador</span>
              </div>
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-saffron-500" />
                <span>Scholar & Author</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-maroon dark:prose-invert max-w-none">
              <p className="text-xl text-maroon-800 dark:text-zinc-200 leading-relaxed mb-8">
                Born in 1896 in Calcutta, India, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada 
                had a transformative encounter with his spiritual mentor, Srila Bhaktisiddhanta 
                Sarasvati Gosvami, in Calcutta in 1922. Srila Bhaktisiddhanta Sarasvati, a revered 
                religious scholar and the founder of sixty-four Gaudiya Mathas (Vedic institutes), 
                recognized the potential in this educated young man and persuaded him to devote his 
                life to imparting Vedic knowledge. Srila Prabhupada formally became his disciple in 1933.
              </p>

              <blockquote className="relative bg-gradient-to-br from-saffron-50 to-gold-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-6 md:p-8 my-8 border-l-4 border-saffron-500 not-prose shadow-sm">
                <Quote className="w-8 h-8 text-saffron-400 mb-4" />
                <p className="text-lg text-maroon-800 dark:text-zinc-200 italic font-medium mb-4">
                  "One who has dedicated his life to present the book of God, Bhagavad-gita, to the world, is the best of all Human beings."
                </p>
                <footer className="text-saffron-600 dark:text-saffron-400 font-semibold">
                  — Srila Prabhupada
                </footer>
              </blockquote>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 dark:text-saffron-500 mt-12 mb-6">
                A Lifetime of Preparation
              </h2>
              
              <p className="text-maroon-700 dark:text-zinc-300 leading-relaxed mb-6">
                During their initial meeting, Srila Bhaktisiddhanta Sarasvati urged Srila Prabhupada 
                to disseminate Vedic wisdom in English. In the ensuing years, Srila Prabhupada wrote 
                a commentary on the Bhagavad-gita, supported the Gaudiya Matha's endeavors, and, in 
                1944, initiated the publication of Back to Godhead, an English bi-weekly magazine. 
                Operating single-handedly, Srila Prabhupada handled editing, manuscript typing, 
                galley proof checks, and distribution. His disciples in the West now continue the magazine.
              </p>

              <figure className="my-10 not-prose">
                 <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                   <Image
                     src="/images/prabhupada_smiling.svg"
                     alt="Srila Prabhupada Smiling"
                     fill
                     className="object-contain bg-saffron-50 dark:bg-zinc-800"
                   />
                 </div>
                 <figcaption className="text-center text-sm text-maroon-500 dark:text-zinc-400 mt-4 italic">
                   His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
                 </figcaption>
               </figure>

              <p className="text-maroon-700 dark:text-zinc-300 leading-relaxed mb-6">
                In 1950, Srila Prabhupada embraced the vanaprastha (retired) order, withdrawing from 
                married life to dedicate more time to study and writing. He relocated to the holy city 
                of Vrndavana, residing in the historic temple of Radha-Damodara, where he immersed 
                himself in profound study and writing. Taking sannyasa (renounced order of life) in 
                1959, Srila Prabhupada embarked on his magnum opus: a multivolume commentated 
                translation of the eighteen-thousand-verse Srimad-Bhagavatam (Bhagavata Purana). 
                Additionally, he authored "Easy Journey to Other Planets."
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 dark:text-saffron-500 mt-12 mb-6">
                 Global Mission
               </h2>

              <p className="text-maroon-700 dark:text-zinc-300 leading-relaxed mb-6">
                After publishing three volumes of the Bhagavatam, Srila Prabhupada ventured to the 
                United States in September 1965 to fulfill his spiritual master's mission. By 
                November 14, 1977, when he passed away, he had overseen the growth of the 
                International Society for Krishna Consciousness (ISKCON) into a global confederation 
                with over one hundred asramas, schools, temples, institutes, and farm communities.
              </p>

              {/* Timeline Section */}
              <div className="my-12 not-prose">
                <h3 className="font-heading text-xl font-semibold text-maroon-800 dark:text-saffron-400 mb-6 flex items-center gap-2">
                   <Calendar className="w-5 h-5 text-gold-500" />
                   Key Chronology
                </h3>
                <div className="border-l-2 border-saffron-200 dark:border-zinc-700 ml-3 space-y-8 pl-8 py-2">
                  {[
                    { year: "1896", title: "Born in Calcutta", desc: "Abhay Charan De appeared in this world." },
                    { year: "1922", title: "Meets Spiritual Master", desc: "First meeting with Srila Bhaktisiddhanta Sarasvati." },
                    { year: "1933", title: "Formal Initiation", desc: "Accepts initiation at Allahabad." },
                    { year: "1959", title: "Takes Sannyasa", desc: "Accepts the renounced order of life in Mathura." },
                    { year: "1965", title: "Jaladuta Journey", desc: "Departs for USA at age 69 on the steamship Jaladuta." },
                    { year: "1966", title: "ISKCON Founded", desc: "Incorporates the society in New York City." },
                    { year: "1977", title: "Departure", desc: "Enters samadhi in Vrindavan." },
                  ].map((event, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-saffron-500 border-4 border-cream-50 dark:border-zinc-950" />
                      <span className="text-sm font-bold text-saffron-600 dark:text-saffron-400 block mb-1">{event.year}</span>
                      <h4 className="font-semibold text-maroon-800 dark:text-zinc-100">{event.title}</h4>
                      <p className="text-sm text-maroon-600 dark:text-zinc-400">{event.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-maroon-700 dark:text-zinc-300 leading-relaxed mb-6">
                Despite his advanced age, Srila Prabhupada circled the globe fourteen times in just 
                twelve years on extensive lecture tours across six continents. He continued prolific 
                writing throughout this period, creating a comprehensive library of Vedic philosophy, 
                religion, literature, and culture.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-12 pt-8 border-t border-cream-200 dark:border-zinc-800">
              <Link
                href="/iskcon/philosophy"
                className="inline-flex items-center gap-2 text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Philosophy
              </Link>
              <Link
                href="/iskcon/history"
                className="inline-flex items-center gap-2 text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 font-medium transition-colors"
              >
                History of ISKCON
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Founder;
