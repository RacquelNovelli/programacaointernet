let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaConta = document.querySelector("#entradaConta");
let btCalcular = document.querySelector("#btCalcular");

function dividirConta() {
  let total = Number(entradaConta.value);

  // Carlos e André pagam sem centavos (arredondados para baixo)
  let valorCarlos = Math.floor(total / 3);
  let valorAndre = Math.floor(total / 3);

  // Felipe paga o restante
  let valorFelipe = total - (valorCarlos + valorAndre);

  resultadoTexto.innerHTML =
    `Carlos: R$ ${valorCarlos.toFixed(2)}<br>` +
    `André: R$ ${valorAndre.toFixed(2)}<br>` +
    `Felipe: R$ ${valorFelipe.toFixed(2)}`;
}

btCalcular.onclick = function() {
  dividirConta();
}