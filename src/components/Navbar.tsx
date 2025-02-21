import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, LogIn } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">RecipeShare</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-2 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}