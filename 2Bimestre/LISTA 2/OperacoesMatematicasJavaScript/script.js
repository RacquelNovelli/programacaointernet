let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaNum1 = document.querySelector("#entradaNum1");
let entradaNum2 = document.querySelector("#entradaNum2");
let btCalcular = document.querySelector("#btCalcular");

function calcularOperacoes() {
  let num1 = Number(entradaNum1.value);
  let num2 = Number(entradaNum2.value);

  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let multiplicacao = num1 * num2;
  let divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Divisão por zero!";

  resultadoTexto.innerHTML =
    `➕ Soma: ${soma}<br>` +
    `➖ Subtração: ${subtracao}<br>` +
    `✖️ Multiplicação: ${multiplicacao}<br>` +
    `➗ Divisão: ${divisao}`;
}

btCalcular.onclick = function() {
  calcularOperacoes();
}