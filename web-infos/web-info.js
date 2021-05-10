
// on récupère la librairie qui permet d'interagir avec le système de fichiers
const fs = require('fs');
const webScraper = require("./web-scraper.js");

/*
    on veut récupérer le nom du site issu de la commande =>
        node web-info.js nom_du_site
*/

const nomDuSite = process.argv[2];

let reponse = {
  url: nomDuSite
};

// on appelle la fonction qui permet de récupérer les données du site
webScraper(reponse).then(resultat => {

  const reponseJSON = JSON.stringify(resultat);

  // cwd = current working directory => endroit dans ton disque dur d'où est exécuté le script
  // console.log(process.cwd())

  fs.writeFile('info.json', reponseJSON, function (err) {
    // ligne 25: message en cas d'erreur   
    if (err) return console.log(err);
    // ligne 26: message en cas de succès
    console.log(`successfully wrote ${reponseJSON} to file info.json`);
  });
});

