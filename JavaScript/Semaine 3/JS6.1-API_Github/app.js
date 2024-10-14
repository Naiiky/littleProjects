import showError from "./error/error.js";
import getUser from "./request/request.js";
import showUser from "./ui/ui.js";

// Sélectionne le formulaire et ajoute un écouteur pour l'événement 'submit'
document.querySelector("form").addEventListener("submit", (e) => {
  // Empêche le rechargement automatique de la page lors de la soumission du formulaire
  e.preventDefault();

  // Récupère la valeur de l'input ayant le nom 'username'
  const username = document.querySelector('input[name="username"]').value;

  // Appelle la fonction getUser avec le nom d'utilisateur récupéré
  getUser(username)
    // Si la promesse est résolue, appelle showUser avec les données de l'utilisateur
    .then((user) => showUser(user))
    // Si la promesse est rejetée, crée une nouvelle instance d'Error et appelle showError
    .catch((err) => showError(new Error(err)));
});
