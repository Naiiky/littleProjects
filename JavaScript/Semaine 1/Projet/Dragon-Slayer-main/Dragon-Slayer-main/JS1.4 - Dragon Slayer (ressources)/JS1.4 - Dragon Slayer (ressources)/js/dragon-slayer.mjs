"use strict"; // Mode strict du JavaScript
// import {
//   lancerDes,
//   nombreDeDesAleatoire,
//   nombreDeFacesAleatoire,
// } from "./utilities.mjs";
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
// initialisation de mes variables
let nombreDes,
  nombreFaces,
  resultatLancerDes,
  pvJoueur,
  pvDragon,
  initiativeJoueur,
  initiativeDragon,
  joueur,
  dragon,
  attaqueDuJoueur,
  attaqueDuDragon;
let tour = 1;

// fonction qui calcule le nombre de des a lancer
function nombreDeDesAleatoire() {
  return Math.floor(Math.random() * 10) + 1;
}

// fonction qui calcule le nombre de faces du des
function nombreDeFacesAleatoire() {
  const faces = [6, 7, 8, 10]; // Liste des faces possibles, 9 est exclu
  let index = Math.floor(Math.random() * faces.length);
  return faces[index];
}

// fonction qui lance les des et qui calcule le total des points en fonction du nombre de des et de faces
function lancerDes(nombreDes, nombreFaces) {
  let total = 0;
  for (let i = 0; i < nombreDes; i++) {
    if (nombreFaces === 6) {
      total += Math.floor(Math.random() * 6) + 1;
    } else if (nombreFaces === 7) {
      total += Math.floor(Math.random() * 7) + 1;
    } else if (nombreFaces === 8) {
      total += Math.floor(Math.random() * 8) + 1;
    } else if (nombreFaces === 10) {
      total += Math.floor(Math.random() * 10) + 1;
    }
  }
  return total;
}

// fontion qui execute le lancer de des complet
function executerLancer() {
  nombreDes = nombreDeDesAleatoire();
  nombreFaces = nombreDeFacesAleatoire();
  resultatLancerDes = lancerDes(nombreDes, nombreFaces);
  return resultatLancerDes;
}

//fontion d attaque du dragon
function attaqueDragon() {
  resultatLancerDes = lancerDes(nombreDes, nombreFaces);
  pvJoueur -= resultatLancerDes;
  attaqueDuDragon = resultatLancerDes;
  return pvJoueur;
}

//fontion d attaque du joueur
function attaqueJoueur() {
  resultatLancerDes = lancerDes(nombreDes, nombreFaces);
  pvDragon -= resultatLancerDes;
  attaqueDuJoueur = resultatLancerDes;
  return pvDragon;
}

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

function initialisationUser() {
  // initialisation des joueurs et des points de vie du joueur et du dragon
  // joueur
  resultatLancerDes = executerLancer();
  pvJoueur = 1000 + resultatLancerDes;
  console.log("PV Joueur:", pvJoueur);
  // dragon
  resultatLancerDes = executerLancer();
  pvDragon = 1000 + resultatLancerDes;
  console.log("PV Dragon:", pvDragon);
  return pvJoueur, pvDragon;
}

function debutTour() {
  // Lance les dés pour déterminer l'initiative du joueur
  initiativeJoueur = executerLancer();
  console.log("Initiative Joueur:", initiativeJoueur);

  // Lance les dés pour déterminer l'initiative du dragon
  initiativeDragon = executerLancer();
  console.log("Initiative Dragon:", initiativeDragon);

  // Compare les initiatives pour déterminer qui attaque en premier
  if (initiativeJoueur < initiativeDragon) {
    // Si l'initiative du dragon est supérieure, le dragon attaque
    pvJoueur = attaqueDragon();
    console.log("PV Joueur:", pvJoueur);

    // Vérifie si le joueur est vaincu
    if (pvJoueur <= 0) {
      console.log("Le joueur a été vaincu");
      joueur = false;
      dragon = true;
    }
  } else {
    // Si l'initiative du joueur est supérieure ou égale, le joueur attaque en premier
    pvDragon = attaqueJoueur();
    console.log("PV Dragon:", pvDragon);

    // Vérifie si le dragon est vaincu
    if (pvDragon <= 0) {
      console.log("Le dragon a été vaincu");
      joueur = true;
      dragon = false;
    }
  }
}

function affichageStart() {
  // Début de la section HTML pour le jeu
  document.write(`<div class="game">`);
  // Titre de démarrage du jeu
  document.write(`<h2>Que la fête commence !!</h2>`);
  // Conteneur pour l'état du jeu
  document.write(`<div class="game-state">`);
  // Affichage du joueur avec son image et ses points de vie
  document.write(`<figure class="game-state_player">`);
  document.write(`<img src="images/knight.png" alt="Chevalier" />`);
  document.write(`<figcaption>${pvJoueur}</figcaption>`);
  document.write(`</figure>`);
  // Affichage du dragon avec son image et ses points de vie
  document.write(`<figure class="game-state_player">`);
  document.write(`<img src="images/dragon.png" alt="Dragon" />`);
  document.write(`<figcaption>${pvDragon}</figcaption>`);
  document.write(`</figure>`);
  // Fin du conteneur pour l'état du jeu
  document.write(`</div>`);
}

function affichageEnd() {
  // Début du pied de page pour marquer la fin du jeu
  document.write(`<footer>`);
  // Titre indiquant la fin de la partie
  document.write(`<h3>Fin de la partie</h3>`);
  // Conteneur pour le résultat final du jeu
  document.write(`<figure class="game-end">`);

  // Condition pour vérifier si le joueur a gagné
  if (joueur === true) {
    // Message et image si le joueur gagne
    document.write(
      `<figcaption>Vous avez gagner le combat, le dragon c'est fait découper !</figcaption>`
    );
    document.write(
      `<img src="images/knight-winner.png" alt="Knight vainqueur" />`
    );
  } else {
    // Message et image si le joueur perd
    document.write(
      `<figcaption>Vous avez perdu le combat, le dragon vous a carbonisé !</figcaption>`
    );
    document.write(`<img src="images/dragon.png" alt="Dragon" />`);
  }
  // Fin du conteneur pour le résultat final
  document.write(`</figure>`);
  // Fin du pied de page
  document.write(`</footer>`);
}

function affichageTour() {
  // Affiche le numéro du tour actuel
  document.write(`<h3>Tour n°${tour}</h3>`);

  // Début de la figure pour le tour
  document.write(`<figure class="game-round">`);

  // Condition pour déterminer qui attaque en premier basé sur l'initiative
  if (initiativeJoueur > initiativeDragon) {
    // Affichage si le joueur est plus rapide et attaque le dragon
    document.write(
      `<img src="images/knight-winner.png" alt="Chevalier vainqueur" />`
    );
    document.write(`<figcaption>Vous êtes le plus rapide, vous attaquez le dragon et lui infligez ${attaqueDuJoueur}
    points de dommage !</figcaption>`);
  } else {
    // Affichage si le dragon est plus rapide et attaque le joueur
    document.write(
      `<img src="images/dragon-winner.png" alt="Dragon vainqueur" />`
    );
    document.write(`<figcaption>Le dragon prend l'initiative, vous attaque et vous inflige ${attaqueDuDragon}
    points de dommage !</figcaption>`);
  }
  // Fin de la figure pour le tour
  document.write(`</figure>`);

  // Affichage de l'état des joueurs
  document.write(`<div class="game-state">`);
  document.write(`<figure class="game-state_player">`);

  // Affichage des points de vie du joueur avec une image adaptée à son état
  if (pvJoueur < 300 && pvJoueur > 0) {
    document.write(`<img src="images/knight-wounded.png" alt="Chevalier" />`);
    document.write(`<figcaption>${pvJoueur}</figcaption>`);
  } else if (pvJoueur <= 0) {
    document.write(`<img src="images/knight-wounded.png" alt="Chevalier" />`);
    document.write(`<figcaption>game over</figcaption>`);
  } else {
    document.write(`<img src="images/knight.png" alt="Chevalier" />`);
    document.write(`<figcaption>${pvJoueur}</figcaption>`);
  }
  document.write(`</figure>`);
  document.write(`<figure class="game-state_player">`);

  // Affichage des points de vie du dragon avec une image adaptée à son état
  if (pvDragon < 300 && pvDragon > 0) {
    document.write(`<img src="images/dragon-wounded.png" alt="Chevalier" />`);
    document.write(`<figcaption>${pvDragon}</figcaption>`);
  } else if (pvDragon <= 0) {
    document.write(`<img src="images/dragon-wounded.png" alt="Chevalier" />`);
    document.write(`<figcaption>game over</figcaption>`);
  } else {
    document.write(`<img src="images/dragon.png" alt="Chevalier" />`);
    document.write(`<figcaption>${pvDragon}</figcaption>`);
  }
  document.write(`</figure>`);
  document.write(`</div>`);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

function startGame() {
  initialisationUser();
  affichageStart();
  while (pvJoueur >= 0 && pvDragon >= 0) {
    debutTour();
    affichageTour();
    tour++;
  }
  affichageEnd();
}

startGame();
