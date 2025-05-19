let h1Texto = document.querySelector("#h1Texto");
let entradadeTexto = document.querySelector("#entradadeTexto")
let btSomaTexto = document.querySelector("#btSomaTexto")
let entradadeTextodois = document.querySelector("#entradadeTextodois")

function somarTexto(){
    let Numeros = entradadeTexto.value;

    let num = Number(entradadeTexto.value);

    h1Texto.textContent = Numeros;
}

btSomaTexto.onclick = function(){
    somarTexto()
}