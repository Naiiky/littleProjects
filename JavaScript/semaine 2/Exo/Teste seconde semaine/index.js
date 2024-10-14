// Sélectionner les éléments pour appliquer les styles
const container = document.querySelector(".container"); // Sélectionner le conteneur avec la classe "container"
const paragraphs = document.querySelectorAll("p"); // Sélectionner tous les paragraphes
const ul = document.querySelector("ul"); // Sélectionner la liste non ordonnée (ul)
const lis = document.querySelectorAll("li"); // Sélectionner tous les éléments de la liste (li)
const as = document.querySelectorAll("a"); // Sélectionner tous les liens (a)

// Appliquer les styles au conteneur
container.style.backgroundColor = "lightgrey"; // Changer le fond du conteneur en gris clair

// Appliquer les styles à tous les paragraphes
for (const p of paragraphs) {
  p.style.color = "yellow"; // Changer la couleur du texte en jaune
  p.style.backgroundColor = "#EC53EC"; // Changer la couleur de fond en rose
}

// Appliquer les styles à la liste non ordonnée
ul.style.backgroundColor = "#EC53EC"; // Changer la couleur de fond de la liste en rose

// Appliquer les styles à chaque élément de la liste
for (const li of lis) {
  li.style.color = "white"; // Changer la couleur du texte en blanc
  li.style.backgroundColor = "#4CAF50"; // Changer la couleur de fond en vert (code couleur #4CAF50)
}

// Appliquer les styles à chaque lien
for (const a of as) {
  a.style.color = "white"; // Changer la couleur du texte en blanc
  a.style.backgroundColor = "blue"; // Changer la couleur de fond en bleu
}

// Créer et ajouter un nouveau paragraphe à l'article
const newParagraph = document.createElement("p"); // Créer un nouvel élément de paragraphe
newParagraph.textContent = "Creation de mon nouveau paragraphe"; // Définir le contenu textuel du nouveau paragraphe
document.querySelector("section").appendChild(newParagraph); // Ajouter le nouveau paragraphe à la fin de l'article
