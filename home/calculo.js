// const btn = document.getElementById('btnCalcular');

function calcular() {
  const valorCompra = parseFloat(document.getElementById("inputValorCompra").value);
  const valorAluguel = parseFloat(document.getElementById("inputValorAluguel").value);

  const soma = valorCompra + valorAluguel
  const multiplicado = valorCompra * valorAluguel

  sessionStorage.setItem('soma', soma)
  sessionStorage.setItem('multiplicado', multiplicado)
  window.location.href = "/resultap/resultap.html"
}


document.getElementById('inputValorEntrada').addEventListener('change', function () {
  let depositoInicial = document.getElementsByName('inputDepositoIn')[0];
  let valorEntrada = parseFloat(document.getElementById('inputValorEntrada').value);
  let custosAdicionais = parseFloat(document.getElementById('inputCustosFin').value);
  const deposito = valorEntrada + custosAdicionais
  if (isNaN(custosAdicionais)) {
    console.log('custos adicionais vazio')
  } else if (isNaN(deposito)) {
    depositoInicial.placeholder = 'Adicione o Valor de entrada'
  } else {
    depositoInicial.placeholder = deposito
  }
  console.log(deposito)
})

document.getElementById('inputCustosFin').addEventListener('change', function () {
  let depositoInicial = document.getElementsByName('inputDepositoIn')[0];
  let valorEntrada = parseFloat(document.getElementById('inputValorEntrada').value);
  let custosAdicionais = parseFloat(document.getElementById('inputCustosFin').value);
  const deposito = valorEntrada + custosAdicionais
  if (isNaN(valorEntrada)) {
    console.log('valorEntrada vazio')
  } else if (isNaN(deposito)) {
    depositoInicial.placeholder = 'Adicione os Custos adicionais'
  } else {
    depositoInicial.placeholder = deposito
  }
  console.log(deposito)
})