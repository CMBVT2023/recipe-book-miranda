import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MealPlan } from "../JavaScript/localStorage";
import styles from '../Styles/NutritionalInfo.module.css'
import { NutritionalDisplay } from "./NutritionalDisplay";

export function NutritionalInfo({ recipes }) {
    const {id: recipeID} = useParams();
    const [ selectedRecipe, setSelectedRecipe ] = useState({})
    const [ recipeIngredients, setRecipeIngredients ] = useState([]);
    const [ ingredientQueries, setIngredientQueries ] = useState([]);
    const [ ingredientHandler, setIngredientHandler ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const worker = new Worker(new URL('../WebWorkers/IngredientWorker.js', import.meta.url));

        worker.addEventListener('message', ({data}) => {
            setRecipeIngredients([...data.ingredientsArray]);
            setIngredientQueries([...data.ingredientQueries]);
        })

        setIngredientHandler(worker);
        return () => {
            worker.terminate();
        }
    }, [])

    useEffect(() => {
        setSelectedRecipe({...MealPlan.findRecipe(recipeID)})
    }, [recipeID])

    useEffect(() => {
        if (ingredientHandler) {
            ingredientHandler.postMessage({command: 'collectAll', ingredientsList: selectedRecipe.ingredients})
        }
    }, [selectedRecipe])

    function returnToPlanner() {
        navigate('/planner')
    }

    return (
        <div className={styles.nutritionalDialog}>
            <h1>All Ingredients</h1>
            <NutritionalDisplay ingredients={recipeIngredients} ingredientQueries={ingredientQueries} />
            <button onClick={returnToPlanner} className={styles.closeNutrition}>Close</button>
        </div>
    )
}