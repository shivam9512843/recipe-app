const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Import the routes
const recipesRouter = require('./routes/recipes');

// Middleware
app.use(express.json());

// Serve static files (if any) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/recipes', recipesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
