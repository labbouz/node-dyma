const input = document.querySelector("input");

setTimeout(() => {
  // On sélectionne l'input :
  input.focus();
  // On défini son attribut value à 12, sa propriété value
  // sur le DOM est mise à jour automatiquement.
  input.setAttribute("value", 12);
  // On peut donc accéder à la propriété value du DOM :
  if (input.value !== 42) {
    // On décide que le champ n'est pas valide et on défini notre message d'erreur :
    input.setCustomValidity("42 est la seule réponse possible !");
    // On décide d'afficher dès maintenant le message d'erreur à l'utilisateur :
    input.reportValidity();
    // On sélectionne le texte pour qu'il puisse le remplacer
    input.select();
  }
}, 2000);
