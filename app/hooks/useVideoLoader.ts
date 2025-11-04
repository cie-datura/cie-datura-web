"use client";
import { useState, useEffect, useRef } from "react";

interface UseVideoLoaderOptions {
  threshold?: number;
}

export function useVideoLoader(options: UseVideoLoaderOptions = {}) {
  const { threshold = 0.1 } = options;
  const [showPosterOnly, setShowPosterOnly] = useState(true);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
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
      const connection = (
        navigator as Navigator & { connection?: { saveData?: boolean } }
      ).connection;
      const saveData = connection?.saveData === true;

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
        threshold, // Déclencher quand le pourcentage spécifié de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      const currentSection = sectionRef.current;
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [shouldLoadVideo, threshold]);

  return {
    showPosterOnly,
    shouldLoadVideo,
    sectionRef,
  };
}