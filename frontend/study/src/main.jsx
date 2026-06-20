import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login/index.jsx'
import CadastroUsuarios from './components/CadastroUsuarios/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import Sessoes from './components/Sessoes/index.jsx'
import Perfil from './pages/Perfil/index.jsx'

import RotaProtegida from './components/RotaProtegida/index.jsx'
import DashboardLayout from './layout/DashBoardLayout/DashboardLayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuarios />
  },
  {
    element: (
      <RotaProtegida>
        <DashboardLayout />
      </RotaProtegida>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/sessoes", element: <Sessoes /> },
      { path: "/perfil", element: <Perfil /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)