# 📚 StudyFlow

## 📌 Descrição
O StudyFlow é uma aplicação web full stack de gerenciamento de estudos e produtividade acadêmica. Permite que o usuário se cadastre, faça login, organize sessões de estudo e acompanhe seu progresso, com autenticação segura e testes automatizados validando a qualidade do sistema.

## 🚀 Tecnologias

### Backend
- Node.js
- Express
- JavaScript (ES Modules)
- PostgreSQL
- pg (driver nativo)
- bcrypt (criptografia de senha)
- jsonwebtoken (autenticação via JWT)
- cors / dotenv

### Frontend
- React
- Vite
- React Router DOM
- Tailwind CSS

### Testes
- Jest (testes unitários do backend)
- Playwright (testes end-to-end do frontend)

## 📁 Estrutura do Projeto
```
studyflow/
  backend/
    src/
      config/
        connection.js
      controller/
        UsuarioController.js
        SessaoController.js
      service/
        UsuarioService.js
        SessaoService.js
      repository/
        UsuarioRepository.js
        SessaoRepository.js
      routes/
        UsuarioRoutes.js
        SessaoRoutes.js
      app.js
      server.js
    test/
      Usuario.test.js
      Sessoes.test.js
    .env
    package.json

  frontend/
    study/
      src/
        pages/
          Login/
          CadastroUsuarios/
          Dashboard/
          Sessoes/
          Perfil/
        layout/
          DashboardLayout/
        components/
          Modal/
          RotaProtegida/
        services/
          api.js
        main.jsx
      tests/
        login.spec.js
        cadastro.spec.js
        sessoes.spec.js
      playwright.config.js
      package.json
```

## ⚙️ Funcionalidades
- Cadastro de usuários com senha criptografada (bcrypt)
- Login com autenticação via JWT
- Rotas protegidas no frontend (acesso apenas para usuários autenticados)
- CRUD completo de usuários (listar, buscar, criar, atualizar, deletar)
- CRUD completo de sessões de estudo, vinculadas ao usuário logado
- Marcar sessões como concluídas
- Identificação automática de sessões atrasadas
- Edição e exclusão de perfil do usuário
- Sidebar retrátil no layout do dashboard
- Testes unitários no backend e testes end-to-end no frontend

## 🧪 Testes
O projeto conta com testes automatizados cobrindo backend e frontend:

- **Jest** — testes unitários no backend, cobrindo as camadas de repository, service e controller (CRUD de usuários e de sessões).
- **Playwright** — testes end-to-end no frontend, validando login, cadastro, criação de sessões e a comunicação completa entre frontend, backend e banco de dados.

### Rodando os testes do backend
```bash
cd backend
npm install
npm test
```

### Rodando os testes do frontend
```bash
cd frontend/study
npm install
npx playwright install
npx playwright test
```

## 🧠 Objetivo
Projeto desenvolvido para a disciplina de Teste de Sistemas, com foco em desenvolvimento full stack com arquitetura em camadas (routes → controller → service → repository), integração com banco de dados relacional (PostgreSQL), autenticação segura e aplicação de testes de software conforme práticas da indústria.

## ▶️ Como rodar o projeto

### Backend
```bash
cd backend
npm install
node src/server.js
```

### Frontend
```bash
cd frontend/study
npm install
npm run dev
```

## 🔑 Variáveis de Ambiente
Crie um arquivo `.env` na pasta `backend` com:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/studyflow
PORT=3000
JWT_SECRET=studyflow_segredo_super_secreto_2026
```

## 🗄️ Banco de Dados
Antes de rodar o backend, crie o banco `studyflow` no PostgreSQL e execute:

```sql
CREATE TABLE usuario (
  usuario_id serial primary key,
  email varchar(150) unique not null,
  nome varchar(100) not null,
  senha varchar(255) not null,
  dataRegistro Date
);

CREATE TABLE sessao (
  id serial primary key,
  materia varchar(150) not null,
  tempoEstudado time not null,
  dataRegistro date,
  status varchar(20) default 'pendente',
  id_usuario int,
  constraint fk_usuario foreign key (id_usuario) references usuario(usuario_id)
);
```
