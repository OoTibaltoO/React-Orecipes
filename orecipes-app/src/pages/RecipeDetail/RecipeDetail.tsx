import { Link, useNavigate, useParams } from "react-router-dom";
import { getRecipeById } from "../../data/recipes";
import { useFavorites } from "../../hooks/useFavorites";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const recipe = id ? getRecipeById(Number.parseInt(id, 10)) : undefined;

  if (!recipe) {
    return (
      <div className="recipe-detail-page">
        <div className="container">
          <div className="error-state">
            <div className="error-icon">😕</div>
            <h2>Recette introuvable</h2>
            <p>Désolé, nous n'avons pas pu trouver cette recette.</p>
            <div className="error-actions">
              <button type="button" onClick={() => navigate(-1)} className="btn btn-outline">
                ← Retour
              </button>
              <Link to="/recipes" className="btn btn-primary">
                Voir toutes les recettes
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: typeof recipe.difficulty) => {
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

  const getDifficultyLabel = (difficulty: typeof recipe.difficulty) => {
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
    <div className="recipe-detail-page">
      <div className="container">
        {/* Navigation */}
        <div className="recipe-nav">
          <button type="button" onClick={() => navigate(-1)} className="back-btn">
            ← Retour
          </button>
          <button
            type="button"
            onClick={() => toggleFavorite(recipe.id)}
            className={`favorite-btn-large ${isFavorite(recipe.id) ? "active" : ""}`}
            aria-label={isFavorite(recipe.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            {isFavorite(recipe.id) ? "❤️ Retirer des favoris" : "🤍 Ajouter aux favoris"}
          </button>
        </div>

        {/* Header de la recette */}
        <div className="recipe-header">
          <div className="recipe-image-large">
            <span className="recipe-icon-large">🍽️</span>
          </div>

          <div className="recipe-info">
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>

            <div className="recipe-meta-large">
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <div>
                  <div className="meta-label">Temps total</div>
                  <div className="meta-value">{totalTime} min</div>
                </div>
              </div>

              <div className="meta-item">
                <span className="meta-icon">👥</span>
                <div>
                  <div className="meta-label">Portions</div>
                  <div className="meta-value">{recipe.servings} pers.</div>
                </div>
              </div>

              <div className="meta-item">
                <span className="meta-icon">📈</span>
                <div>
                  <div className="meta-label">Difficulté</div>
                  <div
                    className="difficulty-badge-large"
                    style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
                  >
                    {getDifficultyLabel(recipe.difficulty)}
                  </div>
                </div>
              </div>
            </div>

            <div className="recipe-tags-large">
              {recipe.tags.map((tag) => (
                <span key={tag} className="tag-large">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Temps détaillés */}
        <div className="time-breakdown">
          <div className="time-item">
            <span className="time-icon">🥘</span>
            <div>
              <div className="time-label">Préparation</div>
              <div className="time-value">{recipe.prepTime} min</div>
            </div>
          </div>
          <div className="time-item">
            <span className="time-icon">🔥</span>
            <div>
              <div className="time-label">Cuisson</div>
              <div className="time-value">{recipe.cookTime} min</div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="recipe-content">
          {/* Ingrédients */}
          <div className="ingredients-section">
            <h2>Ingrédients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.id} className="ingredient-item">
                  <span className="ingredient-quantity">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="ingredient-name">{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="instructions-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction-item">
                  <span className="instruction-number">{index + 1}</span>
                  <span className="instruction-text">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
