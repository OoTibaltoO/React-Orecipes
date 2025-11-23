import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-icon">🍳</span>
            <span className="logo-text">Orecipes</span>
          </Link>

          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/recipes" className={`nav-link ${isActive("/recipes") ? "active" : ""}`}>
                Recettes
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className={`nav-link ${isActive("/favorites") ? "active" : ""}`}
              >
                Favoris
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
