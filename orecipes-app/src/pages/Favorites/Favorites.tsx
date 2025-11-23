import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { recipes } from "../../data/recipes";
import { useFavorites } from "../../hooks/useFavorites";
import "./Favorites.css";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="page-header">
          <h1>Mes recettes favorites</h1>
          <p>
            {favoriteRecipes.length > 0
              ? `Vous avez ${favoriteRecipes.length} recette${favoriteRecipes.length > 1 ? "s" : ""} favorite${favoriteRecipes.length > 1 ? "s" : ""}`
              : "Aucune recette favorite pour le moment"}
          </p>
        </div>

        {favoriteRecipes.length > 0 ? (
          <div className="favorites-content">
            <div className="recipes-grid">
              {favoriteRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={true}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-favorites">
            <div className="empty-icon">💔</div>
            <h3>Aucune recette favorite</h3>
            <p>
              Vous n'avez pas encore ajouté de recettes à vos favoris.
              <br />
              Parcourez nos recettes et cliquez sur le cœur pour les ajouter !
            </p>
            <div className="empty-actions">
              <Link to="/recipes" className="btn btn-primary">
                Découvrir les recettes
              </Link>
              <Link to="/" className="btn btn-outline">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        )}

        {favoriteRecipes.length > 0 && (
          <div className="favorites-footer">
            <div className="favorites-stats">
              <div className="stat">
                <span className="stat-number">{favoriteRecipes.length}</span>
                <span className="stat-label">
                  Recette{favoriteRecipes.length > 1 ? "s" : ""} favorite
                  {favoriteRecipes.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {favoriteRecipes.reduce((total, recipe) => total + recipe.servings, 0)}
                </span>
                <span className="stat-label">Portions au total</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {Math.round(
                    favoriteRecipes.reduce(
                      (total, recipe) => total + recipe.prepTime + recipe.cookTime,
                      0
                    ) / favoriteRecipes.length
                  )}
                </span>
                <span className="stat-label">Min en moyenne</span>
              </div>
            </div>

            <div className="favorites-tips">
              <h3>💡 Le saviez-vous ?</h3>
              <ul>
                <li>Vos favoris sont sauvegardés localement dans votre navigateur</li>
                <li>Vous pouvez retirer une recette des favoris en cliquant sur le cœur rouge</li>
                <li>Les favoris vous permettent de retrouver rapidement vos recettes préférées</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
