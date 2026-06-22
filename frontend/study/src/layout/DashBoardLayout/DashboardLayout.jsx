import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const DashboardLayout = () => {
  const navigate = useNavigate()
  const [sidebarAberta, setSidebarAberta] = useState(true)

  function handleSair() {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    navigate('/')
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">

      <aside
        className={`hidden md:flex flex-col h-screen fixed left-0 top-0 bg-[#1B4332] p-2 gap-1 z-50 transition-all duration-300 ${
          sidebarAberta ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex items-center justify-between px-3 py-6">
          {sidebarAberta && (
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">StudyFlow</span>
              <span className="text-[#95D5B2] text-xs">Academic Modern</span>
            </div>
          )}
          <button
            onClick={() => setSidebarAberta(!sidebarAberta)}
            className="text-white/70 hover:text-white p-1 rounded transition-colors"
          >
            {sidebarAberta ? '←' : '→'}
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 bg-[#2D6A4F] text-white rounded-lg font-bold text-sm"
            title="Dashboard"
          >
            <span>📊</span>
            {sidebarAberta && <span>Dashboard</span>}
          </Link>
          <Link
            to="/sessoes"
            className="flex items-center gap-3 px-4 py-3 text-[#95D5B2]/80 hover:bg-[#2D6A4F] hover:text-white rounded-lg text-sm font-medium transition-all"
            title="Sessões"
          >
            <span>📚</span>
            {sidebarAberta && <span>Sessões</span>}
          </Link>
          <Link
            to="/perfil"
            className="flex items-center gap-3 px-4 py-3 text-[#95D5B2]/80 hover:bg-[#2D6A4F] hover:text-white rounded-lg text-sm font-medium transition-all"
            title="Perfil"
          >
            <span>👤</span>
            {sidebarAberta && <span>Perfil</span>}
          </Link>
        </nav>

        <div className="mt-auto flex flex-col gap-1 border-t border-[#2D6A4F] pt-4">
          <button
            onClick={handleSair}
            className="flex items-center gap-3 px-4 py-3 text-[#95D5B2]/80 hover:bg-[#2D6A4F] hover:text-white rounded-lg text-sm text-left"
            title="Sair"
          >
            <span>🚪</span>
            {sidebarAberta && <span>Sair</span>}
          </button>
        </div>
      </aside>

      <div className={`flex-grow flex flex-col min-h-screen transition-all duration-300 ${
        sidebarAberta ? 'md:ml-64' : 'md:ml-20'
      }`}>
        <header className={`bg-[#1B4332] text-white shadow-sm fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          sidebarAberta ? 'md:left-64' : 'md:left-20'
        }`}>
          <div className="flex justify-between items-center w-full px-6 py-3">
            <span className="font-bold text-lg">StudyFlow</span>
            <button
              onClick={handleSair}
              className="flex items-center gap-2 px-3 py-2 bg-[#2D6A4F]/50 hover:bg-[#2D6A4F] rounded-lg text-sm transition-colors"
            >
              Sair
            </button>
          </div>
        </header>

        <main className="flex-grow pt-20 pb-10 px-6 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout