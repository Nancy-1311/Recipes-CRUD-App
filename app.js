require("dotenv").config(); // ✅ ADD THIS LINE

const express = require("express");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/recipe", recipeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});