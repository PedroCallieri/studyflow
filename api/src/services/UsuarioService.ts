import { prisma } from "../../prisma/prisma";

 
 export class UsuarioService {
    constructor(){}

    async usuarios() {
        const usuarios = await prisma.usuarios.findMany();
        return usuarios;
    }
 }

 export const usuarioService = new UsuarioService();    