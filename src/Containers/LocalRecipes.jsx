import React, { useEffect, useState } from "react";
import { SavedRecipes } from "../JavaScript/localStorage";
import { DisplayRecipe } from "../Components/DisplayRecipe";

export function LocalRecipes() {
    const [ allRecipes, setAllRecipes ] = useState(SavedRecipes.getRecipeBook());
    const [ updateOccurred, setUpdateOccurred ] = useState(false);

    useEffect(() => {
        setAllRecipes(SavedRecipes.getRecipeBook());
        setUpdateOccurred(false);
    }, [updateOccurred])

    return (
        <>
            {allRecipes.map(recipe => <DisplayRecipe key={"local-recipe-" + Math.random()}
                                        recipe={recipe} localRecipe={true} 
                                        update={setUpdateOccurred} />)}
        </>
    )
}