export interface Citation {
  id: number;
  text: string;
  author: string;
  role: string;
}

export const citations: Citation[] = [
  {
    id: 1,
    text: "L'équipe réunie par Timothée Hudrisier et Guillemette Daboval et leur production répondaient à un niveau d'exigence artistique élevé. (...) Nous avons besoin de l'opéra aujourd'hui pour nous évader, et le spectacle visuel, musical, lyrique et théâtral de la Compagnie Datura le permet avec charme et enchantements.",
    author: "Jules Bigey",
    role: "Directeur adjoint du Théâtre du Capitole de Toulouse",
  },
  {
    id: 2,
    text: "Quel bonheur d'être témoin de l'éclosion d'une nouvelle compagnie dont l'ambition exigeante nous a permis d'assister à une magnifique production de Lakmé au Théâtre d'Albi : excellence des chanteurs solistes – rôle-titre particulièrement bien assumé – ; finesse et précision de la direction musicale ; mise en scène jouant parfaitement la carte de l'opéra-comique avec son alliage raffiné d'humour et de rêve. Un vrai plaisir musical et théâtral !",
    author: "Patrick Burgan",
    role: "Compositeur",
  },
  {
    id: 3,
    text: "La partition, d'une extrême difficulté, est maîtrisée et c'est un pur bonheur que d'entendre les airs de Lakmé, et celui de Gérald. (...) Les spectateurs debout sont à ce sujet un indicateur qui ne peut tromper, c'est un public galvanisé et heureux qui est sorti du théâtre...",
    author: "Nicolas Desroziers",
    role: "Professeur de musique en collège et artiste lyrique",
  },
];
