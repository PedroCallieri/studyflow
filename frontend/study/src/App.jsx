import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/index.jsx'
import Cadastro from './pages/Cadastro/index.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}