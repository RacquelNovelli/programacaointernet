let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaSaldo = document.querySelector("#entradaSaldo");
let btReajustar = document.querySelector("#btReajustar");

function aplicarReajuste() {
  let saldo = Number(entradaSaldo.value);
  let saldoReajustado = saldo * 1.01;

  resultadoTexto.textContent = "Saldo com reajuste: R$ " + saldoReajustado.toFixed(2);
}

btReajustar.onclick = function() {
  aplicarReajuste();
}