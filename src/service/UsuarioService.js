import usuarioRepository from '../repository/UsuarioRepository.js'

async function listarUsuarios() {
    const usuarios = await usuarioRepository.listarUsuarios()
    return usuarios;
}

async function buscarUsuarioId(usuario_id) {
    const usuarioId = await usuarioRepository.buscarUsuarioId(usuario_id) 
    return usuarioId;
}

async function criarUsuario(nome, email, senha) {
  const usuario = await usuarioRepository.criarUsuario(nome, email, senha)
  return usuario;
}

async function atualizarUsuario(nome, email, senha, usuario_id) {
    const usuario = await usuarioRepository.atualizarUsuario(nome, email, senha, usuario_id)
    return usuario;
}

async function deleteUsuario(usuario_id) {
    const usuario = await usuarioRepository.deleteUsuario(usuario_id)
    return usuario;
}

export default{ 
listarUsuarios, 
buscarUsuarioId,
criarUsuario,
atualizarUsuario,
deleteUsuario };