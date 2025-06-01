let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaDias = document.querySelector("#entradaDias");
let btCalcular = document.querySelector("#btCalcular");

function converterDias() {
  let totalDias = Number(entradaDias.value);

  // Considerando 1 ano = 12 meses, 1 mês = 30 dias
  let anos = Math.floor(totalDias / (12 * 30));
  let restoDias = totalDias % (12 * 30);

  let meses = Math.floor(restoDias / 30);
  let dias = restoDias % 30;

  resultadoTexto.textContent = `Anos: ${anos}, Meses: ${meses}, Dias: ${dias}`;
}

btCalcular.onclick = function() {
  converterDias();
}