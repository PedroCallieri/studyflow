import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setErro('')
    setCarregando(true)

    try {
      const response = await fetch('http://localhost:3000/usuario')
      const usuarios = await response.json()

      const usuario = usuarios.find(u => u.email === email && u.senha === senha)

      if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}!`)
      } else {
        setErro('E-mail ou senha incorretos.')
      }
    } catch (error) {
      setErro('Erro ao conectar com o servidor.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#F8F9FA]">
      <main className="w-full max-w-md flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-green-900">StudyFlow</h1>
          <p className="text-sm text-gray-500 mt-1">Sua jornada acadêmica, otimizada.</p>
        </div>
        <div className="w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Bem-vindo</h2>
          
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                placeholder="exemplo@email.com"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-600">Senha</label>
                <a className="text-xs text-green-700 hover:underline" href="#">Esqueceu a senha?</a>
              </div>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                placeholder="••••••••"
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                required
              />
            </div>

            {erro && <p className="text-red-500 text-xs">{erro}</p>}

            <button
              className="w-full bg-[#1B4332] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#2D6A4F] transition-all mt-2 disabled:opacity-50"
              type="submit"
              disabled={carregando}
            >
              {carregando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
          </div>

          <p className="mt-6 text-sm text-center text-gray-500">
            Não tem conta? <Link className="text-green-800 font-bold hover:underline" to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </main>
    </div>
  )
}