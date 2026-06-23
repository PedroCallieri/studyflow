import { test, expect } from '@playwright/test'

test('deve fazer login', async ({ page }) => {
  const email = `teste${Date.now()}@email.com`
  const senha = '12345678'

  await page.goto('/cadastro')

  await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  await page.getByPlaceholder('estudo@gmail.com').fill(email)
  await page.getByPlaceholder('Mínimo 8 caracteres').fill(senha)

  await page.getByRole('button', { name: 'Criar conta' }).click()

  await expect(page).toHaveURL('/')

  await page.getByPlaceholder('exemplo@email.com').fill(email)
  await page.getByPlaceholder('••••••••').fill(senha)

  await page.getByRole('button', { name: 'Entrar' }).click()

  await expect(page).toHaveURL('/dashboard')
})