# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-valido.spec.js >> deve fazer login
- Location: tests\login-valido.spec.js:3:1

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
  - textbox "estudo@gmail.com": teste1782177863861@email.com
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
  3  | test('deve fazer login', async ({ page }) => {
  4  |   const email = `teste${Date.now()}@email.com`
  5  |   const senha = '12345678'
  6  | 
  7  |   await page.goto('/cadastro')
  8  | 
  9  |   await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  10 |   await page.getByPlaceholder('estudo@gmail.com').fill(email)
  11 |   await page.getByPlaceholder('Mínimo 8 caracteres').fill(senha)
  12 | 
  13 |   await page.getByRole('button', { name: 'Criar conta' }).click()
  14 | 
> 15 |   await expect(page).toHaveURL('/')
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  16 | 
  17 |   await page.getByPlaceholder('exemplo@email.com').fill(email)
  18 |   await page.getByPlaceholder('••••••••').fill(senha)
  19 | 
  20 |   await page.getByRole('button', { name: 'Entrar' }).click()
  21 | 
  22 |   await expect(page).toHaveURL('/dashboard')
  23 | })
```