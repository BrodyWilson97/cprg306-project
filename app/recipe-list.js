import { useState } from "react";
import Recipe from "./recipe.js";

export default function RecipeList({ recipes = [] }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "time") {
      const parseTime = (time) => {
        const [value, unit] = time.split(" ");
        return unit.startsWith("hour") ? parseInt(value) * 60 : parseInt(value); // Convert hours to minutes
      };
      return parseTime(a.time) - parseTime(b.time);
    }
    return 0;
  });

  const groupedItems = sortBy === "time"
    ? sortedRecipes.reduce((acc, recipe) => {
        if (!acc[recipe.category]) acc[recipe.category] = [];
        acc[recipe.category].push(recipe);
        return acc;
      }, {})
    : {};

  return (
    <div className="p-4">
      {/* Sorting Buttons */}
      <div className="flex space-x-4 mb-4">
        {["name", "category", "time"].map((key) => (
          <button
            key={key}
            onClick={() => setSortBy(key)}
            className={`px-4 py-2 ${sortBy === key ? "bg-slate-800 text-white" : "bg-slate-200"} border`}
          >
            Sort by {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Recipe List */}
      <ul className="space-y-2">
        {sortBy === "time"
          ? Object.entries(groupedItems).map(([category, recipes]) => (
              <li key={category}>
                <h2 className="text-xl font-semibold bg-slate-800 text-white p-2">{category}</h2>
                <ul className="space-y-2">
                  {recipes.map((recipe) => (
                    <Recipe key={recipe.id} {...recipe} />
                  ))}
                </ul>
              </li>
            ))
          : sortedRecipes.map((recipe) => <Recipe key={recipe.id} {...recipe} />)}
      </ul>
    </div>
  );
}