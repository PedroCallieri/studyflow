import { useState, useEffect } from 'react'
import { getSessoes, criarSessao, deletarSessao, atualizarSessao } from '../../services/api'
import Modal from '../../components/Modal/index.jsx'

const Sessoes = () => {
  const [sessoes, setSessoes] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [modalDeletar, setModalDeletar] = useState(false)
  const [sessaoParaDeletar, setSessaoParaDeletar] = useState(null)
  const [materia, setMateria] = useState('')
  const [duracao, setDuracao] = useState('')
  const [data, setData] = useState('')
  const [carregando, setCarregando] = useState(false)
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}')

  const hoje = new Date().toISOString().split('T')[0]

  useEffect(() => {
    carregarSessoes()
  }, [])

  async function carregarSessoes() {
    try {
      const dados = await getSessoes()
      const minhasSessoes = dados.filter(s => s.id_usuario === usuario.usuario_id)
      setSessoes(minhasSessoes)
    } catch (error) {
      console.error('Erro ao carregar sessoes:', error)
    }
  }

  async function handleCriarSessao(e) {
    e.preventDefault()
    setCarregando(true)
    try {
      const mins = parseInt(duracao)
      const hh = String(Math.floor(mins / 60)).padStart(2, '0')
      const mm = String(mins % 60).padStart(2, '0')
      const tempoFormatado = `${hh}:${mm}:00`
      await criarSessao(materia, tempoFormatado, data, 'pendente', usuario.usuario_id)
      await carregarSessoes()
      setModalAberto(false)
      setMateria('')
      setDuracao('')
      setData('')
    } catch (error) {
      console.error('Erro ao criar sessao:', error)
    } finally {
      setCarregando(false)
    }
  }

  function abrirModalDeletar(sessao) {
    setSessaoParaDeletar(sessao)
    setModalDeletar(true)
  }

  async function confirmarDeletar() {
    try {
      await deletarSessao(sessaoParaDeletar.id)
      await carregarSessoes()
      setModalDeletar(false)
      setSessaoParaDeletar(null)
    } catch (error) {
      console.error('Erro ao deletar:', error)
    }
  }

  async function handleConcluir(sessao) {
    try {
      await atualizarSessao(
        sessao.id,
        sessao.materia,
        sessao.tempoestudado,
        sessao.dataregistro,
        'concluido'
      )
      await carregarSessoes()
    } catch (error) {
      console.error('Erro ao concluir sessao:', error)
    }
  }

  function calcularStatus(sessao) {
    if (sessao.status === 'concluido') return 'concluido'
    const dataSessao = new Date(sessao.dataregistro)
    const agora = new Date()
    dataSessao.setHours(0, 0, 0, 0)
    agora.setHours(0, 0, 0, 0)
    if (dataSessao < agora) return 'atrasada'
    return 'pendente'
  }

  function renderStatus(sessao) {
    const status = calcularStatus(sessao)
    const estilos = {
      concluido: 'bg-[#40916C] text-white',
      atrasada: 'bg-red-100 text-red-700',
      pendente: 'bg-yellow-100 text-yellow-800'
    }
    const textos = {
      concluido: 'Concluida',
      atrasada: 'Atrasada',
      pendente: 'Pendente'
    }
    return (
      <span className={`text-xs px-3 py-1 rounded-full font-medium ${estilos[status]}`}>
        {textos[status]}
      </span>
    )
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-[#1B4332]">Registro de Atividades</h1>
          <p className="text-gray-500 text-sm mt-1">Acompanhe seu progresso e mantenha o foco nos estudos.</p>
        </div>
        <button
          onClick={() => setModalAberto(true)}
          className="bg-[#1B4332] text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#2D6A4F] transition-colors"
        >
          + Nova Sessao
        </button>
      </div>

      <div className="bg-white border border-[#95D5B2] rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#D8F3DC] border-b border-[#95D5B2]">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Materia</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Duração</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Data</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8F3DC]">
              {sessoes.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-400 text-sm">
                    Nenhuma sessao encontrada. Crie sua primeira sessao!
                  </td>
                </tr>
              ) : (
                sessoes.map(sessao => (
                  <tr key={sessao.id} className="hover:bg-[#D8F3DC]/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#1B4332] flex items-center justify-center text-white text-xs font-bold">
                          {sessao.materia?.charAt(0)}
                        </div>
                        <span className="font-semibold text-[#1B4332] text-sm">{sessao.materia}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">{sessao.tempoestudado}</td>
                    <td className="px-6 py-4 text-sm">
                      {new Date(sessao.dataregistro).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4">
                      {renderStatus(sessao)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {sessao.status !== 'concluido' && (
                          <button
                            onClick={() => handleConcluir(sessao)}
                            className="text-xs px-3 py-1 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg transition-colors"
                          >
                            Concluir
                          </button>
                        )}
                        <button
                          onClick={() => abrirModalDeletar(sessao)}
                          className="text-xs px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          Deletar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-[#1B4332] p-6 rounded-xl text-white shadow-sm">
          <h3 className="text-xs font-semibold opacity-80 uppercase tracking-widest">Total de Sessoes</h3>
          <div className="mt-2 text-3xl font-bold">{sessoes.length}</div>
          <p className="mt-2 text-xs opacity-70">sessoes registradas</p>
        </div>
        <div className="lg:col-span-2 bg-[#D8F3DC]/20 p-6 rounded-xl border border-[#95D5B2] shadow-sm">
          <h3 className="text-lg font-bold text-[#1B4332]">Foco Aprimorado</h3>
          <p className="text-gray-500 text-sm mt-1">Continue registrando suas sessoes para acompanhar seu progresso!</p>
        </div>
      </div>

      <Modal titulo="Agendar Sessao" aberto={modalAberto} onClose={() => setModalAberto(false)}>
        <form onSubmit={handleCriarSessao} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1B4332]/70 mb-1">Materia</label>
            <input
              className="w-full border border-[#95D5B2] rounded-lg p-3 focus:ring-2 focus:ring-[#95D5B2]/50 focus:border-[#40916C] outline-none text-sm"
              placeholder="Ex: Matematica"
              type="text"
              value={materia}
              onChange={e => setMateria(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1B4332]/70 mb-1">Duração (min)</label>
              <input
                className="w-full border border-[#95D5B2] rounded-lg p-3 focus:ring-2 focus:ring-[#95D5B2]/50 focus:border-[#40916C] outline-none text-sm"
                placeholder="60"
                type="number"
                min="1"
                value={duracao}
                onChange={e => setDuracao(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B4332]/70 mb-1">Data</label>
              <input
                className="w-full border border-[#95D5B2] rounded-lg p-3 focus:ring-2 focus:ring-[#95D5B2]/50 focus:border-[#40916C] outline-none text-sm"
                type="date"
                min={hoje}
                value={data}
                onChange={e => setData(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#1B4332] text-white py-3 rounded-lg font-bold hover:bg-[#2D6A4F] transition-all disabled:opacity-50"
            >
              {carregando ? 'Salvando...' : 'Salvar Sessao'}
            </button>
            <button
              type="button"
              onClick={() => setModalAberto(false)}
              className="w-full text-[#1B4332]/70 py-3 font-medium hover:bg-[#D8F3DC] rounded-lg transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>

      <Modal titulo="Confirmar exclusão" aberto={modalDeletar} onClose={() => setModalDeletar(false)}>
        <p className="text-sm text-gray-600 mb-6">
          Tem certeza que deseja deletar a sessão de <strong>{sessaoParaDeletar?.materia}</strong>? Essa ação não pode ser desfeita.
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={confirmarDeletar}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-all"
          >
            Deletar
          </button>
          <button
            onClick={() => setModalDeletar(false)}
            className="w-full text-[#1B4332]/70 py-3 font-medium hover:bg-[#D8F3DC] rounded-lg transition-colors"
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Sessoes