"use client";

import { useState } from "react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export default function YouTubePlayer({
  videoId,
  title = "YouTube video",
}: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="pt-12">
      {title && (
        <h3 className="text-3xl md:text-6xl font-chosence font-lightbold text-center mb-12 text-navy uppercase tracking-wider">
          {title}
        </h3>
      )}

      <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-xl overflow-hidden shadow">
        {!isLoaded ? (
          // Thumbnail avec bouton play
          <button
            onClick={handleLoadVideo}
            className="group absolute inset-0 w-full h-full"
            aria-label="Lire la vidéo"
          >
            <img
              src={thumbnailUrl}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40  transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/95 p-5 group-hover:scale-105 group-hover:cursor-pointer transition-transform shadow-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        ) : (
          // Iframe YouTube
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
    </div>
  );
}