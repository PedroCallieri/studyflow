import pool from '../db/connection.js'

async function listarUsuarios() {
    const result = await pool.query('SELECT * FROM usuario')
    return result.rows;
}

async function buscarUsuarioId(id) {
    const result = await pool.query('SELECT * FROM usuario WHERE usuario_id = $1', [id])
    return result.rows[0];
}

async function criarUsuario(nome, email, senha) {
    const result = await pool.query(
        'INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
        [nome, email, senha]
    );
    return result.rows[0];
}

async function atualizarUsuario(nome, email, senha, id) {
    const result = await pool.query(
        'UPDATE usuario SET nome=$1, email=$2, senha=$3 WHERE usuario_id=$4',
        [nome, email, senha, id]
    )
    return result.rows[0];
}

async function deleteUsuario(id) {
    const result = await pool.query(
        'DELETE FROM usuario WHERE usuario_id = $1',
        [id]
    )
    return result.rows[0];
}

export default{ 
listarUsuarios, 
buscarUsuarioId,
criarUsuario,
atualizarUsuario,
deleteUsuario };