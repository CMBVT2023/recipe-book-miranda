import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Containers/NavBar";
import { Home } from "./Pages/Home";
import { Discover } from "./Pages/Discover";
import { RecipeList } from "./Pages/RecipeList";
import { Error } from "./Pages/Error";

// Goal:  Create a applications that can pull recipes from an online API based on the user's input, and provide an option for the user to save certain recipes to their "recipe book",
// saved in localStorage.

// TODO: 
// - Create and add .env file to hide api key.
// - Add ability to remove recipes from localStorage
// - Add ability to retrieve more than 10 search results via query parameters.

export function MainPage() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/recipelist/" element={<Error />} />
          <Route path="/recipelist/:searchParameter" element={<RecipeList />} />
          <Route path="/recipelist/:searchParameter/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}