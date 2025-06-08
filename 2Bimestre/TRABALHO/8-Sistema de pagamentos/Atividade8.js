let NivelProfessor = document.querySelector("#NivelProfessor");
let HorasSemanais = document.querySelector("#HorasSemanais");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function CalcularSalario(){
    let Nivel = Number(NivelProfessor.value);
    let Horas = Number(HorasSemanais.value);
    let ValorHora;

    if(Nivel === 1){
       ValorHora = 12;

    } else if (Nivel === 2){
        ValorHora = 17;

    } else if (Nivel === 3){
        ValorHora = 25;

    } else {
        Resultado.innerHTML = "Nivel invalido! Digite 1, 2 ou 3."
        return;
    }

    let Salario = ValorHora * Horas * 4.5
    Resultado.innerHTML = `Salario mensal: R$ ${Salario.toFixed(2)}`;
}

Botao.onclick = function(){
    CalcularSalario();
}