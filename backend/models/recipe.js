const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  time: { type: String, required: true },
  difficulty: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
