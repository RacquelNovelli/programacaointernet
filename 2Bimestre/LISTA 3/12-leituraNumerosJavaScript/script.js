let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaNumero = document.querySelector("#entradaNumero");
let btCalcular = document.querySelector("#btCalcular");

function separarDigitos() {
  let numero = Number(entradaNumero.value);

  // Extrair dígitos
  let centena = Math.floor(numero / 100);
  let dezena = Math.floor((numero % 100) / 10);
  let unidade = numero % 10;

  resultadoTexto.innerHTML =
    `CENTENA = ${centena}<br>` +
    `DEZENA = ${dezena}<br>` +
    `UNIDADE = ${unidade}`;
}

btCalcular.onclick = function() {
  separarDigitos();
}