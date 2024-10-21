import React from "react";
import { InteractButton } from "./InteractButton";
import { WeekDaySelector } from "./WeekDaySelector";
import { defer } from "react-router-dom";

/**
 * .
 * @component|function
 * @param {object} recipe - Recipe object containing all of the recipe's information that will be displayed.
 * @param {string} viewLocation - String variable that denotes where the recipe is being displayed, values can be either planner, searched, or stored.
 * @param {function} update - State setter that updates a boolean to show if the localStorage array was altered.
 */
export function DisplayRecipe({ recipe, viewLocation, update }) {
    // Deconstructs the recipe object and store the required information in various variables.
    const { title, ingredients, servings, instructions } = recipe;

    return (
        <div className="recipe-card">
            <h2>{title}</h2>
            <h5>Makes {servings}.</h5>
            <hr />
            <ul>
                {ingredients.split('|').map(ingredient => <li key={"ingredient-" + Math.random()}>{ingredient}</li>)}
            </ul>
            <hr />
            <h3>Instructions:</h3>
            <p>{instructions}</p>
            <hr />
            <InteractButton recipe={recipe} viewLocation={viewLocation} update={update} />
            {/* If viewing from the meal planner component, displays the WeekDaySelector to allow the user to choose which day to a recipe to. */}
            {viewLocation == 'planner' && <WeekDaySelector recipe={recipe} update={update} />}
        </div>
    )
}