import { useState } from "react";

export default function NewRecipe({ onAddRecipe }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Math.random().toString(36).substr(2, 9), // Consider a more robust ID generation method
      name,
      category,
      time,
    };
    onAddRecipe(newRecipe);
    setName('');
    setCategory('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2"
        required
      />
      <button
        type="submit"
        className="bg-slate-800 text-white p-2 mt-2"
      >
        Add Recipe
      </button>
    </form>
  );
}