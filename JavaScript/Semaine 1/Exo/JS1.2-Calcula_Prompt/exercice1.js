/**
 * Créer ici le projet « Calculaprompt ».
 */

let firstNumber, secondNumber, operateur;

firstNumber = Number(prompt("Entrez le premier nombre"));
operateur = prompt("Entrez l'operateur");
secondNumber = Number(prompt("Entrez le second nombre"));
let resultat;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert(
    "L'une de vos entrez n'est pas un nombre veuillez reprendre la selection"
  );
  //a reutiliser pour les boucles
  // firstNumber = Number(prompt("Entrez le premier nombre"));
  // operateur = prompt("Entrez l'operateur");
  // secondNumber = Number(prompt("Entrez le second nombre"));
} // Effectuer le calcul basé sur l'opérateur
else if (operateur === "+") {
  resultat = firstNumber + secondNumber;
} else if (operateur === "-") {
  resultat = firstNumber - secondNumber;
} else if (operateur === "*") {
  resultat = firstNumber * secondNumber;
} else if (operateur === "/") {
  resultat = firstNumber / secondNumber;
} else {
  resultat = "Opérateur non reconnu";
}

console.log(
  `le calcule est le suivant : ${firstNumber} ${operateur} ${secondNumber}`
);

console.log("Voici le résultat : " + resultat);

document.write(
  `le calcule est le suivant : ${firstNumber} ${operateur} ${secondNumber}`
);
document.write("Voici le résultat : " + resultat);
