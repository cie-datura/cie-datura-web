"use client";

import { useState, useEffect, useRef } from "react";

export default function OptimizedHeroVideo() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [showPosterOnly, setShowPosterOnly] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Vérifier les conditions pour afficher uniquement le poster
    const checkPosterOnlyConditions = () => {
      // Mobile detection (< 768px)
      const isMobile = window.innerWidth < 768;

      // Prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Save data mode
      const saveData = (navigator as any).connection?.saveData === true;

      return isMobile || prefersReducedMotion || saveData;
    };

    setShowPosterOnly(checkPosterOnlyConditions());

    // Si on doit afficher uniquement le poster, pas besoin d'IntersectionObserver
    if (checkPosterOnlyConditions()) {
      return;
    }

    // IntersectionObserver pour charger la vidéo quand elle entre dans le viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      {
        threshold: 0.1, // Déclencher quand 10% de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [shouldLoadVideo]);

  return (
    <section ref={sectionRef} className="absolute inset-0">
      {/* Poster image - toujours affiché en premier */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/utils/hero-poster.webp')",
        }}
      />

      {/* Vidéo - chargée conditionnellement */}
      {shouldLoadVideo && !showPosterOnly && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/utils/hero-poster.webp"
        >
          <source src="/utils/hero-lakme.webm" type="video/webm" />
          <source src="/utils/hero-safari-fallback.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}
