import { test, expect } from '@playwright/test'

test('deve cadastrar um novo usuario', async ({ page }) => {
  await page.goto('/cadastro')

  const email = `teste${Date.now()}@email.com`

  await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  await page.getByPlaceholder('estudo@gmail.com').fill(email)
  await page.getByPlaceholder('Mínimo 8 caracteres').fill('12345678')

  await page.getByRole('button', { name: 'Criar conta' }).click()

  await expect(page).toHaveURL('/')
})

test('deve mostrar erro com senha curta', async ({ page }) => {
  await page.goto('/cadastro')

  await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  await page.getByPlaceholder('estudo@gmail.com').fill('teste@email.com')
  await page.getByPlaceholder('Mínimo 8 caracteres').fill('123')

  await page.getByRole('button', { name: 'Criar conta' }).click()

  await expect(
    page.getByText('A senha deve ter no mínimo 8 caracteres.')
  ).toBeVisible()
})