"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import YouTubePlayer from "./YouTubePlayer";
import YoutubeReactPlayer from "./YoutubeReactPlayer";
const citations = [
  {
    text: "Nous avons besoin de l'opéra aujourd'hui pour nous évader, et le spectacle visuel, musical, lyrique et théâtral de la Compagnie Datura le permet avec charme et enchantements.",
    author: "Jules Bigey",
    title: "directeur adjoint du Théâtre du Capitole, Toulouse",
  },
  {
    text: "Quel bonheur d'être témoin de l'éclosion d'une nouvelle compagnie dont l'ambition exigeante nous a permis d'assister à une magnifique production de Lakmé au Théâtre d'Albi",
    author: "Patrick Burgan",
    title: "compositeur",
  },
  {
    text: "Les spectateurs debout sont à ce sujet un indicateur qui ne peut tromper, c'est un public galvanisé et heureux qui est sorti du théâtre...",
    author: "Nicolas Desroziers",
    title: "professeur de musique et artiste lyrique",
  },
];

interface AnimatedElementProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

function AnimatedElement({
  children,
  isVisible,
  delay = 0,
  className = "",
  style = {},
}: AnimatedElementProps) {
  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface CitationCardProps {
  citation: (typeof citations)[0];
  index: number;
  isVisible: boolean;
}

function CitationCard({ citation, index, isVisible }: CitationCardProps) {
  const baseDelay = index * 200;

  return (
    <AnimatedElement
      isVisible={isVisible}
      delay={baseDelay}
      className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-600/30 hover:border-slate-500/50 group relative"
    >
      {/* Citation */}
      <AnimatedElement isVisible={isVisible} delay={baseDelay + 300}>
        <blockquote className="text-lg text-gray-200 leading-relaxed mb-6 italic">
          &ldquo;<span className="font-medium">{citation.text}</span>&rdquo;
        </blockquote>
      </AnimatedElement>

      {/* Auteur */}
      <div className="border-t border-slate-600/30 pt-4">
        <AnimatedElement isVisible={isVisible} delay={baseDelay + 500}>
          <p className="font-semibold text-white text-lg">{citation.author}</p>
        </AnimatedElement>

        <AnimatedElement isVisible={isVisible} delay={baseDelay + 600}>
          <p className="text-gray-400 text-sm mt-1">{citation.title}</p>
        </AnimatedElement>
      </div>

      {/* Effet de glow subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </AnimatedElement>
  );
}

export default function Citations() {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  return (
    <section ref={elementRef} className="py-20 px-4 bg-(--mustard)">
      <div className="max-w-6xl mx-auto">
        <AnimatedElement
          isVisible={isVisible}
          delay={0}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white title-font"
        >
          <h2>Le public en parle</h2>
        </AnimatedElement>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {citations.map((citation, index) => (
            <CitationCard
              key={index}
              citation={citation}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Player YouTube */}
        <AnimatedElement
          isVisible={isVisible}
          delay={800}
          className="max-w-4xl mx-auto"
        >
          <YoutubeReactPlayer
            videoId="Bxei_qK6ntc"
            title="Découvrez Lakmé en vidéo"
            description="Extrait de notre production de Lakmé de Léo Delibes"
          />
        </AnimatedElement>
      </div>
    </section>
  );
}
