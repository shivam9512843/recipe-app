// src/pages/VegetarianRecipes.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './VegetarianRecipes.css';

const VegetarianRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchVegetarianRecipes = async () => {
      try {
        // Mocking the data for now; replace this with actual API call
        const mockData = [
          {
            id: 1,
            name: 'Vegetarian Chili',
            description: 'A hearty and spicy vegetarian chili.',
            image: '/image/lady.png',
          },
          {
            id: 2,
            name: 'Stuffed Bell Peppers',
            description: 'Bell peppers stuffed with a savory mixture of rice and vegetables.',
            image: '/images/stuffed-bell-peppers.jpg',
          },
          {
            id: 3,
            name: 'Vegetable Stir Fry',
            description: 'A colorful stir fry with a variety of fresh vegetables.',
            image: '/images/vegetable-stir-fry.jpg',
          },
          {
            id: 4,
            name: 'Sweet Potato Curry',
            description: 'A flavorful curry with sweet potatoes and chickpeas.',
            image: '/images/sweet-potato-curry.jpg',
          },
          {
            id: 5,
            name: 'Lentil Soup',
            description: 'A comforting soup made with lentils and vegetables.',
            image: '/images/lentil-soup.jpg',
          },
          {
            id: 6,
            name: 'Quinoa Salad',
            description: 'A refreshing salad with quinoa, vegetables, and a tangy dressing.',
            image: '/images/quinoa-salad.jpg',
          },
        ];

        setRecipes(mockData);
      } catch (error) {
        console.error('Error fetching vegetarian recipes:', error);
      }
    };

    fetchVegetarianRecipes();
  }, []);

  return (
    <div className="vegetarian-recipes">
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
      <h2>Vegetarian Recipes</h2>
      <div className="recipe-grid">
        {recipes.slice(0, 3).map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/vegetarian/${recipe.id}`}>
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
            <Link to={`/recipes/vegetarian/${recipe.id}`}>
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

export default VegetarianRecipes;
