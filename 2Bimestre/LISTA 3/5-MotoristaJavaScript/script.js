let valorPago = document.querySelector("#dinheiro");
let valorLitro = document.querySelector("#valor");
let QuatidadeLitro = document.querySelector("#resultado");
let botao = document.querySelector("#btCalcular");

function calcularLitro() {
    let dinheiro1 = Number(valorPago.value);
    let valor1 = Number(valorLitro.value);

    let litros = dinheiro1 / valor1;

    QuatidadeLitro.textContent = "Litros Abastecidos⛽:" + litros.toFixed(2);
}

botao.onclick = function () {
    calcularLitro();
}
    