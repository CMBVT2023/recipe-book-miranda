import React from "react";
import { DisplayIngredients } from "../Components/DisplayIngredients.jsx";
import styles from '../Styles/ShoppingList.module.css'
/**
 * @component Displays the shopping list generated by the listWorker in the parent element.
 * @param {array} list - All meal titles and their ingredients in the list.
 */
export function ShoppingListDisplay({ list }) {
    return (
        <div className={styles.shoppingListItemsDiv}>
            {list && list.map(meal => <DisplayIngredients key={'shopping-list' + Math.random()} meal={meal} />)}
        </div>
    )
}