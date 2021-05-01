function calcular () {
    const valorImovel = parseFloat(document.getElementById('inputValorImovel').value);
    const aluguel = parseFloat(document.getElementById('inputAluguel').value);
    const valorizacao = parseFloat(document.getElementById('inputValorizacao').value);
    const entrada = parseFloat(document.getElementById('inputEntrada').value);
    const custosAd = parseFloat(document.getElementById('inputCustosAd').value);
    const prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
    const taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
    const depositoMensal = parseFloat(document.getElementById('inputValorMensal').value);
    const deposito = parseFloat(document.getElementById('inputDeposito').value);
    const rentabilidade = parseFloat(document.getElementById('inputRentabilidade').value);

    const c = entrada
    const i = ((1 + (rentabilidade/100)) ** (1/12))-1
    const iF = i.toFixed(2)
    const iFin = ((1 + (taxaFin/100)) ** (1/12))-1
    const iFinF = iFin.toFixed(2)
    const n = prazoFin * 12
    const valorFinanciado = valorImovel - c
    const parcela = valorFinanciado * ((((1 + iFin) ** n) * iFin) / (((1 + iFin) ** n) - 1))
    const parcelaF = parcela.toFixed(2)
    console.log(c, iF, iFinF, n, valorFinanciado, parcelaF)
}

document.getElementById('inputEntrada').addEventListener('change', function () {
    let depositoInicial = document.getElementsByName('inputDeposito')[0];
    let valorEntrada = parseFloat(document.getElementById('inputEntrada').value);
    let custosAdicionais = parseFloat(document.getElementById('inputCustosAd').value);
    const deposito = valorEntrada + custosAdicionais
    if (isNaN(custosAdicionais)) {
    } else if (isNaN(deposito)) {
      depositoInicial.placeholder = 'Adicione o Valor de entrada'
    } else {
      depositoInicial.placeholder = deposito
    }
  })
  
document.getElementById('inputCustosAd').addEventListener('change', function () {
    let depositoInicial = document.getElementsByName('inputDeposito')[0];
    let valorEntrada = parseFloat(document.getElementById('inputEntrada').value);
    let custosAdicionais = parseFloat(document.getElementById('inputCustosAd').value);
    const deposito = valorEntrada + custosAdicionais
    if (isNaN(valorEntrada)) {
    } else if (isNaN(deposito)) {
      depositoInicial.placeholder = 'Adicione os Custos adicionais'
    } else {
      depositoInicial.placeholder = deposito
    }
  })

document.getElementById('inputValorImovel').addEventListener('change', function () {
    let depositoMensal = document.getElementsByName('inputValorMensal')[0];
    let valorImovel = parseFloat(document.getElementById('inputValorImovel').value);
    let valorEntrada = parseFloat(document.getElementById('inputEntrada').value);
    let valorAluguel = parseFloat(document.getElementById('inputAluguel').value);
    let taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
    let prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
    let valorFinanciado = valorImovel - valorEntrada
    let prazoFinMes = prazoFin * 12
    let taxaFinMes = ((1 + (taxaFin/100)) ** (1/12))-1
    const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
    const parcelaFin2 = parcelaFin.toFixed(2)
    const investimentoMensal = parcelaFin2 - valorAluguel
    const investimentoMensal2 = investimentoMensal.toFixed(0)
    if (isNaN(valorEntrada)) {
    } else if (isNaN(investimentoMensal2)) {
        depositoMensal.placeholder = 'Adicione os dados para o cálculo'
      } else {
        depositoMensal.placeholder = investimentoMensal2
    }
  })

document.getElementById('inputEntrada').addEventListener('change', function () {
    let depositoMensal = document.getElementsByName('inputValorMensal')[0];
    let valorImovel = parseFloat(document.getElementById('inputValorImovel').value);
    let valorEntrada = parseFloat(document.getElementById('inputEntrada').value);
    let valorAluguel = parseFloat(document.getElementById('inputAluguel').value);
    let taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
    let prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
    let valorFinanciado = valorImovel - valorEntrada
    let prazoFinMes = prazoFin * 12
    let taxaFinMes = ((1 + (taxaFin/100)) ** (1/12))-1
    const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
    const parcelaFin2 = parcelaFin.toFixed(2)
    const investimentoMensal = parcelaFin2 - valorAluguel
    const investimentoMensal2 = investimentoMensal.toFixed(0)
    if (isNaN(prazoFin)) {
    } else if (isNaN(investimentoMensal2)) {
        depositoMensal.placeholder = 'Adicione os dados para o cálculo'
      } else {
        depositoMensal.placeholder = investimentoMensal2
    }
  })

document.getElementById('inputAluguel').addEventListener('change', function () {
    let depositoMensal = document.getElementsByName('inputValorMensal')[0];
    let valorImovel = parseFloat(document.getElementById('inputValorImovel').value);
    let valorEntrada = parseFloat(document.getElementById('inputEntrada').value);
    let valorAluguel = parseFloat(document.getElementById('inputAluguel').value);
    let taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
    let prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
    let valorFinanciado = valorImovel - valorEntrada
    let prazoFinMes = prazoFin * 12
    let taxaFinMes = ((1 + (taxaFin/100)) ** (1/12))-1
    const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
    const parcelaFin2 = parcelaFin.toFixed(2)
    const investimentoMensal = parcelaFin2 - valorAluguel
    const investimentoMensal2 = investimentoMensal.toFixed(0)
    if (isNaN(valorEntrada)) {
    } else if (isNaN(investimentoMensal2)) {
        depositoMensal.placeholder = 'Adicione os dados para o cálculo'
      } else {
        depositoMensal.placeholder = investimentoMensal2
    }
  })

document.getElementById('inputPrazoFin').addEventListener('change', function () {
    let depositoMensal = document.getElementsByName('inputValorMensal')[0];
    let valorImovel = parseFloat(document.getElementById('inputValorImovel').value);
    let valorEntrada = parseFloat(document.getElementById('inputEntrada').value);
    let valorAluguel = parseFloat(document.getElementById('inputAluguel').value);
    let taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
    let prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
    let valorFinanciado = valorImovel - valorEntrada
    let prazoFinMes = prazoFin * 12
    let taxaFinMes = ((1 + (taxaFin/100)) ** (1/12))-1
    const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
    const parcelaFin2 = parcelaFin.toFixed(2)
    const investimentoMensal = parcelaFin2 - valorAluguel
    const investimentoMensal2 = investimentoMensal.toFixed(0)
    if (isNaN(valorEntrada)) {
    } else if (isNaN(investimentoMensal2)) {
        depositoMensal.placeholder = 'Adicione os dados para o cálculo'
      } else {
        depositoMensal.placeholder = investimentoMensal2
    }
  })

document.getElementById('inputTaxaFin').addEventListener('change', function () {
    let depositoMensal = document.getElementsByName('inputValorMensal')[0];
    let valorImovel = parseFloat(document.getElementById('inputValorImovel').value);
    let valorEntrada = parseFloat(document.getElementById('inputEntrada').value);
    let valorAluguel = parseFloat(document.getElementById('inputAluguel').value);
    let taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
    let prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
    let valorFinanciado = valorImovel - valorEntrada
    let prazoFinMes = prazoFin * 12
    let taxaFinMes = ((1 + (taxaFin/100)) ** (1/12))-1
    const parcelaFin = valorFinanciado * ((((1 + taxaFinMes) ** prazoFinMes) * taxaFinMes) / (((1 + taxaFinMes) ** prazoFinMes) - 1))
    const parcelaFin2 = parcelaFin.toFixed(2)
    const investimentoMensal = parcelaFin2 - valorAluguel
    const investimentoMensal2 = investimentoMensal.toFixed(0)
    if (isNaN(valorEntrada)) {
    } else if (isNaN(investimentoMensal2)) {
      depositoMensal.placeholder = 'Adicione os dados para o cálculo'
    } else {
      depositoMensal.placeholder = investimentoMensal2
    }
  })
