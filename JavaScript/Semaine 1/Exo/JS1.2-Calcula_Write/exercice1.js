let x = window.prompt("Premier nombre :");
let numberX = Number(x);

while (isNaN(numberX) || x === "") {
  console.error("Merci d'entrer un premier nombre valide");
  x = window.prompt("Premier nombre :");
  numberX = Number(x);
}

let y = window.prompt("Second nombre :");
let numberY = Number(y);

while (isNaN(numberY) || y === "") {
  console.error("Merci d'entrer un second nombre valide");
  y = window.prompt("Second nombre :");
  numberY = Number(y);
}

let operator = window.prompt("Opérateur arithmétique :");
while (true) {
  if (
    operator === "*" ||
    operator === "x" ||
    operator === "." ||
    operator === "X"
  ) {
    document.write(
      `<h1> Voici le résultat de votre opération ${numberX} ${operator} ${numberY} = ${
        numberX * numberY
      }</h1>`
    );
    break;
  } else if (operator === "/" || operator === "÷") {
    document.write(
      `<h1> Voici le résultat de votre opération ${numberX} ${operator} ${numberY} = ${
        numberX / numberY
      }</h1>`
    );
    break;
  } else if (operator === "+") {
    document.write(
      `<h1> Voici le résultat de votre opération ${numberX} ${operator} ${numberY} = ${
        numberX + numberY
      }</h1>`
    );
    break;
  } else if (operator === "-") {
    document.write(
      `<h1> Voici le résultat de votre opération ${numberX} ${operator} ${numberY} = ${
        numberX - numberY
      }</h1>`
    );
    break;
  } else {
    console.error('Opérateur "' + operator + '" inconnu.');
    operator = window.prompt("Opérateur arithmétique :");
  }
}
