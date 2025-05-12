let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaSaldo = document.querySelector("#entradaSaldo");
let btReajustar = document.querySelector("#btReajustar");
let btReajustar2 = document.querySelector("#btReajustar2");
let btReajustar5 = document.querySelector("#btReajustar5");
let btReajustar10 = document.querySelector("#btReajustar10");

function aplicarReajuste(porcentagem) {
  let saldo = Number(entradaSaldo.value);
  let saldoReajustado = (saldo * (porcentagem / 100))+saldo;

  resultadoTexto.textContent = "Saldo com reajuste: R$ " + saldoReajustado.toFixed(2);
}



btReajustar.onclick = function() {
  aplicarReajuste(1);
}
btReajustar2.onclick = function() {
  aplicarReajuste(2);
}
btReajustar5.onclick = function() {
  aplicarReajuste(5);
}
btReajustar10.onclick = function() {
  aplicarReajuste(10);
}