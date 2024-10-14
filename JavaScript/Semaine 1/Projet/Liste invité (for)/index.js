// liste d'invités
// C'est votre anniversaire, vous souhaitez créer un petit programme pour vous aider à gérer la liste de vos invités. Pour placer vos invités lors de cette grande fête, vous allez imprimer leurs prénoms sur de petits cartons. Selon le nombre de caractères du prénom, il vous faudra alors des tailles différentes:

// jusqu'à 6 lettres, ce sont des petits cartons
// de 6 à 8 lettres, ce sont des cartons de taille moyenne
// plus de 8 lettres, ce sont des cartons de grande taille
// En JavaScript, créez un tableau qui contiendra la liste des prénoms de vos invités.

// Puis à l'aide d'une boucle for, parcourez ce tableau et afficher la liste des invités sous forme de liste à puce avec à chaque fois le prénom puis le format du carton nécessaire.

// - Valentin MOYEN
// - Laura PETIT

// Bonus Afficher sous cette liste le nombre de petits cartons, le nombre de moyens et le nombre de grands cartons nécessaires.

let nbrInvites = prompt("Entrez le nombre d'invités");
let nameInvites;
let taille = [];
let tabInvite = [];
let petit = 0,
  moyen = 0,
  grand = 0;

for (let i = 0; i < nbrInvites; i++) {
  nameInvites = prompt(
    `Entrez le nom de vos ${i}/${nbrInvites} invités (un a la fois)`
  );
  if (nameInvites.length <= 6) {
    tabInvite.push(nameInvites);
    taille.push("petit");
    petit++;
  } else if (nameInvites.length <= 8) {
    tabInvite.push(nameInvites);
    taille.push("moyen");
    moyen++;
  } else {
    tabInvite.push(nameInvites);
    taille.push("grand");
    grand++;
  }
}

// for (let i = 0; i < tabInvite.length; i++) {
//   document.write(`<li>${tabInvite[i]} --- : --- ${taille[i]}</li>`);
// }

// Utilisation de la boucle for...of pour parcourir le tableau des invités
for (const [index, invite] of tabInvite.entries()) {
  document.write(`<li>${invite} --- : --- ${taille[index]}</li>`);
}

document.write(`<p>Nombre de petits cartons : ${petit}</p>`);
document.write(`<p>Nombre de moyens cartons : ${moyen}</p>`);
document.write(`<p>Nombre de grands cartons : ${grand}</p>`);

console.log(tabInvite);
console.log(taille);

// Énoncé
// Créer puis afficher en HTML un objet représentant une voiture :

// La marque de la voiture
// Son année de fabrication
// Sa date d'achat
// La liste des passagers (au moins 2), avec le prénom de chacun des passagers

let voiture = {
  marque: "Toyota",
  anneeFabrication: 2021,
  dateAchat: "2023-01-15",
  passagers: {
    passager1: "Alice",
    passager2: "Bob",
  },
};

console.log(voiture);
