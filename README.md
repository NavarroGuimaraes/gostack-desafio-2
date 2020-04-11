<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 02: Conceitos do Node.js
</h3>

<p align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made with the help of Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafios?style=social">
  </a>
</p>

## :rocket: Sobre o desafio

Nesse desafio, implementei funcionalidades para o método get, put, post e delete para o recurso de repositórios.

A idéia da aplicação é para armazenar repositórios do seu portfólio, que permitirão a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

### Template da aplicação

Tudo desenvolvido aqui foi baseado num template disponibilizado pela equipe da rocketseat (inclusive esse readme rsrsrsrs)

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-conceitos-nodejs)**

Para iniciar a aplicação, é necessário instalar as dependencias da mesma executando o comando `yarn` no terminal dentro da pasta do projeto :)

### Rotas da aplicação

As rotas que foram criadas nessa aplicação foram:

- **`POST /repositories`**: A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota deve alterar apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

### Específicação dos testes

Para rodar os testes, você deve executar o comando `yarn test` na pasta da aplicação. Os testes presentes são:

- **`should be able to create a new repository`**: garante que a aplicação permite que um repositório seja criado, e retorne um json com o projeto criado.

- **`should be able to list the repositories`**: garante que a aplicação retornaum array com todos os repositórios que foram criados até o momento.

- **`should be able to update repository`**: garante que a aplicação permite que sejam alterados apenas os campos `url`, `title` e `techs`.

- **`should not be able to update a repository that does not exist`**: garante que a aplicação validaa na rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should not be able to update repository likes manually`**: garante que os os likes dos repositórios não são alterados ao atualizar o mesmo, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota de responsável por aumentar o número de likes.

- **`should be able to delete the repository`**: gatante que a aplicação permite a exclusão de um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status `204`.

- **`should not be able to delete a repository that does not exist`**: garante que a aplicação valida a rota de delete para verificar se o id do repositório enviado pela url existe ou não. Caso não exista, retorna um erro com status `400`.

- **`should be able to give a like to the repository`**: garante que a aplicação permite que um repositório com o id informado possa receber likes. O valor de likes será sempre incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

- **`should not be able to like a repository that does not exist`**: garante que na  rota de like o id do repositório enviado pela url seja verificado se ou não. Caso não exista, retornar um erro com status `400`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💜 by Rocketseat (e eu 😍) :wave:
