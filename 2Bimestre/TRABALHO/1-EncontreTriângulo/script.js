let inputX = document.querySelector ("#ladoX");
let inputY = document.querySelector ("#ladoY");
let inputZ = document.querySelector ("#ladoZ");
let resultado = document.querySelector ("#resultadoTriangulo")
let btCalcular = document.querySelector("#btCalcular");

function verificarTriangulo () {
    let X = Number (inputX.value)
    let Y = Number (inputY.value)
    let Z = Number (inputZ.value)

    if ((X < (Y + Z)) && (Y < (X + Z)) && (Z < (X + Y))) {
    if (X === Y && Y === Z) {
           
        resultado.textContent = "Triangulo Equilatero";
    } else if (X === Y || X === Z || Y === Z) {
        resultado.textContent = "Triangulo Isosceles";
    } else {
        resultado.textContent = "Triangulo Escaleno";
    }
    } else {
        resultado.textContent = "Nao e um triangulo valido.";
    }
        
}
  btCalcular.onclick = function () {
        verificarTriangulo();
}

