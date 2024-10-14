"use strict";

// Nous allons initialiser nos variables

let ball = {}; // création de mon objet ball
let game = {}; // création de mon objet game
let platformGame = {}; // création de mon objet plateforme (sous la balle)
let gamePlayID = null;
let startGame = true;
let gameOver = false;
let loose = 0;
let win = 0;

document.addEventListener("DOMContentLoaded", () => {
  initialisationGame();
  gameDisplay();
});

// fonction qui permet le resert total de mes variables
function initialisationGame() {
  ball.x = 400;
  ball.y = 540;
  ball.color = "red";
  ball.radius = 10;
  ball.directionY = 1;
  ball.directionX = 1;

  platformGame.x = 385; // Centre de la plateforme initialement sous la balle
  platformGame.y = 580; // Position initiale de la plateforme sous la balle
  platformGame.color = "black";
  platformGame.length = 100; // Longueur de la plateforme
  platformGame.height = 10; // Hauteur de la plateforme

  // assignation de mes variables dans mon objet game
  game.canvasWidth = 800;
  game.canvasHeight = 600;
  game.color = "gray";
  game.context = null;
  game.directionY = 1;
  game.directionX = 1;

  game.context = document.getElementById("canvas").getContext("2d");
  game.context.fillStyle = game.color;
  game.context.fillRect(0, 0, game.canvasWidth, game.canvasHeight);
}

// =====================================================================================================
//Fontion qui lance mon jeu / elle sert aussi a jouer
// =====================================================================================================

function gamePlay() {
  // Affichage de la position de la balle
  ball.y += 1.5 * ball.directionY;
  ball.x += 1.5 * ball.directionX;

  // Verifie si la balle touche la parti basse de mon canvas
  if (ball.y + ball.radius > game.canvasHeight) {
    // Si je touche le bas GAME OVER
    window.cancelAnimationFrame(gamePlayID);
    displayGameOver();
    // return renvoi une valeur mais aussi fait sortir de la function en cours ( sert d'arret )
    return;
  }

  // Verifie si la balle touche la parti haute de mon canvas
  if (ball.y - ball.radius < 0) {
    ball.directionY *= -1.03;
  }

  // Verifie si la balle touche la parti droite ou gauche de mon canvas
  if (ball.x + ball.radius > game.canvasWidth || ball.x - ball.radius < 0) {
    ball.directionX *= -1.03;
  }

  // Verifie si la balle touche ou non ma plateforme pour renvoyer la balle
  if (
    ball.y + ball.radius >= platformGame.y &&
    ball.x >= platformGame.x &&
    ball.x <= platformGame.x + platformGame.length
  ) {
    ball.directionY *= -1;
  }

  // lancement de ma fonction gameDisplay
  gameDisplay();
  gamePlayID = requestAnimationFrame(gamePlay);
}

// =====================================================================================================
// Affiche GameOver
// =====================================================================================================

function displayGameOver() {
  // changement d'etats de mes variable

  loose++;
  startGame = false;
  gameOver = true;

  // Affichage de mon gameOver et incrémentation de ma loosing streak

  game.context.fillStyle = "blue";
  game.context.font = "bold 48px serif";
  game.context.textAlign = "center";
  game.context.fillText(
    "GAME OVER",
    game.canvasWidth / 2,
    game.canvasHeight / 2
  );

  game.context.fillStyle = "blue";
  game.context.font = "bold 24px serif";
  game.context.textAlign = "center";
  game.context.fillText(
    "Cliquez pour relancer le jeu",
    game.canvasWidth / 2,
    game.canvasHeight / 2 + 50
  );

  game.context.fillStyle = "blue";
  game.context.font = "bold 16px serif";
  game.context.textAlign = "center";
  game.context.fillText(
    `LOOSE = ${loose} `,
    game.canvasWidth / 2 + 100,
    game.canvasHeight / 2 + 100
  );
}
// =====================================================================================================
//Fontion qui permet l'affichage du jeu
// =====================================================================================================

function gameDisplay() {
  // Efface le canvas
  game.context.clearRect(0, 0, game.canvasWidth, game.canvasHeight);

  // Remplit le canvas avec la couleur grise
  game.context.fillStyle = game.color;
  game.context.fillRect(0, 0, game.canvasWidth, game.canvasHeight);

  // Dessine la plateforme
  game.context.fillStyle = platformGame.color;
  game.context.fillRect(
    platformGame.x,
    platformGame.y,
    platformGame.length,
    platformGame.height
  );

  // Dessine la balle
  game.context.beginPath();
  game.context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  game.context.fillStyle = ball.color;
  game.context.fill();
  game.context.closePath();

  // Affiche le texte "Start game on CLICK"
  if (startGame) {
    game.context.fillStyle = "blue";
    game.context.font = "bold 24px serif";
    game.context.textAlign = "center";
    game.context.fillText(
      "Start game on CLICK",
      game.canvasWidth / 2,
      game.canvasHeight / 2
    );
  }
}

// =====================================================================================================
// fontion qui permet le mouvement de ma plateform de droite a gauche ( avec les touches directionnelles)
// =====================================================================================================

function movePlatform(e) {
  // On détecte la touche et la direction puis on change les coordonnées
  switch (e.key) {
    case "ArrowRight":
      if (platformGame.x + platformGame.length < game.canvasWidth)
        platformGame.x += 30; // Déplacement à droite
      break;
    case "ArrowLeft":
      if (platformGame.x > 0) platformGame.x -= 30; // Déplacement à gauche
      break;
  }
}

// =====================================================================================================
// Evenement
// =====================================================================================================

// Start mon jeu sur un click
document.addEventListener("click", function () {
  if (!startGame) {
    window.cancelAnimationFrame(gamePlayID); // Mettre en pause l'animation
    startGame = true;
  } else {
    gamePlay();
    startGame = false;
  }
});

// reset mes variable et relance l affichage de mon jeu
document.addEventListener("click", function () {
  if (gameOver) {
    gameOver = false;
    initialisationGame();
    gameDisplay();
  }
});

// Déplacement de la plateforme avec les flèches gauche et droite
document.addEventListener("keydown", movePlatform);
