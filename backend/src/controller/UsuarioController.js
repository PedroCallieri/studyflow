import usuarioService from '../service/UsuarioService.js'

async function listarUsuarios(req, res) {
    const usuarios = await usuarioService.listarUsuarios()
    res.status(200).json(usuarios)
}

async function buscarUsuarioId(req, res) {
    const usuario = req.params.id;
    const usuarioId = await usuarioService.buscarUsuarioId(usuario)
    res.status(200).json(usuarioId)
}

async function criarUsuario(req, res) {
    const { nome, email, senha } = req.body
    const novoUsuario = await usuarioService.criarUsuario(nome, email, senha)
    res.status(201).json(novoUsuario)
}

async function atualizarUsuario(req, res) {
    const { nome, email, senha } = req.body
    const id = req.params.id
    const atualizaUsuario = await usuarioService.atualizarUsuario(nome, email, senha, id)
    res.status(200).json(atualizaUsuario)
}

async function deleteUsuario(req, res) {
    const usuario = req.params.id;
    const usuarioId = await usuarioService.deleteUsuario(usuario)
    res.status(200).json(usuarioId)
}

export default {
    listarUsuarios,
    buscarUsuarioId,
    criarUsuario,
    atualizarUsuario,
    deleteUsuario
};