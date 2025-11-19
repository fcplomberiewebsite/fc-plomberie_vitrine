/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdMenu, MdClose, MdExpandMore, MdExpandLess } from "react-icons/md";

export default function NavbarMobile() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

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

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed navbar header */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="group">
            <h1 className="font-one font-bold text-lg text-noir-500 group-hover:text-primary-500 transition-colors duration-300">
              FC PLOMBERIE
            </h1>
          </Link>

          <button
            onClick={handleOpen}
            className="p-2 rounded-xl hover:bg-primary-500/10 transition-all duration-300"
          >
            <MdMenu size={28} className="text-noir-700" />
          </button>
        </div>
      </nav>

      {/* Overlay avec blur */}
      {isOpen && (
        <div className="fixed inset-0 bg-noir-700/90 backdrop-blur-sm z-50 transition-opacity duration-300" />
      )}

      <div
        ref={navRef}
        className={`fixed top-0 right-0 z-50 w-80 h-screen bg-white/98 backdrop-blur-xl text-noir-500 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } border-l border-primary-500/20 shadow-2xl`}
      >
        {/* Header moderne */}
        <div className="flex items-center justify-between p-6 border-b border-primary-500/10 bg-linear-to-r from-primary-500/5 to-second-500/5">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-bold font-one text-primary-600">
              FC Plomberie - Chauffage - Sanitaire
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-2xl p-2 rounded-xl hover:bg-primary-500/10 transition-all duration-300"
          >
            <MdClose className="text-primary-500" />
          </button>
        </div>

        {/* Navigation links modernisés */}
        <div className="flex-1 px-6 py-8">
          <ul className="space-y-3">
            {/* Accueil */}
            <li>
              <Link
                href="/"
                onClick={handleClose}
                className={`relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                  pathname === "/"
                    ? "bg-linear-to-r from-primary-500/15 to-second-500/10 border border-primary-400/30 text-primary-600"
                    : "hover:bg-primary-500/5 text-noir-500/80 hover:text-primary-600"
                }`}
              >
                <div className="flex-1">
                  <span className="text-lg font-medium font-one tracking-wide">
                    Accueil
                  </span>
                </div>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    pathname === "/"
                      ? "bg-primary-500"
                      : "bg-transparent group-hover:bg-primary-400/50"
                  }`}
                />
              </Link>
            </li>

            {/* Services avec sous-menu */}
            <li>
              <button
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className={`relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group w-full ${
                  isServicesActive
                    ? "bg-linear-to-r from-primary-500/15 to-second-500/10 border border-primary-400/30 text-primary-600"
                    : "hover:bg-primary-500/5 text-noir-500/80 hover:text-primary-600"
                }`}
              >
                <div className="flex-1 text-left">
                  <span className="text-lg font-medium font-one tracking-wide">
                    Nos Services
                  </span>
                </div>
                {isServicesExpanded ? (
                  <MdExpandLess className="text-xl" />
                ) : (
                  <MdExpandMore className="text-xl" />
                )}
              </button>

              {/* Sous-menu des services */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isServicesExpanded
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4 mt-2 space-y-2">
                  {serviceLinks.map((service, index) => {
                    const isActive = pathname === service.href;
                    return (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={handleClose}
                        className={`block p-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "bg-primary-500/10 text-primary-600 font-semibold"
                            : "text-noir-500/70 hover:bg-primary-500/5 hover:text-primary-600"
                        }`}
                      >
                        <span className="font-one text-sm tracking-wide">
                          {service.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/entreprise"
                onClick={handleClose}
                className={`relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                  pathname === "/entreprise"
                    ? "bg-linear-to-r from-primary-500/15 to-second-500/10 border border-primary-400/30 text-primary-600"
                    : "hover:bg-primary-500/5 text-noir-500/80 hover:text-primary-600"
                }`}
              >
                <div className="flex-1">
                  <span className="text-lg font-medium font-one tracking-wide">
                    L'Entreprise
                  </span>
                </div>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    pathname === "/entreprise"
                      ? "bg-primary-500"
                      : "bg-transparent group-hover:bg-primary-400/50"
                  }`}
                />
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contactez-nous"
                onClick={handleClose}
                className={`relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                  pathname === "/contactez-nous"
                    ? "bg-linear-to-r from-primary-500/15 to-second-500/10 border border-primary-400/30 text-primary-600"
                    : "hover:bg-primary-500/5 text-noir-500/80 hover:text-primary-600"
                }`}
              >
                <div className="flex-1">
                  <span className="text-lg font-medium font-one tracking-wide">
                    Contactez-nous
                  </span>
                </div>
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    pathname === "/contactez-nous"
                      ? "bg-primary-500"
                      : "bg-transparent group-hover:bg-primary-400/50"
                  }`}
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer avec bouton téléphone modernisé */}
        <div className="p-6">
          <a
            href="tel:0699024075"
            className="group relative overflow-hidden block text-white text-center font-two font-medium tracking-wider px-4 py-4 bg-linear-to-l from-second-500 to-primary-500 hover:from-second-600 hover:to-primary-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="relative z-10">06.99.02.40.75</span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>
    </>
  );
}
