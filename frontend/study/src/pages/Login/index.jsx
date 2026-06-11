export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#F8F9FA]">
      <main className="w-full max-w-md flex flex-col items-center">
        
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-green-900">StudyFlow</h1>
          <p className="text-sm text-gray-500 mt-1">Sua jornada acadêmica, otimizada.</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Bem-vindo</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
              <input 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#95D5B2]/20" 
                placeholder="exemplo@email.com" 
                type="email"
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
              />
            </div>

            <button className="w-full bg-[#1B4332] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#2D6A4F] transition-all mt-2">
              Entrar
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-xs text-gray-400">Ou continue com</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
              Institucional
            </button>
            <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
              Google
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-center text-gray-500">
          Não tem conta? <a className="text-green-800 font-bold hover:underline" href="#">Cadastre-se</a>
        </p>

      </main>
    </div>
  )
}