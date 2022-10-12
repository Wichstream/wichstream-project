# [Wicstream - Projeto Dashboard - Banco de Dados, Backend e Frontend]

<br />

> Features

- **Material-UI Design**
- React, Redux, Redux-persist
- Authentication: JWT Login/Register/Logout
- Features: Typescript / SQLite / TypeORM / Joy (validation) / Passport library - `passport-jwt` strategy.

<br />

> Testado com:

| NodeJS | NPM | YARN | Status | 
| --- | --- | --- | --- | 
| `v16.13.0` | `v8.1.0`   | `v1.22.5` | ✔️ | 
| `v14.15.0` | `v6.14.8`  | `v1.22.5` | ✔️ |
| `v12.22.0` | `v6.14.11` | `v1.22.5` | ✔️ |

<br >

## ✨ Como baixar e executar o projeto

Para baixar e executar é necessário ter NodeJs versão >= 12.x e ter o GIT para fazer o clone/download do projeto.

**Passo #1** - Clonar o projeto

```bash
$ git clone url
$ cd frontend
```

<br >

**Passo #2** - Instalar dependencias com o npm ou com o yarn

```bash
$ npm i
// OU
$ yarn
```

<br />

**Passo #3** - Iniciar o projeto no perfil de desenvolvimento

```bash
$ npm run start 
// OU
$ yarn start
```

<br />

## ✨ Configurando o servidor Backend

A aplicação vem junto com autenticação via JWT e já fornece um basico de cadastro, login e logout.

**URL Servidor Backend** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'
};
```

<br />

**Documentacão da API Backend** - POSTMAN Collection

<br />

## ✨ Servidor Backend Node Js

Features:

- Typescript / Node js / Express server
- JWT authentication (`passport-jwt` strategy)
- Persistence: SQLite 

<br />

### Compilando o Servidor Backend

**Passo #1** - Clonar o projeto 

```bash
$ git clone url
$ cd api-server-nodejs
```

**Passo #2** - Instalar dependências via NPM or Yarn

```bash
$ npm i
// OU
$ yarn
```

**Passo #3** - Executar o Banco de Dados SQLite via TypeORM

```
$ yarn typeorm migration:run
```

**Passo #4** - Iniciar o servidor Backend modo (Desenvolvimento)

```bash
$ npm dev
// OU
$ yarn dev
```

<br /> 