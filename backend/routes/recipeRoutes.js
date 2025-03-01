const express = require("express");
const Recipe = require("../models/recipe"); // Ensure this path is correct
const router = express.Router();

// Add a new recipe
router.post("/", async (req, res) => {
  try {
    const { title, ingredients, instructions, time, difficulty } = req.body;
    if (!title || !ingredients || !instructions || !time || !difficulty) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      time,
      difficulty,
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error("Error adding recipe:", err);
    res.status(500).json({ error: "Failed to add recipe" });
  }
});

// ✅ Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes from MongoDB
    res.json(recipes);
  } catch (err) {
    console.error("Error fetching recipes:", err);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

module.exports = router;
