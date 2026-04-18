# api

Aqui vamos anotar comando que aprendemos ao longo do processo


To install dependencies:

```bash
npm install
```

To run:

```bash
npm run dev
```


Lê o banco de dados e atualiza o arquivo schema.prisma automaticamente :

```bash
Você criou tabelas direto no banco
Quer sincronizar com o Prisma:

npx prisma db pull
``` 
 

Cria o código que permite usar o Prisma no projeto :

```bash
Sem isso você NÃO consegue usar prisma.usuario.findMany():

npx prisma generate
``` 


This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
