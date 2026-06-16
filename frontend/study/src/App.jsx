import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/index.jsx'
import Cadastro from './pages/Cadastro/index.jsx'
import Sessoes from './pages/Sessoes/index.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sessoes" element={<Sessoes />} />
      </Routes>
    </BrowserRouter>
  )
}

