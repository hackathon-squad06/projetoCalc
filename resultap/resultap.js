const btnCalcularNovamente = document.getElementById('btn_calc');

let valorSoma = sessionStorage.getItem('soma');
let valorMultiplicado = sessionStorage.getItem('multiplicado');

const valorSomadoDisplay = document.getElementById("resultadoSomado");
valorSomadoDisplay.innerHTML = valorSoma

const valorMultiplicadoDisplay = document.getElementById("resultadoMultiplicado");
valorMultiplicadoDisplay.innerHTML = valorMultiplicado

function retornar() {
  sessionStorage.clear();
  window.location.href = "/home/home.html"
}