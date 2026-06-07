import sessaoService from '../service/SessaoService.js'

async function listarSessao(req, res) {
    const todasSessoes = await sessaoService.listarSessao()
    res.status(200).json(todasSessoes)
}

async function buscarSessaoId(req, res) {
    const sessao = req.params.id;
    const sessaoId = await sessaoService.buscarSessaoId(sessao)
    res.status(200).json(sessaoId)
}

async function criarSessao(req, res) {
    const {materia, tempoEstudado, dataRegistro, status, id_usuario } = req.body
    const novaSessao = await sessaoService.criarSessao(materia, tempoEstudado, dataRegistro, status, id_usuario)
    res.status(201).json(novaSessao)
}

async function atualizarSessao(req, res) {
    const { materia, tempoEstudado, dataRegistro, status, id_usuario  } = req.body
    const id = req.params.id
    const atualizaSessao = await sessaoService.atualizarSessao(materia, tempoEstudado, dataRegistro, status, id_usuario , id)
    res.status(200).json(atualizaSessao)
}

async function deleteSessao(req, res) {
    const sessao = req.params.id;
    const sessaoId = await sessaoService.deleteSessao(sessao)
    res.status(200).json(sessaoId)
}

export default{ 
listarSessao, 
buscarSessaoId,
criarSessao,
atualizarSessao,
deleteSessao 
};