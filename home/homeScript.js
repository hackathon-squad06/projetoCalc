function calcular() {
  const valorImovel = realParseFloat(document.getElementById('inputValorImovel').value);
  const aluguel = realParseFloat(document.getElementById('inputAluguel').value);
  const valorizacao = realParseFloat(document.getElementById('inputValorizacao').value);
  const entrada = realParseFloat(document.getElementById('inputEntrada').value);
  const custosAd = realParseFloat(document.getElementById('inputCustosAd').value);
  const prazoFin = realParseFloat(document.getElementById('inputPrazoFin').value);
  const taxaFin = realParseFloat(document.getElementById('inputTaxaFin').value);
  const rentabilidade = realParseFloat(document.getElementById('inputRentabilidade').value);

  const c = entrada
  const i = (((1 + (rentabilidade / 100)) ** (1 / 12)) - 1) * 100
  const iF = i.toFixed(2)
  const iFin = (((1 + (taxaFin / 100)) ** (1 / 12)) - 1) * 100
  const iFinF = iFin.toFixed(3)
  const valorizacaoImovel = (((1 + (valorizacao / 100)) ** (1 / 12)) - 1) * 100
  const valorizacaoImovelF = valorizacaoImovel.toFixed(2)
  const n = prazoFin * 12
  const valorFinanciado = valorImovel - c
  const parcela = valorFinanciado * ((((1 + iFin / 100) ** n) * iFin / 100) / (((1 + iFin / 100) ** n) - 1))
  const parcelaF = parcela.toFixed(2)
  const totalPago = parcelaF * n
  const valorImovelFuturo = valorImovel * (1 + (valorizacaoImovelF / 100)) ** n
  const valorImovelFuturoF = valorImovelFuturo.toFixed(2)
  const valorInvestidoMensal = parcelaF - aluguel
  const valorInvestidoMensalF = valorInvestidoMensal.toFixed(0)
  const depositoInicial = entrada + custosAd
  if (totalPago > valorFinanciado) {
    var totalJurosPago = totalPago - valorFinanciado
  } else {
    var totalJurosPago = valorFinanciado - totalPago
  }
  const m = (c * (1 + (iF / 100)) ** n) + (valorInvestidoMensalF * (((((1 + (iF / 100))) ** n) - 1) / (iF / 100)))
  const mF = m.toFixed(2)
  console.log(c, iF, iFinF, n, valorFinanciado, parcelaF, totalPago, valorImovelFuturoF, totalJurosPago, valorInvestidoMensalF, depositoInicial, mF)

  sessionStorage.setItem('valorImovel', valorImovel)
  sessionStorage.setItem('valorImovelFuturo', valorImovelFuturoF)
  sessionStorage.setItem('valorTotalPago', totalPago)
  sessionStorage.setItem('valorJurosPago', totalJurosPago)
  sessionStorage.setItem('valorInvestimentoTotal', mF)
  window.location.href = "/resultap/resultap.html"
}

document.getElementById('inputEntrada').addEventListener('change', function () {
  let depositoInicial = document.getElementsByName('inputDeposito')[0];
  let valorEntrada = realParseFloat(document.getElementById('inputEntrada').value);
  let custosAdicionais = realParseFloat(document.getElementById('inputCustosAd').value);
  const deposito = valorEntrada + custosAdicionais
  if (isNaN(custosAdicionais)) {
  } else if (isNaN(deposito)) {
    depositoInicial.placeholder = 'Adicione o Valor de entrada'
  } else {
    var myObj = {
      style: "currency",
      currency: "BRL"
    }
    depositoInicial.placeholder = deposito.toLocaleString("pt-BR", myObj);
  }
})

document.getElementById('inputCustosAd').addEventListener('change', function () {
  let depositoInicial = document.getElementsByName('inputDeposito')[0];
  let valorEntrada = realParseFloat(document.getElementById('inputEntrada').value);
  let custosAdicionais = realParseFloat(document.getElementById('inputCustosAd').value);
  const deposito = valorEntrada + custosAdicionais
  if (isNaN(valorEntrada)) {
  } else if (isNaN(deposito)) {
    depositoInicial.placeholder = 'Adicione os Custos adicionais'
  } else {
    var myObj = {
      style: "currency",
      currency: "BRL"
    }
    depositoInicial.placeholder = deposito.toLocaleString("pt-BR", myObj);
  }
})

document.getElementById('inputValorImovel').addEventListener('change', function () {
  let depositoMensal = document.getElementsByName('inputValorMensal')[0];
  let valorImovel = realParseFloat(document.getElementById('inputValorImovel').value);
  let valorEntrada = realParseFloat(document.getElementById('inputEntrada').value);
  let valorAluguel = realParseFloat(document.getElementById('inputAluguel').value);
  let taxaFin = realParseFloat(document.getElementById('inputTaxaFin').value);
  let prazoFin = realParseFloat(document.getElementById('inputPrazoFin').value);
  let valorFinanciado = valorImovel - valorEntrada
  let prazoFinMes = prazoFin * 12
  let taxaFinMes = ((1 + (taxaFin / 100)) ** (1 / 12)) - 1
  const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
  const parcelaFin2 = parcelaFin.toFixed(2)
  const investimentoMensal = parcelaFin2 - valorAluguel
  const investimentoMensal2 = investimentoMensal.toFixed(0)
  if (isNaN(valorEntrada)) {
  } else if (isNaN(investimentoMensal2)) {
    depositoMensal.placeholder = 'Adicione os dados para o cálculo'
  } else {
    depositoMensal.placeholder = 'R$ ' + investimentoMensal2 + ',00';
  }
})

document.getElementById('inputEntrada').addEventListener('change', function () {
  let depositoMensal = document.getElementsByName('inputValorMensal')[0];
  let valorImovel = realParseFloat(document.getElementById('inputValorImovel').value);
  let valorEntrada = realParseFloat(document.getElementById('inputEntrada').value);
  let valorAluguel = realParseFloat(document.getElementById('inputAluguel').value);
  let taxaFin = realParseFloat(document.getElementById('inputTaxaFin').value);
  let prazoFin = realParseFloat(document.getElementById('inputPrazoFin').value);
  let valorFinanciado = valorImovel - valorEntrada
  let prazoFinMes = prazoFin * 12
  let taxaFinMes = ((1 + (taxaFin / 100)) ** (1 / 12)) - 1
  const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
  const parcelaFin2 = parcelaFin.toFixed(2)
  const investimentoMensal = parcelaFin2 - valorAluguel
  const investimentoMensal2 = investimentoMensal.toFixed(0)
  if (isNaN(prazoFin)) {
  } else if (isNaN(investimentoMensal2)) {
    depositoMensal.placeholder = 'Adicione os dados para o cálculo'
  } else {
    depositoMensal.placeholder = 'R$ ' + investimentoMensal2 + ',00';
  }
})

document.getElementById('inputAluguel').addEventListener('change', function () {
  let depositoMensal = document.getElementsByName('inputValorMensal')[0];
  let valorImovel = realParseFloat(document.getElementById('inputValorImovel').value);
  let valorEntrada = realParseFloat(document.getElementById('inputEntrada').value);
  let valorAluguel = realParseFloat(document.getElementById('inputAluguel').value);
  let taxaFin = realParseFloat(document.getElementById('inputTaxaFin').value);
  let prazoFin = realParseFloat(document.getElementById('inputPrazoFin').value);
  let valorFinanciado = valorImovel - valorEntrada
  let prazoFinMes = prazoFin * 12
  let taxaFinMes = ((1 + (taxaFin / 100)) ** (1 / 12)) - 1
  const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
  const parcelaFin2 = parcelaFin.toFixed(2)
  const investimentoMensal = parcelaFin2 - valorAluguel
  const investimentoMensal2 = investimentoMensal.toFixed(0)
  if (isNaN(valorEntrada)) {
  } else if (isNaN(investimentoMensal2)) {
    depositoMensal.placeholder = 'Adicione os dados para o cálculo'
  } else {
    depositoMensal.placeholder = 'R$ ' + investimentoMensal2 + ',00';
  }
})

document.getElementById('inputPrazoFin').addEventListener('change', function () {
  let depositoMensal = document.getElementsByName('inputValorMensal')[0];
  let valorImovel = realParseFloat(document.getElementById('inputValorImovel').value);
  let valorEntrada = realParseFloat(document.getElementById('inputEntrada').value);
  let valorAluguel = realParseFloat(document.getElementById('inputAluguel').value);
  let taxaFin = realParseFloat(document.getElementById('inputTaxaFin').value);
  let prazoFin = realParseFloat(document.getElementById('inputPrazoFin').value);
  let valorFinanciado = valorImovel - valorEntrada
  let prazoFinMes = prazoFin * 12
  let taxaFinMes = ((1 + (taxaFin / 100)) ** (1 / 12)) - 1
  const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
  const parcelaFin2 = parcelaFin.toFixed(2)
  const investimentoMensal = parcelaFin2 - valorAluguel
  const investimentoMensal2 = investimentoMensal.toFixed(0)
  if (isNaN(valorEntrada)) {
  } else if (isNaN(investimentoMensal2)) {
    depositoMensal.placeholder = 'Adicione os dados para o cálculo'
  } else {
    depositoMensal.placeholder = 'R$ ' + investimentoMensal2 + ',00';
  }
})

document.getElementById('inputTaxaFin').addEventListener('change', function () {
  let depositoMensal = document.getElementsByName('inputValorMensal')[0];
  let valorImovel = realParseFloat(document.getElementById('inputValorImovel').value);
  let valorEntrada = realParseFloat(document.getElementById('inputEntrada').value);
  let valorAluguel = realParseFloat(document.getElementById('inputAluguel').value);
  let taxaFin = realParseFloat(document.getElementById('inputTaxaFin').value);
  let prazoFin = realParseFloat(document.getElementById('inputPrazoFin').value);
  let valorFinanciado = valorImovel - valorEntrada
  let prazoFinMes = prazoFin * 12
  let taxaFinMes = ((1 + (taxaFin / 100)) ** (1 / 12)) - 1
  const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
  const parcelaFin2 = parcelaFin.toFixed(2)
  const investimentoMensal = parcelaFin2 - valorAluguel
  const investimentoMensal2 = investimentoMensal.toFixed(0)
  if (isNaN(valorEntrada)) {
  } else if (isNaN(investimentoMensal2)) {
    depositoMensal.placeholder = 'Adicione os dados para o cálculo'
  } else {
    depositoMensal.placeholder = 'R$ ' + investimentoMensal2 + ',00';
  }
})


function formatarMoeda(valor) {
  var n = new Number(valor);
  var myObj = {
    style: "currency",
    currency: "BRL"
  }
  valor = n.toLocaleString("pt-BR", myObj);
  return valor
}