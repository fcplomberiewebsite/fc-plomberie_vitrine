/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-noir-700 to-noir-500 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-second-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6 py-16 lg:py-20 lg:px-20">
        {/* Main content */}
        <div className="max-w-7xl mx-auto">
          {/* Company info header */}
          <div className="text-center -mt-10 mb-16">
            <Image
              src="/logo/logo_white_inline.png"
              alt="FC Plomberie - Chauffage - Sanitaire"
              width={500}
              height={120}
              className="mx-auto drop-shadow-2xl mb-2"
              priority
            />
            {/* <h2 className="font-one text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
              FC PLOMBERIE - CHAUFFAGE - SANITAIRE
            </h2> */}
            {/* <div className="w-32 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full mb-4"></div> */}
            {/* <p className="font-two text-white/80 max-w-2xl mx-auto">
              Votre artisan plombier-chauffagiste de confiance en région Centre
              et parisienne
            </p> */}
          </div>

          {/* Grid sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Navigation */}
            <div className="group">
              <h3 className="text-white font-one font-bold text-lg mb-6 tracking-wider flex items-center gap-2">
                Navigation
                <div className="w-8 h-px bg-linear-to-r from-primary-500 to-second-500 group-hover:w-12 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    Accueil
                  </Link>
                </li>

                <li>
                  <Link
                    href="/entreprise"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    L'Entreprise
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contactez-nous"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="group">
              <h3 className="text-white font-one font-bold text-lg mb-6 tracking-wider flex items-center gap-2">
                Services
                <div className="w-8 h-px bg-linear-to-r from-primary-500 to-second-500 group-hover:w-12 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/nos-services/plomberie"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-second-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    Plomberie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-services/chauffage"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-second-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    Chauffage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-services/sanitaire"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-second-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    Sanitaire
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="group">
              <h3 className="text-white font-one font-bold text-lg mb-6 tracking-wider flex items-center gap-2">
                Contact
                <div className="w-8 h-px bg-linear-to-r from-primary-500 to-second-500 group-hover:w-12 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:0699024075"
                    className="text-white/70 hover:text-primary-400 font-two transition-colors duration-300 flex items-center gap-3 group/contact"
                  >
                    <FaPhone className="text-primary-500 group-hover/contact:scale-110 transition-transform duration-300" />
                    06.99.02.40.75
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:fc.plomberie45@gmail.com"
                    className="text-white/70 hover:text-primary-400 font-two transition-colors duration-300 flex items-center gap-3 group/contact"
                  >
                    <FaEnvelope className="text-primary-500 group-hover/contact:scale-110 transition-transform duration-300" />
                    fc.plomberie45@gmail.com
                  </a>
                </li>
                <li className="text-white/70 font-two flex items-center gap-3">
                  <FaMapMarkerAlt className="text-second-500" />
                  Région Centre & Parisienne
                </li>
              </ul>
            </div>

            {/* Légal */}
            <div className="group">
              <h3 className="text-white font-one font-bold text-lg mb-6 tracking-wider flex items-center gap-2">
                Légal
                <div className="w-8 h-px bg-linear-to-r from-primary-500 to-second-500 group-hover:w-12 transition-all duration-300"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    Mentions Légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-de-confidentialite"
                    className="text-white/70 hover:text-white font-two transition-colors duration-300 flex items-center gap-2 group/link"
                  >
                    <div className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-white/60 font-two text-sm">
                  © {new Date().getFullYear()} FC Plomberie - Chauffage -
                  Sanitaire. Tous droits réservés.
                </p>
                <p className="text-white/40 font-two text-xs mt-1">
                  Website by{" "}
                  <Link
                    href="https://www.inthegleam.com/"
                    className="hover:text-primary-400 transition-colors duration-300"
                    target="_blank"
                  >
                    inTheGleam
                  </Link>
                </p>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-px bg-linear-to-r from-primary-500 to-second-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
