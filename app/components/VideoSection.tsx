"use client";

import { useRef } from "react";
import { useVideoLoader } from "../hooks/useVideoLoader";

interface VideoSectionProps {
  videoSrc: string;
  posterSrc: string;
  className?: string;
  threshold?: number;
}

export default function VideoSection({ 
  videoSrc, 
  posterSrc, 
  className = "", 
  threshold = 0.1 
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { showPosterOnly, shouldLoadVideo, sectionRef } = useVideoLoader({
    threshold,
  });

  return (
    <section ref={sectionRef} className={`relative ${className}`}>
      {/* Poster image - toujours affiché en premier */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${posterSrc}')`,
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
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </section>
  );
}