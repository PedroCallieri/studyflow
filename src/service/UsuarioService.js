import UsuarioRepository from '../repository/UsuarioRepository.js'

async function listarUsuarios() {
    const usuarios = await usuarioRepository.listarUsuarios()
    return usuarios;
}
async function buscarUsuarioId(id) {
    const usuarioId = await usuarioRepository.buscarUsuarioId(id) 
    return usuarioId;
}
async function criarUsuario(nome, email, senha) {
  const usuario = await usuarioRepository.criarUsuario(nome, email, senha)
  return usuario;
}
async function atualizarUsuario(nome, email, senha, id) {
    const usuario = await usuarioRepository.atualizarUsuario(nome, email, senha, id)
    return usuario;
}
async function deleteUsuario(id) {
    const usuario = await usuarioRepository.deleteUsuario(id)
    return usuario;
}
export default{ 
listarUsuarios, 
buscarUsuarioId,
criarUsuario,
atualizarUsuario,
deleteUsuario };