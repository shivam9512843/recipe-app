import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DessertRecipes.css"; // Create this file for styling

const DessertRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchDessertRecipes = async () => {
      try {
        // Mock data for now; replace this with actual API call
        const mockData = [
          {
            id: 1,
            name: "Chocolate Cake",
            description: "Rich and moist chocolate cake with ganache.",
            image: "/image/deserrrt.jpeg",
          },
          {
            id: 2,
            name: "Cheesecake",
            description: "Creamy cheesecake with a graham cracker crust.",
            image: "/images/cheesecake.jpg",
          },
          {
            id: 3,
            name: "Apple Pie",
            description: "Classic apple pie with a flaky crust.",
            image: "/images/apple-pie.jpg",
          },
          {
            id: 4,
            name: "Brownies",
            description: "Decadent chocolate brownies with nuts.",
            image: "/images/brownies.jpg",
          },
          {
            id: 5,
            name: "Tiramisu",
            description: "Coffee-flavored Italian dessert with mascarpone.",
            image: "/images/tiramisu.jpg",
          },
          {
            id: 6,
            name: "Lemon Bars",
            description: "Tangy lemon bars with powdered sugar topping.",
            image: "/images/lemon-bars.jpg",
          },
        ];

        setRecipes(mockData);
      } catch (error) {
        console.error("Error fetching dessert recipes:", error);
      }
    };

    fetchDessertRecipes();
  }, []);

  return (
    <div className="dessert-recipes">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            YourLogo
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-links">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
            <li className="nav-item">
        <Link to="/auth" className="nav-links">Login/Signup</Link>
      </li>
          </ul>
        </div>
      </nav>
      {/* Navbar ends here */}

      <h2>Dessert Recipes</h2>
      <div className="recipe-grid">
        {recipes.slice(0, 3).map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/dessert/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
            </Link>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
      <div className="recipe-grid">
        {recipes.slice(3).map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/dessert/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
            </Link>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertRecipes;
