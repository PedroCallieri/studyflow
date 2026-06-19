import usuarioRepository from '../repository/UsuarioRepository.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function listarUsuarios() {
  const usuarios = await usuarioRepository.listarUsuarios()
  return usuarios;
}

async function buscarUsuarioId(usuario_id) {
  const usuarioId = await usuarioRepository.buscarUsuarioId(usuario_id)
  return usuarioId;
}

async function criarUsuario(nome, email, senha) {
  const senhaCriptografada = await bcrypt.hash(senha, 10)
  const usuario = await usuarioRepository.criarUsuario(nome, email, senhaCriptografada)
  return usuario;
}

async function login(email, senha) {
  const usuario = await usuarioRepository.buscarUsuarioEmail(email)

  if (!usuario) {
    return null
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha)

  if (!senhaValida) {
    return null
  }

  const token = jwt.sign(
    { usuario_id: usuario.usuario_id, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  return {
    token,
    usuario: {
      usuario_id: usuario.usuario_id,
      nome: usuario.nome,
      email: usuario.email
    }
  }
}

async function atualizarUsuario(nome, email, senha, usuario_id) {
  const usuario = await usuarioRepository.atualizarUsuario(nome, email, senha, usuario_id)
  return usuario;
}

async function deleteUsuario(usuario_id) {
  const usuario = await usuarioRepository.deleteUsuario(usuario_id)
  return usuario;
}

export default {
  listarUsuarios,
  buscarUsuarioId,
  criarUsuario,
  login,
  atualizarUsuario,
  deleteUsuario
};