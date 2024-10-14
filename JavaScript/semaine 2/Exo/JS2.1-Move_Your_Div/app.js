/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

let div = document.querySelector(".red");
let clickButton = document.querySelector("#moveDiv");
let modalDiv = document.querySelector(".modal");
let modalButton = document.querySelector("#hideModal");
let i = 0;

function moveRedDiv() {
  if (i === 0) {
    div.style.left = "unset";
    div.style.right = "0";
    i++;
  } else if (i === 1) {
    div.style.top = "unset";
    div.style.bottom = "0";
    i++;
  } else if (i === 2) {
    div.style.right = "unset";
    div.style.left = "0";
    i++;
  } else if (i === 3) {
    div.style.bottom = "unset";
    div.style.top = "0";
    modalDiv.style.display = "block";
    i = 0;
  }
}
function removeModal() {
  modalDiv.style.display = "none";
  console.log("ntm");
}

clickButton.addEventListener("click", moveRedDiv);
modalButton.addEventListener("click", removeModal);
