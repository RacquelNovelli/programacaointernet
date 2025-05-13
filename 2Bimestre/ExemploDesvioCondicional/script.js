let nota1Bim = document.querySelector("#nota1Bim");
let nota2Bim = document.querySelector("#nota2Bim");
let btAprovacao = document.querySelector("#btAprovacao");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMediaAluno(){
    let nota1 = Number(nota1Bim.value);
    let nota2 = Number(nota2Bim.value);

    let media = (nota1 + nota2) / 2;

    if(media >= 60){
        h3Resultado.textContent = "o aluno esta APROVADO!!!"
    }else{
        h3Resultado.textContent = "o aluno esta REPROVADO!!!"
    }
}
btAprovacao.onclick = function(){
    calcularMediaAluno();
}