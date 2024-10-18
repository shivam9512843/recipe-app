// src/pages/RecipeSearchPage.js
import React, { useState } from 'react';
import SearchPanel from '../components/SearchPanel';
import RecipeCard from '../components/RecipeCard';
import './RecipeList.css'; // Adjust if needed

const RecipeSearchPage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api/recipes/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <SearchPanel onSearch={handleSearch} />
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeSearchPage;
