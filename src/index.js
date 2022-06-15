import "./style.css";

function afficherLeResultat(promesse, resultat, tenue) {
  const div = document.createElement("div");
  div.innerText = `La promesse ${promesse} retourne ${resultat}`;
  div.classList.add(tenue ? "succes" : "echec");
  document.querySelector("#app").append(div);
}

function toggleLoader() {
  const loader = document.querySelector(".loader");
  loader.style.display = loader.display === "none" ? "" : "none";
}

new Promise((resolve) => {
  setTimeout(() => resolve(22), 3000);
})
  .then(
    (res) =>
      new Promise((resolve, reject) => {
        setTimeout(() => reject(res * 2), 3000);
      })
  )
  .then((res) => afficherLeResultat("then", res, true))
  .catch((err) => afficherLeResultat("catch", err, false));
