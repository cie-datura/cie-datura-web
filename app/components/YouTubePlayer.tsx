"use client";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function YouTubePlayer({
  videoId,
  title = "Vidéo YouTube",
  description,
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
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {description && (
        <p className="text-center text-gray-300 mt-4 text-sm">{description}</p>
      )}
    </div>
  );
}
