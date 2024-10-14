import React, { useEffect, useState } from "react";
import "./RecipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes"); // Adjust the endpoint if needed
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      {/* Navbar JSX */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            YourLogo
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/recipes" className="nav-links">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-links">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/auth" className="nav-links">
                Login/Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Recipe List Content */}
      <div className="recipe-list-relative">
        <h2>All Recipes</h2>
        <ul className="recipe-items">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.id} className="recipe-item">
                <a
                  href={recipe.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="recipe-image"
                  />
                  <span className="recipe-name">{recipe.name}</span>
                </a>
              </li>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </ul>
      </div>
      <div className="latest-section">
        <h2>Latest Recipes</h2>
        <div className="latest-recipes">
          <div className="latest-card">
            <img src="image\Vegg.jpeg" alt="Latest Recipe 1" />
            <div className="latest-info">
              <h3>Latest Recipe 1</h3>
              <p>Some description for the latest recipe.</p>
            </div>
          </div>

          <div className="latest-card">
            <img src="image/latest2.jpeg" alt="Latest Recipe 2" />
            <div className="latest-info">
              <h3>Latest Recipe 2</h3>
              <p>Some description for the latest recipe.</p>
            </div>
          </div>

          <div className="latest-card">
            <img src="image/latest3.jpeg" alt="Latest Recipe 3" />
            <div className="latest-info">
              <h3>Latest Recipe 3</h3>
              <p>Some description for the latest recipe.</p>
            </div>
          </div>

          <div className="latest-card">
            <img src="image/latest4.jpeg" alt="Latest Recipe 4" />
            <div className="latest-info">
              <h3>Latest Recipe 4</h3>
              <p>Some description for the latest recipe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
