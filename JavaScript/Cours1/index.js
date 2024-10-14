import Request from "./Request.js";

document.addEventListener("DOMContentLoaded", () => {
  // Fonction appelée lorsqu'un bouton est cliqué
  function clickButton() {
    // cree une nouvelle instance de monForm
    const request = new Request("monForm");
    // Appelle ma fonction getInputs() pour  afficher les valeurs des inputs
    request.getInputs();
  }

  // Ajoute un écouteur d'événement au bouton
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", clickButton);
});
