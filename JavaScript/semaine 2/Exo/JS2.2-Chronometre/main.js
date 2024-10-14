"use strict";

//declaration des variables

let seconds = 0;
let minutes = 0;
let hours = 0;
let ms = 0;
let timer, startButton, stopButton, resetButton;
let timeoutID; // Variable pour stocker l'identifiant de setTimeout

// DOMContentLoaded permet d'attendre que le DOM soit chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
  // Récupération de mes différents ID
  timer = document.querySelector("#chrono"); // balise p chrono
  startButton = document.querySelector("#start"); // bouton start
  stopButton = document.querySelector("#stop"); // bouton stop
  resetButton = document.querySelector("#reset"); // bouton reset

  // j'envoi un timer a 0 pour que l'utilisateur le vois
  timer.textContent = "00h 00m 00s 00ms";

  function updateTime() {
    ms += 10;
    if (ms === 990) {
      ms = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    timer.textContent = `${hours}h ${minutes}m ${seconds}s ${ms}ms`;

    timeoutID = setTimeout(updateTime, 10); // Met à jour le temps toutes les secondes
  }

  startButton.addEventListener("click", function () {
    // si timeoutID est diff de null ou undifined alors il passe dans la boucle, si il a une valeur il ne rentre pas
    if (!timeoutID) {
      updateTime();
    }
  });

  stopButton.addEventListener("click", function () {
    clearTimeout(timeoutID);
    timeoutID = null; // on remet timeout a null pour que si un nouveau click sur start commence il puisse rentrer dans la boucle
  });

  // je remet a 0 toute mes variables pour recommencer mon timer de 0 et le relance
  resetButton.addEventListener("click", function () {
    clearTimeout(timeoutID);
    timeoutID = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = "00h 00m 00s 00ms";
    updateTime();
  });
});
