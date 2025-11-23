import { useMemo, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { recipes, searchRecipes } from "../../data/recipes";
import { useFavorites } from "../../hooks/useFavorites";
import type { Recipe } from "../../types";
import "./Recipes.css";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<Recipe["difficulty"] | "all">("all");
  const [sortBy, setSortBy] = useState<"title" | "difficulty" | "time">("title");
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredAndSortedRecipes = useMemo(() => {
    let filtered = searchQuery ? searchRecipes(searchQuery) : recipes;

    // Filtrer par difficulté
    if (difficultyFilter !== "all") {
      filtered = filtered.filter((recipe) => recipe.difficulty === difficultyFilter);
    }

    // Trier
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "difficulty": {
          const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        }
        case "time": {
          const timeA = a.prepTime + a.cookTime;
          const timeB = b.prepTime + b.cookTime;
          return timeA - timeB;
        }
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchQuery, difficultyFilter, sortBy]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficultyFilter(e.target.value as Recipe["difficulty"] | "all");
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as "title" | "difficulty" | "time");
  };

  const clearFilters = () => {
    setSearchQuery("");
    setDifficultyFilter("all");
    setSortBy("title");
  };

  return (
    <div className="recipes-page">
      <div className="container">
        <div className="page-header">
          <h1>Toutes nos recettes</h1>
          <p>Découvrez {recipes.length} recettes délicieuses</p>
        </div>

        {/* Filtres et recherche */}
        <div className="filters-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher une recette..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filters">
            <div className="filter-group">
              <label htmlFor="difficulty-filter">Difficulté :</label>
              <select
                id="difficulty-filter"
                value={difficultyFilter}
                onChange={handleDifficultyChange}
                className="filter-select"
              >
                <option value="all">Toutes</option>
                <option value="easy">Facile</option>
                <option value="medium">Moyen</option>
                <option value="hard">Difficile</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort-select">Trier par :</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="filter-select"
              >
                <option value="title">Nom</option>
                <option value="difficulty">Difficulté</option>
                <option value="time">Temps de préparation</option>
              </select>
            </div>

            <button type="button" onClick={clearFilters} className="btn btn-outline clear-filters">
              Effacer les filtres
            </button>
          </div>
        </div>

        {/* Résultats */}
        <div className="results-section">
          {filteredAndSortedRecipes.length > 0 ? (
            <>
              <div className="results-count">
                {filteredAndSortedRecipes.length} recette
                {filteredAndSortedRecipes.length > 1 ? "s" : ""} trouvée
                {filteredAndSortedRecipes.length > 1 ? "s" : ""}
              </div>

              <div className="recipes-grid">
                {filteredAndSortedRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={isFavorite(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">😔</div>
              <h3>Aucune recette trouvée</h3>
              <p>Essayez de modifier vos critères de recherche</p>
              <button type="button" onClick={clearFilters} className="btn btn-primary">
                Voir toutes les recettes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
