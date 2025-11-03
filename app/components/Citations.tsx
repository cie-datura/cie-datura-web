"use client";
const citations = [
  {
    text: "L'équipe réunie par Timothée Hudrisier et Guillemette Daboval et leur production répondaient à un niveau d'exigence artistique élevé. (...) Nous avons besoin de l'opéra aujourd'hui pour nous évader, et le spectacle visuel, musical, lyrique et théâtral de la Compagnie Datura le permet avec charme et enchantements.",
    author: "Jules Bigey",
    title: "directeur adjoint du Théâtre du Capitole, Toulouse",
  },
  {
    text: "Quel bonheur d'être témoin de l'éclosion d'une nouvelle compagnie dont l'ambition exigeante nous a permis d'assister à une magnifique production de Lakmé au Théâtre d'Albi : excellence des chanteurs solistes – rôle-titre particulièrement bien assumé – ; finesse et précision de la direction musicale ; mise en scène jouant parfaitement la carte de l'opéra-comique avec son alliage raffiné d'humour et de rêve. Un vrai plaisir musical et théâtral !",
    author: "Patrick Burgan",
    title: "compositeur",
  },
  {
    text: "La partition, d'une extrême difficulté, est maîtrisée et c'est un pur bonheur que d'entendre les airs de Lakmé, et celui de Gérald. (...) Les spectateurs debout sont à ce sujet un indicateur qui ne peut tromper, c'est un public galvanisé et heureux qui est sorti du théâtre...",
    author: "Nicolas Desroziers",
    title: "professeur de musique et artiste lyrique",
  },
  {
    text: "Lakmé, ce nom qui flotte dans la mémoire collective, souvent réduit à un air célèbre, le Duo des fleurs, reprend vie sous un jour inattendu. Oubliez les pagodes en carton, les robes d'apparat, les clichés exotiques : la scène s'ouvre sur une lande de sable, nue, mouvante, hors du temps.",
    author: "Sylvie Lecoules",
    title: "journaliste au Tarn libre",
  },
];

interface CitationItemProps {
  citation: (typeof citations)[0];
}

function CitationItem({ citation }: CitationItemProps) {
  return (
    <div className="mb-8 last:mb-0">
      {/* Citation text */}
      <blockquote className="text-navy text-base leading-relaxed mb-4">
        &laquo;&nbsp;{citation.text}&nbsp;&raquo;
      </blockquote>

      {/* Author */}
      <div className="text-navy font-bold text-base">
        {citation.author}, {citation.title}
      </div>
    </div>
  );
}

export default function Citations() {
  return (
    <section className="py-10 ">
      <div className="max-w-2xl mx-auto relative">

        {/* Card container with rounded corners and white border */}
        <div className="bg-mustard rounded-3xl border-4 border-white p-12">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-8 text-white uppercase tracking-wider">
            LE PUBLIC EN PARLE
          </h2>

          {/* Citations */}
          <div className="space-y-8">
            {citations.map((citation, index) => (
              <CitationItem key={index} citation={citation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
