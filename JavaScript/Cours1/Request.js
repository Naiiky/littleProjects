// Mise en place de ma classe Requeste
export default class Request {
  // Constructeur de la classe qui est appelé quand on cree une nouvelle instance de ma classe
  constructor(formId) {
    console.log(formId); // FormId vien recuperer l id de mon formulaire
    // Je stock les information dans mon argument formId
    this.form = document.getElementById(formId);
    console.log(formId);
  }

  // function qui me permet de recuperer les informations de mes inputs
  getInputs() {
    // Sélectionne tous les éléments input dans mon formulaire
    const inputs = this.form.querySelectorAll("input");
    console.log(inputs);
    // converti ma Nodeliste en tabeau
    const values = Array.from(inputs).map((input) => input.value);
    // Affiche les valeurs dans la console
    console.log(values);
  }
}
