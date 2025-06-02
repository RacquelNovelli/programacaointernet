let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaConta = document.querySelector("#entradaConta");
let btCalcular = document.querySelector("#btCalcular");

function dividirConta() {
  let total = Number(entradaConta.value);

 
  let valorCarlos = Math.floor(total / 3);
  let valorAndre = Math.floor(total / 3);

 
  let valorFelipe = total - (valorCarlos + valorAndre);

  resultadoTexto.innerHTML =
    `Carlos: R$ ${valorCarlos.toFixed(2)}<br>` +
    `André: R$ ${valorAndre.toFixed(2)}<br>` +
    `Felipe: R$ ${valorFelipe.toFixed(2)}`;
}

btCalcular.onclick = function() {
  dividirConta();
}