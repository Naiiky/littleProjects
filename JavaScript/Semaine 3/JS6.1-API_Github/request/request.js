async function getUser(username) {
  try {
    // Envoie une requête HTTP GET à l'API GitHub pour obtenir les informations de l'utilisateur spécifié par 'username'
    const response = await fetch(`https://api.github.com/users/${username}`);
    // Attend la résolution de la réponse HTTP et transforme le corps de la réponse en format JSON
    const userData = await response.json();
    // Retourne les informations de l'utilisateur sous forme d'un objet JavaScript
    return userData;
  } catch (error) {
    // Si une erreur survient lors de la récupération des informations de l'utilisateur
    // Jette une nouvelle erreur avec un message personnalisé incluant le message d'erreur original
    throw new Error(`Erreur lors de la récupération des données utilisateur : ${error.message}`);
  }
}

export default getUser;
