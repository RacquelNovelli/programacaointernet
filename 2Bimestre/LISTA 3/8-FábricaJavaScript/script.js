let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaPequena = document.querySelector("#entradaPequena");
let entradaMedia = document.querySelector("#entradaMedia");
let entradaGrande = document.querySelector("#entradaGrande");
let btCalcular = document.querySelector("#btCalcular");

function calcularValor() {
  let qtdPequena = Number(entradaPequena.value);
  let qtdMedia = Number(entradaMedia.value);
  let qtdGrande = Number(entradaGrande.value);

  let precoPequena = 10;
  let precoMedia = 12;
  let precoGrande = 15;

  let valorFinal = (qtdPequena * precoPequena) + (qtdMedia * precoMedia) + (qtdGrande * precoGrande);

  resultadoTexto.textContent = "Valor a ser arrecadado: R$ " + valorFinal.toFixed(2);
}

btCalcular.onclick = function() {
  calcularValor();
}
