import ScrollButton from "./components/ScrollButton";

// Constantes pour les fichiers statiques
const DOSSIER_PRESENTATION_PATH = "/utils/dossier-presentation.pdf";
const VIDEO_BACKGROUND_PATH = "/utils/video-background.mp4";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Section Héro avec vidéo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vidéo de fond */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_BACKGROUND_PATH} type="video/mp4" />
          {/* Fallback image si la vidéo ne charge pas */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
        </video>

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenu centré */}
        <div className="relative z-10 text-center text-white px-4 pb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in title-font">
            Compagnie DATURA
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Découvrez notre univers artistique
          </p>

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
      <section id="presentation" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            À propos de nous
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte de présentation */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                L’équipe artistique à l’initiative du projet est originaire
                d’Albi, dans le Sud-Ouest de la France, proche de Toulouse. Tous
                nés en 1993, c’est à Albi que nous nous sommes rencontrés, ici
                aussi que sont nées nos vocations respectives. Nous sommes
                soudés par une amitié ancienne et fidèle, une admiration
                mutuelle pour nos parcours artistiques, un regard critique sur
                la place de l’art dans la société et aujourd’hui par ce projet
                que nous portons avons beaucoup de passion et de conviction. De
                quatre membres fondateurs, la compagnie recrute progressivement
                une directrice musicale, une scénographe, puis auditionne les
                chanteurs solistes et deux danseuses. En parallèle, nous
                structurons notre administration en collaborant avec SO
                Production, experts dans la gestion de projet culturel. La
                compagnie Datura est née.
              </p>
            </div>

            {/* PDF téléchargeable avec animation */}
            <div className="flex justify-center">
              <div className="group relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-lg shadow-xl transform group-hover:scale-[1.02] transition-all duration-400 border border-slate-600/30 relative z-20">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-400">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-gray-100">
                      Dossier de présentation
                    </h3>
                    <p className="text-sm text-gray-400 mb-8 max-w-xs">
                      Téléchargez notre dossier complet pour découvrir notre
                      univers artistique
                    </p>
                    <a
                      href={DOSSIER_PRESENTATION_PATH}
                      download
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer relative z-30"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Télécharger
                    </a>
                  </div>
                </div>

                {/* Effet de glow subtil */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
