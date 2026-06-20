import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import RotaProtegida from './components/RotaProtegida/index.jsx'
import cadastroUsuario from './components/Cadastro/index.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<cadastroUsuario />} />
        <Route path="/dashboard" element={<RotaProtegida><Dashboard/></RotaProtegida>} />
      </Routes>
    </BrowserRouter>
  )
}
