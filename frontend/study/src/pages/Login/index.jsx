import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/api'
import logo from '../../assets/screen.png'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setErro('')
    setCarregando(true)
    try {
      const resultado = await login(email, senha)
      localStorage.setItem('token', resultado.token)
      localStorage.setItem('usuario', JSON.stringify(resultado.usuario))
      navigate('/dashboard')
    } catch (error) {
      setErro('E-mail ou senha incorretos.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#F8F9FA]">
      <main className="w-full max-w-md flex flex-col items-center">
        <div className="mb-8 text-center flex flex-col items-center">
          <img src={logo} alt="StudyFlow" className="w-16 h-16 mb-2 rounded-xl" />
          <h1 className="text-2xl font-bold text-green-900">StudyFlow</h1>
          <p className="text-sm text-gray-500 mt-1">Sua jornada acadêmica, otimizada.</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Bem-vindo</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                <input
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                  placeholder="exemplo@email.com"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-600">Senha</label>
                <a className="text-xs text-green-700 hover:underline" href="#">Esqueceu a senha?</a>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔒</span>
                <input
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20"
                  placeholder="••••••••"
                  type="password"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  required
                />
              </div>
            </div>

            {erro && <p className="text-red-500 text-xs">{erro}</p>}

            <button
              className="w-full bg-[#1B4332] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#2D6A4F] transition-all mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
              type="submit"
              disabled={carregando}
            >
              {carregando ? 'Entrando...' : <>Entrar <span>→</span></>}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Não tem conta? <Link className="text-green-800 font-bold hover:underline" to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Login