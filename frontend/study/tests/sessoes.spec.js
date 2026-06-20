import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.getByPlaceholder('exemplo@email.com').fill('perte@gmail.com')
  await page.getByPlaceholder('••••••••').fill('12345678')
  await page.getByRole('button', { name: 'Entrar' }).click()
  await page.waitForURL('/dashboard')
})

test('deve acessar tela de sessoes', async ({ page }) => {
  await page.goto('/sessoes')
  await expect(page.getByText('Registro de Atividades')).toBeVisible()
})

test('deve abrir modal de nova sessao', async ({ page }) => {
  await page.goto('/sessoes')
  await page.getByRole('button', { name: '+ Nova Sessao' }).first().click()
  await expect(page.getByText('Agendar Sessao')).toBeVisible()
})

test('deve criar uma nova sessao', async ({ page }) => {
  await page.goto('/sessoes')
  await page.getByRole('button', { name: '+ Nova Sessao' }).first().click()
  await page.getByPlaceholder('Ex: Matematica').fill('Teste Playwright')
  await page.getByPlaceholder('60').fill('30')
  await page.locator('input[type="date"]').fill('2026-12-31')
  await page.getByRole('button', { name: 'Salvar Sessao' }).click()
  await expect(page.getByText('Teste Playwright').first()).toBeVisible()
})