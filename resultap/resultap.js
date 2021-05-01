let valorImovel = sessionStorage.getItem("valorImovel");
let valorImovelFuturo = sessionStorage.getItem("valorImovelFuturo");
let valorTotalPago = sessionStorage.getItem("valorTotalPago");
let valorJurosPago = sessionStorage.getItem("valorJurosPago");
let valorInvestimentoTotal = sessionStorage.getItem("valorInvestimentoTotal");

const valorImovelDisplay = document.getElementById("valorImovel");
valorImovelDisplay.innerHTML = valorImovel;

const valorImovelFuturoDisplay = document.getElementById("valorImovelFuturo");
valorImovelFuturoDisplay.innerHTML = valorImovelFuturo;

const valorTotalPagoDisplay = document.getElementById("totalFinanciamento");
valorTotalPagoDisplay.innerHTML = valorTotalPago;

const valorJurosPagoDisplay = document.getElementById("totalJurosPago");
valorJurosPagoDisplay.innerHTML = valorJurosPago;

const valorInvestimentoTotalDisplay = document.getElementById("totalInvestimento");
valorInvestimentoTotalDisplay.innerHTML = valorInvestimentoTotal;

function retornar() {
  sessionStorage.clear();
  window.location.href = "/home/home.html";
}
