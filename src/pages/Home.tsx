import React from 'react';
import { Search, Clock, Users, Trophy } from 'lucide-react';

export function Home() {
  const featuredRecipes = [
    {
      id: 1,
      title: "Homemade Pizza Margherita",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800",
      author: "Chef Maria",
      time: "45 mins",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Classic Beef Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800",
      author: "John Cook",
      time: "30 mins",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Fresh Summer Salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800",
      author: "Sarah Green",
      time: "15 mins",
      difficulty: "Easy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-orange-500 h-[500px]">
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
            <Users className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">Share and discover community favorites</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Trophy className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Curated Content</h3>
            <p className="text-gray-600">Hand-picked recipes from top chefs</p>
          </div>
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">By {recipe.author}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {recipe.time}
                  </span>
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}