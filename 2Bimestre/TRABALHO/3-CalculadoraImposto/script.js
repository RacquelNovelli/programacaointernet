let imputAno = document.querySelector ("#Ano");
let imputvalor = document.querySelector ("#TabelaFip");
let imputBotton = document.querySelector ("#btCalcular");
let resultado = document.querySelector ("#resultado");


function CalcularIpva (){
    let Data = Number(imputAno.value);
    let preco = Number(imputvalor.value);
    let imposto;

    if (Data <= 1990) {
        imposto = (0.01 * preco);

    } else {
        imposto = (0.015 * preco);
    }

    resultado.textContent = "R$ " + imposto.toFixed(2).replace('.', ',');
}


    imputBotton.onclick = function (){
       CalcularIpva();

}