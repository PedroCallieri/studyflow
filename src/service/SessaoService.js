import sessaoRepository from '../repository/SessaoRepository.js'

async function listarSessao() {
    const todasSessoes = await sessaoRepository.listarSessao()
    return todasSessoes;
}

async function buscarSessaoId(id) {
    const sessaoId = await sessaoRepository.buscarSessaoId(id) 
    return sessaoId;
}

async function criarSessao(materia, tempoEstudado, dataRegistro, status, id_usuario) {
  const sessao = await sessaoRepository.criarSessao(materia, tempoEstudado, dataRegistro, status, id_usuario)
  return sessao;
}

async function atualizarSessao(materia, tempoEstudado, dataRegistro, status, id) {
    const sessao = await sessaoRepository.atualizarSessao(materia, tempoEstudado, dataRegistro, status, id)
    return sessao;
}

async function deleteSessao(id) {
    const sessao = await sessaoRepository.deleteSessao(id)
    return sessao;
}

export default{ 
listarSessao, 
buscarSessaoId,
criarSessao,
atualizarSessao,
deleteSessao };