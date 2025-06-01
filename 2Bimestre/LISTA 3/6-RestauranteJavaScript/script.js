let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaQuantidade = document.querySelector("#entradaQuantidade");
let btCalcular = document.querySelector("#btCalcular");

function calcularValor() {
  let quantidade = Number(entradaQuantidade.value);
  let preco = 12.00; // preço fixo do quilo

  let valorFinal = preco * quantidade;

  resultadoTexto.textContent = "Valor a ser pago: R$ " + valorFinal.toFixed(2);
}

btCalcular.onclick = function() {
  calcularValor();
}