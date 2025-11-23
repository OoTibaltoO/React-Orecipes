import type React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Composants
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
// Pages
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Recipes from "./pages/Recipes/Recipes";

// Styles
import './styles/globals.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <main className="main-content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/recipes" element={<Recipes />} />
                            <Route path="/recipe/:id" element={<RecipeDetail />} />
                            <Route path="/favorites" element={<Favorites />} />
                        </Routes>
                    </div>
                </main>
            </Router>
        </div>
    );
};

export default App;
