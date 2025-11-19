import Image from "next/image";
import Btn from "../Shared/Btn";

export default function HeroSection() {
  return (
    <div className="pt-18 h-[80vh] relative overflow-hidden">
      {/* Background avec gradient moderne */}
      <section className="w-full h-full flex flex-col items-center justify-center px-6 bg-linear-to-br from-second-500 via-primary-500 to-primary-600 relative">
        {/* Effet de particules/texture */}

        {/* Contenu principal */}
        <div className="relative z-10 max-w-4xl text-center">
          <div className="mb-6">
            <Image
              src="/logo/logo.png"
              alt="FC Plomberie - Chauffage - Sanitaire"
              width={100}
              height={120}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="font-one text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
            FC PLOMBERIE - CHAUFFAGE - SANITAIRE
          </h1>
          <div className="h-px w-1/3 bg-white/80 mx-auto my-6"></div>
          <h2 className="font-two font-light text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 tracking-wider">
            Votre artisan plombier-chauffagiste
          </h2>

          {/* Bouton intégré dans le hero */}
          <div className="mt-8">
            <Btn href="/contactez-nous">DEMANDEZ VOTRE DEVIS</Btn>
          </div>
        </div>

        {/* Effet de dégradé en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white/10 to-transparent"></div>
      </section>
    </div>
  );
}
