function formatarReais(campo) {
  var id = campo.id
  var digitou = campo
  var valor = digitou.value;

  valor = valor + '';
  valor = parseInt(valor.replace(/[\D]+/g, ''));
  valor = valor + '';
  valor = valor.replace(/(\d{2})$/, ",$1");

  if (valor.length > 6) {
      valor = valor.replace(/(\d{3}),(\d{2}$)/, ".$1,$2");
  }   if (valor.length > 10) {
      valor = valor.replace(/(\d{3}).(\d{3}),(\d{2})/, ".$1.$2,$3");
  }

  campo.value = "R$ " + valor;
  if (valor == 'NaN') {
      campo.value = '';
  }
  
  //Transforma a string em número
  digitou.onchange = function () {
    valor = valor.replace(/[.]/g, "")
    valor = valor.replace(/[,]/g, ".")
    valor = Number(valor)

    //Direciona os valores para cada função
    if (id == "inputValorImovel") {
      const numImovel = valor
      nImovel.splice(0, 1, numImovel)
    } else if (id == "inputAluguel") {
      const numAluguel = valor
      nAluguel.splice(0, 1, numAluguel)
    } else if (id == "inputEntrada") {
      const numEntrada = valor
      nEntrada.splice(0, 1, numEntrada)
    } else if (id == "inputCustosAd") {
      const numCustosAd = valor
      nAdicionais.splice(0, 1, numCustosAd)
    } 
  }
}

let nImovel = []
let nAluguel = []
let nEntrada = []
let nAdicionais = []

//Retira o valor de dentro do array

valorCompra.addEventListener("change", compra)
function compra () {
  valorDeCompra = nImovel[0]
  console.log(valorDeCompra)
}

valorAluguel.addEventListener("change", aluguel)
function aluguel () {
  valorDoAluguel = nAluguel[0]
  console.log(valorDoAluguel)
}

let chamarEntrada = document.getElementById("inputEntrada")
chamarEntrada.addEventListener("change", entrada)
function entrada () {
  valorDaEntrada = nEntrada[0]
  console.log(valorDaEntrada)
}

let chamarCusto = document.getElementById("inputCustosAd")
chamarCusto.addEventListener("change", custos)
function custos () {
  custosAdicionais = nAdicionais[0]
  console.log(custosAdicionais)
}


//Calcula o valor do deposito

function calcDeposito(valorDaEntrada, custosAdicionais) {
  let depositoInicial = document.getElementsByName('inputDeposito')[0];
  if (custosAdicionais == undefined) {
    custosAdicionais = 0
  }
  let deposito = valorDaEntrada + custosAdicionais
  depositoInicial.placeholder = deposito
  console.log(deposito)
}

//Calcula o investimento mensal

function valorInvestimentoMensal () {
  let investimentoMensal = document.getElementsByName('inputValorMensal')[0];
  let taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
  let prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);

  let valorFinanciado = valorDeCompra - valorDaEntrada
  let prazoFinMes = prazoFin * 12
  let taxaFinMes = ((1 + (taxaFin/100)) ** (1/12))-1
  const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
  const parcelaFin2 = parcelaFin.toFixed(2)
  const investimentoMensalValor = parcelaFin2 - valorDoAluguel
  const investimentoMensalFinal = investimentoMensalValor.toFixed(0)

  investimentoMensal.placeholder = investimentoMensalFinal
}

// Calcula tudo

function calcular () {
  const valorizacao = parseFloat(document.getElementById('inputValorizacao').value);
  const prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
  const taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
  const rentabilidade = parseFloat(document.getElementById('inputRentabilidade').value);

  const c = valorDaEntrada
  const i = (((1 + (rentabilidade/100)) ** (1/12))-1)*100
  const iF = i.toFixed(2)
  const iFin = (((1 + (taxaFin/100)) ** (1/12))-1)*100
  const iFinF = iFin.toFixed(3)
  const valorizacaoImovel = (((1 + (valorizacao/100)) ** (1/12))-1)*100
  const valorizacaoImovelF = valorizacaoImovel.toFixed(2)
  const n = prazoFin * 12
  const valorFinanciado = valorDeCompra - c
  const parcela = valorFinanciado * ((((1 + iFin/100) ** n) * iFin/100) / (((1 + iFin/100) ** n) - 1))
  const parcelaF = parcela.toFixed(2)
  const totalPago = parcelaF * n
  const valorImovelFuturo = valorDeCompra * (1 + (valorizacaoImovelF/100)) ** n
  const valorImovelFuturoF = valorImovelFuturo.toFixed(2)
  const valorInvestidoMensal = parcelaF - valorDoAluguel
  const valorInvestidoMensalF = valorInvestidoMensal.toFixed(0)
  const depositoInicial = valorDaEntrada + custosAdicionais
  if (totalPago > valorFinanciado) {
      var totalJurosPago = totalPago - valorFinanciado
  } else {
      var totalJurosPago = valorFinanciado - totalPago
  }
  const m = (c*(1 + (iF/100)) ** n ) + (valorInvestidoMensalF * (((((1 + (iF/100))) ** n ) - 1 ) / (iF/100)))
  const mF = m.toFixed(2)
  console.log(c, iF, iFinF, n, valorFinanciado, parcelaF, totalPago, valorImovelFuturoF, totalJurosPago, valorInvestidoMensalF, depositoInicial, mF)

  sessionStorage.setItem('valorImovel', valorDeCompra)
  sessionStorage.setItem('valorImovelFuturo', valorImovelFuturoF)
  sessionStorage.setItem('valorTotalPago', totalPago)
  sessionStorage.setItem('valorJurosPago', totalJurosPago)
  sessionStorage.setItem('valorInvestimentoTotal', mF)
  window.location.href = "/resultap/resultap.html"
} 
