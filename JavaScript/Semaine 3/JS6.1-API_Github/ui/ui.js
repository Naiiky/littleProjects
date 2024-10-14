import { dateDiffInDays } from "../utilities/utilities.js";

function showUser(user) {
  // Trouve l'élément dans le DOM avec la classe '.result.container'
  const resultContainer = document.querySelector(".result.container");
  // Crée un bloc HTML pour afficher les informations de l'utilisateur dans une carte
  const cardHTML = `
    <div class="card">
      <img src="${user.avatar_url}" alt="User Avatar">
      <h2>${user.name}</h2>
      <h3>Username: ${user.login}</h3>
      <p>Public Repos: ${user.public_repos}</p>
      <p>Account Created: ${formatDate(user.created_at)} (${dateDiffInDays(
    user.created_at
  )} days)</p>
    </div>
  `;
  // Met à jour le contenu de 'resultContainer' avec le bloc HTML de la carte utilisateur
  resultContainer.innerHTML = cardHTML;
}

function formatDate(dateString) {
  // Transforme la chaîne de date en objet Date
  const date = new Date(dateString);
  // Retourne la date formatée en une chaîne de caractères lisible localement
  return date.toLocaleDateString();
}

export default showUser;
