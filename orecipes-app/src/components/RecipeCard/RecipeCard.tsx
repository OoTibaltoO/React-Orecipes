import { Link } from "react-router-dom";
import type { Recipe } from "../../types";
import "./RecipeCard.css";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite?: boolean;
  onToggleFavorite?: (recipeId: number) => void;
}

const RecipeCard = ({ recipe, isFavorite = false, onToggleFavorite }: RecipeCardProps) => {
  const getDifficultyColor = (difficulty: Recipe["difficulty"]) => {
    switch (difficulty) {
      case "easy":
        return "#27ae60";
      case "medium":
        return "#f39c12";
      case "hard":
        return "#e74c3c";
      default:
        return "#95a5a6";
    }
  };

  const getDifficultyLabel = (difficulty: Recipe["difficulty"]) => {
    switch (difficulty) {
      case "easy":
        return "Facile";
      case "medium":
        return "Moyen";
      case "hard":
        return "Difficile";
      default:
        return "Non défini";
    }
  };

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <article className="recipe-card card">
      <div className="recipe-card-header">
        <div className="recipe-image-placeholder">
          <span className="recipe-icon">🍽️</span>
        </div>
        {onToggleFavorite && (
          <button
            type="button"
            className={`favorite-btn ${isFavorite ? "active" : ""}`}
            onClick={() => onToggleFavorite(recipe.id)}
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        )}
      </div>

      <div className="recipe-card-content">
        <h3 className="recipe-title">
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </h3>

        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-meta">
          <div className="recipe-info">
            <span className="info-item">⏱️ {totalTime} min</span>
            <span className="info-item">👥 {recipe.servings} pers.</span>
            <span
              className="difficulty-badge"
              style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
            >
              {getDifficultyLabel(recipe.difficulty)}
            </span>
          </div>

          <div className="recipe-tags">
            {recipe.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
            {recipe.tags.length > 2 && <span className="tag-more">+{recipe.tags.length - 2}</span>}
          </div>
        </div>
      </div>

      <div className="recipe-card-footer">
        <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">
          Voir la recette
        </Link>
      </div>
    </article>
  );
};

export default RecipeCard;
