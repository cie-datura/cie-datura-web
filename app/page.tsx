import ScrollButton from "./components/ScrollButton";
import OptimizedHeroVideo from "./components/OptimizedHeroVideo";
import Citations from "./components/Citations";
import AboutDatura from "./components/AboutDatura";
// const DOSSIER_PRESENTATION_PATH = "/utils/dossier-presentation.pdf";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section Héro avec vidéo */}
      <section className="relative h-screen flex flex-col justify-between overflow-hidden">
        {/* Vidéo optimisée de fond */}
        <OptimizedHeroVideo />

        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 -z-10" />

        {/* Titre en haut */}
        <div className="relative z-20 text-center text-white px-4 pt-20">
          <h1 className="text-3xl md:text-5xl font-bold animate-fade-in title-font">
            LA COMPAGNIE DATURA PRÉSENTE
          </h1>
        </div>

        {/* Titre principal au centre */}
        <div className="relative z-20 text-center text-white px-4">
          <h2 className="text-7xl md:text-8xl sm: font-bold animate-fade-in-delay title-font tracking-[50px] animate-title-opera">
            LAKMÉ
          </h2>
        </div>

        {/* Sous-titre et bouton en bas */}
        <div className="relative z-20 text-center text-white px-4 pb-20">

          {/* Call to action */}
          <ScrollButton
            targetId="presentation"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 animate-bounce"
          >
            Découvrir plus ↓
          </ScrollButton>
        </div>
      </section>

      {/* Section Présentation */}
      <section id="presentation">
          <AboutDatura/>
      </section>

      {/* Section Citations */}
      <Citations />
    </main>
  );
}
