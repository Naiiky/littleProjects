// Importation de la classe Validator depuis le fichier validator.js
import { Validator } from "./Validator.js";

// Attendre que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", () => {
  // Sélection du formulaire et des champs d'entrée
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");

  // Création d'une instance de Validator
  const validator = new Validator();

  // Ajout d'un écouteur d'événement pour la soumission du formulaire
  form.addEventListener("submit", (event) => {
    // Empeche le reload de la page lors de la validation de mon formulaire
    event.preventDefault();

    // supprime les erreurs, si je spam le bouton sa enchaine les erreurs
    document.querySelectorAll(".form-error").forEach((error) => error.remove());

    // Entrer du formulaire validé
    const nameValid = validator.validateName(nameInput.value);
    const emailValid = validator.validateEmail(emailInput.value);
    const ageValid = validator.validateAge(ageInput.value);

    // Si toutes les entrées sont valides
    if (nameValid && emailValid && ageValid) {
      // Création d'un objet contact avec les valeurs du formulaire
      const contact = {
        name: nameInput.value,
        email: emailInput.value,
        age: ageInput.value,
      };
      // Enregistrement de l'objet contact dans le localStorage
      localStorage.setItem("contact", JSON.stringify(contact));
      // Notification à l'utilisateur que le formulaire est valide et les données sont enregistrées
      alert(
        "Le formulaire est valide et la fiche contact est bien enregistrer"
      );
    } else {
      // Affichage des messages d'erreur pour les champs non valides
      if (!nameValid) {
        showError(nameInput, "Nom invalide");
      }
      if (!emailValid) {
        showError(emailInput, "Email invalide");
      }
      if (!ageValid) {
        showError(ageInput, "Age invalide");
      }
    }
  });

  // Fonction pour afficher un message d'erreur à côté d'un champ d'entrée
  function showError(input, message) {
    // Création d'un élément span pour afficher l'erreur
    const error = document.createElement("span");
    error.className = "form-error"; // Ajout de la classe CSS pour styliser l'erreur
    error.textContent = message; // Définition du message d'erreur
    // Insertion du message d'erreur après le champ d'entrée
    input.parentElement.insertBefore(error, input.nextSibling);
  }
});
