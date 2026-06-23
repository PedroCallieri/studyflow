import { test, expect } from '@playwright/test'

let email
const senha = '12345678'

test.beforeEach(async ({ page }) => {
  email = `teste${Date.now()}@email.com`

  // Cadastro
  await page.goto('/cadastro')

  await page.getByPlaceholder('Seu nome').fill('Usuario Teste')
  await page.getByPlaceholder('estudo@gmail.com').fill(email)
  await page.getByPlaceholder('Mínimo 8 caracteres').fill(senha)

  await page.getByRole('button', { name: 'Criar conta' }).click()

  await expect(page).toHaveURL('/')

  // Login
  await page.getByPlaceholder('exemplo@email.com').fill(email)
  await page.getByPlaceholder('••••••••').fill(senha)

  await Promise.all([
    page.waitForURL('**/dashboard'),
    page.getByRole('button', { name: 'Entrar' }).click()
  ])
})

test('deve acessar tela de sessoes', async ({ page }) => {
  await page.goto('/sessoes')
  await expect(page.getByText('Registro de Atividades')).toBeVisible()
})

test('deve abrir modal de nova sessao', async ({ page }) => {
  await page.goto('/sessoes')

  await page.getByRole('button', { name: '+ Nova Sessao' }).click()

  await expect(page.getByText('Agendar Sessao')).toBeVisible()
})

test('deve criar uma nova sessao', async ({ page }) => {
  await page.goto('/sessoes')

  await page.getByRole('button', { name: '+ Nova Sessao' }).click()

  await page.getByPlaceholder('Ex: Matematica').fill('Teste Playwright')
  await page.getByPlaceholder('60').fill('30')
  await page.locator('input[type="date"]').fill('2026-12-31')

  await page.getByRole('button', { name: 'Salvar Sessao' }).click()

  await expect(page.getByText('Teste Playwright')).toBeVisible()
})