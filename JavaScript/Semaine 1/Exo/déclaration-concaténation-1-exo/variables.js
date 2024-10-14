// a)
// • Déclarer une variable avec le mot clé `let` ayant comme nom « nom ».
// • Puis, sur la ligne suivante, lui assigner la valeur « votre nom ».

let nom;
nom = "EliasLaSalope";

/**
 * B)
 * Déclarer une variable avec le mot-clé `const` ayant comme nom « prenom ».
 * assigner la valeur « Votre prénom » sur la meme ligne.
 */

const prenom = "EliasLaSalope";

/**
 * C)
 * Déclarer une variable avec le mot-clé `let` ayant comme nom « age ».
 * Puis, sur la ligne suivante, lui assigner la valeur « votre age ».
 */

let age;
aga = 12;

/**
 * d)
 * afficher dans la console « je m'appelle Jonathan Dostrel et j'ai 30 ans »
 */

console.log("je m'appelle Jonathan Dostrel et j'ai 30 ans");

/**
 * F)
 * Déclarer une variable « msg » avec le mot-clé `const` en lui assignant une
 * valeur de votre choix, telle qu'un message ou un nombre.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

const msg = "Elias est une grosse salope";

/**
 * G)
 * Déclarer une variable ayant pour type String.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

let userName = "Naiky"; // Je declare ma chaine de caractere "string"
console.log(userName); // j'affiche ma variable

/**
 * H)
 * Déclarer une variable `x` dont la valeur est égale à `66`.
 * Déclarer une variable `y` dont la valeur est égale à `12`.
 * Déclarer une variable `result` dont la valeur est égale à la somme de `x`
 * et `y`.
 * Afficher la valeur de la variable `result` dans la console du navigateur.
 */

let x = 66;
let y = 12;
let resultat = x + y;

resultat = `La somme de ${x} + ${y} = ${resultat}`;
console.log(resultat);

/**
 * I)
 * Déclarer deux variables de type String et qui auront chacun un nombre de votre choix
 * Additionner les deux variables
 * exemple 20 + 5 = 25 ok    /  20 + 5 = 205 faux
 */

let nombre1 = "20";
let nombre2 = "5";
let somme = parseInt(nombre1) + parseInt(nombre2);

console.log(`${nombre1} + ${nombre2} = ${somme}`); // Affiche "20 + 5 = 25"

/**
 * J)
 * Vous voulez savoir quel âge vous aurez? Calculez-le!
 * Stockez votre année de naissance dans une variable.
 * Stockez une année future dans une variable.
 * Calculez vos 2 âges possibles pour cette année en fonction des valeurs stockées.
 * Par exemple, si vous êtes né en 1988, vous aurez 37 ou 38 ans en 2026, selon le mois en 2026.
 * Sortez-les à l’écran comme ça: « J'aurai soit NN ou NN en AAAA », en remplaçant NN par les valeurs
 */

let anneeNaissance = 1988;
let anneeFuture = 2026;
let agePossible1 = anneeFuture - anneeNaissance; // Si l'anniversaire est déjà passé cette année
let agePossible2 = agePossible1 - 1; // Si l'anniversaire n'est pas encore passé cette année

console.log(
  `J'aurai soit ${agePossible2} ou ${agePossible1} en ${anneeFuture}`
);

/**
 * K)
 *  Vous êtes-vous déjà demandé combien coûte un « approvisionnement à vie » de votre collation préférée? Ne vous étonnez plus!
 *  Stockez votre âge actuel dans une variable.
 *  Stockez un âge maximum dans une variable.
 *  Conservez une quantité estimée par jour (sous forme de nombre).
 *  Calculez combien vous mangeriez au total pour le reste de votre vie.
 * Sortez le résultat à l’écran exemple: « Vous aurez besoin de NN  tasses de thé pour tenir jusqu'à l'âge de 100
 */

let ageActuel = 30;
let ageMaximum = 100;
let quantiteParJour = 3; // Quantité estimée de tasses de thé par jour

let joursRestants = (ageMaximum - ageActuel) * 365; // Approximation sans compter les années bissextiles
let totalConsommation = joursRestants * quantiteParJour;

console.log(
  `Vous aurez besoin de ${totalConsommation} tasses de thé pour tenir jusqu'à l'âge de ${ageMaximum}`
);

/**
 * L)
 * Échanger les valeurs de deux variables. Si au départ a=7 et b=3, il faudrait qu'à la fin b=7 et a=3.
  Cet exercice semble facile si l'on fait intervenir provisoirement une troisième variable c, qui permettra les étapes :
 */

let a = 7;
let b = 3;
let c;

c = a; // c prend la valeur de a
a = b; // a prend la valeur de b
b = c; // b prend la valeur de c

console.log(`a = ${a}, b = ${b}`); // Affiche "a = 3, b = 7"

// Bonus reprendre l'exercice L et refaites le son utilisé une 3e variable

let aa = 7;
let bb = 3;

aa = aa + bb; // a devient 10 (7+3)
bb = aa - bb; // b devient 7 (10-3)
aa = aa - bb; // a devient 3 (10-7)

console.log(`a = ${a}, b = ${b}`); // Affiche "a = 3, b = 7"

// echange de 3 variable

let d = 7;
let e = 3;
let f = 4;

let temp = d; // Sauvegarde temporaire de la valeur de d
d = e; // d prend la valeur de e
e = f; // e prend la valeur de f
f = temp; // f prend la valeur initiale de d (sauvegardée dans temp)

console.log(`d = ${d}, e = ${e}, f = ${f}`); // Affiche "d = 3, e = 4, f = 7"
