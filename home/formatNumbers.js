
function formatarMoeda(element) {
  var id = element.id
  var digitou = document.getElementById(id)
  var valorDigitado = digitou.value
  var valor = valorDigitado;
  // console.log(valor)
  var n = new Number(valor);
  var myObj = {
    style: "currency",
    currency: "BRL"
  }

  if (isNaN(valor)) {
    // console.log('é NaN')
    digitou.type = 'text'
    valor = n.toLocaleString("pt-BR", myObj);
    digitou.value = valorDigitado;
  } else {
    digitou.type = 'text'
    valor = n.toLocaleString("pt-BR", myObj);
    digitou.value = valor;
  }
  digitou.onclick = function () {
    digitou.type = 'text';
    valor = 'R$' + n;
    digitou.value = valor;
    digitou.type = 'number';
  }
}

function formatarAnos(element) {
  var id = element.id
  var campo = document.getElementById(id)
  var valor = campo.value
  var n = valor.toLocaleString();

  if (valor == '' || valor < 0 || isNaN(valor)) {
    console.log('é NaN')
    campo.type = 'text';
    campo.value = null;
  } else {
    campo.type = 'text';
    valor = n + ' anos';
    campo.value = valor;
  }
  campo.onclick = function () {
    campo.type = 'text';
    valor = n + ' em anos';
    campo.value = valor;
    campo.type = 'number';
  }
}

function formatarPorcentagem(element) {
  var id = element.id
  var campo = document.getElementById(id)
  var valor = campo.value
  var n = valor.toLocaleString();

  if (valor == '' || valor < 0 || isNaN(valor)) {
    console.log('é NaN')
    campo.type = 'text';
    campo.value = null;
  } else {
    campo.type = 'text';
    valor = n + ' %';
    campo.value = valor;
  }
  campo.onclick = function () {
    campo.type = 'text';
    valor = n + ' em %';
    campo.value = valor;
    campo.type = 'number';
  }
}

function realParseFloat(s) {
  s = s.replace(/[^\d,.-]/g, '');
  if (navigator.language.substring(0, 2) !== "de" && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(s)) // if not in German locale and matches #,###.######
  {
    s = s.replace(/,/g, ''); // strip out commas
    return parseFloat(s); // convert to number
  }
  else if (/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(s)) // either in German locale or not match #,###.###### and now matches #.###,########
  {
    s = s.replace(/\./g, ''); // strip out dots
    s = s.replace(/,/g, '.'); // replace comma with dot
    return parseFloat(s);
  }
  else // try #,###.###### anyway
  {
    s = s.replace(/,/g, ''); // strip out commas
    return parseFloat(s); // convert to number
  }
}