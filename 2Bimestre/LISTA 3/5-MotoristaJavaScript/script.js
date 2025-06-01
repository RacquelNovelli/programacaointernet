let valorPago = document.querySelector("#dinheiro");
let valorLitro = document.querySelector("#valor");
let QuatidadeLitro = document.querySelector("#resultado");
let botaoocument = querySelector("#btCalcular");

function calcularLitro (){
    let dinheiro1 = Number(valorPago);
    let valor1 = Number(valorLitro);

    let litros = (dinheiro1 / valor1)

    QuatidadeLitro.textContent="litros obtidos" + litros;
}
    btCalcular.onclick = function() {
    calcularLitro();
}
    