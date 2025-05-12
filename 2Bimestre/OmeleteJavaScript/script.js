let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaPessoas = document.querySelector("#entradaPessoas");
let btCalcular = document.querySelector("#btCalcular");

function calcularIngredientes() {
  let pessoas = Number(entradaPessoas.value);

  let ovos = pessoas * 2;
  let queijo = pessoas * 50;

  resultadoTexto.innerHTML =
    `Para ${pessoas} pessoa(s), você vai precisar de:<br>` +
    `🥚 ${ovos} ovos<br>` +
    `🧀 ${queijo} gramas de queijo`;
}

btCalcular.onclick = function() {
  calcularIngredientes();
}