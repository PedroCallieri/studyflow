import usuarioService from '../src/service/UsuarioService.js'

describe('Testes de Usuario', () => {
  let usuarioId

  test('deve criar um usuario', async () => {
    const usuario = await usuarioService.criarUsuario(
      'Teste', `teste${Date.now()}@email.com`, '123456'
    )
    usuarioId = usuario.usuario_id
    expect(usuario).toBeDefined()
    expect(usuario.nome).toBe('Teste')
  })

  test('deve listar todos os usuarios', async () => {
    const usuarios = await usuarioService.listarUsuarios()
    expect(usuarios).toBeDefined()
    expect(Array.isArray(usuarios)).toBe(true)
  })

  test('deve buscar usuario por id', async () => {
    const usuario = await usuarioService.buscarUsuarioId(usuarioId)
    expect(usuario).toBeDefined()
  })

  test('deve atualizar um usuario', async () => {
    const usuario = await usuarioService.atualizarUsuario(
      'Atualizado', `atualizado${Date.now()}@email.com`, '654321', usuarioId
    )
    expect(usuario).toBeDefined()
  })

  test('deve deletar um usuario', async () => {
    const usuario = await usuarioService.deleteUsuario(usuarioId)
    expect(usuario).toBeDefined()
  })
})