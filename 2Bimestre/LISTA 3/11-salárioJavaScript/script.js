let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaSalario = document.querySelector("#entradaSalario");
let btCalcular = document.querySelector("#btCalcular");

function calcularSalario() {
  let salarioInicial = Number(entradaSalario.value);


  let salarioAumentado = salarioInicial * 1.15;


  let salarioFinal = salarioAumentado * 0.92;

  resultadoTexto.innerHTML =
    `Salário inicial: R$ ${salarioInicial.toFixed(2)}<br>` +
    `Salário com aumento: R$ ${salarioAumentado.toFixed(2)}<br>` +
    `Salário final (com desconto de 8%): R$ ${salarioFinal.toFixed(2)}`;
}

btCalcular.onclick = function() {
  calcularSalario();
}