import { Router } from "express";
import usuarioController from "../controller/UsuarioController.js";

const usuarioRouter = Router()

usuarioRouter.get("/usuario", async (req, res) => {
  return usuarioController.listarUsuarios(req, res); 
});

usuarioRouter.get("/usuario/:id", async (req, res) => {
  return usuarioController.buscarUsuarioId(req, res); 
});

usuarioRouter.post("/usuario", async (req, res) => {
  return usuarioController.criarUsuario(req, res); 
});

usuarioRouter.post("/login", async (req, res) => {
  return usuarioController.login(req, res);
});

usuarioRouter.put("/usuario/:id", async (req, res) => {
  return usuarioController.atualizarUsuario(req, res); 
});

usuarioRouter.delete("/usuario/:id", async (req, res) => {
  return usuarioController.deleteUsuario(req, res); 
});

export default usuarioRouter