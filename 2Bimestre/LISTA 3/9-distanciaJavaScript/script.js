let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaX1 = document.querySelector("#entradaX1");
let entradaY1 = document.querySelector("#entradaY1");
let entradaX2 = document.querySelector("#entradaX2");
let entradaY2 = document.querySelector("#entradaY2");
let btCalcular = document.querySelector("#btCalcular");

function calcularDistancia() {
  let x1 = Number(entradaX1.value);
  let y1 = Number(entradaY1.value);
  let x2 = Number(entradaX2.value);
  let y2 = Number(entradaY2.value);

 
  let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  resultadoTexto.textContent = "Distância entre os pontos: " + distancia.toFixed(2);
}

btCalcular.onclick = function() {
  calcularDistancia();
}
