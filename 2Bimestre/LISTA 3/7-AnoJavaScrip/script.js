let resultadoTexto = document.querySelector("#resultadoTexto");
let entradaDia = document.querySelector("#entradaDia");
let entradaMes = document.querySelector("#entradaMes");
let btCalcular = document.querySelector("#btCalcular");

function calcularDias() {
  let dia = Number(entradaDia.value);
  let mes = Number(entradaMes.value);

  
  if (mes < 1 || mes > 12 || dia < 1 || dia > 30) {
    resultadoTexto.textContent = "Por favor, insira um dia (1-30) e um mês (1-12) válidos.";
    return;
  }

 
  let diasPassados = (mes - 1) * 30 + dia;

  resultadoTexto.textContent = "Dias desde o início do ano: " + diasPassados;
}

btCalcular.onclick = function() {
  calcularDias();
}