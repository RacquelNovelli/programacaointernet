let imputX = document.querySelector ("#LadoX");
let imputY = document.querySelector ("#LadoY");
let imputZ = document.querySelector ("#LadoZ");
let resultado = document.querySelector ("resultadoTriangulo")
let btCalcular = document.querySelector("#btCalcular");

function verificarTriangulo () {
    let X = Number (imputX.value)
    let Y = Number (imputY.value)
    let Z = Number (imputZ.value)

    if (x < y + z && y < x + z && z < x + y) {
    if (x === y && y === z) {
        paragrafoResultado.textContent = "Triângulo Equilátero";
    } else if (x === y || x === z || y === z) {
        paragrafoResultado.textContent = "Triângulo Isósceles";
    } else {
        paragrafoResultado.textContent = "Triângulo Escaleno";
    }
    } else {
        paragrafoResultado.textContent = "Não é um triângulo válido.";
    }
        botaoVerificar.onclick = function () {
        verificarTriangulo();
};
}

