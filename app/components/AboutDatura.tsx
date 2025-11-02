export default function AboutDatura() {
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
      { nom: "TIMOTHÉE HUDRISIER", rôle: "Directeur Artistique" },
      { nom: "MATHILDE BELLIN", rôle: "Metteuse en Scène" },
      { nom: "GUILLEMETTE DABOVAL", rôle: "Directrice Musicale" },
      { nom: "FRANK GIZYCKI", rôle: "Chorégraphe" },
      { nom: "ALEXANDRE SCHREIBER", rôle: "Créateur Lumière" },
      { nom: "RACHEL TESTARD", rôle: "Scénographe" },
      { nom: "CARMEN ESPÉROU", rôle: "Costumière" },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen md:grid md:grid-cols-2">
      {/* LEFT PAGE */}
      <section className="relative bg-mustard text-navy overflow-hidden flex flex-col">
        {/* Corner */}
        <div className="corner-l absolute left-6 top-6" aria-hidden="true" />

        <div className="mx-auto max-w-3xl px-6 pt-28 pb-16 md:px-10 md:pb-24">
          {/* Stacked title */}
          <h1 className="flex flex-col gap-2 font-bold uppercase tracking-widest leading-[1.05]">
            <span className="text-[clamp(2rem,7vw,4.8rem)]">La</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)]">Compag-</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)]">nie</span>
            <span className="text-[clamp(2rem,7vw,4.8rem)] text-(--cream)">
              Datura
            </span>
          </h1>

          {/* Heading */}
          <div className="mt-12 flex items-center gap-4">
            <div className="chevrons" aria-hidden="true">
              <span className="chevron" />
              <span className="chevron" />
              <span className="chevron" />
              <span className="chevron" />
            </div>
            <h2 className="uppercase tracking-widest text-(--cream) font-semibold">
              Origine de la compagnie
            </h2>
          </div>

          {/* Paragraph */}
          <p className="mt-4 leading-relaxed max-w-prose text-sm md:text-base">
            Née à Albi, dans le Sud-Ouest de la France, la compagnie Datura
            réunit quatre ami·e·s d’enfance aux parcours reconnus — Mathilde
            Bellin (théâtre), Carmen Esperou (mode), Frank Gizycki (danse) et
            Timothée Hudrisier (musique). Animé·e·s par une vision commune :
            questionner la place de l’art dans la société et briser les clichés
            de l’art lyrique, ils·elles s’entourent d’artistes expérimenté·e·s
            pour imaginer un opéra accessible à un nouveau public.
            <br />
            Leur première création, <b>Lakmé</b>, voit le jour au Théâtre
            municipal d’Albi en mai 2025.
          </p>
        </div>

        {/* Dots */}
        <div
          className="dot-matrix absolute right-4 bottom-4 md:right-8 md:bottom-8 opacity-90"
          style={{ width: 120, height: 120 }}
          aria-hidden="true"
        />
      </section>

      {/* RIGHT PAGE */}

      <section className="relative bg-cream text-navy flex flex-col">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-16 md:px-10 md:pb-24">
          {/* Portraits */}
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="portrait mx-auto" aria-hidden="true" />
                <p className="mt-2 text-[10px] uppercase tracking-widest font-semibold md:text-[11px]">
                  Lorem Ipsum
                </p>
                <p className="text-[10px] opacity-70 md:text-[11px]">Rôle</p>
              </div>
            ))}
          </div>

          {/* Title */}
          <div className="mt-10 flex items-center gap-4">
            <div>
              <h3 className="uppercase tracking-widest font-semibold">
                Distribution lors de la création
              </h3>
              <div className="text-mustard font-bold uppercase tracking-widest text-xs md:text-sm">
                Mai 2025
              </div>
            </div>
          </div>

          {/* Credits grid */}
          <div className="credits mt-8">
            <div>
              <h4>Au plateau</h4>
                {production.plateau.map((membre, i) => (
              <ul className="space-y-1 text-sm bg-red-200">
                  <li className="bg-blue-200" key={i}>
                    {Array.isArray(membre.nom)
                      ? membre.nom.join(", ")
                      : membre.nom}{" "}
                  </li>
                  <li className="">{membre.rôle}</li>
              </ul>
                ))}
            </div>
            <div>
              <h4>Orchestre</h4>
              <ul className="space-y-1 text-sm">
                {production.orchestre.map((membre, i) => (
                  <li key={i}>
                    {Array.isArray(membre.nom)
                      ? membre.nom.join(", ")
                      : membre.nom}{" "}
                    — {membre.rôle}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Technique</h4>
              <ul className="space-y-1 text-sm">
                {production.technique.map((membre, i) => (
                  <li key={i}>
                    {Array.isArray(membre.nom)
                      ? membre.nom.join(", ")
                      : membre.nom}{" "}
                    — {membre.rôle}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rule */}
          <div className="rule-dots mt-8" />

          {/* Admin */}
          <div className="mt-8 grid gap-6 sm:grid-cols-1 text-sm">
            <div>
              <h4>Direction Artistique</h4>
              <ul className="space-y-1">
                {production.laChefferie.map((membre, i) => (
                  <li key={i}>
                    {Array.isArray(membre.nom)
                      ? membre.nom.join(", ")
                      : membre.nom}{" "}
                    — {membre.rôle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
