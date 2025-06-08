let Produto = document.querySelector("#Produto");
let Quantidade = document.querySelector("#Quantidade");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function CalcularValor(){

let P = Produto.value;
let Q = Number(Quantidade.value);
let Pagamento;

if(P === "a"){
    Pagamento = 11;

} else if (P === "b"){
    Pagamento = 8.5;

} else if (P === "c"){
    Pagamento = 8;

} else if (P === "d"){
    Pagamento = 9;

} else if (P === "e"){
    Pagamento = 10;

} else if (P === "f"){
    Pagamento = 4.5;

} else {
    Resultado.innerHTML = "Letra inválida! Digite a, b, c, d, e ou f";
    return;
}

let PagamentoTotal = Pagamento * Q
Resultado.innerHTML = `Valor a pagar: ${PagamentoTotal.toFixed(2)} `;
}

Botao.onclick = function(){
    CalcularValor();
}