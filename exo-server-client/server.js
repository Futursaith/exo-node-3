
// importe express dans notre application
const express = require('express');

// je créé le serveur
const server = express();

// le port d'écoute de notre serveur
const PORT = 3333;

/**
 * 
 * définition des routes qu'utilisera le client;
 * request: requête que fait le client
 * response: réponse que renvoie le serveur
 * 
 *  */
server.get('/', (request, response) => {
  response.send("test");
});

// on commence nos routes spécifiques

// route pour additionner => add
server.get('/calc/add/:nb1/:nb2', (request, response) => {

  if (isNaN(request.params.nb1) || isNaN(request.params.nb2)) {
    response.send("écrire uniquement des nombres")
  }
  const responseObject = {
    op: "add",
    nb1: request.params.nb1,
    nb2: request.params.nb2,
    result: Number.parseInt(request.params.nb1) + Number.parseInt(request.params.nb2)
  };
  response.json(responseObject);

});

// route pour soustraire
server.get('/calc/sub/:nb1/:nb2', (request, response) => {

  if (isNaN(request.params.nb1) || isNaN(request.params.nb2)) {
    response.send("écrire uniquement des nombres")
  }

  const responseObject = {
    op: "sub",
    nb1: request.params.nb1,
    nb2: request.params.nb2,
    result: Number.parseInt(request.params.nb1) - Number.parseInt(request.params.nb2)
  };
  response.json(responseObject);

});

// route pour la multiplication
server.get('/calc/mul/:nb1/:nb2', (request, response) => {

  if (isNaN(request.params.nb1) || isNaN(request.params.nb2)) {
    response.send("écrire uniquement des nombres")
  }

  const responseObject = {
    op: "mul",
    nb1: request.params.nb1,
    nb2: request.params.nb2,
    result: Number.parseInt(request.params.nb1) * Number.parseInt(request.params.nb2)
  };
  response.json(responseObject);

});

// route pour la division

server.get('/calc/div/:nb1/:nb2', (request, response) => {

  if (isNaN(request.params.nb1) || isNaN(request.params.nb2)) {
    response.send("écrire uniquement des nombres")
  }
  else if (request.params.nb2 == 0) {
    response.send("division par 0 impossible")
  }

  const responseObject = {
    op: "div",
    nb1: request.params.nb1,
    nb2: request.params.nb2,
    result: Number.parseInt(request.params.nb1) / Number.parseInt(request.params.nb2)
  };
  response.json(responseObject);

});

server.get('/calc/mod/:nb1/:nb2', (request, response) => {

  if (isNaN(request.params.nb1) || isNaN(request.params.nb2)) {
    response.send("écrire uniquement des nombres")
  }

  else if (request.params.nb2 == 0) {
    response.send("division par 0 impossible")
  }

  const responseObject = {
    op: "mod",
    nb1: request.params.nb1,
    nb2: request.params.nb2,
    result: Number.parseInt(request.params.nb1) % Number.parseInt(request.params.nb2)
  };
  response.json(responseObject);

});



server.listen(PORT, () => {
  //exécution d'un affichage au lacement du serveur.
  console.log(`Example server listening at http://localhost:${PORT}`);
});