import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { recipes } from "../../data/recipes";
import { useFavorites } from "../../hooks/useFavorites";
import "./Home.css";

const Home = () => {
  const { isFavorite, toggleFavorite } = useFavorites();

  // Sélectionner les 3 dernières recettes
  const featuredRecipes = recipes.slice(-3).reverse();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Bienvenue chez <span className="highlight">Orecipes</span>
            </h1>
            <p className="hero-description">
              Découvrez des recettes délicieuses et faciles à préparer. De l'entrée au dessert,
              trouvez l'inspiration pour tous vos repas !
            </p>
            <div className="hero-actions">
              <Link to="/recipes" className="btn btn-primary btn-large">
                Explorer les recettes
              </Link>
              <Link to="/favorites" className="btn btn-outline btn-large">
                Mes favoris
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-emoji">👨‍🍳</div>
            <div className="hero-decorations">
              <span className="decoration">🥘</span>
              <span className="decoration">🍝</span>
              <span className="decoration">🧁</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="featured-recipes">
        <div className="container">
          <div className="section-header">
            <h2>Recettes populaires</h2>
            <p>Nos meilleures recettes sélectionnées pour vous</p>
          </div>

          <div className="recipes-grid">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={isFavorite(recipe.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>

          <div className="section-footer">
            <Link to="/recipes" className="btn btn-secondary">
              Voir toutes les recettes →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{recipes.length}</div>
              <div className="stat-label">Recettes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Niveaux de difficulté</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {recipes.reduce((total, recipe) => total + recipe.servings, 0)}
              </div>
              <div className="stat-label">Portions au total</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {new Set(recipes.flatMap((recipe) => recipe.tags)).size}
              </div>
              <div className="stat-label">Tags différents</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
