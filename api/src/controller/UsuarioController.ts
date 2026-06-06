import type { Request, Response } from "express";
import { usuarioService } from "../services/UsuarioService";


export class UsuarioController {
    constructor() {}

    async usuarios(req: Request, res: Response) {
        try {
            const usuarios = await usuarioService.usuarios();
            return res.json(usuarios);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }

    }
}

export const usuarioController = new UsuarioController();