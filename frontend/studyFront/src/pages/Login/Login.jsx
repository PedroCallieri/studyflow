export default function Login() {
  return (
    <iframe
      srcDoc={`<!DOCTYPE html>
<html class="light" lang="pt-br">
<head>
<meta charset="utf-8"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<style>
body { background-color: #F8F9FA; color: #1A1A2E; -webkit-font-smoothing: antialiased; }
.focused-shadow { box-shadow: 0px 4px 20px rgba(27, 67, 50, 0.06); }
input:focus { outline: none; border-color: #1B4332 !important; }
</style>
</head>
<body class="flex items-center justify-center min-h-screen p-6">
<main class="w-full max-w-[400px] flex flex-col items-center">
<div class="mb-12 flex flex-col items-center gap-2">
<h1 class="text-2xl font-semibold text-gray-900">StudyFlow</h1>
<p class="text-sm text-gray-500">Sua jornada acadêmica, otimizada.</p>
</div>
<div class="w-full bg-white p-12 rounded-xl shadow border border-gray-200">
<h2 class="text-2xl font-semibold mb-6 text-center">Bem-vindo</h2>
<form class="space-y-6">
<div>
<label class="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
<input class="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm" placeholder="exemplo@email.com" type="email"/>
</div>
<div>
<label class="block text-sm font-medium text-gray-600 mb-1">Senha</label>
<input class="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm" placeholder="••••••••" type="password"/>
</div>
<button class="w-full bg-[#1B4332] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#2D6A4F] transition-all">
Entrar
</button>
</form>
</div>
<p class="mt-6 text-sm text-center text-gray-500">
Não tem conta? <a class="text-[#1B4332] font-bold hover:underline" href="#">Cadastre-se</a>
</p>
</main>
</body>
</html>`}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Login"
    />
  )
}