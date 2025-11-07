import DownloadButton from "./DownloadButton";
import YouTubePlayer from "./YouTubePlayer";
import Image from "next/image";
import { SingleCircularText } from "./ui/SingleCircularText";
import CreditsButton from "./CreditsButton";

export default function AboutDatura() {
  const hrefDossierPresentation = "/utils/dossier-presentation.pdf";

  // Mapping des noms aux textes circulaires
  const getCircularText = (nom: string) => {
    const textMap: { [key: string]: string } = {
      "TIMOTHÉE HUDRISIER": "TIMOTHÉE HUDRISIER ~ TIMOTHÉE HUDRISIER ~ ",
      "MATHILDE BELLIN": "MATHILDE BELLIN ~ MATHILDE BELLIN ~ ",
      "GUILLEMETTE DABOVAL": "GUILLEMETTE DABOVAL ~ GUILLEMETTE DABOVAL ~ ",
      "ALEXANDRE SCHREIBER": "ALEXANDRE SCHREIBER ~ ALEXANDRE SCHREIBER ~ ",
      "RACHEL TESTARD": "RACHEL TESTARD ~ RACHEL TESTARD ~ ",
      "CARMEN ESPÉROU": "CARMEN ESPÉROU ~ CARMEN ESPÉROU ~ ",
      "FRANK GIZYCKI": "FRANK GIZYCKI ~ FRANK GIZYCKI ~ ",
    };
    return textMap[nom] || `${nom} ~ ${nom} ~ `;
  };

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
        imageSrc: "/images/chefferie/TimothéeCircle.jpg",
      },
      {
        nom: "MATHILDE BELLIN",
        rôle: "Metteuse en Scène",
        imageSrc: "/images/chefferie/MathildeCircle.jpg",
      },
      {
        nom: "GUILLEMETTE DABOVAL",
        rôle: "Directrice Musicale",
        imageSrc: "/images/chefferie/GuillemetteCircle.jpg",
      },
      {
        nom: "ALEXANDRE SCHREIBER",
        rôle: "Créateur Lumière",
        imageSrc: "/images/chefferie/AlexandreCircle.jpg",
      },
      {
        nom: "RACHEL TESTARD",
        rôle: "Scénographe",
        imageSrc: "/images/chefferie/RachelCircle.jpg",
      },
      {
        nom: "CARMEN ESPÉROU",
        rôle: "Costumière",
        imageSrc: "/images/chefferie/CarmenCircle.jpg",
      },
      {
        nom: "FRANK GIZYCKI",
        rôle: "Chorégraphe",
        imageSrc: "/images/chefferie/FrankCircle.jpg",
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen lg:grid lg:grid-cols-[0.9fr_1.1fr] 2xl:grid-cols-[0.8fr_1.2fr]">
      {/* LEFT PAGE */}
      <section className="relative bg-mustard text-navy overflow-hidden flex flex-col">
        <div className="corner-l absolute left-6 top-6" aria-hidden="true" />

        {/* Contenu gauche */}
        <div className="mx-auto max-w-3xl 2xl:max-w-2xl 3xl:max-w-xl px-6 pt-28 pb-16 md:px-10 md:pb-4">
          {" "}
          <h1 className="flex flex-col gap-2 uppercase tracking-widest leading-[1.05] font-chosence">
            <span className="text-[clamp(2rem,7vw,4.8rem)]">La</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)]">Compag-</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)]">nie</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)] text-cream">
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
            <p className=" mt-4 leading-relaxed max-w-prose text-sm md:text-base">
              L'équipe artistique à l'initiative du projet est originaire d'Albi
              dans le Sud-Ouest de la France. Quatre ami·e·s d'enfance uni·e·s
              par un regard critique sur la place de l'art dans la société, et
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
              de Lakmé - se structure, s'entoure d'autres artistes
              expérimenté·e·s et recrute un plateau d'interprètes soudé·e·s par
              l'envie commune de rompre avec les a priori sur l'art lyrique.
              <br /> <br />
              Datura crée sa première production Lakmé au théâtre municipal
              d'Albi en mai 2025.
            </p>
          </div>
          {/* Triangles décoratifs */}
        </div>
        <div className="hidden xl:flex justify-between max-w-3xl mx-auto px-10 mt-12 xl:mt-60 2xl:mt-40 mb-6 2xl:mb-10">
          <div className="dot-triangle-right" />
          <div className="dot-triangle-right" />
          <div className="dot-triangle-right" />
        </div>

        {/* Séparateur et contact positionnés en bas de la section */}
        <div className="mt-auto px-6 pb-6 md:px-10 md:pb-8 space-y-3">
          {/* Encart de contact */}
          <div className="p-6 border-2 border-white rounded-lg bg-transparent">
            <h3 className="text-2xl font-chosence text-cream mb-4 text-center">
              Contactez-nous
            </h3>
            <div className="flex flex-col xl:flex-row justify-evenly">
              <div className="text-center">
                <a
                  href="mailto:contact@cie-datura.fr"
                  className="text-cream hover:text-white transition-colors duration-300 text-lg hover:underline decoration-2 underline-offset-4"
                >
                  CONTACT@CIE-DATURA.FR
                </a>
              </div>
              <div className="text-center">
                <a
                  href="https://www.instagram.com/cie_datura/"
                  className="text-cream hover:text-white transition-colors duration-300 text-lg hover:underline decoration-2 underline-offset-4"
                >
                  INSTAGRAM
                </a>
              </div>
              <div className="text-center">
                <a
                  href="https://www.youtube.com/@CompagnieDatura"
                  className="text-cream hover:text-white transition-colors duration-300 text-lg hover:underline decoration-2 underline-offset-4"
                >
                  YOUTUBE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* RIGHT PAGE */}
      <section className="relative bg-cream text-navy flex flex-col overflow-x-hidden">
        <div className="mx-auto max-w-4xl pt-16 px-6 sm:px-8 md:px-10 pb-16 md:pb-5">
          {/* Portraits */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-14 xl:gap-20 place-items-center">
            {production.laChefferie.map((membre, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Boîte dimensionnée pour l’anneau de texte (diamètre = 150px) */}
                <div className="relative w-[150px] h-[150px]">
                  {/* Image centrée (diamètre ~112px) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[112px] h-[112px] rounded-full overflow-hidden z-10">
                    <Image
                      src={membre.imageSrc}
                      alt={
                        Array.isArray(membre.nom)
                          ? membre.nom.join(", ")
                          : membre.nom
                      }
                      fill
                      className="object-cover"
                      priority={i < 4}
                    />
                  </div>

                  {/* Texte circulaire (rayon = 75px) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <SingleCircularText
                      text={getCircularText(
                        Array.isArray(membre.nom)
                          ? membre.nom.join(" • ")
                          : membre.nom
                      )}
                      radius={75}
                      duration={15 + i * 3}
                    />
                  </div>
                </div>

                {/* Rôle en dessous */}
                <p className="mt-3 text-center text-sm font-medium text-navy">
                  {membre.rôle}
                </p>
              </div>
            ))}
          </div>

          {/* Séparateur + actions */}
          <div className="mt-8 py-10">
            <div className="rule-dots" aria-hidden="true" />
          </div>

          <YouTubePlayer
            videoId="Bxei_qK6ntc"
            title="Découvrez Lakmé en vidéo"
          />

          {/* Boutons */}
          <div className="mt-15 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <DownloadButton href={hrefDossierPresentation}>
              Téléchargez notre dossier artistique
            </DownloadButton>
          </div>
        </div>
      </section>
    </main>
  );
}
