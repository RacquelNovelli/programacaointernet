const larguraInput = document.querySelector("#largura");
const comprimentoInput = document.querySelector("#comprimento");
const resultadoTexto = document.querySelector("#resultado");
const botao = document.querySelector("#btCalcular");

function calcularArea() {
  const largura = Number(larguraInput.value);
  const comprimento = Number(comprimentoInput.value);

  if (isNaN(largura) || isNaN(comprimento)) {
    alert("Preencha todos os campos com números válidos.");
    return;
  }

  const area = largura * comprimento;

  resultadoTexto.innerHTML = `📐 A área do terreno é <b>${area} m²</b>`;
}

botao.onclick = calcularArea;