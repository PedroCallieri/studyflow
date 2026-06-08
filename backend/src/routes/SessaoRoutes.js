import  {Router}  from "express";
import  sessaoController  from "../controller/SessaoController.js";

const sessaoRouter = Router()

sessaoRouter.get("/sessao", async (req, res) => {
    return sessaoController.listarSessao(req, res); 
});

sessaoRouter.get("/sessao/:id", async (req, res) => {
    return sessaoController.buscarSessaoId(req, res); 
});

sessaoRouter.post("/sessao", async (req, res) => {
    return sessaoController.criarSessao(req, res); 
});

sessaoRouter.put("/sessao/:id", async (req, res) => {
    return sessaoController.atualizarSessao(req, res); 
});

sessaoRouter.delete("/sessao/:id", async (req, res) => {
    return sessaoController.deleteSessao(req, res); 
});

export default sessaoRouter