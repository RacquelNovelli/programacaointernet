let QFerraduras = document.querySelector ("#QFerraduras")
let Cavalos = document.querySelector ("#Cavalos")
let btCalcular = document.querySelector ("#btCalcular")
let resultado = document.querySelector ("#resultado")

function calcularFerradura (){
   let QCavalos = Number (Cavalos.value)

    let ferraduras = (QCavalos * 4)

    resultado.textContent = `voce vai precisar de ${ferraduras}.`; 
}
   btCalcular.onclick = function(){
      calcularFerradura();

   }
  