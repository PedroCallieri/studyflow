# Entrega 8 – Descritivo de Casos de Teste de Software
## Projeto: StudyFlow

---

## 8.1 Casos de Teste

| ID do Caso de Teste | ID do Requisito Funcional | Descrição do Caso de Teste | Pré-condições | Passos para Execução | Resultado Esperado |
|---|---|---|---|---|---|
| CT01 | RF01 | Verificar se a tela de login é exibida corretamente | Aplicação frontend em execução | 1. Acessar a rota "/"  2. Verificar elementos da tela | A tela de login deve exibir o texto "Bem-vindo" e os campos de e-mail e senha |
| CT02 | RF01 | Verificar mensagem de erro ao tentar logar com credenciais inválidas | Aplicação frontend e backend em execução | 1. Acessar a tela de login 2. Preencher e-mail e senha inválidos 3. Clicar em "Entrar" | O sistema deve exibir a mensagem "E-mail ou senha incorretos." |
| CT03 | RF01 | Verificar navegação da tela de login para a tela de cadastro | Aplicação frontend em execução | 1. Acessar a tela de login 2. Clicar no link "Cadastre-se" | O sistema deve redirecionar para a tela de cadastro, exibindo o título "Criar conta" |
| CT04 | RF02 | Verificar cadastro de um novo usuário com dados válidos | Backend e banco de dados em execução | 1. Acessar a tela de cadastro 2. Preencher nome, e-mail único e senha com 8+ caracteres 3. Clicar em "Criar conta" | O usuário deve ser criado com sucesso e o sistema deve redirecionar para a tela de login |
| CT05 | RF02 | Verificar bloqueio de cadastro com senha menor que 8 caracteres | Aplicação frontend em execução | 1. Acessar a tela de cadastro 2. Preencher senha com menos de 8 caracteres 3. Clicar em "Criar conta" | O sistema deve exibir a mensagem "A senha deve ter no mínimo 8 caracteres." e não deve criar a conta |
| CT06 | RF03 | Verificar listagem de usuários cadastrados | Backend e banco de dados em execução, ao menos um usuário cadastrado | 1. Chamar o serviço de listagem de usuários | O retorno deve ser um array contendo os usuários cadastrados |
| CT07 | RF03 | Verificar criação de usuário via service/repository | Backend e banco de dados em execução | 1. Chamar o serviço de criação de usuário com nome, e-mail e senha 2. Validar o retorno | O usuário deve ser criado e retornado com o nome correspondente ao enviado |
| CT08 | RF03 | Verificar atualização de dados de um usuário | Backend e banco de dados em execução, usuário já cadastrado | 1. Chamar o serviço de atualização passando novos dados e o ID do usuário | O usuário deve ser atualizado e os dados retornados devem refletir a alteração |
| CT09 | RF03 | Verificar exclusão de um usuário | Backend e banco de dados em execução, usuário já cadastrado | 1. Chamar o serviço de exclusão passando o ID do usuário | O usuário deve ser removido do banco de dados e retornado como confirmação |
| CT10 | RF04 | Verificar listagem de sessões de estudo | Backend e banco de dados em execução | 1. Chamar o serviço de listagem de sessões | O retorno deve ser um array contendo as sessões de estudo |
| CT11 | RF04 | Verificar criação de uma sessão de estudo | Backend e banco de dados em execução, usuário cadastrado | 1. Chamar o serviço de criação de sessão informando matéria, tempo, data, status e ID do usuário | A sessão deve ser criada com a matéria correspondente à enviada |
| CT12 | RF04 | Verificar busca de sessão por ID | Backend e banco de dados em execução, sessão já cadastrada | 1. Chamar o serviço de busca de sessão pelo ID criado anteriormente | O retorno deve conter os dados da sessão correspondente ao ID informado |
| CT13 | RF04 | Verificar atualização de uma sessão (marcar como concluída) | Backend e banco de dados em execução, sessão já cadastrada | 1. Chamar o serviço de atualização de sessão alterando o status para "concluido" | A sessão deve ser atualizada e retornada com o novo status |
| CT14 | RF04 | Verificar exclusão de uma sessão | Backend e banco de dados em execução, sessão já cadastrada | 1. Chamar o serviço de exclusão de sessão pelo ID | A sessão deve ser removida do banco de dados e retornada como confirmação |
| CT15 | RF05 | Verificar acesso à tela de sessões e renderização do modal de nova sessão | Aplicação frontend logada | 1. Acessar a tela "/sessoes" 2. Clicar no botão "+ Nova Sessao" | O modal "Agendar Sessao" deve ser exibido na tela |
| CT16 | RF05 | Verificar criação de sessão pela interface e exibição na tabela | Aplicação frontend logada, backend em execução | 1. Acessar a tela de sessões 2. Preencher matéria, duração e data 3. Clicar em "Salvar Sessao" | A nova sessão deve aparecer na tabela de sessões com a matéria informada |
| CT17 | RF06 | Verificar comunicação completa entre frontend, backend e banco de dados (E2E) | Frontend, backend e banco de dados em execução | 1. Cadastrar um usuário 2. Realizar login 3. Acessar a tela de sessões 4. Buscar os dados diretamente da API 5. Validar propriedades do retorno (id, materia, tempoestudado, status) 6. Validar exibição na tela | O retorno da API deve ser um array contendo os campos esperados, e o conteúdo deve estar visível corretamente na tela |

---

## 8.2 Ferramentas e Ambientes de Teste

| Item | Descrição |
|---|---|
| **Ferramentas de Teste** | Jest (back-end) e Playwright (front-end) |
| **Ambiente de Teste** | Ambiente de desenvolvimento/local |
| **Servidor de Teste** | Node.js (Express) |
| **Banco de Dados / Versão** | PostgreSQL |
| **Browser / Versão** | Chromium (via Playwright Test Runner) |

---

## 8.3 Requisitos Funcionais

| ID do Requisito | Requisito | Descrição do Requisito |
|---|---|---|
| RF01 | Autenticação de Usuário | O sistema deve permitir que o usuário realize login informando e-mail e senha, validando as credenciais e redirecionando para o Dashboard em caso de sucesso, ou exibindo mensagem de erro em caso de falha. |
| RF02 | Cadastro de Usuário | O sistema deve permitir o cadastro de novos usuários, validando dados obrigatórios (nome, e-mail, senha com no mínimo 8 caracteres) e impedindo o cadastro com dados inválidos. |
| RF03 | Gerenciamento de Usuários (CRUD) | O sistema deve permitir listar, criar, atualizar e deletar usuários através do back-end, persistindo as informações no banco de dados PostgreSQL. |
| RF04 | Gerenciamento de Sessões de Estudo (CRUD) | O sistema deve permitir listar, criar, buscar por ID, atualizar e deletar sessões de estudo, associando cada sessão a um usuário específico. |
| RF05 | Interface de Gerenciamento de Sessões | O sistema deve fornecer uma interface (frontend) que permita ao usuário visualizar suas sessões de estudo, criar novas sessões através de um modal, marcar sessões como concluídas e excluí-las. |
| RF06 | Integração Front-end / Back-end / Banco de Dados | O sistema deve garantir a comunicação correta entre a interface do usuário, a API REST do back-end e o banco de dados, assegurando que os dados exibidos na tela correspondam exatamente aos dados persistidos e retornados pela API. |

---

## Execução dos Testes Unitários

### Objetivo dos Testes
Garantir que as funcionalidades essenciais do sistema StudyFlow — autenticação, cadastro, gerenciamento de usuários e gerenciamento de sessões de estudo — funcionem corretamente tanto na camada de back-end (regras de negócio e persistência no banco de dados) quanto na camada de front-end (interface e interação do usuário), assegurando a comunicação correta entre frontend, backend e banco de dados.

### Escopo
Os testes abrangem:
- Camada de **service** e **repository** do back-end (criação, listagem, atualização e exclusão de usuários e sessões de estudo).
- Camada de **interface** do front-end (telas de login, cadastro e sessões de estudo).
- Comunicação **end-to-end** entre frontend, backend e banco de dados, validando que os dados retornados pela API são corretamente exibidos na tela.

### Tipos de Teste Aplicados
- **Testes unitários** (back-end), validando isoladamente as funções de cada camada de serviço.
- **Testes end-to-end (E2E)** (front-end), simulando a interação real do usuário com a aplicação rodando em navegador.

### Ambiente de Testes
- Ambiente de desenvolvimento local.
- Backend executado via Node.js (Express) na porta 3000.
- Frontend executado via Vite (React) na porta 5173.
- Banco de dados PostgreSQL local.

### Ferramentas Utilizadas
- **Jest** — testes unitários do back-end.
- **Playwright** — testes end-to-end do front-end.

---

## Relatório de Execução e Validação dos Testes

### Registro dos Resultados Obtidos

**Backend (Jest):**

| Suíte de Teste | Casos | Resultado |
|---|---|---|
| Usuario.test.js | 4 testes (listar, criar, atualizar, deletar) | ✅ 4/4 aprovados |
| Sessoes.test.js | 5 testes (criar, listar, buscar por ID, atualizar, deletar) | ✅ 5/5 aprovados |
| **Total** | **9 testes** | ✅ **9/9 aprovados** |

**Frontend (Playwright):**

| Suíte de Teste | Casos | Resultado |
|---|---|---|
| login.spec.js | 3 testes (exibição da tela, erro de credenciais, navegação para cadastro) | ✅ 3/3 aprovados |
| cadastro.spec.js | 2 testes (cadastro válido, validação de senha curta) | ✅ 2/2 aprovados |
| sessoes.spec.js | 1 teste E2E (cadastro → login → consumo da API → renderização na tela) | ✅ 1/1 aprovado |
| **Total** | **6 testes** | ✅ **6/6 aprovados** |

### Evidências da Execução dos Testes

**Execução Jest (back-end):**
```
PASS  test/Sessoes.test.js
PASS  test/Usuario.test.js
Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        1.358 s
```

**Execução Playwright (front-end):**
```
Running 6 tests using 3 workers
  ✓  cadastro.spec.js › deve cadastrar um novo usuario
  ✓  login.spec.js › deve exibir a tela de login
  ✓  login.spec.js › deve mostrar erro com credenciais invalidas
  ✓  cadastro.spec.js › deve mostrar erro com senha curta
  ✓  login.spec.js › deve navegar para tela de cadastro
  ✓  sessoes.spec.js › deve listar sessoes vindas da API corretamente na tela
6 passed (7.8s)
```

### Identificação e Classificação das Falhas Encontradas

Durante o desenvolvimento dos testes, foram identificadas as seguintes falhas, classificadas por origem:

| Falha | Classificação | Causa |
|---|---|---|
| `RETURNING *` ausente no `UPDATE`/`DELETE` do repository | Falha de implementação (back-end) | As queries de atualização e exclusão não retornavam o registro afetado, fazendo com que o service recebesse `undefined` |
| Conflito de e-mail único em testes repetidos | Falha de teste (dados estáticos) | Os testes utilizavam e-mails fixos, causando violação da constraint `UNIQUE` do banco ao reexecutar os testes |
| IDs fixos em testes de atualização/exclusão | Falha de teste (dados estáticos) | Registros referenciados por ID fixo eram excluídos em execuções anteriores, causando falha em execuções subsequentes |
| Teste E2E de sessões falhando por timeout no login | Falha de ambiente/dados | O teste tentava logar com um usuário fixo que não existia no banco daquela máquina/ambiente |
| CORS bloqueando comunicação frontend-backend | Falha de configuração (back-end) | Middleware `cors` não estava habilitado no `app.js`, impedindo requisições do frontend (porta 5173) para o backend (porta 3000) |

### Análise Crítica dos Resultados
Os testes evidenciaram que a maior parte das falhas não estava relacionada à lógica de negócio em si, mas a **dependência de estado do banco de dados** entre execuções de teste. Isso reforça a importância de testes idempotentes, que não dependam de dados fixos previamente cadastrados. Após os ajustes, a suíte de testes tornou-se estável e repetível em diferentes ambientes (inclusive em uma segunda máquina, com banco de dados recriado do zero), validando a portabilidade da aplicação.

### Proposição de Soluções para Correção das Falhas Identificadas
- Adicionar a cláusula `RETURNING *` em todas as queries SQL de `UPDATE` e `DELETE` do repository, garantindo retorno consistente dos dados.
- Utilizar identificadores dinâmicos (`Date.now()`) em e-mails de teste, evitando conflitos de unicidade entre execuções.
- Capturar o ID gerado na criação de um registro dentro do próprio teste, em vez de utilizar IDs fixos, eliminando dependência de estado pré-existente no banco.
- Para testes E2E que dependem de autenticação, realizar o cadastro do usuário de teste dentro do próprio script de teste, tornando o teste autossuficiente.
- Garantir o middleware `cors` habilitado no back-end (`app.use(cors())`) em todos os ambientes de execução.

---

## Repositório de Código

- **Código-fonte versionado em repositório GitHub**, contendo:
  - Pasta `backend/` com o projeto back-end (Node.js + Express + JavaScript) e sua pasta de testes (`test/`, com Jest).
  - Pasta `frontend/` com o projeto front-end (React + Vite) e sua pasta de testes (`tests/`, com Playwright).
- **Banco de dados:** PostgreSQL.
- **Testes unitários funcionais** implementados e validados tanto no front-end quanto no back-end, incluindo teste de comunicação E2E entre frontend, backend e banco de dados.
- **Link do repositório:** _(inserir aqui o link do repositório GitHub a ser submetido no AVA)_

---

*Documento gerado para a disciplina de Teste de Sistemas — Projeto StudyFlow.*