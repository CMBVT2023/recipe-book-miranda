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
// - Change Hooks into containers and depending on the value of the searchParameter trigger either the LocalRecipes element or
//    the SearchedRecipes element.
// - Add error sign saying to include your api key
// - Add ability to retrieve more than 10 search results via query parameters.
// - Create Home Page
// - Add button or search box to toggle new search on recipe list page
// - Add heading to display if no recipes are saved locally.

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