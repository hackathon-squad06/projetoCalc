// (function () {

//   function emit(target, name) {
//     let event
//     if (document.createEvent) {
//       event = document.createEvent("HTMLEvents");
//       event = new Event(name, { "bubbles": true, "cancelable": true });

//     } else {
//       event = document.createEventObject();
//       event.eventType = name;
//     }

//     event.eventName = name;

//     if (document.createEvent) {
//       target.dispatchEvent(event);
//     } else {
//       target.fireEvent("on" + event.eventType, event);
//     }
//   }

//   var outputsSelector = "input[type=number][source],select[source]";

//   function onChange(e) {
//     var outputs = document.querySelectorAll(outputsSelector)
//     for (var index = 0; index < outputs.length; index++) {
//       var item = outputs[index]
//       var source = document.querySelector(item.getAttribute('source'));
//       if (source) {
//         if (item === e.target) {
//           source.value = item.value
//           emit(source, 'input')
//           emit(source, 'change')
//         }

//         if (source === e.target) {
//           item.value = source.value
//         }
//       }
//     }
//   }

//   document.addEventListener('change', onChange)
//   document.addEventListener('input', onChange)
// }());


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
  var digitou = document.getElementById(id)
  var valorDigitado = digitou.value
  var valor = valorDigitado;
  // console.log(valor)
  var n = valor.toLocaleString();

  if (isNaN(valor)) {
    // console.log('é NaN')
    digitou.type = 'text';
    valor = n + ' anos';
    digitou.value = valorDigitado;
  } else {
    digitou.type = 'text';
    valor = n + ' anos';
    digitou.value = valor;
  }
  digitou.onclick = function () {
    digitou.type = 'text';
    valor = n + ' em anos';
    digitou.value = valor;
    digitou.type = 'number';
  }
}

function formatarPorcentagem(element) {
  var id = element.id
  var digitou = document.getElementById(id)
  var valorDigitado = digitou.value
  var valor = valorDigitado;
  // console.log(valor)
  var n = valor.toLocaleString();

  if (isNaN(valor)) {
    // console.log('é NaN')
    digitou.type = 'text';
    valor = n + ' %';
    digitou.value = valorDigitado;
  } else {
    digitou.type = 'text';
    valor = n + ' %';
    digitou.value = valor;
  }
  digitou.onclick = function () {
    digitou.type = 'text';
    valor = n + ' em %';
    digitou.value = valor;
    digitou.type = 'number';
  }
}

function realParseFloat(s) {
  s = s.replace(/[^\d,.-]/g, ''); // strip everything except numbers, dots, commas and negative sign
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