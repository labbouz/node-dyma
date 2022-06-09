// import "./app/app.js";

const p = document.querySelector("p");
const image = document.querySelector("image");
const section = document.querySelector("section");
const a = document.querySelector("a");
const input = document.querySelector("input");

input.focus();

setTimeout(() => {
    input.disabled = true;
}, 2000);
