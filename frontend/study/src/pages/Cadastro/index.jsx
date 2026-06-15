import { useState } from 'react'
import { Link } from 'react-router-dom'
import { criarUsuario } from '../../services/api'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleCadastro(e) {
    e.preventDefault()
    setErro('')
    setSucesso('')

    if (senha.length < 8) {
      setErro('A senha deve ter no mínimo 8 caracteres.')
      return
    }

    setCarregando(true)
    try {
      const usuario = await criarUsuario(nome, email, senha)
      if (usuario.usuario_id) {
        setSucesso(`Conta criada com sucesso! Bem-vindo, ${usuario.nome}!`)
        setNome('')
        setEmail('')
        setSenha('')
      } else {
        setErro('Erro ao criar conta. Tente novamente.')
      }
    } catch (error) {
      setErro('Erro ao conectar com o servidor.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F8F9FA]">
      <main className="w-full max-w-[440px]">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col gap-6">
          
          <div className="flex flex-col items-center gap-1 mb-2">
            <h1 className="text-2xl font-bold text-green-900">StudyFlow</h1>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Criar conta</h2>
            <p className="text-sm text-gray-500 mt-1">Comece sua jornada acadêmica hoje mesmo.</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleCadastro}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Nome completo</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                placeholder="Seu nome"
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                placeholder="estudo@gmail.com"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Senha</label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                  placeholder="Mínimo 8 caracteres"
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  required
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-800 transition-colors"
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {erro && <p className="text-red-500 text-xs">{erro}</p>}
            {sucesso && <p className="text-green-600 text-xs">{sucesso}</p>}

            <button
              className="w-full bg-[#1B4332] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#2D6A4F] transition-all disabled:opacity-50"
              type="submit"
              disabled={carregando}
            >
              {carregando ? 'Criando conta...' : 'Criar conta'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Já tem conta?{' '}
           <Link className="text-green-800 font-bold hover:underline" to="/">Faça login</Link>
          </p>

        </div>
      </main>
    </div>
  )
}