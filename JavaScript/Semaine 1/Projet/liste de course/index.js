// La liste de courses est stockée dans une seule variable.
// Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
// Les fonctionnalités de gestion de la liste de courses sont :
// Ajouter un produit par son nom
// Supprimer un produit ayant un nom spécifique
// Supprimer tous les produits
// Afficher la taille et le contenu de la liste
// Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
// Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
// Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
// Ajouter 4 produits simples puis afficher les informations
// Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
// // Supprimer tous les produits puis afficher les informations

// Initialisation de la liste de courses avec trois produits.
let listeDeCourses = ["fraise", "banane", "raisin"];

// Fonction pour ajouter un produit à la liste de courses.
function ajouterProduit(nom) {
  listeDeCourses.push(nom); // Ajoute le produit passé en paramètre à la fin du tableau.
}

// Fonction pour supprimer un produit spécifique de la liste de courses.
function supprimerProduit(nom) {
  // Crée un nouveau tableau ne contenant pas le produit à supprimer et réassigne ce tableau à listeDeCourses.
  listeDeCourses = listeDeCourses.filter((produit) => produit !== nom);
}

// Fonction pour supprimer tous les produits de la liste de courses.
function supprimerTousLesProduits() {
  listeDeCourses = []; // Réinitialise listeDeCourses à un tableau vide.
}

// Fonction pour afficher la taille et le contenu de la liste de courses.
function afficherListeDeCourses() {
  console.log(
    `La liste de courses contient ${
      listeDeCourses.length
    } produits : ${listeDeCourses.join(", ")}` // Affiche le nombre de produits et leurs noms.
  );
}

// Appel initial pour afficher la liste de courses.
afficherListeDeCourses();

// Ajoute un produit à la liste après avoir demandé à l'utilisateur de saisir un nom.
ajouterProduit(prompt("Entrer le nom du produit à ajouter"));
afficherListeDeCourses(); // Affiche la liste après ajout.

// Supprime un produit après avoir demandé à l'utilisateur de saisir le nom du produit à supprimer.
supprimerProduit(prompt("Entrer le nom du produit à supprimer"));
afficherListeDeCourses(); // Affiche la liste après suppression.

// Supprime tous les produits de la liste.
supprimerTousLesProduits();
afficherListeDeCourses(); // Affiche la liste après avoir tout supprimé.
