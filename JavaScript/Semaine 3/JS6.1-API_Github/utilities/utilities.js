function dateDiffInDays(dateString) {
  // Convertit une chaîne de date en objet Date
  const date = new Date(dateString);
  // Obtient la date actuelle
  const today = new Date();
  // Calcule la différence en millisecondes entre aujourd'hui et la date donnée
  const diffInMs = today.getTime() - date.getTime();
  // Convertit la différence en jours en divisant par le nombre de millisecondes dans une journée
  const diffInDays = Math.floor(diffInMs / (1000 * 3600 * 24));
  // Retourne le nombre de jours de différence, arrondi à l'entier inférieur
  return diffInDays;
}

function deleteCardIf(card) {
  // Vérifie si la carte existe et est attachée à un parent
  if (card && card.parentNode) {
    // Retire la carte de son parent
    card.parentNode.removeChild(card);
  }
}

export { dateDiffInDays, deleteCardIf };
