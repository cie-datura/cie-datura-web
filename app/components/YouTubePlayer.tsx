"use client";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubePlayer({
  videoId,
  title = "Vidéo YouTube",
  className = "",
}: YouTubePlayerProps) {
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
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=0&disablekb=1&fs=1&iv_load_policy=3`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
        />
      </div>
    </div>
  );
}
