export interface Recipe {
  id: number;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  servings: number;
  prepTime: number; // en minutes
  cookTime: number; // en minutes
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  image?: string;
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  favoriteRecipes: number[];
}
