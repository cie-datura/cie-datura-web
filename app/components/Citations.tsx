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
];

interface CitationItemProps {
  citation: (typeof citations)[0];
}

function CitationItem({ citation }: CitationItemProps) {
  return (
    <div className="bg-mustard rounded-2xl border-3 border-white p-5 shadow-lg h-full flex flex-col">
      {/* Citation text */}
      <blockquote className="text-navy text-sm leading-relaxed mb-4 flex-grow">
        &laquo;&nbsp;{citation.text}&nbsp;&raquo;
      </blockquote>

      {/* Author */}
      <div className="mt-auto">
        <div className="text-navy font-bold text-sm">{citation.author}</div>
        <div className="text-navy text-xs opacity-80">{citation.title}</div>
      </div>
    </div>
  );
}

export default function Citations() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy uppercase tracking-wider">
          LE PUBLIC EN PARLE
        </h2>

        {/* Citations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {citations.map((citation, index) => (
            <CitationItem key={index} citation={citation} />
          ))}
        </div>
      </div>
    </section>
  );
}
