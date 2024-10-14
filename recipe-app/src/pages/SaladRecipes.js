import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SaladRecipes.css';

const SaladRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchSaladRecipes = async () => {
      try {
        // Mocking the data for now; replace this with an actual API call
        const mockData = [
          {
            id: 1,
            name: 'Caesar Salad',
            description: 'A classic Caesar salad with crispy croutons.',
            image: '/image/Caesar Salad.jpeg',
          },
          {
            id: 2,
            name: 'Greek Salad',
            description: 'A fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
            image: '/image/Caesar Salad.jpeg',
          },
          {
            id: 3,
            name: 'Kanda Bhajiya',
            description: 'Spicy onion fritters served with chutney.',
            image: '/image/Caesar Salad.jpeg',
          },
          {
            id: 4,
            name: 'Caprese Salad',
            description: 'A simple salad with tomatoes, mozzarella, and basil.',
            image: '/image/Greek Salad.jpeg',
          },
          {
            id: 5,
            name: 'Cobb Salad',
            description: 'A hearty salad with chicken, bacon, and avocado.',
            image: '/image/Greek Salad.jpeg',
          },
          {
            id: 6,
            name: 'Asian Noodle Salad',
            description: 'A refreshing salad with sesame noodles and vegetables.',
            image: '/image/Greek Salad.jpeg',
          },
        ];

        setRecipes(mockData);
      } catch (error) {
        console.error('Error fetching salad recipes:', error);
      }
    };

    fetchSaladRecipes();
  }, []);

  return (
    <div className="salad-recipes-relative">
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
      <h2>Salad Recipes</h2>
      <div className="recipe-grid">
        {recipes.slice(0, 3).map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/salad/${recipe.id}`}>
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
            <Link to={`/recipes/salad/${recipe.id}`}>
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

export default SaladRecipes;
