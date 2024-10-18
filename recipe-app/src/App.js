import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import AuthPage from "./pages/AuthPage";
import DessertRecipes from "./pages/DessertRecipes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PopularRecipes from "./pages/PopularRecipes";
import RecipeDetail from "./pages/RecipeDetails";
import RecipeList from "./pages/RecipeList";
import SaladRecipes from "./pages/SaladRecipes";
import SignUp from "./pages/SignUp";
import VegetarianRecipes from "./pages/VegetarianRecipes";
//import SearchComponent from './components/SearchComponent';


import "./App.css";
import "./pages/Login.css";
import "./pages/SignUp.css";

function App() {
  useEffect(() => {
    function adjustBodyPadding() {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      document.body.style.paddingTop = `${navbarHeight}px`;
    }

    // Adjust padding on load and when the window is resized
    window.addEventListener("load", adjustBodyPadding);
    window.addEventListener("resize", adjustBodyPadding);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("load", adjustBodyPadding);
      window.removeEventListener("resize", adjustBodyPadding);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Add Search Component */}
      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/salad" element={<SaladRecipes />} />
          <Route path="/recipes/salad/:id" element={<RecipeDetail />} />
          <Route path="/recipes/vegetarian" element={<VegetarianRecipes />} />
          <Route path="/recipes/vegetarian/:id" element={<RecipeDetail />} />
          <Route path="/recipes/popular" element={<PopularRecipes />} />
          <Route path="/recipes/popular/:id" element={<RecipeDetail />} />
          <Route path="/recipes/dessert" element={<DessertRecipes />} />
          <Route path="/recipes/dessert/:id" element={<RecipeDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
