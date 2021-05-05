let gastosTotaisCarro = formatarMoeda(sessionStorage.getItem("gastosTotaisCarro"));
let gastosAnuais = formatarMoeda(sessionStorage.getItem("gastosAnuais"));
let gastosEstacionamento = formatarMoeda(sessionStorage.getItem("gastosEstacionamento"));
let gastosManutencao = formatarMoeda(sessionStorage.getItem("gastosManutencao"));
let gastosCombustivel = formatarMoeda(sessionStorage.getItem("gastosCombustivel"));
let gastosApp = formatarMoeda(sessionStorage.getItem("gastosApp"));
let usoApp = sessionStorage.getItem("usoApp");
let diferenca = formatarMoeda(sessionStorage.getItem("diferenca"));
let melhorOpcao = sessionStorage.getItem("melhorOpcao");

const gastosTotaisCarroDisplay = document.getElementById("totalCarro");
gastosTotaisCarroDisplay.innerHTML = gastosTotaisCarro;

const gastosAnuaisDisplay = document.getElementById("valorSeguro");
gastosAnuaisDisplay.innerHTML = gastosAnuais;

const gastosEstacionamentoDisplay = document.getElementById("totalEstacionamento");
gastosEstacionamentoDisplay.innerHTML = gastosEstacionamento;

const gastosManutencaoDisplay = document.getElementById("totalManutencao");
gastosManutencaoDisplay.innerHTML = gastosManutencao;

const gastosCombustivelDisplay = document.getElementById("totalCombustivel");
gastosCombustivelDisplay.innerHTML = gastosCombustivel;

const gastosAppDisplay = document.getElementById("valorApp");
gastosAppDisplay.innerHTML = gastosApp;

const diferencaDisplay = document.getElementById("valorDif");
diferencaDisplay.innerHTML = diferenca;

const usoAppDisplay = document.getElementById("totalCorridas");
usoAppDisplay.style.textAlign = 'left';
if (usoApp == null) {
  usoApp = 0
}
usoAppDisplay.innerHTML = usoApp + ' vezes no ano';

const melhorOpcaoDisplay = document.getElementById("melhorOpcao");
melhorOpcaoDisplay.innerHTML = melhorOpcao;


function retornar() {
  sessionStorage.clear();
  window.location.href = "/carroCalc.html";
}

function formatarMoeda(valor) {
  var n = new Number(valor);
  var myObj = {
    style: "currency",
    currency: "BRL",
  }
  valor = n.toLocaleString("pt-BR", myObj);
  // valor = n.toLocaleString("pt-BR",  { minimumFractionDigits: 2 });
  return valor
}