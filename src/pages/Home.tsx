import React, { useState } from "react";
import { Search, Clock, Trophy, Trash } from "lucide-react";

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
  time: string;
  difficulty: string;
}

export function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Spaghetti", "Eggs", "Parmesan", "Pancetta", "Pepper"],
      instructions: "Cook spaghetti. Mix eggs and parmesan. Fry pancetta. Combine everything.",
      time: "30 mins",
      difficulty: "Medium",
    },
    {
      id: 2,
      title: "Chicken Biryani",
      ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
      instructions: "Cook rice. Prepare chicken masala. Layer and cook together.",
      time: "45 mins",
      difficulty: "Hard",
    },
  ]);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    time: "",
    difficulty: "",
  });

  // Function to create a new recipe
  const handleCreateRecipe = () => {
    if (!newRecipe.title || !newRecipe.ingredients || !newRecipe.instructions || !newRecipe.time || !newRecipe.difficulty) return;

    const newRecipeItem: Recipe = {
      id: Date.now(),
      title: newRecipe.title,
      ingredients: newRecipe.ingredients.split(",").map((i) => i.trim()), // Convert comma-separated string to array
      instructions: newRecipe.instructions,
      time: newRecipe.time,
      difficulty: newRecipe.difficulty,
    };

    setRecipes([...recipes, newRecipeItem]);
    setNewRecipe({ title: "", ingredients: "", instructions: "", time: "", difficulty: "" }); // Reset form
  };

  // Function to delete a recipe
  const handleDeleteRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-orange-500 h-[400px]">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Discover & Share Amazing Recipes</h1>
            <p className="text-xl mb-8">Join our community of food lovers and share your culinary creations</p>
            <div className="flex items-center max-w-2xl bg-white rounded-lg p-2">
              <Search className="h-6 w-6 text-gray-400 mx-2" />
              <input
                type="text"
                placeholder="Search for recipes..."
                className="w-full px-4 py-2 outline-none text-gray-700"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Clock className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Find recipes that fit your schedule</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Trophy className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Curated Content</h3>
            <p className="text-gray-600">Hand-picked recipes from top chefs</p>
          </div>
        </div>
      </div>

      {/* Recipe Management Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Add a New Recipe</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <input type="text" placeholder="Title" className="w-full p-2 mb-4 border rounded"
            value={newRecipe.title} onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })} />
          <input type="text" placeholder="Ingredients (comma-separated)" className="w-full p-2 mb-4 border rounded"
            value={newRecipe.ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} />
          <input type="text" placeholder="Instructions" className="w-full p-2 mb-4 border rounded"
            value={newRecipe.instructions} onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })} />
          <input type="text" placeholder="Time" className="w-full p-2 mb-4 border rounded"
            value={newRecipe.time} onChange={(e) => setNewRecipe({ ...newRecipe, time: e.target.value })} />
          <input type="text" placeholder="Difficulty" className="w-full p-2 mb-4 border rounded"
            value={newRecipe.difficulty} onChange={(e) => setNewRecipe({ ...newRecipe, difficulty: e.target.value })} />
          <button onClick={handleCreateRecipe} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
            Add Recipe
          </button>
        </div>
      </div>

      {/* Featured Recipes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-700 mb-2"><strong>Time:</strong> {recipe.time}</p>
              <p className="text-gray-700 mb-2"><strong>Difficulty:</strong> {recipe.difficulty}</p>
              <p className="text-gray-700 mb-2"><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p className="text-gray-700 mb-4"><strong>Instructions:</strong> {recipe.instructions}</p>
              <button onClick={() => handleDeleteRecipe(recipe.id)} className="text-red-500 hover:text-red-700">
                <Trash className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
