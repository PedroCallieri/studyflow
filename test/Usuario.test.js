import usuarioService from '../src/service/UsuarioService.js'

describe('Testes de Usuario', () => {

  test('deve listar todos os usuarios', async () => {
    const usuarios = await usuarioService.listarUsuarios()
    expect(usuarios).toBeDefined()
    expect(Array.isArray(usuarios)).toBe(true)
  })

test('deve criar um usuario', async () => {
  const usuario = await usuarioService.criarUsuario(
    'Teste',
    'luva@email.com',
    '123456'
  )
  expect(usuario).toBeDefined()
  expect(usuario.nome).toBe('Teste')
})

test('deve atualizar um usuario', async () => {
  const usuario = await usuarioService.atualizarUsuario(
    'Atualizado',
    'bogaazul@email.com',
    '654321',
    11
  )
  expect(usuario).toBeDefined()
})

test('deve deletar um usuario', async () => {
  const usuario = await usuarioService.deleteUsuario(5)
  expect(usuario).toBeDefined()
})

})