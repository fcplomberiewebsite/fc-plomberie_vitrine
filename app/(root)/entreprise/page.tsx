/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import {
  FaAward,
  FaCogs,
  FaBolt,
  FaEuroSign,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import Btn from "@/components/Shared/Btn";
import DevisSection from "@/components/Shared/DevisSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "L'entreprise | FC Plomberie - Chauffage - Sanitaire | Notre Histoire",
  description:
    "Découvrez FC Plomberie - Chauffage - Sanitaire, entreprise SAS fondée en 2024. Savoir-faire artisanal au service des particuliers et professionnels en région Centre-Val de Loire.",
  keywords:
    "à propos fc plomberie - chauffage - sanitaire, entreprise sas, savoir-faire artisanal, région centre-val de loire, histoire entreprise, valeurs, expertise plomberie chauffage",
  openGraph: {
    title: "L'entreprise de FC Plomberie - Chauffage - Sanitaire",
    description:
      "Entreprise SAS fondée en 2024, FC Plomberie met son savoir-faire artisanal au service de la région Centre-Val de Loire.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://artisanat-fcplomberie.fr/entreprise",
  },
};

export default function AproposPage() {
  const valeurs = [
    {
      icon: <FaAward size={40} />,
      title: "Expertise",
      description:
        "Un savoir-faire artisanal reconnu et une expertise technique de pointe",
    },
    {
      icon: <FaCogs size={40} />,
      title: "Qualité",
      description:
        "Des matériaux professionnels et des finitions soignées sur tous nos chantiers",
    },
    {
      icon: <FaBolt size={40} />,
      title: "Réactivité",
      description:
        "Intervention rapide et service d'urgence 24h/24 pour répondre à vos besoins",
    },
    {
      icon: <FaEuroSign size={40} />,
      title: "Transparence",
      description:
        "Devis clairs et tarifs transparents, sans surprises ni frais cachés",
    },
  ];

  const engagements = [
    "Respect des délais convenus",
    "Chantiers livrés propres et clé en main",
    "Garantie sur tous nos travaux",
    "Suivi personnalisé de chaque client",
    "Formation continue aux nouvelles technologies",
    "Respect des normes environnementales",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-linear-to-br from-primary-500 to-second-500 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/images/locaux.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/10 to-black/20"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="mb-6">
            <Image
              src="/logo/logo_white_inline.png"
              alt="Logo - FC Plomberie - Chauffage - Sanitaire"
              width={600}
              height={120}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>
          {/* <div className="text-center text-white max-w-4xl">
            <h1 className="font-one text-4xl md:text-5xl font-bold mb-6 tracking-wide drop-shadow-lg">
              À Propos
            </h1>
            <p className="font-two text-xl md:text-2xl opacity-90">
              Votre artisan de confiance
            </p>
          </div> */}
        </div>
      </section>

      {/* Histoire de l'entreprise */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-6">
                À Propos
              </h1>
              <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 rounded-full mb-8"></div>

              <div className="space-y-6 font-two text-noir-500 leading-relaxed">
                <p className="text-lg">
                  <strong>Entreprise SAS fondée en novembre 2024</strong>, FC
                  Plomberie met son savoir-faire artisanal au service des
                  particuliers et professionnels de la région Centre-Val de
                  Loire.
                </p>

                <p>
                  Notre entreprise est née de la volonté de proposer des
                  services de plomberie, chauffage et sanitaire alliant la
                  qualité du travail traditionnel aux techniques modernes. Nous
                  privilégions les relations de proximité et la satisfaction
                  client.
                </p>

                <p>
                  Basés au cœur de la région Centre, nous intervenons rapidement
                  dans un large périmètre, de l'Orléanais jusqu'en
                  Île-de-France, en passant par la Touraine et le Berry.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="tel:0699024075"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-primary-500 to-second-500 text-white font-two font-medium rounded-lg hover:from-primary-600 hover:to-second-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaPhone />
                  Contactez-nous : 06.99.02.40.75
                </a>
              </div>
            </div>

            {/* Image ou infographie */}
            <div className="bg-linear-to-br from-primary-100 to-second-100 rounded-2xl p-8 border border-primary-200/50">
              <h3 className="font-one text-2xl font-bold text-noir-700 mb-6 text-center">
                En quelques chiffres
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    2024
                  </div>
                  <div className="font-two text-noir-500">
                    Année de création
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-second-500 mb-2">
                    2
                  </div>
                  <div className="font-two text-noir-500">
                    Régions d'intervention
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-second-500 mb-2">
                    100%
                  </div>
                  <div className="font-two text-noir-500">
                    Satisfaction client
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
              Nos Valeurs
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-linear-to-br from-primary-500 to-second-500 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {valeur.icon}
                  </div>
                </div>
                <h3 className="font-one text-xl font-bold text-noir-700 mb-3">
                  {valeur.title}
                </h3>
                <p className="font-two text-noir-500 leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-linear-to-br from-noir-500 to-noir-700 rounded-2xl p-8 text-white">
              <h3 className="font-one text-2xl md:text-3xl font-bold mb-6">
                Notre Mission
              </h3>
              <p className="font-two text-lg leading-relaxed mb-6">
                Chez FC Plomberie, nous croyons que chaque intervention doit
                être menée avec le même niveau d'exigence, qu'il s'agisse d'un
                simple dépannage ou d'un projet d'envergure.
              </p>
              <p className="font-two leading-relaxed">
                Notre objectif est de vous offrir un service complet, de la
                conception à la réalisation, en passant par le conseil et le
                suivi. Nous nous engageons à livrer des chantiers propres, dans
                les délais convenus, avec la garantie d'un travail durable.
              </p>
            </div>

            <div>
              <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-8">
                Nos Engagements
              </h3>

              <div className="space-y-4">
                {engagements.map((engagement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary-500 shrink-0" />
                    <span className="font-two text-noir-700">{engagement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Btn href="/contactez-nous">NOUS CONTACTER</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-6">
            Nous intervenons près de chez vous
          </h3>
          <p className="font-two text-xl text-noir-500 mb-8 max-w-3xl mx-auto">
            De la région Centre-Val de Loire à l'Île-de-France, notre artisan se
            déplace rapidement pour répondre à tous vos besoins en plomberie,
            chauffage et sanitaire.
          </p>
          <Btn href="/contactez-nous">VOIR NOS ZONES D'INTERVENTION</Btn>
        </div>
      </section>

      {/* Section Devis */}
      <DevisSection />
    </div>
  );
}
