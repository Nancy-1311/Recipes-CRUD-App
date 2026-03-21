const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// CREATE
router.post("/postrecipe", recipeController.createRecipe);

// READ ALL
router.get("/getrecipe", recipeController.getAllRecipes);

// READ BY ID ✅ FIXED
router.get("/getrecipebyid/:id", recipeController.getRecipeById);

// UPDATE ✅ FIXED
router.put("/updaterecipe/:id", recipeController.updateRecipe);

// DELETE ✅ FIXED
router.delete("/deleterecipe/:id", recipeController.deleteRecipe);

module.exports = router;
router.post("/", recipeController.createRecipe);
router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipeById);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
