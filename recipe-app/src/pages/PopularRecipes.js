import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PopularRecipes.css'; // Create this file for styling

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        // Mock data for now; replace this with actual API call
        const mockData = [
          {
            id: 1,
            name: 'Pizza Margherita',
            description: 'Classic pizza with tomato, mozzarella, and basil.',
            image: '/images/pizza-margherita.jpg',
          },
          {
            id: 2,
            name: 'Burger',
            description: 'Juicy beef burger with lettuce, tomato, and cheese.',
            image: '/images/burger.jpg',
          },
          {
            id: 3,
            name: 'Pasta Alfredo',
            description: 'Creamy pasta with Parmesan cheese and garlic.',
            image: '/images/pasta-alfredo.jpg',
          },
          {
            id: 4,
            name: 'Sushi',
            description: 'Fresh sushi rolls with a variety of fillings.',
            image: '/images/sushi.jpg',
          },
          {
            id: 5,
            name: 'Tacos',
            description: 'Spicy tacos with beef, lettuce, and salsa.',
            image: '/images/tacos.jpg',
          },
          {
            id: 6,
            name: 'Burritos',
            description: 'Stuffed burritos with beans, rice, and meat.',
            image: '/images/burritos.jpg',
          },
        ];

        setRecipes(mockData);
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
      }
    };

    fetchPopularRecipes();
  }, []);

  return (
    <div className="popular-recipes">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            YourLogo
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-links">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">Contact</Link>
            </li>
            <li className="nav-item">
        <Link to="/auth" className="nav-links">Login/Signup</Link>
      </li>
          </ul>
        </div>
      </nav>
      {/* Navbar ends here */}

      <h2>Popular Recipes</h2>
      <div className="recipe-grid">
        {recipes.slice(0, 3).map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/popular/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            </Link>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
      <div className="recipe-grid">
        {recipes.slice(3).map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/popular/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            </Link>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
