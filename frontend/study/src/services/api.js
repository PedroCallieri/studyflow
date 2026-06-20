const API_URL = 'http://localhost:3000'

export async function login(email, senha) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  })
  if (!response.ok) {
    throw new Error('Email ou senha incorretos')
  }
  return response.json()
}

export async function getUsuarios() {
  const response = await fetch(`${API_URL}/usuario`)
  return response.json()
}

export async function getUsuarioPorId(id) {
  const response = await fetch(`${API_URL}/usuario/${id}`)
  return response.json()
}

export async function criarUsuario(nome, email, senha) {
  const response = await fetch(`${API_URL}/usuario`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha })
  })
  return response.json()
}

export async function atualizarUsuario(id, nome, email, senha) {
  const response = await fetch(`${API_URL}/usuario/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha })
  })
  return response.json()
}

export async function deletarUsuario(id) {
  const response = await fetch(`${API_URL}/usuario/${id}`, {
    method: 'DELETE'
  })
  return response.json()
}

export async function getSessoes() {
  const response = await fetch(`${API_URL}/sessao`)
  return response.json()
}

export async function getSessaoPorId(id) {
  const response = await fetch(`${API_URL}/sessao/${id}`)
  return response.json()
}

export async function criarSessao(materia, tempoEstudado, dataRegistro, status, id_usuario) {
  const response = await fetch(`${API_URL}/sessao`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ materia, tempoEstudado, dataRegistro, status, id_usuario })
  })
  return response.json()
}

export async function atualizarSessao(id, materia, tempoEstudado, dataRegistro, status) {
  const response = await fetch(`${API_URL}/sessao/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ materia, tempoEstudado, dataRegistro, status })
  })
  return response.json()
}

export async function deletarSessao(id) {
  const response = await fetch(`${API_URL}/sessao/${id}`, {
    method: 'DELETE'
  })
  return response.json()
}