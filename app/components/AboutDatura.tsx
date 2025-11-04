import DownloadButton from "./DownloadButton";
import YouTubePlayer from "./YouTubePlayer";
import Image from "next/image";

export default function AboutDatura() {
  const hrefDossierPresentation = "/utils/dossier-presentation.pdf";

  const production = {
    plateau: [
      { nom: "MAUD BESSARD-MORANDAS", rôle: "LAKMÉ" },
      { nom: "BASTIEN RIMONDI", rôle: "GÉRALD" },
      { nom: "MARTIN QUEVAL", rôle: "NILAKANTHA" },
      { nom: "Pauline Loncelle", rôle: "MALLIKA" },
      { nom: "PIERRE BARRET-MEMY", rôle: "FRÉDÉRIC" },
      { nom: "MARILOU ROLLAND", rôle: "MISS ELLEN" },
      { nom: "MARINE LAFDAL-FRANC", rôle: "MISTRESS BENSON" },
      { nom: ["EVA HONNINGS", "IRIS BROCCHINI"], rôle: "DANSE" },
      {
        nom: [
          "ANNE MOLINIER",
          "ANNABANDINI-BELLIN",
          "LYDIE BALAS",
          "HAKIMA ZEROUROU",
          "JULIANEALLOZA",
          "MATHILDE MAOU",
          "MAÏWENN GRALL",
        ],
        rôle: "ASSOCIATION DENSITÉ",
      },
    ],
    technique: [
      { nom: "RACHEL TESTARD", rôle: "RÉGIE GÉNÉRALE" },
      { nom: "ADÈLE ROMIEU", rôle: "RÉGIE PLATEAU" },
      { nom: "ALEXANDRE SCHREIBER", rôle: "RÉGIE LUMIÈRE" },
      { nom: "LÉO BELON", rôle: "RÉGIE SURTITRE" },
      { nom: "CARMEN ESPÉROU", rôle: "MAQUILLAGE" },
      { nom: "DELPHINE FLEURY", rôle: "COIFFURE" },
      { nom: "LEVANA TORTOLO", rôle: "STAGIAIRE SCÉNOGRAPHIE" },
    ],
    orchestre: [
      { nom: ["LILYA CHIFMAN", "ROBIN APPARAILLY"], rôle: "VIOLONS" },
      { nom: "LISA CARDONNET", rôle: "ALTO" },
      { nom: "ENGUERRAND BONTOUX", rôle: "VIOLONCELLE" },
      { nom: "MATHILDE BARILLOT", rôle: "CONTREBASSE" },
      { nom: "PAULINE MORÉTEAU", rôle: "FLÛTE" },
      { nom: "ELEONORE COURTILLON", rôle: "HAUTBOIS" },
      { nom: "ROMANE DENIS", rôle: "CLARINETTE" },
      { nom: "PIERRE-ALEXIS TORRES", rôle: "COR" },
      { nom: "ANA GENET", rôle: "BASSON" },
      { nom: "RODOLPHE LOSPIED", rôle: "PIANO" },
    ],
    laChefferie: [
      {
        nom: "TIMOTHÉE HUDRISIER",
        rôle: "Directeur Artistique",
        imageSrc: "/images/chefferie/TimSlice.jpg",
      },
      {
        nom: "MATHILDE BELLIN",
        rôle: "Metteuse en Scène",
        imageSrc: "/images/chefferie/MathildeSlice.jpg",
      },
      {
        nom: "GUILLEMETTE DABOVAL",
        rôle: "Directrice Musicale",
        imageSrc: "/images/chefferie/GuillouSlice.jpg",
      },

      {
        nom: "ALEXANDRE SCHREIBER",
        rôle: "Créateur Lumière",
        imageSrc: "/images/chefferie/AlexSlice.jpg",
      },
      {
        nom: "RACHEL TESTARD",
        rôle: "Scénographe",
        imageSrc: "/images/chefferie/RachelSlice.jpg",
      },
      {
        nom: "CARMEN ESPÉROU",
        rôle: "Costumière",
        imageSrc: "/images/chefferie/CarmenSlice.jpg",
      },
      {
        nom: "FRANK GIZYCKI",
        rôle: "Chorégraphe",
        imageSrc: "/images/chefferie/FrankSlice.jpg",
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen md:grid md:grid-cols-2">
      {/* LEFT PAGE */}
      <section className="relative bg-mustard text-navy overflow-hidden flex flex-col">
        {/* Corner */}
        <div className="corner-l absolute left-6 top-6" aria-hidden="true" />

        {/* Contenu gauche */}
        <div className="mx-auto max-w-3xl px-6 pt-28 pb-16 md:px-10 md:pb-4">
          <h1 className="flex flex-col gap-2 font-bold uppercase tracking-widest leading-[1.05]">
            <span className="text-[clamp(2rem,7vw,4.8rem)]">La</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)]">Compag-</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)]">nie</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)] text-[var(--cream)]">
              Datura
            </span>
          </h1>

          {/* Heading avec chevrons et paragraphe aligné */}
          <div className="mt-12">
            <div className="flex items-center gap-4">
              <div className="chevrons" aria-hidden="true">
                <span className="chevron" />
                <span className="chevron" />
                <span className="chevron" />
                <span className="chevron" />
              </div>
              <h2 className="uppercase tracking-widest text-[var(--cream)] font-semibold">
                Origine de la compagnie
              </h2>
            </div>
            <p className="mt-4 leading-relaxed max-w-prose text-sm md:text-base">
              L’équipe artistique à l’initiative du projet est originaire d’Albi
              dans le Sud-Ouest de la France. Quatre ami·e·s d’enfance uni·e·s
              par un regard critique sur la place de l’art dans la société, et
              poursuivant chacun·e une carrière reconnue dans leur domaine
              respectif : Mathilde Bellin dans le théâtre, Carmen Esperou dans
              la mode, Frank Gizycki dans la danse et Timothée Hudrisier dans la
              musique. Ce dernier leur propose de se regrouper{" "}
              <b className="text-navy">
                pour imaginer un opéra qui battrait en brèche les clichés et
                attirer un public nouveau
              </b>
              .
              <br /> <br />
              La compagnie Datura - du nom de la fleur qui précipite le destin
              de Lakmé - se structure, s’entoure d’autres artistes
              expérimenté·e·s et recrute un plateau d’interprètes soudé·e·s par
              l’envie commune de rompre avec les a priori sur l’art lyrique.
              <br /> <br />
              Datura crée sa première production Lakmé au théâtre municipal
              d’Albi en mai 2025.
            </p>
          </div>

          {/* Dot lié au paragraphe, sans superposition */}
          <div className="mt-30 hidden xl:flex justify-between">
            <div className="dot-triangle-right" aria-hidden="true" />
            <div className="dot-triangle-right" aria-hidden="true" />

            <div className="dot-triangle-right" aria-hidden="true" />
          </div>
        </div>

        {/* Séparateur positionné en bas de la section */}
        <div className="mt-auto px-6 pb-6 md:px-10 md:pb-8">
          <div className="rule-dots" aria-hidden="true" />
        </div>
      </section>

      {/* RIGHT PAGE */}
      <section className="relative bg-cream text-navy flex flex-col">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-16 md:px-10 md:pb-24">
          {/* Portraits */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {production.laChefferie.map((membre, i) => (
              <div key={i} className="w-full">
                <Image
                  src={membre.imageSrc}
                  alt={membre.nom}
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-t-full"
                  priority={i < 4} // Priority pour les 4 premières images (above the fold)
                />
              </div>
            ))}
          </div>

          {/* Séparateur + actions */}
          <div className="mt-8">
            <div className="rule-dots" aria-hidden="true" />
          </div>
          <YouTubePlayer
            videoId="Bxei_qK6ntc"
            title="Découvrez Lakmé en vidéo"
          />
          {/* Bouton + vidéo */}
          <div className="mt-15 flex flex-col items-center gap-6 w-full ">
            <DownloadButton href={hrefDossierPresentation}>
              Téléchargez notre dossier artistique
            </DownloadButton>
          </div>
        </div>
      </section>
    </main>
  );
}
