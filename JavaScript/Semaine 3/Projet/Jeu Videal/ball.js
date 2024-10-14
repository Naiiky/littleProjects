// main.js
const ball = document.getElementById("ball");

let positionX = 100; // possition de depart de ma balle sur l'axe X donc horizontal
let positionY = 100; // possition de depart de ma balle sur l'axe Y donc vertical
let vitesseX = 2; // vitesse de la balle ( se mesure en pixel )
let vitesseY = 2; // vitesse de la balle ( se mesure en pixel )
let stopBall = false;
// permet la recuperation de la larger visible de mon element en prenant en compe padding/margin
const ballWidth = ball.offsetWidth;
// permet la recuperation de la hauteur visible de mon element en prenant en compe padding/margin
const ballHeight = ball.offsetHeight;
let idAnim;

function animateBall() {
  // mise a jour de la position de la balle
  positionX += vitesseX;
  positionY += vitesseY;

  // Détecté la les bordures de ma page
  // positionX donne la position de la balle
  // ballWidth represente la largeur qu on a donné a la ball
  // window.innerWidth me donne la largeur de la page
  if (positionX + ballWidth > window.innerWidth || positionX < 0) {
    // si la position de la balle plus la largeur est supperieure a ma largeur de page ou que ma position est inferieure a 0 alors je change le sense de vitesse de ma balle
    vitesseX = -vitesseX; // Inverser la direction de la balle
  }
  // Détecté la les bordures de ma page
  // positionY donne la position de la balle
  // ballHeight represente la largeur qu on a donné a la ball
  // window.innerHeight me donne la largeur de la page
  if (positionY + ballHeight > window.innerHeight || positionY < 0) {
    // si la position de la balle plus la hauteur est supperieure a ma hauteur de page ou que ma position est inferieure a 0 alors je change le sense de vitesse de ma balle
    vitesseY = -vitesseY; // Inverser la direction de la balle
  }

  // mise a jour de la nouvelle possition de ma balle
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";

  // rappel la fonction avant le prochaine rafraichissement de mon ecran
  // NE PAS OUBLIE DE METTRE UN ID POUR CIBLER MON ANIMATION
  idAnim = requestAnimationFrame(animateBall);
}

// lance la fonction
animateBall();

// evenement de mise en pause puis de reprise de l'animation
document.addEventListener("click", function () {
  if (!stopBall) {
    window.cancelAnimationFrame(idAnim); // Mettre en pause l'animation
    stopBall = true;
    console.log(stopBall);
  } else {
    animateBall(); // Reprendre l'animation
    stopBall = false;
    console.log(stopBall);
  }
});
