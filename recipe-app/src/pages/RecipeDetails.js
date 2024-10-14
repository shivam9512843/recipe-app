// src/pages/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        // Mocking the data for now; replace this with actual API call
        const mockData = [
          // Salad recipes
          {
            id: 1,
            name: 'Caesar Salad',
            description: 'A classic Caesar salad with crispy croutons and a creamy dressing.',
            ingredients: ['Lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
            instructions: '1. Toss the lettuce with croutons and Parmesan. 2. Drizzle with Caesar dressing.',
            image: '/image/Greek Salad.jpeg',
            videoUrl: 'https://www.youtube.com/embed/ta62syygWO8?si=oNR77VnpIJMp1buK',
          },
          {
            id: 2,
            name: 'Caesar Salad',
            description: 'A classic Caesar salad with crispy croutons and a creamy dressing.',
            ingredients: ['Lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
            instructions: '1. Toss the lettuce with croutons and Parmesan. 2. Drizzle with Caesar dressing.',
            image: '/images/caesar-salad.jpg',
            videoUrl: 'https://www.youtube.com/embed/ta62syygWO8?si=oNR77VnpIJMp1buK',
          },
          {
            id: 3,
            name: 'Caesar Salad',
            description: 'A classic Caesar salad with crispy croutons and a creamy dressing.',
            ingredients: ['Lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
            instructions: '1. Toss the lettuce with croutons and Parmesan. 2. Drizzle with Caesar dressing.',
            image: '/images/caesar-salad.jpg',
            videoUrl: 'https://www.youtube.com/embed/ta62syygWO8?si=oNR77VnpIJMp1buK',
          },
          {
            id: 4,
            name: 'Caesar Salad',
            description: 'A classic Caesar salad with crispy croutons and a creamy dressing.',
            ingredients: ['Lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
            instructions: '1. Toss the lettuce with croutons and Parmesan. 2. Drizzle with Caesar dressing.',
            image: '/images/caesar-salad.jpg',
            videoUrl: 'https://www.youtube.com/embed/ta62syygWO8?si=oNR77VnpIJMp1buK',
          },
          {
            id: 5,
            name: 'Caesar Salad',
            description: 'A classic Caesar salad with crispy croutons and a creamy dressing.',
            ingredients: ['Lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
            instructions: '1. Toss the lettuce with croutons and Parmesan. 2. Drizzle with Caesar dressing.',
            image: '/images/caesar-salad.jpg',
            videoUrl: 'https://www.youtube.com/embed/ta62syygWO8?si=oNR77VnpIJMp1buK',
          },
          {
            id: 6,
            name: 'Caesar Salad',
            description: 'A classic Caesar salad with crispy croutons and a creamy dressing.',
            ingredients: ['Lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
            instructions: '1. Toss the lettuce with croutons and Parmesan. 2. Drizzle with Caesar dressing.',
            image: '/images/caesar-salad.jpg',
            videoUrl: 'https://www.youtube.com/embed/ta62syygWO8?si=oNR77VnpIJMp1buK',
          },
          // Other mock salad recipes...

          // Vegetarian recipes
          {
            id: 7,
            name: 'Vegetarian Chili',
            description: 'A hearty and spicy vegetarian chili with beans and vegetables.',
            ingredients: ['Beans', 'Tomatoes', 'Bell peppers', 'Onions', 'Spices'],
            instructions: '1. Sauté onions and peppers. 2. Add beans and tomatoes. 3. Simmer with spices.',
            image: '/images/vegetarian-chili.jpg',
            videoUrl: 'https://www.youtube.com/embed/VEGETARIAN_CHILI_VIDEO_ID',
          },
          {
            id: 8,
            name: 'Stuffed Bell Peppers',
            description: 'Bell peppers stuffed with rice, beans, and vegetables.',
            ingredients: ['Bell peppers', 'Rice', 'Beans', 'Cheese', 'Spices'],
            instructions: '1. Mix rice, beans, and cheese. 2. Stuff into bell peppers. 3. Bake until tender.',
            image: '/images/stuffed-bell-peppers.jpg',
            videoUrl: 'https://www.youtube.com/embed/STUFFED_BELL_PEPPERS_VIDEO_ID',
          },
          // Other mock vegetarian recipes...

          // Popular and dessert recipes...
        ];

        const recipe = mockData.find(r => r.id === parseInt(id, 10));
        setRecipe(recipe);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-detail">
        <h2 className="recipe-title">{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <p className="recipe-description">{recipe.description}</p>
        <h3>Ingredients</h3>
        <ul className="recipe-ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p className="recipe-instructions">{recipe.instructions}</p>
        <h3>Video</h3>
        <div className="recipe-video">
          <iframe
            src={recipe.videoUrl}
            title={recipe.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
