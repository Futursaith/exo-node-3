
// axios sert à faire des requêtes vers d'autres serveurs
const axios = require("axios");
// jsdom est la librairie qui permet de simuler un navigateur
const { JSDOM } = require("jsdom");

// c'est cette fonction qui va "voler" les données d'un site
const webScraper = async (reponse) => {
  try {
    // je récupère la donnée brute de mon site
    const { data } = await axios.get(reponse.url);
    // je créé un navigateur virtuel, car sans ça on ne peut pas lire correctement la page web
    const navigateur = new JSDOM(data, {
      // cette propriété signifie qu'on va exécuter le javascript de la page qu'on est en train de scraper   
      runScripts: "dangerously",
      // cette propriété signifie qu'on peut télécharger les ressources contenues en lien dans la page qu'on scrape
      resources: "usable"
    });
    // on va récupérer le document, c'est à dire la page web
    const { document } = navigateur.window;
    // je vais pouvoir ajouter des choses à ma réponse
    reponse.contentLength = document.body.innerHTML.length;
    reponse.nbOfImages = document.getElementsByTagName("img").length;
    reponse.nbOfLinks = document.getElementsByTagName("a").length;
    reponse.title = document.getElementsByTagName("head")[0].getElementsByTagName("title")[0].text;
    return reponse;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = webScraper;