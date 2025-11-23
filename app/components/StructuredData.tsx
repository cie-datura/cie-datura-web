export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "PerformingGroup",
    name: "Compagnie Datura",
    description:
      "Compagnie d'opéra basée à Albi et Lyon",
    url: "https://www.cie-datura.fr",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Albi",
        addressRegion: "Occitanie",
        addressCountry: "FR",
      },
    },
    genre: ["Opéra", "Musique classique", "Théâtre lyrique"],
    member: [
      {
        "@type": "Person",
        name: "Timothée Hudrisier",
        jobTitle: "Directeur Artistique",
      },
      {
        "@type": "Person",
        name: "Mathilde Bellin",
        jobTitle: "Metteuse en Scène",
      },
      {
        "@type": "Person",
        name: "Guillemette Daboval",
        jobTitle: "Directrice Musicale",
      },
    ],
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

    </>
  );
}
