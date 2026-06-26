# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cadastro.spec.js >> deve mostrar erro com senha curta
- Location: tests/cadastro.spec.js:17:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('A senha deve ter no mínimo 8 caracteres.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('A senha deve ter no mínimo 8 caracteres.')

```

```yaml
- main:
  - img "StudyFlow"
  - heading "StudyFlow" [level=1]
  - paragraph: Sua jornada acadêmica, otimizada.
  - heading "Bem-vindo" [level=2]
  - text: E-mail ✉️
  - textbox "exemplo@email.com"
  - text: Senha
  - link "Esqueceu a senha?":
    - /url: "#"
  - text: 🔒
  - textbox "••••••••"
  - button "Entrar →"
  - paragraph:
    - text: Não tem conta?
    - link "Cadastre-se":
      - /url: /cadastro
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
  14 |   await expect(page).toHaveURL('/')
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
> 28 |   ).toBeVisible()
     |     ^ Error: expect(locator).toBeVisible() failed
  29 | })
```