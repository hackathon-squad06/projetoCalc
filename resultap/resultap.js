let valorImovel = formatarMoeda(sessionStorage.getItem("valorImovel"));
let valorImovelFuturo = formatarMoeda(sessionStorage.getItem("valorImovelFuturo"));
let valorTotalPago = formatarMoeda(sessionStorage.getItem("valorTotalPago"));
let valorJurosPago = formatarMoeda(sessionStorage.getItem("valorJurosPago"));
let valorInvestimentoTotal = formatarMoeda(sessionStorage.getItem("valorInvestimentoTotal"));

const valorImovelDisplay = document.getElementById("valorImovelAtual");
valorImovelDisplay.innerHTML = valorImovel;

const valorImovelFuturoDisplay = document.getElementById("valorImovelFuturo");
valorImovelFuturoDisplay.innerHTML = valorImovelFuturo;

const valorTotalPagoDisplay = document.getElementById("totalPagoFinanciado");
valorTotalPagoDisplay.innerHTML = valorTotalPago;

const valorJurosPagoDisplay = document.getElementById("totalJurosPago");
valorJurosPagoDisplay.innerHTML = valorJurosPago;

const valorInvestimentoTotalDisplay = document.getElementById("valorTotalInvestimento");
valorInvestimentoTotalDisplay.innerHTML = valorInvestimentoTotal;

function retornar() {
  sessionStorage.clear();
  window.location.href = "/home/home.html";
}

function formatarMoeda(valor) {
  var n = new Number(valor);
  var myObj = {
    style: "currency",
    currency: "BRL"
  }
  valor = n.toLocaleString("pt-BR", myObj);
  return valor
}