

# 📱 Orecipes App - Application de Gestion de Recettes

## 🚀 Voici le site personnel disponible ici : https://ootibaltoo.github.io/React-Orecipes/

## 🎯 Vue d'ensemble du projet

![alt text](<public/Screenshot 2025-11-23 at 22-00-53 orecipes-app.png>)

![alt text](<public/Screenshot 2025-11-23 at 22-04-07 orecipes-app.png>)

![alt text](<public/Screenshot 2025-11-23 at 22-04-36 orecipes-app.png>)

**Orecipes** est une application web de gestion de recettes de cuisine développée en React avec TypeScript. Il s'agit d'un projet pédagogique conçu pour pratiquer et maîtriser les concepts fondamentaux de React dans un contexte d'apprentissage.

L'application permet aux utilisateurs de :

- 🏠 Consulter une page d'accueil avec présentation
- 📖 Parcourir une collection de recettes
- 🔍 Voir les détails complets d'une recette
- ❤️ Gérer leurs recettes favorites
- 🧭 Naviguer facilement entre les différentes sections

## 🛠️ Stack Technologique

### **Frontend Core**

- **React 19.2.0** : Framework JavaScript moderne pour construire des interfaces utilisateur réactives
- **TypeScript 5.9.3** : Apporte la sécurité des types et une meilleure expérience de développement
- **React Router DOM 7.9.6** : Gestion du routage côté client pour une navigation SPA fluide

### **Outils de Développement**

- **Vite 7.2.4** : Build tool ultra-rapide avec Hot Module Replacement (HMR)
- **Biome 2.3.6** : Outil moderne de linting et formatage, alternative performante à ESLint/Prettier

### **Pourquoi ces choix technologiques ?**

#### 🚀 **Vite au lieu de Create React App**

- **Performance** : Démarrage instantané du serveur de développement
- **Build optimisé** : Utilise Rollup pour des bundles plus légers
- **Configuration minimale** : Setup simple et moderne

#### 📝 **TypeScript**

- **Sécurité des types** : Détection d'erreurs à la compilation
- **IntelliSense amélioré** : Autocomplétion et refactoring facilités
- **Documentation vivante** : Les types servent de documentation
- **Apprentissage** : Prépare aux projets professionnels

#### 🎨 **Biome vs ESLint/Prettier**

- **Performance** : Écrit en Rust, jusqu'à 100x plus rapide
- **Configuration unifiée** : Un seul outil pour linting et formatage
- **Zero-config** : Fonctionne out-of-the-box
- **Moderne** : Règles adaptées aux standards actuels

#### ⚛️ **React 19**

- **Version récente** : Accès aux dernières fonctionnalités
- **Concurrent Features** : Amélioration des performances
- **Hooks modernes** : `useState`, `useEffect`, customs hooks

## 🏗️ Architecture du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header/         # Navigation principale
│   └── RecipeCard/     # Carte de recette
├── pages/              # Pages de l'application
│   ├── Home/          # Page d'accueil
│   ├── Recipes/       # Liste des recettes
│   ├── RecipeDetail/  # Détail d'une recette
│   └── Favorites/     # Recettes favorites
├── hooks/             # Custom hooks React
│   └── useFavorites.ts # Gestion des favoris
├── data/              # Données mockées
│   └── recipes.ts     # Base de données des recettes
├── types/             # Définitions TypeScript
│   └── index.ts       # Interfaces et types
└── styles/            # Styles globaux
    └── globals.css    # CSS global
```

## 🎓 Objectifs Pédagogiques

### **Concepts React Pratiqués**

1. **Composants Fonctionnels** : Architecture moderne avec hooks
2. **Props et State** : Gestion des données et communication parent-enfant
3. **Hooks personnalisés** : `useFavorites` pour la logique métier
4. **Routage SPA** : Navigation client-side avec React Router
5. **Gestion d'état local** : `useState` et `useEffect`
6. **Persistance locale** : LocalStorage pour les favoris

### **Bonnes Pratiques Appliquées**

- **Séparation des responsabilités** : Composants, pages, hooks, data
- **Typage fort** : Interfaces TypeScript pour tous les objets
- **Code réutilisable** : Composants modulaires et hooks custom
- **Structure claire** : Organisation logique des dossiers
- **Performance** : Optimisations Vite et React

## 🚀 Installation et Lancement

### **Prérequis**

- Node.js (version 16 ou supérieure)
- npm ou yarn

### **Installation**

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Naviguer dans le dossier
cd orecipes-app

# Installer les dépendances
npm install
```

### **Scripts Disponibles**

```bash
# Lancer le serveur de développement
npm run dev

# Builder l'application pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter le code
npm run lint

# Corriger automatiquement les erreurs de linting
npm run lint:fix

# Formater le code
npm run format

# Corriger automatiquement le formatage
npm run format:fix

# Vérifier et corriger linting + formatage
npm run check
npm run check:fix
```

## 📋 Fonctionnalités de l'Application

### **Pages Principales**

- **Accueil** (`/`) : Page de présentation de l'application
- **Recettes** (`/recipes`) : Liste complète des recettes disponibles
- **Détail Recette** (`/recipe/:id`) : Vue détaillée d'une recette avec ingrédients et instructions
- **Favoris** (`/favorites`) : Collection des recettes mises en favoris

### **Fonctionnalités**

- **Navigation fluide** : Routage SPA avec React Router
- **Gestion des favoris** : Ajout/suppression avec persistance localStorage
- **Interface responsive** : Design adaptatif pour tous les écrans
- **Recherche** : Fonctions de recherche et filtrage des recettes
- **Détails complets** : Temps de préparation, difficulté, nombre de portions

## 🎯 Contexte Éducatif

Ce projet s'inscrit dans un parcours d'apprentissage React où l'accent est mis sur :

- **Pratique hands-on** : Application concrète avec cas d'usage réels
- **Stack moderne** : Technologies actuelles du marché
- **Bonnes pratiques** : Code maintenable et structuré
- **Progression graduelle** : De la théorie à la pratique

## 🤝 Contribution

Ce projet étant à des fins éducatives, n'hésitez pas à :

- Ajouter de nouvelles recettes dans `src/data/recipes.ts`
- Améliorer les styles CSS
- Implémenter de nouvelles fonctionnalités
- Optimiser les performances

## 📝 License

Projet éducatif - Libre d'utilisation pour l'apprentissage (non à but commercial)
© 2025 OoTibaltoO
