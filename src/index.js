import "./style.css";

const square = document.querySelector("div");

square.onmouseover = () => {
  square.style.backgroundColor = "#f00";
};

square.onmouseout = () => {
  square.style.backgroundColor = "#eee";
};
