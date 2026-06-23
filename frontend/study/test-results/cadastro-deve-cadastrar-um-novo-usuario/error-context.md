# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cadastro.spec.js >> deve cadastrar um novo usuario
- Location: tests\cadastro.spec.js:3:1

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
  - textbox "estudo@gmail.com": teste1782177864032@email.com
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
  3  | test('deve cadastrar um novo usuario', async ({ page }) => {
  4  |   await page.goto('/cadastro')
  5  | 
  6  |   const email = `teste${Date.now()}@email.com`
  7  | 
  8  |   await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  9  |   await page.getByPlaceholder('estudo@gmail.com').fill(email)
  10 |   await page.getByPlaceholder('Mínimo 8 caracteres').fill('12345678')
  11 | 
  12 |   await page.getByRole('button', { name: 'Criar conta' }).click()
  13 | 
> 14 |   await expect(page).toHaveURL('/')
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  15 | })
  16 | 
  17 | test('deve mostrar erro com senha curta', async ({ page }) => {
  18 |   await page.goto('/cadastro')
  19 | 
  20 |   await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  21 |   await page.getByPlaceholder('estudo@gmail.com').fill('teste@email.com')
  22 |   await page.getByPlaceholder('Mínimo 8 caracteres').fill('123')
  23 | 
  24 |   await page.getByRole('button', { name: 'Criar conta' }).click()
  25 | 
  26 |   await expect(
  27 |     page.getByText('A senha deve ter no mínimo 8 caracteres.')
  28 |   ).toBeVisible()
  29 | })
```