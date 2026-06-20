import { test, expect } from '@playwright/test'

test('deve exibir a tela de login', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Bem-vindo')).toBeVisible()
})

test('deve mostrar erro com credenciais invalidas', async ({ page }) => {
  await page.goto('/')
  await page.getByPlaceholder('exemplo@email.com').fill('invalido@teste.com')
  await page.getByPlaceholder('••••••••').fill('senhaerrada')
  await page.getByRole('button', { name: 'Entrar' }).click()
  await expect(page.getByText('E-mail ou senha incorretos.')).toBeVisible()
})

test('deve navegar para tela de cadastro', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Cadastre-se').click()
  await expect(page.getByRole('heading', { name: 'Criar conta' })).toBeVisible()
})