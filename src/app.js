const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];
let cont = 0;

function logRequests(req, res, next) {
  const {url, method} = req;
  const logLabel = `[${method.toUpperCase()} ${url}] ⛏ `
  console.time(logLabel);
  next();
  console.timeEnd(logLabel)
  
}

app.use(logRequests);

app.get("/repositories", (request, response) => {
    response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;
  
  if (!title || !url) {
    return response.status(400).json({error: "Os campos title e url devem ser preenchidos"});
  }

  repository = {id: uuid(), title, url, techs, likes: 0}

  repositories.push(repository);

  return response.json(repository);

});

app.put("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const {title, url, techs} = request.body;

  const repositoryIndex = repositories.findIndex(r => r.id === id);
  
  if (repositoryIndex < 0) {
    return response.status(400).json({error: "repositório não encontrado"});
  }
  
  const likes = repositories[repositoryIndex].likes;
  const repository = {id, title, url, techs, likes};
  repositories[repositoryIndex] = repository;

  return response.json(repository);

});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const repositoryIndex = repositories.findIndex(r  => r.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({error: "Repositório não encontrado"});
  }

  repositories.splice(repositoryIndex, 1); 
  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;
  
  const repositoryIndex = repositories.findIndex(r => r.id === id);
  
  if (repositoryIndex < 0) {
    return response.status(400).json({error: "Repositório não encontrado"})
  }

  repositories[repositoryIndex].likes += 1;
  return response.json(repositories[repositoryIndex]);


});

module.exports = app;
