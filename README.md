# Compagnie Datura - Site Web Officiel

Site web moderne et optimisé pour la Compagnie Datura présentant leur production de Lakmé de Léo Delibes.


## 🚀 Installation et Développement

```bash
# Cloner le repository
git clone [repository-url]
cd compagnie-datura

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start

# Linter et formater le code
npm run lint
npm run lint:fix
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## Personnalisation

### Couleurs

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

## 🏗️ Architecture et Personnalisation

### Structure des Composants

```
app/
├── components/
│   ├── OptimizedHeroVideo.tsx   # Vidéo héro optimisée
│   ├── Citations.tsx            # Section témoignages
│   ├── YouTubePlayer.tsx        # Player YouTube réutilisable
│   └── ScrollButton.tsx         # Bouton de navigation
├── hooks/
│   └── useIntersectionObserver.ts # Hook pour animations viewport
├── page.tsx                     # Page principale
├── globals.css                  # Styles et animations
└── layout.tsx                   # Layout global

public/
└── utils/
    ├── hero-lakme.webm          # Vidéo principale
    ├── hero-safari-fallback.mp4 # Fallback vidéo
    ├── hero-poster.webp         # Image poster
    └── dossier-presentation.pdf # PDF téléchargeable
```

### 🛠️ Technologies Utilisées

- **Next.js 15** : Framework React avec App Router
- **Tailwind CSS 4** : Framework CSS utilitaire moderne
- **TypeScript** : Typage statique pour robustesse
- **Intersection Observer API** : Animations au scroll optimisées
- **HTML5 Video** : Lecture vidéo native optimisée
- **YouTube Embed API** : Intégration player vidéo

## 🎯 Fonctionnalités Avancées

### ⚡ Optimisations Performance

- **Lazy Loading** : Vidéo chargée uniquement au scroll
- **Responsive Images** : WebP avec fallbacks optimisés
- **Preload Metadata** : Chargement minimal initial
- **Intersection Observer** : Animations déclenchées au viewport

### 📱 Adaptabilité

- **Mobile-First** : Design responsive avec breakpoints optimisés
- **Reduced Motion** : Respect des préférences utilisateur
- **Save Data** : Mode économie de données supporté
- **Progressive Enhancement** : Fonctionnement sans JavaScript

### 🎨 Design System

- **Glassmorphism** : Effets de transparence et blur
- **Micro-interactions** : Animations subtiles au hover
- **Typography** : Police personnalisée CocogoosePro-Light
- **Color Palette** : Thème sombre avec accents bleu/violet

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Connecter à Vercel
npx vercel

# Ou déployer directement
npx vercel --prod
```

### Variables d'Environnement

Aucune variable d'environnement requise pour le fonctionnement de base.

### Optimisations Production

- **Compression** : Gzip/Brotli automatique
- **CDN** : Assets servis via CDN Vercel
- **Caching** : Headers de cache optimisés
- **Bundle Analysis** : `npm run analyze` pour analyser la taille

## 📚 Ressources Utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Performance Best Practices](https://web.dev/performance/)

## 📄 Licence

Ce projet est développé pour la Compagnie Datura. Tous droits réservés.
