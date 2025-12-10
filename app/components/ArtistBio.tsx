import { bio, Bio } from "../data/bio";

interface ArtistBioProps {
  artistName: string;
}

/**
 * Trouve la bio correspondant à un nom d'artiste
 * Normalise les noms pour gérer les différences de casse
 */
function findBioByName(name: string): Bio | undefined {
  const normalizedName = name.toLowerCase().trim();
  return bio.find((b) => b.name.toLowerCase().trim() === normalizedName);
}

/**
 * Composant pour afficher la bio d'un artiste
 * Respecte le principe de responsabilité unique (SOLID)
 */
export default function ArtistBio({ artistName }: ArtistBioProps) {
  const artistBio = findBioByName(artistName);

  if (!artistBio) {
    return (
      <div className="space-y-4 text-base leading-relaxed">
        <p className="text-gray-500 italic">
          Bio non disponible pour {artistName}
        </p>
      </div>
    );
  }

  // Divise le texte en paragraphes (séparés par des sauts de ligne)
  const paragraphs = artistBio.text
    .split("\n")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <div className="space-y-4 text-base leading-relaxed">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
