"use client";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export default function YouTubePlayer({
  videoId,
  title = "YouTube video",
}: YouTubePlayerProps) {
  return (
    <div className="pt-12">
      {title && (
        <h3 className="text-3xl md:text-6xl font-chosence font-lightbold  text-center mb-8 text-navy title-font ">
          {title}
        </h3>
      )}

      <div
        className="relative w-full max-w-6xl mx-auto"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3`}
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
