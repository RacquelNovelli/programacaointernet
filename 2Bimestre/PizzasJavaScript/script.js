let resultadoTexto = document.querySelector("#resultadoTexto");
let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let qtdRefri = document.querySelector("#qtdRefri");
let btCalcular = document.querySelector("#btCalcular");

function calcularPedido() {
  let sabores = [sabor1.value, sabor2.value, sabor3.value, sabor4.value];
  let qtd = Number(qtdRefri.value);

  let precoPizza = 12;
  let precoRefri = 7;

  let total = (4 * precoPizza) + (qtd * precoRefri);

 resultadoTexto.innerHTML = 
    `<b>🍕 Sabores escolhidos:</b><br>🍕 ${sabores.join("<br>🍕")}<br><br>` +
    `🥤 <b>Refrigerantes:</b> ${qtd}<br><br>` +
    `<b>💰 Total a pagar:</b> R$ ${total.toFixed(2)}`;
}

btCalcular.onclick = calcularPedido;