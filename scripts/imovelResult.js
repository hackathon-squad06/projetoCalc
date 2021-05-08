// let valorImovel = formatarMoeda(sessionStorage.getItem("valorImovel"));
// let valorImovelFuturo = formatarMoeda(sessionStorage.getItem("valorImovelFuturo"));
// let valorTotalPago = formatarMoeda(sessionStorage.getItem("valorTotalPago"));
// let valorJurosPago = formatarMoeda(sessionStorage.getItem("valorJurosPago"));
// let valorInvestimentoTotal = formatarMoeda(sessionStorage.getItem("valorInvestimentoTotal"));
// let entrada = formatarMoeda(sessionStorage.getItem("entrada"));
// let taxaRendimento = sessionStorage.getItem("taxaRendimento");
// let taxaFinanciamento = sessionStorage.getItem("taxaFinanciamento");
// let prazoFinanciamento = sessionStorage.getItem("prazoFinanciamento");
// let prazoFinanciamentoAnos = sessionStorage.getItem("prazoFinanciamentoAnos");
// let valorFinanciado = formatarMoeda(sessionStorage.getItem("valorFinanciado"));
// let parcelaFinanciamento = formatarMoeda(sessionStorage.getItem("parcelaFinanciamento"));
// let valorInvestimentoMensalmente = formatarMoeda(sessionStorage.getItem("valorInvestimentoMensalmente"));
// let valorDepositoInicial = formatarMoeda(sessionStorage.getItem("valorDepositoInicial"));
// let prazoRentabilidadeAnos = sessionStorage.getItem("prazoRentabilidadeAnos");
// let valorTotalPagoFinancimento = formatarMoeda(sessionStorage.getItem("valorTotalPagoFinancimento"));
// let sobraInvestimento = formatarMoeda(sessionStorage.getItem("sobraInvestimento"));
// let melhorOpcao = sessionStorage.getItem("melhorOpcao");


const valorImovelDisplay = document.getElementById("valorImovelAtual");
valorImovelDisplay.innerHTML = "<p>" + valorImovel + "</p>";

const prazoFinanciamentoAnosDisplay = document.getElementById('anos')
prazoFinanciamentoAnosDisplay.innerHTML = "Valor do imóvel corrigido após " + prazoFinanciamentoAnos + " anos"

const valorImovelFuturoDisplay = document.getElementById("valorImovelFuturo");
valorImovelFuturoDisplay.innerHTML = "<p>" + valorImovelFuturo + "</p>";

const totalPagoImovelDisplay = document.getElementById("totalPagoImovel");
totalPagoImovelDisplay.innerHTML = "<p>" + valorTotalPagoFinancimento + "</p>";

const valorFinanciadoDisplay = document.getElementById("valorFinanciado");
valorFinanciadoDisplay.innerHTML = "<p>" + valorFinanciado + "</p>";

const valorTotalPagoDisplay = document.getElementById("totalPagoFinanciado");
valorTotalPagoDisplay.innerHTML = "<p>" + valorTotalPago + "</p>";

const valorJurosPagoDisplay = document.getElementById("totalJurosPago");
valorJurosPagoDisplay.innerHTML = "<p>" + valorJurosPago + "</p>";

const valorParcelaDisplay = document.getElementById("valorParcela");
valorParcelaDisplay.innerHTML = "<p>" + parcelaFinanciamento + "</p>";

const valorInvestidoMensalDisplay = document.getElementById("valorInvestidoMensal");
valorInvestidoMensalDisplay.innerHTML = "<p>" + valorInvestimentoMensalmente + "</p>";

const valorInvestimentoAnosDisplay = document.getElementById('anosFinal')
valorInvestimentoAnosDisplay.innerHTML = "Valor do investimento após " + prazoFinanciamentoAnos + " anos"

const valorInvestimentoTotalDisplay = document.getElementById("valorTotalInvestimento");
valorInvestimentoTotalDisplay.innerHTML = "<p>" + valorInvestimentoTotal + "</p>";

const valorRestanteDisplay = document.getElementById("valorRestante");
valorRestanteDisplay.innerHTML = "<p>" + sobraInvestimento + "</p>";

const prazoRentabilidadeDisplay = document.getElementById("prazoRentabilidade");
prazoRentabilidadeDisplay.style.textAlign = 'left';
if (prazoRentabilidadeAnos == null) {
    prazoRentabilidadeAnos = 0
}
prazoRentabilidadeDisplay.innerHTML = prazoRentabilidadeAnos + ' anos';

const melhorOpcaoDisplay = document.getElementById("melhorOpcao");
melhorOpcaoDisplay.innerHTML = melhorOpcao;


function retornar() {
    // sessionStorage.clear();
    window.location.href = "/imovelCalc.html";
}

function formatarMoeda(valor) {
    var n = new Number(valor);
    var formatoReais = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
    valor = n.toLocaleString("pt-BR", formatoReais);
    return valor
}

function realParseFloat(s) {
    s = s.replace(/[^\d,.-]/g, '');
    if (navigator.language.substring(0, 2) !== "de" && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(s)) {
        s = s.replace(/,/g, '');
        return parseFloat(s);
    }
    else if (/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(s)) {
        s = s.replace(/\./g, '');
        s = s.replace(/,/g, '.');
        return parseFloat(s);
    }
    else {
        s = s.replace(/,/g, '');
        return parseFloat(s);
    }
}