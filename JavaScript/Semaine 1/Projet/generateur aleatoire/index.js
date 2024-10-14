/**
 * juste compt
 * mise en place d'un mini jeu ou l'objectif est de trouvé le nombre aléatoire qui a été généré
 * si le nombre choisi et plus petit que le nombre aléatoire, affiché dans le prompt <<le nombre caché est plus grand :))>>
 * si le nombre choisi et plus grand que le nombre aléatoire, affiché dans le prompt <<le nombre caché est plus petit :))>>
 * si le nombre choisi et le meme que le nombre aléatoire, affiché dans un alert <<Bravo vous avez trouvé le nombre caché :))>>
 *
 * Utilisation : boucle, prompt, condition(if, else, ect..), Math.random => pour généré un nombre aléatoire, (function)
 *
 * Bonus 1 :
 * ajouté un systeme de point de vie pour que l'utilisateur soit limité en nombre de coup a joué exemple (5 chances avant de trouvé le nombre caché)
 *
 * Bonus 2 : quand l'utilisateur donne un nombre incorrect retourné lui dans le prompt avec le nombre de point de vie restant
 *
 * Bonus 3 : au lancement du jeu afficher les regle du jeu
 *           afficher les coup joué par l'utilisateur dans la page HTML qu'ils ou elles ont perdu ou pas
 *           afficher aussi le nombre généré aléatoirement
 *
 * ATTENTION : vérifié bien que l'utilisateur entre bien un nombre
 */
function afficherRegles() {
  alert(
    "Règles du jeu :\n" +
      "1. Vous devez deviner un nombre entre 1 et 100.\n" +
      "2. Vous avez 10 tentatives pour trouver le bon nombre.\n" +
      "3. Après chaque tentative, vous serez informé si le nombre secret est plus grand ou plus petit que votre choix.\n" +
      "4. Bonne chance !"
  );
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Afficher les règles avant de commencer le jeu
afficherRegles();

let nombreAleatoire = getRandomArbitrary(1, 100); // Correction pour générer entre 1 et 100
console.log(nombreAleatoire);

let userNumber = Number(prompt("Devinez le nombre secret"));
let tentatives = 10; // Nombre de tentatives

while (userNumber > 100 || userNumber < 0) {
  userNumber = Number(prompt("Rentrez un nombre entre 1 - 100"));
}

while (userNumber !== nombreAleatoire && tentatives > 0) {
  if (userNumber > nombreAleatoire) {
    alert(
      `Le nombre secret est plus petit que votre nombre, il vous reste ${tentatives} chances`
    );
  } else if (userNumber < nombreAleatoire) {
    alert(
      `Le nombre secret est plus grand que votre nombre, il vous reste ${tentatives} chances`
    );
  }
  tentatives--; // Décrémenter le nombre de tentatives après chaque essai
  if (tentatives > 0) {
    userNumber = Number(prompt("Choisissez un autre nombre"));
  }
}

if (userNumber === nombreAleatoire) {
  document.write(
    `<h1>Bravo !! Vous avez trouvé le nombre secret alors qu'il vous restait ${tentatives} chances</h1>`
  );
  document.write(`<h1>Le nombre secret était : ${nombreAleatoire}</h1>`);
} else {
  document.write(
    `<h1>Dommage !! Le nombre secret était : ${nombreAleatoire}</h1>`
  );
}
