import { useState, useEffect } from 'react'
import { getSessoes } from '../../services/api'

export default function Dashboard() {
  const [sessoes, setSessoes] = useState([])
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}')

  useEffect(() => {
    carregarSessoes()
  }, [])

 async function carregarSessoes() {
  try {
    const dados = await getSessoes()
    const minhasSessoes = dados.filter(s => s.id_usuario === usuario.usuario_id)
    setSessoes(minhasSessoes)
  } catch (error) {
    console.error('Erro ao carregar sessões:', error)
  }
}

  const totalSessoes = sessoes.length
  const concluidas = sessoes.filter(s => s.status === 'concluido').length
  const ultimasCinco = sessoes.slice(-5).reverse()

  return (
    <div>
      <div className="mb-8 mt-2">
        <h1 className="text-2xl font-bold text-[#1B4332] mb-1">
          Bem-vindo, {usuario.nome || 'Estudante'}
        </h1>
        <p className="text-gray-500 text-sm">
          Seu progresso acadêmico está sendo registrado. Continue assim.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1B4332] rounded-xl p-6 flex flex-col gap-2 shadow-sm">
          <p className="text-[#95D5B2]/80 text-sm font-medium">Total de Sessões</p>
          <h2 className="text-3xl font-bold text-white">{totalSessoes}</h2>
        </div>

        <div className="bg-[#1B4332] rounded-xl p-6 flex flex-col gap-2 shadow-sm">
          <p className="text-[#95D5B2]/80 text-sm font-medium">Concluídas</p>
          <h2 className="text-3xl font-bold text-white">{concluidas}</h2>
        </div>

        <div className="bg-[#1B4332] rounded-xl p-6 flex flex-col gap-2 shadow-sm">
          <p className="text-[#95D5B2]/80 text-sm font-medium">Pendentes</p>
          <h2 className="text-3xl font-bold text-white">{totalSessoes - concluidas}</h2>
        </div>
      </div>

      <div className="bg-white border border-[#95D5B2] rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-[#95D5B2] flex justify-between items-center bg-[#F8F9FA]">
          <h3 className="text-lg font-bold text-[#1B4332]">Últimas Sessões</h3>
          <a href="/sessoes" className="text-[#2D6A4F] text-sm font-bold hover:underline">
            Ver todas
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F1F3F2] border-b border-[#1B4332]/20">
                <th className="px-6 py-3 text-sm font-semibold text-[#1B4332]">Matéria</th>
                <th className="px-6 py-3 text-sm font-semibold text-[#1B4332]">Duração</th>
                <th className="px-6 py-3 text-sm font-semibold text-[#1B4332]">Data</th>
                <th className="px-6 py-3 text-sm font-semibold text-[#1B4332]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1B4332]/10">
              {ultimasCinco.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-400 text-sm">
                    Nenhuma sessão registrada ainda.
                  </td>
                </tr>
              ) : (
                ultimasCinco.map(sessao => (
                  <tr key={sessao.id} className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-800">{sessao.materia}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{sessao.tempoestudado}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {new Date(sessao.dataregistro).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                        sessao.status === 'concluido'
                          ? 'bg-[#95D5B2] text-[#1B4332]'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {sessao.status === 'concluido' ? 'Concluído' : 'Pendente'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <section className="mt-8 relative overflow-hidden rounded-xl bg-[#1B4332] min-h-[200px] flex items-center p-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Pronto para a sua próxima jornada de conhecimento?
          </h2>
          <p className="text-[#95D5B2]/80 mb-4 max-w-lg text-sm">
            Inicie uma nova sessão de estudos e mantenha o foco nos seus objetivos.
          </p>
          <a
            href="/sessoes"
            className="inline-block bg-[#95D5B2] text-[#1B4332] px-6 py-3 rounded-lg font-bold hover:bg-white transition-all text-sm"
          >
            Começar Nova Sessão
          </a>
        </div>
      </section>
    </div>
  )
}