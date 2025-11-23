import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Charger les favoris depuis le localStorage au montage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("orecipes-favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Erreur lors du chargement des favoris:", error);
        setFavorites([]);
      }
    }
  }, []);

  // Sauvegarder les favoris dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("orecipes-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipeId: number) => {
    setFavorites((prev) => {
      if (!prev.includes(recipeId)) {
        return [...prev, recipeId];
      }
      return prev;
    });
  };

  const removeFromFavorites = (recipeId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== recipeId));
  };

  const toggleFavorite = (recipeId: number) => {
    if (favorites.includes(recipeId)) {
      removeFromFavorites(recipeId);
    } else {
      addToFavorites(recipeId);
    }
  };

  const isFavorite = (recipeId: number): boolean => {
    return favorites.includes(recipeId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
  };
};
