let valorImovel = formatarMoeda(sessionStorage.getItem("valorImovel"));
let valorImovelFuturo = formatarMoeda(sessionStorage.getItem("valorImovelFuturo"));
let valorTotalPago = formatarMoeda(sessionStorage.getItem("valorTotalPago"));
let valorJurosPago = formatarMoeda(sessionStorage.getItem("valorJurosPago"));
let valorInvestimentoTotal = formatarMoeda(sessionStorage.getItem("valorInvestimentoTotal"));
let entrada = formatarMoeda(sessionStorage.getItem("entrada"));
let taxaRendimento = sessionStorage.getItem("taxaRendimento");
let taxaFinanciamento = sessionStorage.getItem("taxaFinanciamento");
let prazoFinanciamento = sessionStorage.getItem("prazoFinanciamento");
let prazoFinanciamentoAnos = sessionStorage.getItem("prazoFinanciamentoAnos");
let valorFinanciado = formatarMoeda(sessionStorage.getItem("valorFinanciado"));
let parcelaFinanciamento = formatarMoeda(sessionStorage.getItem("parcelaFinanciamento"));
let valorInvestimentoMensalmente = formatarMoeda(sessionStorage.getItem("valorInvestimentoMensalmente"));
let valorDepositoInicial = formatarMoeda(sessionStorage.getItem("valorDepositoInicial"));
let prazoRentabilidadeAnos = sessionStorage.getItem("prazoRentabilidadeAnos");
let valorTotalPagoFinancimento = formatarMoeda(sessionStorage.getItem("valorTotalPagoFinancimento"));
let sobraInvestimento = formatarMoeda(sessionStorage.getItem("sobraInvestimento"));


const valorImovelDisplay = document.getElementById("valorImovelAtual");
valorImovelDisplay.innerHTML = valorImovel;

const prazoFinanciamentoAnosDisplay = document.getElementById('anos')
prazoFinanciamentoAnosDisplay.innerHTML = prazoFinanciamentoAnos

const valorImovelFuturoDisplay = document.getElementById("valorImovelFuturo");
valorImovelFuturoDisplay.innerHTML = valorImovelFuturo;

const totalPagoImovelDisplay = document.getElementById("totalPagoImovel");
totalPagoImovelDisplay.innerHTML = valorTotalPagoFinancimento;

const valorFinanciadoDisplay = document.getElementById("valorFinanciado");
valorFinanciadoDisplay.innerHTML = valorFinanciado;

const valorTotalPagoDisplay = document.getElementById("totalPagoFinanciado");
valorTotalPagoDisplay.innerHTML = valorTotalPago;

const valorJurosPagoDisplay = document.getElementById("totalJurosPago");
valorJurosPagoDisplay.innerHTML = valorJurosPago;

const valorParcelaDisplay = document.getElementById("valorParcela");
valorParcelaDisplay.innerHTML = parcelaFinanciamento;

const valorInvestidoMensalDisplay = document.getElementById("valorInvestidoMensal");
valorInvestidoMensalDisplay.innerHTML = valorInvestimentoMensalmente;

const valorInvestimentoAnosDisplay = document.getElementById('anosFinal')
valorInvestimentoAnosDisplay.innerHTML = prazoFinanciamentoAnos

const valorInvestimentoTotalDisplay = document.getElementById("valorTotalInvestimento");
valorInvestimentoTotalDisplay.innerHTML = valorInvestimentoTotal;

const valorRestanteDisplay = document.getElementById("valorRestante");
valorRestanteDisplay.innerHTML = sobraInvestimento;

const prazoRentabilidadeDisplay = document.getElementById("prazoRentabilidade");
prazoRentabilidadeDisplay.style.textAlign = 'left';
if (prazoRentabilidadeAnos == null) {
  prazoRentabilidadeAnos = 0
}
prazoRentabilidadeDisplay.innerHTML = prazoRentabilidadeAnos + ' anos';






function retornar() {
  sessionStorage.clear();
  window.location.href = "/home/home.html";
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