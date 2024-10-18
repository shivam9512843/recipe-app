import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import "./Home.css";

const Home = () => {
  const footerRef = useRef(null);
  const [recipes, setRecipes] = useState([]); 

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setRecipes([
      {
        id: 1,
        name: "Spicy Chicken Stir Fry",
        image: "https://source.unsplash.com/random/300x200?chicken",
        details: "A quick and easy spicy chicken stir fry with vegetables.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        cookTime: "20 mins",
        servings: 4
      },
      {
        id: 2,
        name: "Vegetarian Pasta Primavera",
        image: "/image/pinch-of-yum.png",
        details: "A light and fresh pasta dish loaded with spring vegetables.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        cookTime: "25 mins",
        servings: 6
      },
      {
        id: 3,
        name: "Chocolate Lava Cake",
        image: "/image/pinch-of-yum.png",
        details: "Decadent individual chocolate cakes with a gooey center.",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        cookTime: "15 mins",
        servings: 2
      }
    ]);
  }, []);


  return (
    <div>
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
              <button className="nav-links" onClick={scrollToFooter}>
                Contact
              </button>
            </li>
            <li className="nav-item">
              <Link to="/auth" className="nav-links">
                Login/Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="intro-text">
        <h2>Simple recipes made for real, actual, everyday life.</h2>
      </div>

      <div className="wrapper">
        {/* Card Section */}
        <div className="card">
          <img src="image/Salad.jpeg" alt="Salad" />
          <div className="info">
            <h1>Salad</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typesetting
              industry.
            </p>
            <Link to="/recipes/salad" className="start-here-link">
              <button className="start-here-button">Start Here</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="image/Vegg.jpeg" alt="Vegetarian" />
          <div className="info">
            <h1>Vegetarian</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typesetting
              industry.
            </p>
            <Link to="/recipes/vegetarian" className="start-here-link">
              <button className="start-here-button">Start Here</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="image/popular.jpeg" alt="Popular" />
          <div className="info">
            <h1>Popular</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typesetting
              industry.
            </p>
            <Link to="/recipes/popular" className="start-here-link">
              <button className="start-here-button">Start Here</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <img src="image/Desertt.jpeg" alt="Dessert" />
          <div className="info">
            <h1>Dessert</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typesetting
              industry.
            </p>
            <Link to="/recipes/dessert" className="start-here-link">
              <button className="start-here-button">Start Here</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Circles Section */}
      <div className="circle-wrapper">
        <div className="circle-container">
          <div className="ih-item circle effect1">
            <button className="circle-button">
              <div className="spinner"></div>
              <div className="img">
                <img src="image/Salad.jpeg" alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </button>
          </div>

          <div className="ih-item circle colored effect1">
            <button className="circle-button">
              <div className="spinner"></div>
              <div className="img">
                <img src="images/assets/5.jpg" alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </button>
          </div>

          <div className="ih-item circle colored effect1">
            <button className="circle-button">
              <div className="spinner"></div>
              <div className="img">
                <img src="images/assets/5.jpg" alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </button>
          </div>

          <div className="ih-item circle colored effect1">
            <button className="circle-button">
              <div className="spinner"></div>
              <div className="img">
                <img src="images/assets/5.jpg" alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>Heading here</h3>
                  <p>Description goes here</p>
                </div>
              </div>
            </button>
          </div>
          {/* Add more circles as needed */}
        </div>
      </div>
      
  {/* Latest Section */}
  <section className="recipe-section">
        <h2 className="recipe-section-title">Latest Recipes</h2>
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-content">
                <a href={recipe.youtubeUrl} target="_blank" rel="noopener noreferrer" className="recipe-name">
                  {recipe.name}
                </a>
                <p className="recipe-details">{recipe.details}</p>
                <div className="recipe-meta">
                  <span className="recipe-cook-time">Cook time: {recipe.cookTime}</span>
                  <span className="recipe-servings">Servings: {recipe.servings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lindsay Section with Images */}
      <div className="lindsay-container">
        <div className="lindsay-section">
          <h3 className="lindsay-heading">Hi! I’m Lindsay.</h3>
          <p className="lindsay-subheading">Nice to Meet You!</p>
          <p className="lindsay-text">
            I’m a former 4th grade teacher, now full-time blogger. My husband
            Bjork and I live in Minnesota. Favorite things include my camera,
            lake days, and dark chocolate.
          </p>
          <a
            className="lindsay-link"
            href="https://pinchofyum.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div>
          <img
            src="image\image.png"
            alt="Fresh green salad with vegetables"
            className="lindsay-image"
          />
          <img
            src="image\image.png"
            alt="Delicious chocolate dessert"
            className="lindsay-image"
          />
        </div>
      </div>

      {/* Include Footer */}

      <Footer ref={footerRef} />
    </div>
  );
};

export default Home;
