const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load recipe data from JSON file
const recipesPath = path.join(__dirname, '../data/recipes.json');
let recipes = [];

fs.readFile(recipesPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading recipes data:', err);
  } else {
    recipes = JSON.parse(data);
  }
});

// Search endpoint
router.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const results = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query)
  );
  res.json(results);
});

module.exports = router;
