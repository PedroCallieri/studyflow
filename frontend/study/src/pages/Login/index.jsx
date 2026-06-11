export default function Login() {
  return (
    <iframe
      srcDoc={`<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<style>
body { background-color: #F8F9FA; font-family: Inter, sans-serif; }
input:focus { outline: none; border-color: #1B4332 !important; box-shadow: 0 0 0 2px rgba(149,213,178,0.2); }
</style>
</head>
<body class="flex items-center justify-center min-h-screen p-6">
<main class="w-full max-w-md flex flex-col items-center">
  <div class="mb-10 text-center">
    <h1 class="text-2xl font-bold text-green-900">StudyFlow</h1>
    <p class="text-sm text-gray-500 mt-1">Sua jornada acadêmica, otimizada.</p>
  </div>
  <div class="w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100">
    <h2 class="text-xl font-semibold text-center text-gray-800 mb-6">Bem-vindo</h2>
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
        <input class="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm" placeholder="exemplo@email.com" type="email"/>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <label class="text-sm font-medium text-gray-600">Senha</label>
          <a class="text-xs text-green-700 hover:underline" href="#">Esqueceu a senha?</a>
        </div>
        <input class="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm" placeholder="••••••••" type="password"/>
      </div>
      <button class="w-full bg-[#1B4332] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#2D6A4F] transition-all mt-2">
        Entrar
      </button>
    </form>
    <div class="relative my-6">
      <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-200"></div></div>
      <div class="relative flex justify-center"><span class="bg-white px-2 text-xs text-gray-400">Ou continue com</span></div>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <button class="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
        Institucional
      </button>
      <button class="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
        Google
      </button>
    </div>
  </div>
  <p class="mt-6 text-sm text-center text-gray-500">
    Não tem conta? <a class="text-green-800 font-bold hover:underline" href="#">Cadastre-se</a>
  </p>
</main>
</body>
</html>`}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="Login"
    />
  )
}