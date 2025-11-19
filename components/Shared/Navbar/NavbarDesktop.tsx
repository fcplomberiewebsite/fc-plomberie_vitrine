/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaChevronDown, FaPhone } from "react-icons/fa";

export default function NavbarDesktop() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navRef = useRef<HTMLUListElement>(null);

  // const links = [
  //   { href: "/", label: "Accueil" },
  //   { href: "/a-propos", label: "À Propos" },
  //   { href: "/contactez-nous", label: "Contactez-nous" },
  // ];

  const serviceLinks = [
    { href: "/nos-services/plomberie", label: "Plomberie" },
    { href: "/nos-services/chauffage", label: "Chauffage" },
    { href: "/nos-services/sanitaire", label: "Sanitaire" },
  ];

  const isServicesActive = serviceLinks.some(
    (service) => pathname === service.href
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
      <div className="flex justify-between items-center py-4 mx-6 lg:mx-20">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo/Logo_noir_inline.png"
            alt="FC Plomberie - Chauffage - Sanitaire"
            width={250}
            height={120}
            className="mx-auto drop-shadow-2xl"
            priority
          />
          {/* <h1 className="font-one font-bold text-lg lg:text-xl text-noir-500 group-hover:text-primary-500 transition-colors duration-300">
            FC PLOMBERIE - CHAUFFAGE - SANITAIRE
          </h1> */}
        </Link>

        <div className="flex items-center gap-8">
          <ul ref={navRef} className="hidden md:flex items-center gap-8">
            {/* Accueil */}
            <li>
              <Link
                href="/"
                className={`relative font-one text-sm tracking-wide transition-all duration-300 group ${
                  pathname === "/"
                    ? "text-primary-500 font-semibold"
                    : "text-noir-500 hover:text-primary-500"
                }`}
              >
                Accueil
                <span
                  className={`absolute top-5 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                    pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`relative font-one text-sm tracking-wide transition-all duration-300 group flex items-center gap-1 ${
                  isServicesActive
                    ? "text-primary-500 font-semibold"
                    : "text-noir-500 hover:text-primary-500"
                }`}
              >
                Nos Services
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                    isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200/20 rounded-lg shadow-xl transition-all duration-300 ${
                  isServicesOpen
                    ? "opacity-100 visible transform translate-y-0"
                    : "opacity-0 invisible transform -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {serviceLinks.map((service, index) => {
                    const isActive = pathname === service.href;

                    return (
                      <Link
                        key={index}
                        href={service.href}
                        className={`block px-4 py-3 font-one text-sm tracking-wide transition-all duration-300 hover:bg-primary-500/10 ${
                          isActive
                            ? "text-primary-500 font-semibold bg-primary-500/5"
                            : "text-noir-500 hover:text-primary-500"
                        }`}
                      >
                        {service.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/entreprise"
                className={`relative font-one text-sm tracking-wide transition-all duration-300 group ${
                  pathname === "/entreprise"
                    ? "text-primary-500 font-semibold"
                    : "text-noir-500 hover:text-primary-500"
                }`}
              >
                L'Entreprise
                <span
                  className={`absolute top-5 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                    pathname === "/entreprise"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contactez-nous"
                className={`relative font-one text-sm tracking-wide transition-all duration-300 group ${
                  pathname === "/contactez-nous"
                    ? "text-primary-500 font-semibold"
                    : "text-noir-500 hover:text-primary-500"
                }`}
              >
                Contactez-nous
                <span
                  className={`absolute top-5 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                    pathname === "/contactez-nous"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          </ul>

          <div className="">
            <a
              href="tel:0699024075"
              className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-primary-500 to-second-500 text-white font-two font-medium rounded-lg hover:from-primary-600 hover:to-second-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaPhone />
              06.99.02.40.75
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
