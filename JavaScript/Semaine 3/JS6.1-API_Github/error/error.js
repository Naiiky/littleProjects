function showError(error) {
  // Sélectionne l'élément avec la classe CSS '.error' dans le document
    const errorContainer = document.querySelector('.error');
     // Modifie le texte contenu dans l'élément errorContainer pour afficher le message d'erreur
    errorContainer.textContent = `Error: ${error.message}`;
    // Définit le style CSS de l'élément errorContainer pour le rendre visible 
    errorContainer.style.display = 'block';
  }
  
  export default showError;
