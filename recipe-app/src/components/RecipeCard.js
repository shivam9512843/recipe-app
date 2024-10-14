// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  // Determine the route based on the recipe's category
  const categoryRoute = recipe.category.toLowerCase(); // Adjust according to how you categorize recipes

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3 className="recipe-name">{recipe.name}</h3>
      <p className="recipe-description">{recipe.description}</p>
      <Link to={`/recipes/${categoryRoute}`} className="start-here-link">
        <button className="start-button">Start Here</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
