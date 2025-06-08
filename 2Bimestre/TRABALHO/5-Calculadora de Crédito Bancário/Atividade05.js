let Saldo = document.querySelector("#Saldo");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function Calcularcredito() {
    let SaldoMedio = Number(Saldo.value);
    let Credito = 0;

    if (SaldoMedio >= 0 && SaldoMedio <= 200) {
        Credito = 0;
    } else if (SaldoMedio >= 201 && SaldoMedio <= 400) {
        Credito = SaldoMedio * 0.20;
    } else if (SaldoMedio >= 401 && SaldoMedio <= 600) {
        Credito = SaldoMedio * 0.30;
    } else {
        Credito = SaldoMedio * 0.40;
    }

    Resultado.innerHTML = "Seu saldo médio foi: R$ " + SaldoMedio.toFixed(2) + "<br>" +
                          "Você recebeu: R$ " + Credito.toFixed(2) + " de crédito.";
}

Botao.onclick = function(){
    Calcularcredito();
}