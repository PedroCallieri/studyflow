import pool from '../db/connection.js'

async function listarSessao() {
    const result = await pool.query('SELECT * FROM sessao')
    return result.rows;
}

async function buscarSessaoId(id) {
    const result = await pool.query(
        'SELECT * FROM sessao WHERE id = $1', 
        [id]
    )
    return result.rows[0];
}

async function criarSessao(materia, tempoEstudado, dataRegistro, status, id_usuario) {
    const result = await pool.query(
        'INSERT INTO sessao (materia, tempoEstudado, dataRegistro, status, id_usuario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [materia, tempoEstudado, dataRegistro, status, id_usuario]
    );
    return result.rows[0];
}

async function atualizarSessao(materia, tempoEstudado, dataRegistro, status, id) {
  const result = await pool.query(
    'UPDATE sessao SET materia=$1, tempoEstudado=$2, dataRegistro=$3, status=$4 WHERE id=$5 RETURNING *',
    [materia, tempoEstudado, dataRegistro, status, id]
  )
  return result.rows[0];
}

async function deleteSessao(id) {
  const result = await pool.query(
    'DELETE FROM sessao WHERE id = $1 RETURNING *',
    [id]
  )
  return result.rows[0];
}

export default{ 
listarSessao, 
buscarSessaoId,
criarSessao,
atualizarSessao,
deleteSessao };