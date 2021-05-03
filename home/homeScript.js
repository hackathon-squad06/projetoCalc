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
  const totalPago = Math.ceil(parcelaF * n);
  const valorImovelFuturo = valorImovel * (1 + (valorizacaoImovelF / 100)) ** n
  const valorImovelFuturoF = valorImovelFuturo.toFixed(2)
  const valorInvestidoMensal = parcelaF - aluguel
  const valorInvestidoMensalF = valorInvestidoMensal.toFixed(2)
  const depositoInicial = entrada + custosAd
  if (totalPago > valorFinanciado) {
    var totalJurosPago = Math.ceil(totalPago - valorFinanciado);
  } else {
    var totalJurosPago = Math.ceil(valorFinanciado - totalPago);
  }
  const m = c * (1 + iF / 100) ** n + valorInvestidoMensalF * (((1 + iF / 100) ** n - 1) / (iF / 100));
  const mF = m.toFixed(2);
  function nper(rate, pmt, pv, fv) {
    const z = pmt * (1 + (rate / 100) * 1) / (rate / 100)
    return Math.log10((-fv + z) / (pv + z)) / Math.log10(1 + (rate / 100))
  }
  const prazoRentabilidade = Math.ceil(nper(iF, -valorInvestidoMensalF, -depositoInicial, valorImovelFuturoF))
  const prazoRentabilidadeAnos = Math.ceil(prazoRentabilidade / 12)
  const valorPagoFinanciamento = Math.ceil(c + totalPago)
  const sobraInvestimento = Math.ceil(mF - valorImovelFuturoF)
  console.log(
    c,
    iF,
    iFinF,
    n,
    valorFinanciado,
    parcelaF,
    totalPago,
    valorImovelFuturoF,
    totalJurosPago,
    valorInvestidoMensalF,
    depositoInicial,
    mF,
    prazoRentabilidadeAnos,
    valorPagoFinanciamento,
    sobraInvestimento
  );

  sessionStorage.setItem('valorImovel', valorImovel)
  sessionStorage.setItem('valorImovelFuturo', valorImovelFuturoF)
  sessionStorage.setItem('valorTotalPago', totalPago)
  sessionStorage.setItem('valorJurosPago', totalJurosPago)
  sessionStorage.setItem('valorInvestimentoTotal', mF)
  sessionStorage.setItem('entrada', c)
  sessionStorage.setItem('taxaRendimento', iF)
  sessionStorage.setItem('taxaFinanciamento', iFinF)
  sessionStorage.setItem('prazoFinanciamento', n)
  sessionStorage.setItem('prazoFinanciamentoAnos', prazoFin)
  sessionStorage.setItem('valorFinanciado', valorFinanciado)
  sessionStorage.setItem('parcelaFinanciamento', parcelaF)
  sessionStorage.setItem('valorInvestimentoMensalmente', valorInvestidoMensalF)
  sessionStorage.setItem('valorDepositoInicial', depositoInicial)
  sessionStorage.setItem('prazoRentabilidadeAnos', prazoRentabilidadeAnos)
  sessionStorage.setItem('valorTotalPagoFinancimento', valorPagoFinanciamento)
  sessionStorage.setItem('sobraInvestimento', sobraInvestimento)
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
