// validator.js
// Définition de la classe Validator
export class Validator {
  // Méthode pour valider le nom
  validateName(name) {
    // Expression régulière pour vérifier que le nom contient seulement des lettres et des espaces
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name); // Retourne true si le nom est valide, sinon false
  }

  // Méthode pour valider l'email
  validateEmail(email) {
    // Expression régulière pour vérifier que l'email est dans un format correct
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); // Retourne true si l'email est valide, sinon false
  }

  // Méthode pour valider l'âge
  validateAge(age) {
    // Expression régulière pour vérifier que l'âge contient seulement des chiffres
    const agePattern = /^[0-9]+$/;
    return agePattern.test(age) && Number(age) > 0; // Retourne true si l'âge est valide (nombre positif), sinon false
  }
}
