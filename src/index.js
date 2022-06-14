import "./style.css";

new Promise((resolve) => {
    resolve(4);
})
    .then((res) => res.une.prop.qui.nexiste.pas)
    .catch((err) => console.error(err.message))
    .catch((err) => console.error(err.message));
