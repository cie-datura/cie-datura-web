# Cie Datura - Landing Page

Une landing page moderne pour la Compagnie Datura avec une section héro avec vidéo et une section présentation avec PDF téléchargeable.

## Fonctionnalités

- **Section Héro** : Vidéo de fond automatique avec titre et call-to-action
- **Section Présentation** : Texte de présentation avec PDF téléchargeable animé
- **Animations** : Effets d'apparition et animations au hover
- **Design responsive** : Optimisé pour mobile et desktop

## Ressources nécessaires

Pour que la landing page fonctionne correctement, vous devez ajouter les fichiers suivants dans le dossier `public/` :

### 1. Vidéo de fond

- **Fichier** : `public/video-background.mp4`
- **Description** : Vidéo qui se lance automatiquement en arrière-plan de la section héro
- **Format recommandé** : MP4, résolution 1920x1080 ou supérieure
- **Taille recommandée** : < 10MB pour un chargement rapide

### 2. PDF de présentation

- **Fichier** : `public/dossier-presentation.pdf`
- **Description** : Dossier de présentation de la compagnie téléchargeable
- **Contenu suggéré** :
  - Présentation de la compagnie
  - Spectacles et créations
  - Équipe artistique
  - Contact et informations pratiques

## Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

## Personnalisation

### Couleurs

Les couleurs principales utilisées sont :

- **Violet/bleu** : `from-purple-600 to-blue-600` pour le gradient du PDF
- **Blanc** : Pour le texte et les boutons
- **Noir transparent** : `bg-black/40` pour l'overlay de la vidéo

### Animations

Les animations sont définies dans `app/globals.css` :

- `animate-fade-in` : Apparition du titre
- `animate-fade-in-delay` : Apparition du sous-titre avec délai
- `animate-bounce` : Animation du bouton call-to-action

### Texte

Modifiez le contenu dans `app/page.tsx` :

- Titre principal : "Cie Datura"
- Sous-titre : "Découvrez notre univers artistique unique"
- Texte de présentation dans la section "À propos de nous"

## Structure des fichiers

```
app/
├── page.tsx          # Page principale
├── globals.css       # Styles et animations
└── layout.tsx        # Layout global

public/
├── video-background.mp4      # Vidéo de fond (à ajouter)
└── dossier-presentation.pdf  # PDF téléchargeable (à ajouter)
```

## Technologies utilisées

- **Next.js 15** : Framework React
- **Tailwind CSS 4** : Framework CSS utilitaire
- **TypeScript** : Typage statique
- **HTML5 Video** : Lecture vidéo native

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
