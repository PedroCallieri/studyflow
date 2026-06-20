import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { atualizarUsuario, deletarUsuario } from '../../services/api'

export default function Perfil() {
  const navigate = useNavigate()
  const usuarioSalvo = JSON.parse(localStorage.getItem('usuario') || '{}')

  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(usuarioSalvo.nome || '')
  const [email, setEmail] = useState(usuarioSalvo.email || '')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [carregando, setCarregando] = useState(false)

  const iniciais = (usuarioSalvo.nome || '?')
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  async function handleSalvar(e) {
    e.preventDefault()
    setErro('')
    setSucesso('')
    setCarregando(true)

    try {
      const senhaParaEnviar = senha || usuarioSalvo.senha
      const usuarioAtualizado = await atualizarUsuario(
        usuarioSalvo.usuario_id,
        nome,
        email,
        senhaParaEnviar
      )

      const novoUsuario = { ...usuarioSalvo, nome: usuarioAtualizado.nome, email: usuarioAtualizado.email }
      localStorage.setItem('usuario', JSON.stringify(novoUsuario))

      setSucesso('Perfil atualizado com sucesso!')
      setEditando(false)
      setSenha('')
    } catch (error) {
      setErro('Erro ao atualizar perfil.')
    } finally {
      setCarregando(false)
    }
  }

  async function handleDeletar() {
    if (!confirm('Tem certeza que deseja deletar sua conta? Essa ação não pode ser desfeita.')) return

    try {
      await deletarUsuario(usuarioSalvo.usuario_id)
      localStorage.removeItem('usuario')
      localStorage.removeItem('token')
      navigate('/')
    } catch (error) {
      setErro('Erro ao deletar conta.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white border-2 border-[#1B4332]/30 rounded-xl shadow-md p-8">

        <div className="flex flex-col items-center mb-8">
          <div className="w-28 h-28 rounded-full bg-[#1B4332] flex items-center justify-center mb-4 border-4 border-[#95D5B2] shadow-md">
            <span className="text-white text-3xl font-bold">{iniciais}</span>
          </div>
          {!editando && (
            <>
              <h1 className="text-xl font-bold text-[#1B4332] mb-1">{usuarioSalvo.nome}</h1>
              <p className="text-sm text-gray-500">{usuarioSalvo.email}</p>
            </>
          )}
        </div>

        {erro && <p className="text-red-500 text-xs text-center mb-4">{erro}</p>}
        {sucesso && <p className="text-green-600 text-xs text-center mb-4">{sucesso}</p>}

        {editando ? (
          <form onSubmit={handleSalvar} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-bold text-[#1B4332] mb-1">Nome completo</label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1B4332] mb-1">E-mail</label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1B4332] mb-1">Nova senha (opcional)</label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                type="password"
                placeholder="Deixe vazio para manter a atual"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="submit"
                disabled={carregando}
                className="w-full bg-[#1B4332] text-white py-3 rounded-lg font-bold hover:bg-[#2D6A4F] transition-all disabled:opacity-50"
              >
                {carregando ? 'Salvando...' : 'Salvar alterações'}
              </button>
              <button
                type="button"
                onClick={() => setEditando(false)}
                className="w-full text-[#1B4332]/70 py-3 font-medium hover:bg-[#D8F3DC] rounded-lg transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-[#1B4332] mb-1 ml-1">Nome completo</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-800">
                  {usuarioSalvo.nome}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1B4332] mb-1 ml-1">E-mail</label>
                <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-800">
                  {usuarioSalvo.email}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setEditando(true)}
                className="w-full bg-[#1B4332] text-white py-3 rounded-lg font-bold hover:bg-[#2D6A4F] transition-all"
              >
                Editar perfil
              </button>
              <button
                onClick={handleDeletar}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-all"
              >
                Deletar conta
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}