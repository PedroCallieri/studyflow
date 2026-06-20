import { useState, useEffect } from 'react'
import { getSessoes, criarSessao, deletarSessao } from '../../services/api'

const Sessoes = ()  => {
  const [sessoes, setSessoes] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [materia, setMateria] = useState('')
  const [duracao, setDuracao] = useState('')
  const [data, setData] = useState('')
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    carregarSessoes()
  }, [])

  async function carregarSessoes() {
    try {
      const dados = await getSessoes()
      setSessoes(dados)
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
      await criarSessao(materia, tempoFormatado, data, 'pendente', 2)
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

  async function handleDeletar(id) {
    if (!confirm('Deseja deletar esta sessao?')) return
    try {
      await deletarSessao(id)
      await carregarSessoes()
    } catch (error) {
      console.error('Erro ao deletar:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">

      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-[#1B4332] flex-col p-2 gap-1 z-50">
        <div className="flex items-center gap-3 px-3 py-6">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SF</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">StudyFlow</h1>
            <p className="text-white/60 text-xs">Academic Modern</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/10 rounded-lg text-sm font-medium">
            Dashboard
          </a>
          <a href="/sessoes" className="flex items-center gap-3 px-3 py-2 bg-[#2D6A4F] text-white rounded-lg text-sm font-bold">
            Sessoes
          </a>
          <a href="/perfil" className="flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/10 rounded-lg text-sm font-medium">
            Perfil
          </a>
        </nav>
        <button
          onClick={() => setModalAberto(true)}
          className="w-full bg-[#D8F3DC] text-[#1B4332] py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#95D5B2] transition-colors"
        >
          + Nova Sessao
        </button>
        <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
          <a href="/" className="flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/10 rounded-lg text-sm">
            Sair
          </a>
        </div>
      </aside>

      <header className="md:ml-64 fixed top-0 right-0 left-0 md:left-auto bg-[#1B4332] text-white z-40 px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Minhas Sessoes</h2>
        <button
          onClick={() => setModalAberto(true)}
          className="bg-[#D8F3DC] text-[#1B4332] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#95D5B2] transition-colors"
        >
          + Nova Sessao
        </button>
      </header>

      <main className="md:ml-64 pt-20 pb-16 px-6 md:px-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1B4332]">Registro de Atividades</h1>
          <p className="text-gray-500 text-sm mt-1">Acompanhe seu progresso e mantenha o foco nos estudos.</p>
        </div>

        <div className="bg-white border border-[#95D5B2] rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#D8F3DC] border-b border-[#95D5B2]">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Materia</th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Duracao</th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Data</th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Status</th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#1B4332]">Acoes</th>
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
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          sessao.status === 'concluido'
                            ? 'bg-[#40916C] text-white'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {sessao.status === 'concluido' ? 'Concluida' : 'Pendente'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeletar(sessao.id)}
                          className="text-xs px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          Deletar
                        </button>
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
      </main>

      {modalAberto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B4332]/40"
          onClick={e => e.target === e.currentTarget && setModalAberto(false)}
        >
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-[#95D5B2]">
            <div className="p-4 bg-[#D8F3DC] border-b border-[#95D5B2] flex justify-between items-center">
              <h2 className="font-bold text-[#1B4332] text-lg">Agendar Sessao</h2>
              <button onClick={() => setModalAberto(false)} className="text-[#1B4332]/60 hover:text-[#1B4332] font-bold text-lg">
                X
              </button>
            </div>
            <form onSubmit={handleCriarSessao} className="p-6 space-y-4">
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
                  <label className="block text-sm font-medium text-[#1B4332]/70 mb-1">Duracao (min)</label>
                  <input
                    className="w-full border border-[#95D5B2] rounded-lg p-3 focus:ring-2 focus:ring-[#95D5B2]/50 focus:border-[#40916C] outline-none text-sm"
                    placeholder="60"
                    type="number"
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
          </div>
        </div>
      )}
    </div>
  )
}

export default Sessoes 