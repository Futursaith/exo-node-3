const axios = require("axios");

// permet de contacter notre serveur
axios
  .get('http://localhost:3333')
  // dès qu'on a réussi à joindre le serveur
  .then(response => {
    console.log(response.data);
  });

// permet de contacter notre serveur
axios
  .get('http://localhost:3333/calc/add/1/2')
  // dès qu'on a réussi à joindre le serveur
  .then(response => {
    console.log(response.data);
  });

axios
  .get('http://localhost:3333/calc/sub/10/2')
  .then(response => {
    console.log(response.data);
  });

axios
  .get('http://localhost:3333/calc/mul/12/4')
  .then(response => {
    console.log(response.data);
  });

axios
  .get('http://localhost:3333/calc/div/10/5')
  .then(response => {
    console.log(response.data);
  });

axios
  .get('http://localhost:3333/calc/mod/8/4')
  .then(response => {
    console.log(response.data);
  });


