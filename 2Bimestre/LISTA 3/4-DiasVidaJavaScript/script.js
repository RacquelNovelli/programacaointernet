  let nomeInput = document.getElementById('nome');
            let idadeInput = document.getElementById('idade');
            let btnCalcular = document.getElementById('btnCalcular');
            let resultadoP = document.getElementById('resultado'); // Alterado para 'resultadoP' para indicar que é um parágrafo

            btnCalcular.addEventListener('click', function() {
                let nome = nomeInput.value.trim(); // .trim() remove espaços em branco extras
                let idade = parseInt(idadeInput.value);

                if (nome === "") {
                    resultadoP.textContent = "Por favor, digite seu nome.";
                    return;
                }

                if (isNaN(idade) || idade < 0) {
                    resultadoP.textContent = "Por favor, insira uma idade válida (número positivo).";
                    return;
                }

                let diasDeVida = idade * 365;

                resultadoP.textContent = `${nome.toUpperCase()}, Voce ja viveu ${diasDeVida} DIAS`;
            });