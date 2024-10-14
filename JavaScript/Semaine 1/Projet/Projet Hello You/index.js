let firstName; // création de la variable prénom
let lastName;
let bornYear, bornMonth, bornDay;
let currentYear, currentMonth, currentDay;

firstName = prompt("Quel est votre prénom ?"); // Demande du prénom
lastName = prompt("Quel est votre nom ?"); // Demande du nom
bornYear = prompt("Quelle est votre année de naissance ?"); // Demande de l'année de naissance
bornMonth = prompt("Quel est votre mois de naissance ? (1-12)"); // Demande du mois de naissance
bornDay = prompt("Quel est votre jour de naissance ?"); // Demande du jour de naissance

// Obtention de la date courante
let currentDate = new Date();
currentYear = currentDate.getFullYear();
currentMonth = currentDate.getMonth() + 1; // getMonth() renvoie un mois qui commence à 0 et non à 1
currentDay = currentDate.getDate();

console.log(currentDate, currentDay, currentMonth, currentYear);

// Calcul de l'âge
// Si le current mois est plus grand que le mois de naissance ou que currentmois et egale et que le current day est plus grand que
// le day alors age --

let age = currentYear - bornYear;
if (
  currentMonth < bornMonth ||
  (currentMonth === bornMonth && currentDay < bornDay)
) {
  age--; // Décrémenter l'âge si l'anniversaire n'est pas encore passé cette année
}

console.log(`Âge actuel : ${age}`);

let resultat = alert(
  `Salut ${firstName} ${lastName}, tu as actuellement ${age} ans !`
); // Affichage de l'âge

console.log(resultat); // Affichage du résultat dans la console
