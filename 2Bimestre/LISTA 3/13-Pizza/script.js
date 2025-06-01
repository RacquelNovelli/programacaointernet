let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaRaio = document.querySelector("#entradaRaio");
let btCalcular = document.querySelector("#btCalcular");

function calcularArea() {
  let R = Number(entradaRaio.value);
  let pi = 3.14;
  let area = pi * R * R;

  resultadoTexto.textContent = "Área da pizza: " + area.toFixed(2);
}

btCalcular.onclick = function() {
  calcularArea();
}