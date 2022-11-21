[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555)](https://www.linkedin.com/in/renan-r-s-paiva/)

<br />
<div align="center">
  <h3 align="center">Saint Manager API</h3>

   <p align="center">
    API de catálogo de eventos religiosos onde o membro (Fiel) pode se cadastrar e inscrever nos eventos desejados.
    <br />
        (<a href="#usuários-pré-cadastrados">ver usuários pré-cadastrados</a>)
  </p>
</div>

<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
    <li><a href="#processo-de-trabalho">Processo de trabalho</a></li>
    <li>
      <a href="#como-executar-o-projeto">Como executar o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#executando-a-api">Executando a API</a></li>
        <li><a href="#usuários-pré-cadastrados">Usuários pré-cadastrados</a></li>
      </ul>
    </li>
    <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#autor">Autor</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>

# Sobre o projeto

Existe certas tecnologias que trazem conforto e rapidez, hoje as igrejas e vários tipos de instituição não podem se esconder e deixar passar as gerações mais novas, vindo para internet, elas podem trazer informações sobre seus eventos, trazendo vários fieis a se interessar e se inscrever.

Neste api fornece CRUD para o front permitir os fieis conseguem listar os eventos disponibilizados pela instituição, visualizar detalhes sobre eles e se inscrever nos eventos desejados.

Com o recurso de criação de conta o usuário informa os dados apenas uma vez, facilitando a inscrição em múltiplos eventos.

Além disso, a instituição também possui acesso para gerenciar os eventos disponíveis sem depender de um programador para alterar essas informações do site.

Os recursos disponiveis e implementados foram:

- Em documents possui os diagramas;
- Com o sequelize implementado e validando pode criar uma base de dados;
- 3 APIS criadas para consumir a base de dados;
- Possui camada de serviços (CRUD em todas as 3 APIS);
- Utiliza lib Validate em algumas camadas de controller;
- Autenticação de rotas para usuários e administrador;
- Camada de service para consumo do banco seprado do controller;

# Processo de trabalho

O primeiro passo foi escolher um problema: instituições religiosas que precisam consumir uma API para os eventos disponíveis e aceitar inscrições.

Seguindo a proposta do Bootcamp, a solução do problema foi implementada com a contrução de 3 API trabalhando com CRUD simples no banco de dados MySQL.

Desta forma, foi elaborado uns diagramas e utilizando o Postman para testar as rotas que está disponível no link:https://winter-meteor-506327.postman.co/workspace/Back-end-Infnet~a31b0429-a4ab-4f4d-9389-e64135117f98/collection/22798914-53999278-b0c3-4cc6-b03e-c41fe5ec2185?action=share&creator=22798914

Como o foco deste projeto era o desenvolvimento do back-end, ainda será adaptada para o front-end.

A gestão do projeto foi feita com base no ciclo PDCA (Planejar, Executar, Checar, Agir) e as tarefas foram quebradas em cards do Trello com base no quadro Kanban.

# Como executar o projeto

## Pré-requisitos

Antes de seguir o passo a passo para executar o projeto é preciso ter instalado no computador o [Git](https://git-scm.com/), o [Node.js](https://nodejs.org) e o gerenciador de pacotes `npm` (instalado junto com o Node.js) ou `yarn`.

## Executando a API

Para que o site funcione é preciso que a API esteja funcionando. Siga os passos abaixo para executá-la:

- Faça o download do código fonte no computador do API - Saint Manager:
```sh
git clone https://github.com/RenanRPaiva/saint-manager-back.git
```

- Com o terminal na pasta `api` execute os comandos abaixo para instalar as dependências e iniciar a API:
```sh
npm install
npm run start-dev
```
ou

```sh
yarn add
yarn start-dev
```

Link da API no Github: [Github](https://github.com/RenanRPaiva/saint-manager-back)

## Usuários pré-cadastrados

O banco de dados da API (Sequelize) já conta com os seguintes usuários de demonstração (Senhas criptografados na API):

### Administrador

**E-mail:** admn@adm.com

**Senha:** 12345

### Membro

**E-mail:** membro@membro.com

**Senha:** 1234

# Tecnologias utilizadas
- Javascript
- MySQL
- Sequelize/Sequelize-cli
- JsonWebToken
- Validator
- Nodemon
- DotEnv
- Entre outras lib's.

# Autor
Renan Rodrigues S. Paiva - renan_13rj@yahoo.com.br

https://www.linkedin.com/in/renan-r-s-paiva/

# Agradecimentos

Obrigado [Infnet](https://www.infnet.edu.br/). Este projeto foi uma grande oportunidade de iniciar no desenvolvimento com o back-end.