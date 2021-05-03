/*function calcular () {
    const valorImovel = parseFloat(document.getElementById('inputValorImovel').value);
    const aluguel = parseFloat(document.getElementById('inputAluguel').value);
    const valorizacao = parseFloat(document.getElementById('inputValorizacao').value);
    const entrada = parseFloat(document.getElementById('inputEntrada').value);
    const custosAd = parseFloat(document.getElementById('inputCustosAd').value);
    const prazoFin = parseFloat(document.getElementById('inputPrazoFin').value);
    const taxaFin = parseFloat(document.getElementById('inputTaxaFin').value);
    const rentabilidade = parseFloat(document.getElementById('inputRentabilidade').value);

    const c = entrada
    const i = (((1 + (rentabilidade/100)) ** (1/12))-1)*100
    const iF = i.toFixed(2)
    const iFin = (((1 + (taxaFin/100)) ** (1/12))-1)*100
    const iFinF = iFin.toFixed(3)
    const valorizacaoImovel = (((1 + (valorizacao/100)) ** (1/12))-1)*100
    const valorizacaoImovelF = valorizacaoImovel.toFixed(2)
    const n = prazoFin * 12
    const valorFinanciado = valorImovel - c
    const parcela = valorFinanciado * ((((1 + iFin/100) ** n) * iFin/100) / (((1 + iFin/100) ** n) - 1))
    const parcelaF = parcela.toFixed(2)
    const totalPago = parcelaF * n
    const valorImovelFuturo = valorImovel * (1 + (valorizacaoImovelF/100)) ** n
    const valorImovelFuturoF = valorImovelFuturo.toFixed(2)
    const valorInvestidoMensal = parcelaF - aluguel
    const valorInvestidoMensalF = valorInvestidoMensal.toFixed(0)
    const depositoInicial = entrada + custosAd
    if (totalPago > valorFinanciado) {
        var totalJurosPago = totalPago - valorFinanciado
    } else {
        var totalJurosPago = valorFinanciado - totalPago
    }
    const m = (c*(1 + (iF/100)) ** n ) + (valorInvestidoMensalF * (((((1 + (iF/100))) ** n ) - 1 ) / (iF/100)))
    const mF = m.toFixed(2)
    console.log(c, iF, iFinF, n, valorFinanciado, parcelaF, totalPago, valorImovelFuturoF, totalJurosPago, valorInvestidoMensalF, depositoInicial, mF)

    sessionStorage.setItem('valorImovel', valorImovel)
    sessionStorage.setItem('valorImovelFuturo', valorImovelFuturoF)
    sessionStorage.setItem('valorTotalPago', totalPago)
    sessionStorage.setItem('valorJurosPago', totalJurosPago)
    sessionStorage.setItem('valorInvestimentoTotal', mF)
    window.location.href = "/resultap/resultap.html"
} */




/*
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
  })*/

  // Recomentar acima

/*
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

// ANOS
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

// PORCENTAGEM
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
  }) */



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

  campo.value = "R$" + valor;
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
      valorDeCompra.splice(0, 1, numImovel)
    } else if (id == "inputAluguel") {
      const numAluguel = valor
      valorDoAluguel.splice(0, 1, numAluguel)
    } else if (id == "inputEntrada") {
      const numEntrada = valor
      valorDaEntrada.splice(0, 1, numEntrada)
    } else if (id == "inputCustosAd") {
      const numCustosAd = valor
      custosAdicionais.splice(0, 1, numCustosAd)
    }
  }
}

let valorDeCompra = []
let valorDoAluguel = []
let valorDaEntrada = []
let custosAdicionais = []

//console.log(valorDeCompra, valorDoAluguel, valorDaEntrada, custosAdicionais)

valorCompra.addEventListener("change", compra)
function compra () {
  valorDeCompra = valorDeCompra[0]
}

valorAluguel.addEventListener("change", aluguel)
function aluguel () {
  valorDoAluguel = valorDoAluguel[0]
}

let chamarEntrada = document.getElementById("inputEntrada")
chamarEntrada.addEventListener("change", entrada)
function entrada () {
  valorDaEntrada = valorDaEntrada[0]
}

let chamarCusto = document.getElementById("inputCustosAd")
chamarCusto.addEventListener("change", custos)
function custos () {
  custosAdicionais = custosAdicionais[0]
}



function calcDeposito() {
  let depositoInicial = document.getElementsByName('inputDeposito')[0];
  let deposito = valorDaEntrada + custosAdicionais
  depositoInicial.placeholder = deposito
}

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



//let ativarFuncoes = document.querySelectorAll(".dadosCampos")
//ativarFuncoes.addEventListener("change", chamada)

/*
function chamada () {
  testando ()
}

function testando () {
  //let depositoInicial = document.getElementsByName('inputDeposito')[0];
  let valorEntrada = valorDaEntrada[0];
  let custosAdicionais = custosAdicionais[0];
  const deposito = valorEntrada + custosAdicionais

  console.log(deposito)
  if (isNaN(custosAdicionais)) {
  } else if (isNaN(deposito)) {
    depositoInicial.placeholder = 'Adicione o Valor de entrada'
  } else {
    depositoInicial.placeholder = deposito
  }
  console.log(deposito)
}
*/



/*
function valorImovel (numImovel) {
  let depositoMensal = document.getElementsByName('inputValorMensal')[0];
  let valorImovel = numImovel;
  console.log(valorImovel)
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
}*/




