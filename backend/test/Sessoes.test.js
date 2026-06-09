import sessaoService from '../src/service/SessaoService.js'

describe('Testes de Sessao', () => {
  let sessaoId

  test('deve criar uma sessao', async () => {
    const sessao = await sessaoService.criarSessao(
      'Matematica', '01:30:00', '2026-06-07', 'pendente', 2
    )
    sessaoId = sessao.id
    expect(sessao).toBeDefined()
    expect(sessao.materia).toBe('Matematica')
  })

  test('deve listar todas as sessoes', async () => {
    const sessoes = await sessaoService.listarSessao()
    expect(sessoes).toBeDefined()
    expect(Array.isArray(sessoes)).toBe(true)
  })

  test('deve buscar sessao por id', async () => {
    const sessao = await sessaoService.buscarSessaoId(sessaoId)
    expect(sessao).toBeDefined()
  })

  test('deve atualizar uma sessao', async () => {
    const sessao = await sessaoService.atualizarSessao(
      sessaoId, 'Historia', '02:00:00', '2026-06-07', 'concluido'
    )
    expect(sessao).toBeDefined()
  })

  test('deve deletar uma sessao', async () => {
    const sessao = await sessaoService.deleteSessao(sessaoId)
    expect(sessao).toBeDefined()
  })
})