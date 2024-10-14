"use strict"; // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

// fonction qui calcule le nombre de des a lancer
export function nombreDeDesAleatoire() {
  return Math.floor(Math.random() * 10) + 1;
}

// fonction qui calcule le nombre de faces du des
export function nombreDeFacesAleatoire() {
  const faces = [6, 7, 8, 10]; // Liste des faces possibles, 9 est exclu
  let index = Math.floor(Math.random() * faces.length);
  return faces[index];
}

// fonction qui lance les des et qui calcule le total des points en fonction du nombre de des et de faces
export function lancerDes(nombreDes, nombreFaces) {
  let total = 0;
  for (let i = 0; i < nombreDes; i++) {
    if (nombreFaces === 6) {
      total += Math.floor(Math.random() * 6) + 1;
    } else if (nombreFaces === 7) {
      total += Math.floor(Math.random() * 7) + 1;
    } else if (nombreFaces === 8) {
      total += Math.floor(Math.random() * 8) + 1;
    } else if (nombreFaces === 10) {
      total += Math.floor(Math.random() * 10) + 1;
    }
  }
  return total;
}
