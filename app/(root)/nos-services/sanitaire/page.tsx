/* eslint-disable react/no-unescaped-entities */
import Script from "next/script";
import {
  FaToilet,
  FaShower,
  FaTint,
  FaWrench,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import Btn from "@/components/Shared/Btn";
import DevisSection from "@/components/Shared/DevisSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Spécialiste Sanitaire Région Centre & Île-de-France | FC Plomberie - Chauffage - Sanitaire",
  description:
    "Spécialiste sanitaire en région Centre et Île-de-France. Installation WC, douche, baignoire, rénovation salle de bains. Devis gratuit ✓ Projet clé en main",
  keywords:
    "spécialiste sanitaire, région centre, île-de-france, orléans, tours, blois, installation wc, douche italienne, rénovation salle de bains, baignoire, lavabo, orléans, eure-et-loir, chartres, bourges, châteauroux, Cher, Loire-et-Cher, Loiret, Eure, Essonne, Yvelines, Hauts-de-Seine, Val-de-Marne, Val-d'Oise, Seine-et-Marne, Paris Centre",
  openGraph: {
    title:
      "Spécialiste Sanitaire Expert | FC Plomberie - Région Centre & Île-de-France",
    description:
      "Spécialiste sanitaire : installation, rénovation, aménagement salle de bains. Devis gratuit en région Centre et Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fc-plomberie.com/nos-services/sanitaire",
  },
};

export default function ServiceSanitairePage() {
  const services = [
    {
      icon: <FaToilet size={40} />,
      title: "Pose de WC standards ou suspendus",
      description:
        "Installation complète de WC standards, suspendus ou à poser. Raccordement aux évacuations et finitions soignées. Conseil personnalisé selon votre espace et vos préférences.",
      img: "/images/sanitaire-2.jpg",
    },
    {
      icon: <FaShower size={40} />,
      title: "Installation de douches, baignoires et lavabos",
      description:
        "Pose professionnelle de douches à l'italienne, cabines de douche, baignoires et lavabos. Raccordement eau chaude/froide, évacuations et robinetterie moderne pour votre confort quotidien.",
      img: "/images/sanitaire-3.jpg",
    },
    {
      icon: <FaTint size={40} />,
      title: "Création ou rénovation complète d'espaces sanitaires",
      description:
        "Conception et réalisation complète de salles de bains, salles d'eau et WC. Projet clé en main de la démolition aux finitions, respect des normes et délais convenus.",
      img: "/images/sanitaire-4.jpg",
    },
    {
      icon: <FaWrench size={40} />,
      title: "Remplacement d'anciens équipements",
      description:
        "Remplacement et modernisation de vos anciens équipements sanitaires. Mise aux normes, amélioration du confort et de l'efficacité énergétique de vos installations existantes.",
      img: "/images/sanitaire.jpg",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Conception",
      description: "Étude de votre projet et conseils",
    },
    {
      step: "2",
      title: "Devis",
      description: "Proposition détaillée et chiffrée",
    },
    {
      step: "3",
      title: "Réalisation",
      description: "Travaux menés par nos experts",
    },
    {
      step: "4",
      title: "Livraison",
      description: "Finitions et mise en service",
    },
  ];

  return (
    <>
      {/* Données structurées JSON-LD pour le service sanitaire */}
      <Script
        id="schema-bathroom-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://artisanat-fcplomberie.fr/nos-services/sanitaire",
            name: "FC Plomberie - Chauffage - Sanitaire | Services Sanitaire",
            description:
              "Spécialiste sanitaire en région Centre et Île-de-France. Installation WC, douche, baignoire, rénovation salle de bains. Projet clé en main.",
            url: "https://artisanat-fcplomberie.fr/nos-services/sanitaire",
            telephone: "06.99.02.40.75",
            email: "fc.plomberie45@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Centre-Val de Loire",
              addressCountry: "FR",
            },
            areaServed: [
              {
                "@type": "Place",
                name: "Région Centre-Val de Loire",
              },
              {
                "@type": "Place",
                name: "Île-de-France",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services Sanitaire",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pose de WC standards ou suspendus",
                    description:
                      "Installation complète de WC standards, suspendus ou à poser. Raccordement aux évacuations et finitions soignées",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Installation de douches, baignoires et lavabos",
                    description:
                      "Pose professionnelle de douches à l'italienne, cabines de douche, baignoires et lavabos",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Création ou rénovation complète d'espaces sanitaires",
                    description:
                      "Conception et réalisation complète de salles de bains, salles d'eau et WC. Projet clé en main",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Remplacement d'anciens équipements",
                    description:
                      "Remplacement et modernisation de vos anciens équipements sanitaires. Mise aux normes",
                  },
                },
              ],
            },
            serviceType: "Sanitaire",
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: [],
          }),
        }}
      />

      <div className="pt-18">
        {/* Hero Section avec balises H1 SEO */}
        <section className="relative h-[65vh] bg-linear-to-br from-primary-400 to-second-400 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/sanitaire.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <div className="text-center text-white max-w-4xl bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h1 className="font-one text-4xl md:text-5xl font-bold mb-6 tracking-wide drop-shadow-2xl text-shadow-lg">
                Spécialiste Sanitaire Région Centre & Île-de-France
              </h1>
              <p className="font-two text-xl md:text-2xl mb-8 drop-shadow-lg text-shadow font-medium">
                Installation WC, douche, baignoire et rénovation salle de bains
                à Orléans, Blois, Paris...
              </p>
              <Btn href="/contactez-nous">DEMANDEZ VOTRE DEVIS</Btn>
            </div>
          </div>
        </section>

        {/* Services avec structure H2 SEO */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
                Services Sanitaire Professionnels
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-primary-400 to-second-400 mx-auto rounded-full"></div>
              <p className="font-two text-lg text-noir-700 max-w-3xl mx-auto mt-4">
                FC Plomberie réalise tous vos projets sanitaires : pose de WC
                suspendus, installation de douches à l'italienne, création de
                salles de bains complètes dans toute la région Centre-Val de
                Loire et Île-de-France.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-md shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-1"
                >
                  {/* Header avec icône */}
                  <div className="relative bg-linear-to-r from-primary-400 to-second-400 p-6 text-center h-32 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-100"
                      style={{
                        backgroundImage: `url('${service.img}')`,
                      }}
                    />
                    {/* <div className="absolute inset-0 bg-linear-to-t from-primary-500/80 to-second-500/80"></div> */}
                    <div className="relative z-10 flex justify-center items-center h-full">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-8">
                    <h3 className="font-one text-xl font-bold text-noir-700 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-two text-noir-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Indicateur hover */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-px bg-linear-to-r from-primary-400 to-second-400 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section avec contenu SEO enrichi */}
        <section className="max-w-7xl mx-auto rounded-md relative overflow-hidden bg-linear-to-r from-noir-500 to-noir-700">
          <div className="relative z-10 py-10 px-6 text-center">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-1 bg-linear-to-r from-primary-400 to-second-400 mx-auto rounded-full mb-6"></div>
              </div>
              <h3 className="font-one text-2xl md:text-3xl font-bold text-white mb-6">
                Votre Spécialiste Sanitaire de Confiance en Région Centre et
                Île-de-France
              </h3>
              <p className="text-white text-lg md:text-base font-two leading-relaxed tracking-wide">
                Depuis 2024, FC Plomberie est votre spécialiste sanitaire de
                référence dans toute la région Centre-Val de Loire (Orléans,
                Tours, Blois, Chartres, Bourges, Châteauroux) et en
                Île-de-France. Spécialisés en aménagement et rénovation
                d'espaces sanitaires, nous réalisons vos projets clé en main :
                installation WC suspendus, douches à l'italienne, baignoires,
                lavabos et rénovation complète de salles de bains. Artisan
                sanitaire qualifié, nous garantissons des réalisations durables,
                esthétiques et aux normes.
              </p>
            </div>
          </div>
        </section>

        {/* Processus avec H3 SEO */}
        <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
                Comment se déroule votre projet sanitaire ?
              </h3>
              <div className="w-24 h-1 bg-linear-to-r from-primary-400 to-second-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-linear-to-br from-primary-400 to-second-400 rounded-full flex items-center justify-center text-white font-one text-2xl font-bold shadow-lg">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="font-one text-xl font-bold text-noir-700 mb-3">
                    {process.title}
                  </h3>
                  <p className="font-two text-noir-700">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section avantages avec contenu SEO */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-6">
                  Pourquoi choisir FC Plomberie pour vos aménagements sanitaires
                  ?
                </h4>
                <div className="space-y-4">
                  {[
                    "Projet clé en main de A à Z",
                    "Devis gratuit et sans engagement",
                    "Équipements de marques reconnues",
                    "Respect des délais convenus",
                    "Garantie décennale et finitions soignées",
                  ].map((avantage, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-primary-400 shrink-0" />
                      <span className="font-two text-noir-700">{avantage}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="tel:0699024075"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-primary-400 to-second-400 text-white font-two font-medium rounded-lg hover:from-primary-500 hover:to-second-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaPhone />
                    06.99.02.40.75
                  </a>
                </div>
              </div>

              <div className="bg-linear-to-br from-primary-100/70 to-second-100/70 rounded-md p-8 border border-primary-200/50">
                <h5 className="font-one text-2xl font-bold text-noir-700 mb-6 text-center">
                  Projet Sanitaire Clé en Main
                </h5>
                <div className="text-center space-y-4">
                  <p className="font-two text-noir-700">
                    Rénovation salle de bains, création d'une douche à
                    l'italienne ?
                  </p>
                  <p className="font-two font-semibold text-primary-500 text-lg">
                    Nous étudions votre projet !
                  </p>

                  {/* Zone d'intervention */}
                  <div className="bg-white/50 rounded-lg p-4 mt-4">
                    <h4 className="font-one font-bold text-noir-700 mb-2 flex items-center justify-center gap-2">
                      🗺️ Zone d'intervention :
                    </h4>
                    <p className="font-two text-noir-700 text-sm mb-3">
                      Nous intervenons dans toute la région Centre, notamment à
                      Orléans, Blois, Chartres, Bourges et Châteauroux et toute
                      l'ile-de-france.
                    </p>
                    <p className="font-two text-primary-500 text-sm font-medium">
                      Besoin d'un spécialiste sanitaire ? Contactez-nous — nous
                      vous rappelons même si vous laissez un message sur le
                      répondeur.
                    </p>
                  </div>

                  <Btn href="/contactez-nous">APPELER MAINTENANT</Btn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section pour SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-12 text-center">
              Questions fréquentes - Sanitaire
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                  Combien coûte une rénovation de salle de bains ?
                </h4>
                <p className="font-two text-noir-500">
                  Le prix varie selon la superficie et les équipements choisis.
                  Nous proposons un devis gratuit personnalisé pour votre projet
                  sanitaire.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                  Installez-vous des douches à l'italienne ?
                </h4>
                <p className="font-two text-noir-500">
                  Oui, nous sommes spécialisés dans l'installation de douches à
                  l'italienne avec finitions soignées dans toute la région.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                  Proposez-vous des WC suspendus ?
                </h4>
                <p className="font-two text-noir-500">
                  Nous installons tous types de WC : standards, suspendus, à
                  poser. Raccordement aux évacuations et finitions inclus.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                  Gérez-vous les projets clé en main ?
                </h4>
                <p className="font-two text-noir-500">
                  Oui, nous gérons votre projet de A à Z.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section lien vers plomberie */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-6">
              Besoin d'un plombier ?
            </h3>
            <p className="font-two text-xl text-noir-700 mb-8 max-w-3xl mx-auto">
              Découvrez également nos services de plomberie : réparation de
              fuites, débouchage canalisations, installation chauffe-eau et
              dépannage d'urgence.
            </p>
            <Btn href="/nos-services/plomberie">
              VOIR NOS SERVICES PLOMBERIE
            </Btn>
          </div>
        </section>

        {/* Section Devis */}
        <DevisSection />
      </div>
    </>
  );
}
