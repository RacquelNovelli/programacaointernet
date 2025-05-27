    let quantidadePaesInput = document.getElementById('quantidadePaes');
    let quantidadeBroasInput = document.getElementById('quantidadeBroas');
    let btnCalcular = document.getElementById('btnCalcular');
    let totalArrecadadoSpan = document.getElementById('totalArrecadado');
    let valorPoupancaSpan = document.getElementById('valorPoupanca');

    let precoPao = 0.12;
    let precoBroa = 1.50;
    let porcentagemPoupanca = 0.10; // 10%

    btnCalcular.addEventListener('click', function() {
        let quantidadePaes = parseInt(quantidadePaesInput.value);
        let quantidadeBroas = parseInt(quantidadeBroasInput.value);

        if (isNaN(quantidadePaes) || isNaN(quantidadeBroas) || quantidadePaes < 0 || quantidadeBroas < 0) {
            alert('Por favor, insira quantidades válidas (números inteiros positivos).');
            return;
        }

        let arrecadadoPaes = quantidadePaes * precoPao;
        let arrecadadoBroas = quantidadeBroas * precoBroa;

        let totalArrecadado = arrecadadoPaes + arrecadadoBroas;
        let valorPoupanca = totalArrecadado * porcentagemPoupanca;

        totalArrecadadoSpan.textContent = ` 💵  R$ ${totalArrecadado.toFixed(2)}`;
        valorPoupancaSpan.textContent = ` 💰 R$ ${valorPoupanca.toFixed(2)}`;
    });