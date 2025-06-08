let PrecoProduto = document.querySelector("#PrecoProduto");
let CondicaoPagamento = document.querySelector("#CondicaoPagamento");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function CalcularPagamento(){

    let Produto = Number(PrecoProduto.value);
    let Condicao = CondicaoPagamento.value;
    let Pagamento;

    if(Condicao === "a"){
        Pagamento = Produto * 90/100 

    } else if (Condicao === "b"){
        Pagamento = Produto * 85/100

    } else if (Condicao === "c"){
        Pagamento = Produto

    } else if (Condicao === "d"){
        Pagamento = Produto * 10/100 + Produto
    } else {
        Resultado.innerHTML = "Condição inválida! Digite a, b, c ou d."
    }

    Resultado.innerHTML = `Valor a pagar ${Pagamento.toFixed(2)}`;
}

Botao.onclick = function(){
CalcularPagamento();
}