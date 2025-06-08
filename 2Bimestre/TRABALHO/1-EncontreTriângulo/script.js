let inputX = document.querySelector("#ladoX");
let inputY = document.querySelector("#ladoY");
let inputZ = document.querySelector("#ladoZ");
let resultado = document.querySelector("#resultadoTriangulo");
let imagem = document.querySelector("#imagemTriangulo");
let btCalcular = document.querySelector("#btCalcular");

function verificarTriangulo() {
    let X = Number(inputX.value);
    let Y = Number(inputY.value);
    let Z = Number(inputZ.value);

    imagem.style.display = "none"; 

    if ((X < Y + Z) && (Y < X + Z) && (Z < X + Y)) {
        if (X === Y && Y === Z) {
            resultado.textContent = "Triangulo Equilatero";
            imagem.src = "imagens/equilatero.png";
            imagem.style.display = "block";
        } else if (X === Y || X === Z || Y === Z) {
            resultado.textContent = "Triangulo Isosceles";
            imagem.src = "imagens/isosceles.png";
            imagem.style.display = "block";
        } else {
            resultado.textContent = "Triangulo Escaleno";
            imagem.src = "imagens/escaleno.png";
            imagem.style.display = "block";
        }
    } else {
        resultado.textContent = "Não é um triangulo valido.";
        imagem.style.display = "none";
    }
}

  btCalcular.onclick = function () {
        verificarTriangulo();
}

