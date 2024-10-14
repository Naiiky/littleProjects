/**
 * Créer ici le projet bonus de calculatrice.
 */

/**
 * Voici une façon parmi d'autres d'atteindre le résultat souhaité.
 *
 * Le challenge ici est de découvrir la fonction `eval` en apprenant à faire
 * des recherches sur le web.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 *
 * Notez toutefois que la fonction `eval` représente de sérieux risques de
 * sécurité. Nous l'utilisons ici à des fins pédagogiques, mais elle n'a pas
 * sa place dans un projet réel. (:
 */

function appuyerBouton(valeur) {
  document.getElementById("ecran").value += valeur;
}

function calculer() {
  let resultat = eval(document.getElementById("ecran").value);
  document.getElementById("ecran").value = resultat;
}

function effacer() {
  document.getElementById("ecran").value = "";
}
