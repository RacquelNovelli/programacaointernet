let salario = document.querySelector("#Salario");
let codigo = document.querySelector("#Codigo");
let botao = document.querySelector("#Botao");
let resultado = document.querySelector("#Resultado"); 

function CalcularSalario() {
    let salarioAtual = Number(salario.value);
    let cod = Number(codigo.value);
    let porcentagem = 0;

    if (cod == 101) {
        porcentagem = 10;
    } else if (cod == 102) {
        porcentagem = 20;
    } else if (cod == 103) {
        porcentagem = 30;
    } else {
        porcentagem = 40;
    }

    let aumento = salarioAtual * porcentagem / 100;
    let novoSalario = salarioAtual + aumento;

    resultado.innerHTML = "Salário antigo: R$" + salarioAtual +
        "<br>Novo salário: R$" + novoSalario +
        "<br>Diferença: R$" + aumento;
}

botao.onclick = function () {
    CalcularSalario();
};