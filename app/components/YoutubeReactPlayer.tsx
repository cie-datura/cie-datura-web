"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface YoutubeReactPlayerProps {
  videoId: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function YoutubeReactPlayer({
  videoId,
  title = "Vidéo YouTube",
  description,
  className = "",
}: YoutubeReactPlayerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-600/30 ${className}`}
      >
        {title && (
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white title-font">
            {title}
          </h3>
        )}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 bg-slate-700 rounded-lg flex items-center justify-center">
            <p className="text-white">Chargement du player...</p>
          </div>
        </div>
        {description && (
          <p className="text-center text-gray-300 mt-4 text-sm">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-600/30 ${className}`}
    >
      {title && (
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white title-font">
          {title}
        </h3>
      )}

      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <div className="absolute inset-0">
          <ReactPlayer
            src={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
            height="100%"
            controls={true}
            light={false}
            pip={true}
            config={{
              youtube: {
                color: "white",
              },
            }}
          />
        </div>
      </div>

      {description && (
        <p className="text-center text-gray-300 mt-4 text-sm">{description}</p>
      )}
    </div>
  );
}
