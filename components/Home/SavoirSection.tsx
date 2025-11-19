import React from "react";
import { FaAward, FaCogs, FaBolt, FaEuroSign } from "react-icons/fa";

export default function SavoirSection() {
  const features = [
    {
      icon: <FaAward size={40} />,
      title: "Expertise et qualité",
      description: "Garantie d'un service irréprochable",
    },
    {
      icon: <FaCogs size={40} />,
      title: "Équipements moderne",
      description: "Outils et technologie récentes pour des résultats durables",
    },
    {
      icon: <FaBolt size={40} />,
      title: "Intervention rapide",
      description:
        "Intervention rapide et efficace pour vos urgences et besoins quotidien",
    },
    {
      icon: <FaEuroSign size={40} />,
      title: "Tarifs transparents",
      description: "Devis clair et détaillé",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-linear-to-br from-primary-400 via-primary-500 to-second-500 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-one text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            UN SAVOIR FAIRE ARTISANAL, UN SERVICE MODERNE
          </h2>
          <div className="w-32 h-1 bg-white/80 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <div className="text-white">{feature.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-one text-xl md:text-2xl font-bold text-white mb-4 drop-shadow">
                  {feature.title}
                </h3>
                <p className="font-two text-white/90 leading-relaxed text-sm md:text-base drop-shadow-sm">
                  {feature.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-px bg-white/50 group-hover:w-16 group-hover:bg-white/80 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white/5 to-transparent"></div>
    </section>
  );
}
