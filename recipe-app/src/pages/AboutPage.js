import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            YourLogo
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/recipes" className="nav-links">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-links">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/auth" className="nav-links">
                Login/Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="about-container">
        {/* Left Section: Profile Card */}
        <div className="profile-card">
          <div className="avatar-container">
            <img
              src="image\image.png" // Replace with your avatar image
              alt="Avatar"
              className="avatar"
            />
          </div>
          <h2 className="profile-name">Chef Nora</h2>
          <p className="profile-title">Culinary Artist & Food Enthusiast</p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://instagram.com">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a href="https://twitter.com">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                alt="Twitter"
              />
            </a>
            <a href="https://facebook.com">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>

        {/* Right Section: About Text */}
        <div className="about-text">
          <div className="buttons">
            <button className="btn about-btn">About Me</button>
            <button className="btn philosophy-btn">Cooking Philosophy</button>
          </div>

          <p className="description">
            Welcome to my culinary world! I'm Chef Nora, and I've been on a
            delicious journey for over 15 years, creating family-friendly meals
            that bring joy to the table. My adventure began in my grandmother's
            kitchen, where I learned that the most important ingredient is love.
          </p>

          <p className="description">
            From those early days of baking cookies and kneading dough, I've
            grown to experiment with flavors from around the globe. My mission
            is to inspire you to create your own kitchen magic, turning ordinary
            ingredients into extraordinary meals.
          </p>

          <p className="description">
            Join me as we explore a world of tastes, techniques, and traditions.
            Whether you're a novice cook or a seasoned chef, there's always
            something new to discover in the wonderful world of food!
          </p>

          <div className="stats">
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Recipes</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">3 </span>
              <span className="stat-label">Cookbooks</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Cooking </span>
              <span className="stat-label">Workshops</span>
            </div>
          </div>
          <a href="https://www.youtube.com/">
            <button className="btn adventure-btn">
              Join My Culinary Adventure
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
