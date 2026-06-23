# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sessoes.spec.js >> deve abrir modal de nova sessao
- Location: tests\sessoes.spec.js:35:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://localhost:5173/"
Received: "http://localhost:5173/cadastro"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "http://localhost:5173/cadastro"

```

```yaml
- main:
  - img "StudyFlow"
  - heading "StudyFlow" [level=1]
  - paragraph: Junte-se à nossa comunidade acadêmica e alcance o seu estado de flow. Organize seus estudos com a eficiência da modernidade.
  - img "StudyFlow"
  - heading "Criar conta" [level=2]
  - paragraph: Comece sua jornada acadêmica hoje mesmo.
  - text: Nome completo 👤
  - textbox "Seu nome": Usuario Teste
  - text: E-mail ✉️
  - textbox "estudo@gmail.com": teste1782177869728@email.com
  - text: Senha 🔒
  - textbox "Mínimo 8 caracteres": "12345678"
  - button "👁️"
  - button "Criar conta"
  - paragraph:
    - text: Já tem conta?
    - link "Faça login":
      - /url: /
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | let email
  4  | const senha = '12345678'
  5  | 
  6  | test.beforeEach(async ({ page }) => {
  7  |   email = `teste${Date.now()}@email.com`
  8  | 
  9  |   // Cadastro
  10 |   await page.goto('/cadastro')
  11 | 
  12 |   await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  13 |   await page.getByPlaceholder('estudo@gmail.com').fill(email)
  14 |   await page.getByPlaceholder('Mínimo 8 caracteres').fill(senha)
  15 | 
  16 |   await page.getByRole('button', { name: 'Criar conta' }).click()
  17 | 
> 18 |   await expect(page).toHaveURL('/')
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  19 | 
  20 |   // Login
  21 |   await page.getByPlaceholder('exemplo@email.com').fill(email)
  22 |   await page.getByPlaceholder('••••••••').fill(senha)
  23 | 
  24 |   await Promise.all([
  25 |     page.waitForURL('**/dashboard'),
  26 |     page.getByRole('button', { name: 'Entrar' }).click()
  27 |   ])
  28 | })
  29 | 
  30 | test('deve acessar tela de sessoes', async ({ page }) => {
  31 |   await page.goto('/sessoes')
  32 |   await expect(page.getByText('Registro de Atividades')).toBeVisible()
  33 | })
  34 | 
  35 | test('deve abrir modal de nova sessao', async ({ page }) => {
  36 |   await page.goto('/sessoes')
  37 | 
  38 |   await page.getByRole('button', { name: '+ Nova Sessao' }).click()
  39 | 
  40 |   await expect(page.getByText('Agendar Sessao')).toBeVisible()
  41 | })
  42 | 
  43 | test('deve criar uma nova sessao', async ({ page }) => {
  44 |   await page.goto('/sessoes')
  45 | 
  46 |   await page.getByRole('button', { name: '+ Nova Sessao' }).click()
  47 | 
  48 |   await page.getByPlaceholder('Ex: Matematica').fill('Teste Playwright')
  49 |   await page.getByPlaceholder('60').fill('30')
  50 |   await page.locator('input[type="date"]').fill('2026-12-31')
  51 | 
  52 |   await page.getByRole('button', { name: 'Salvar Sessao' }).click()
  53 | 
  54 |   await expect(page.getByText('Teste Playwright')).toBeVisible()
  55 | })
```