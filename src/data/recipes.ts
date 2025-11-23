import type { Recipe } from "../types";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Pâtes à la carbonara",
    description: "Un classique italien authentique et savoureux",
    difficulty: "medium",
    servings: 4,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { id: 1, name: "Spaghettis", quantity: 400, unit: "g" },
      { id: 2, name: "Lardons", quantity: 200, unit: "g" },
      { id: 3, name: "Œufs", quantity: 3, unit: "pièces" },
      { id: 4, name: "Parmesan râpé", quantity: 100, unit: "g" },
      { id: 5, name: "Crème fraîche", quantity: 200, unit: "ml" },
    ],
    instructions: [
      "Faire cuire les pâtes dans l'eau bouillante salée selon les indications du paquet",
      "Faire revenir les lardons dans une poêle jusqu'à ce qu'ils soient dorés",
      "Battre les œufs avec la crème et le parmesan",
      "Égoutter les pâtes et les mélanger avec les lardons",
      "Hors du feu, ajouter le mélange œufs-crème et mélanger rapidement",
      "Servir immédiatement avec du parmesan supplémentaire",
    ],
    tags: ["Pâtes", "Italien", "Rapide"],
  },
  {
    id: 2,
    title: "Ratatouille provençale",
    description: "Un plat méditerranéen aux légumes du soleil",
    difficulty: "easy",
    servings: 6,
    prepTime: 20,
    cookTime: 45,
    ingredients: [
      { id: 6, name: "Aubergines", quantity: 2, unit: "pièces" },
      { id: 7, name: "Courgettes", quantity: 2, unit: "pièces" },
      { id: 8, name: "Tomates", quantity: 4, unit: "pièces" },
      { id: 9, name: "Poivrons", quantity: 2, unit: "pièces" },
      { id: 10, name: "Oignon", quantity: 1, unit: "pièce" },
      { id: 11, name: "Ail", quantity: 3, unit: "gousses" },
      { id: 12, name: "Huile d'olive", quantity: 4, unit: "cuillères à soupe" },
    ],
    instructions: [
      "Couper tous les légumes en dés de taille égale",
      "Faire chauffer l'huile d'olive dans une grande poêle",
      "Faire revenir l'oignon et l'ail jusqu'à ce qu'ils soient dorés",
      "Ajouter les aubergines et cuire 5 minutes",
      "Ajouter les courgettes et poivrons, cuire 10 minutes",
      "Ajouter les tomates et laisser mijoter 30 minutes",
      "Assaisonner avec du sel, du poivre et des herbes de Provence",
    ],
    tags: ["Légumes", "Méditerranéen", "Végétarien"],
  },
  {
    id: 3,
    title: "Tiramisu maison",
    description: "Le dessert italien incontournable",
    difficulty: "hard",
    servings: 8,
    prepTime: 30,
    cookTime: 0,
    ingredients: [
      { id: 13, name: "Biscuits à la cuillère", quantity: 24, unit: "pièces" },
      { id: 14, name: "Café fort", quantity: 250, unit: "ml" },
      { id: 15, name: "Mascarpone", quantity: 500, unit: "g" },
      { id: 16, name: "Œufs", quantity: 4, unit: "pièces" },
      { id: 17, name: "Sucre", quantity: 100, unit: "g" },
      { id: 18, name: "Cacao en poudre", quantity: 2, unit: "cuillères à soupe" },
    ],
    instructions: [
      "Séparer les blancs des jaunes d'œufs",
      "Battre les jaunes avec le sucre jusqu'à blanchiment",
      "Incorporer le mascarpone au mélange jaunes-sucre",
      "Monter les blancs en neige ferme et les incorporer délicatement",
      "Tremper rapidement les biscuits dans le café",
      "Alterner couches de biscuits et de crème dans un plat",
      "Réfrigérer au moins 4 heures",
      "Saupoudrer de cacao avant de servir",
    ],
    tags: ["Dessert", "Italien", "Sans cuisson"],
  },
];

export const getRecipeById = (id: number): Recipe | undefined => {
  return recipes.find((recipe) => recipe.id === id);
};

export const getRecipesByTag = (tag: string): Recipe[] => {
  return recipes.filter((recipe) => recipe.tags.includes(tag));
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowerQuery = query.toLowerCase();
  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(lowerQuery) ||
      recipe.description.toLowerCase().includes(lowerQuery) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};
