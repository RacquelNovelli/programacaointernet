let inputPeso = document.querySelector("#Peso");
let inputAltura = document.querySelector("#Altura");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calculandoIMC() {
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if (altura <= 0 || peso <= 0) {
        resultado.textContent = "Insira um valor válido";  
        return;
    }

    let imc = peso / (altura * altura);
    
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } 
    else if (imc < 25) {
        classificacao = "Peso normal";
    } 

    else if (imc < 30) {
        classificacao = "Sobrepeso";
    } 

    else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    }   

    else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } 

    else {
        classificacao = "Obesidade grau 3";
    }

    resultado.innerHTML = `IMC: ${imc.toFixed(2)}<br>Classifica&ccedil;&atilde;o: ${classificacao}`; // innerHTML pesquisei e vi que esse código separa eu queria separar
}


btCalcular.onclick = function() {
    calculandoIMC();
};