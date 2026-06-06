import { Router } from "express";
import { usuarioController } from "../controller/UsuarioController";


export const UsuarioRoutes = Router();

UsuarioRoutes.get("/usuarios", (req,res) =>{
    return usuarioController.usuarios(req, res);
})