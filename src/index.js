import "./style.css";
import "./loader.css";

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

// Vous pouvez changer resolve par reject pour essayer :
const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(22), 3000));

p1.finally(toggleLoader);

p1.then((resultat) => {
    afficherLeResultat("p1", resultat, true);
});

p1.catch((resultat) => {
    afficherLeResultat("p1", resultat, false);
});
