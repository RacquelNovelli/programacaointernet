let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaPreco = document.querySelector("#entradaPreco");
let entradaQuantidade = document.querySelector("#entradaQuantidade");
let btCalcular = document.querySelector("#btCalcular");

function calcularValor() {
  let preco = Number(entradaPreco.value);
  let quantidade = Number(entradaQuantidade.value);

  let valorFinal = preco * quantidade;

  resultadoTexto.textContent = "Valor a ser pago: R$ " + valorFinal.toFixed(2);
}

btCalcular.onclick = function() {
  calcularValor();
}