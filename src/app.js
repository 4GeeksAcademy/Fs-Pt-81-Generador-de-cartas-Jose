/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  const palos = ["♦", "♥", "♠", "♣"];
  const valores = [
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `J`,
    `Q`,
    `K`,
    `A`
  ];
  function generarCarta() {
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
    let color =
      paloAleatorio === "♥" || paloAleatorio === "♦" ? "red" : "black";
    const card = document.querySelector(`#card`);
    const paloUp = document.querySelector(`#paloUp`);
    const valoresDiv = document.querySelector(`#valores`);
    const paloDown = document.querySelector(`#paloDown`);
    console.log(valorAleatorio);
    paloUp.innerHTML = paloAleatorio;
    valoresDiv.innerHTML = valorAleatorio;
    paloDown.innerHTML = paloAleatorio;
    card.className = `card`;
    card.classList.add(color);
  }
  generarCarta();
};
