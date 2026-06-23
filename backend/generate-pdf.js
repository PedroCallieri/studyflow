import puppeteer from 'puppeteer'
import path from 'path'

const filePath = path.resolve('reports/test-report.html')

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('file://' + filePath, {
  waitUntil: 'networkidle0'
})

await page.pdf({
  path: 'reports/test-report.pdf',
  format: 'A4',
  printBackground: true
})

await browser.close()

console.log('PDF gerado com sucesso 🚀')