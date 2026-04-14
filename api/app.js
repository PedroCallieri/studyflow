import express from "express";
import cors from "cors";
import {
  getAllAnimals,
  createAnimal,
  deleteAnimal,
} from "./controller/animalController.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/animals", getAllAnimals);
app.post("/animals", createAnimal);
app.delete("/animals/:id", deleteAnimal);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
