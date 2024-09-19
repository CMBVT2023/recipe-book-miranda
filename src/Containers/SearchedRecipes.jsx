import React from "react";
import {useRecipeAPI} from '../Hooks/useRecipeAPI'
import { DisplayRecipe } from "../Components/DisplayRecipe";
import { SearchBox } from "../Components/SearchBox";

export function SearchedRecipes({ recipeParam, pageParam, APIKey, newSearch }) {
    const { errorOccurred, allRecipes, isLoading } = useRecipeAPI({recipeParam, pageParam, APIKey});

    return (
        <div className="recipes-display">
            <h1>Showing Results for {recipeParam}</h1>
            <div>
                <h3>Find Other Recipes:</h3>
                <SearchBox updateSearch={newSearch} />
            </div>
        
            <div className="recipes-list">
                {errorOccurred && <h1>{errorOccurred}</h1>}
                {isLoading && <h1>Loading...</h1>}
                {allRecipes && allRecipes.map(recipe => <DisplayRecipe key={"recipe-" + Math.random()} 
                                                            recipe={recipe} localRecipe={false} />)}
            </div>
        </div>
    )
}