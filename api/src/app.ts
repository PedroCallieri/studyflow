import express, { Router } from "express";
import { UsuarioRoutes } from "./routes/UsuarioRoutes";

const app = express();

app.use(express.json());

// Routes
app.use(UsuarioRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});