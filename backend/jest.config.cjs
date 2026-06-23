module.exports = {
  testEnvironment: 'node',

  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Relatório Backend',
        outputPath: './reports/test-report.html',
        includeFailureMsg: true,
        includeConsoleLog: true
      }
    ]
  ]
}