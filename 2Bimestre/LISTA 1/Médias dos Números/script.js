let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaNum1 = document.querySelector("#entradaNum1");
let entradaNum2 = document.querySelector("#entradaNum2");
let entradaNum3 = document.querySelector("#entradaNum3");
let btCalcular = document.querySelector("#btCalcular");

function calcularMedias() {
  let num1 = Number(entradaNum1.value);
  let num2 = Number(entradaNum2.value);
  let num3 = Number(entradaNum3.value);

  let mediaAritmetica = (num1 + num2 + num3) / 3;

  let peso1 = 3;
  let peso2 = 2;
  let peso3 = 5;
  let mediaPonderada = (num1 * peso1 + num2 * peso2 + num3 * peso3) / (peso1 + peso2 + peso3);

  let somaDasMedias = mediaAritmetica + mediaPonderada;
  let mediaDasMedias = somaDasMedias / 2;

  resultadoTexto.innerHTML =
    `Média Aritmética: ${mediaAritmetica.toFixed(2)}<br>` +
    `Média Ponderada: ${mediaPonderada.toFixed(2)}<br>` +
    `Soma das Médias: ${somaDasMedias.toFixed(2)}<br>` +
    `Média das Médias: ${mediaDasMedias.toFixed(2)}`;
}

btCalcular.onclick = function() {
  calcularMedias();
}