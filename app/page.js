"use client";

import { useState } from "react";
import NewRecipe from "./new-recipe.js";
import RecipeList from "./recipe-list.js";
import recipesData from "./recipes.json";

export default function Page() {
  const [recipes, setRecipes] = useState(recipesData);

  const handleAddRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Recipes</h1>
      <NewRecipe onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}