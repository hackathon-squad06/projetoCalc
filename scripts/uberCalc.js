function calcular() {
  const valorSeguro = realParseFloat(document.getElementById("inputValorSeguro").value);
  const valorIpva = realParseFloat(document.getElementById("inputIpva").value);
  const valorSeguroObr = realParseFloat(document.getElementById("inputSeguroObr").value);
  const valorEstacionamento = realParseFloat(document.getElementById("inputEstacionamento").value);
  const valorManutencao = realParseFloat(document.getElementById("inputManutencao").value);
  const valorKms = realParseFloat(document.getElementById("inputKms").value);
  const valorConsumo = realParseFloat(document.getElementById("inputConsumo").value);
  const valorCombustivel = realParseFloat(document.getElementById("inputCombustivel").value);
  const numeroCorridas = realParseFloat(document.getElementById("inputApp").value);
  const valorCorridas = realParseFloat(document.getElementById("inputCorridas").value);

  console.log(valorSeguro);

  sessionStorage.setItem("melhorOpcao", melhorOpcao);
//   window.location.href = "/uberResult.html";
}

function formatarReais(campo) {
  var id = campo.id;
  var digitou = campo;
  var valor = digitou.value;

  valor = valor + "";
  valor = parseInt(valor.replace(/[\D]+/g, ""));
  valor = valor + "";
  valor = valor.replace(/(\d{2})$/, ",$1");

  if (valor.length > 6) {
    valor = valor.replace(/(\d{3}),(\d{2}$)/, ".$1,$2");
  }
  if (valor.length > 10) {
    valor = valor.replace(/(\d{3}).(\d{3}),(\d{2})/, ".$1.$2,$3");
  }

  campo.value = "R$ " + valor;
  if (valor == "NaN") {
    campo.value = "";
  }

  //Transforma a string em número
  digitou.onchange = function () {
    valor = valor.replace(/[.]/g, "");
    valor = valor.replace(/[,]/g, ".");
    valor = Number(valor);

  };
}

let nImovel = [];
let nAluguel = [];
let nEntrada = [];
let nAdicionais = [];

function formatarKms(element) {
  var id = element.id;
  var campo = document.getElementById(id);
  var valor = campo.value;
  var containWord = /[a-z]/i.test(valor);
  var containSimbol = /[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi.test(valor);

  if (containWord || containSimbol) {
    console.log("contem caracteres");
    valorA = valor.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, "");
    valor = valorA.replace(/[\D]+/g, "");
    campo.value = valor;
  }
  if (valor == "" || valor < 0) {
    console.log("é NaN");
    valor = "";
    campo.value = null;
  } else if (campo.value.includes("KMs")) {
    valor = valor;
    campo.value = valor;
  } else {
    valor = valor + " KMs";
    campo.value = valor;
  }
  campo.onclick = function () {
    valor = valor.replace(" KMs", "");
    campo.value = valor;
  };
}

function formatarKmLitro(element) {
    var id = element.id;
    var campo = document.getElementById(id);
    var valor = campo.value;
    var containWord = /[a-z]/i.test(valor);
    var containSimbol = /[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi.test(valor);
  
    if (containWord || containSimbol) {
      console.log("contem caracteres");
      valorA = valor.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, "");
      valor = valorA.replace(/[\D]+/g, "");
      campo.value = valor;
    }
    if (valor == "" || valor < 0) {
      console.log("é NaN");
      valor = "";
      campo.value = null;
    } else if (campo.value.includes("KMs/Litro")) {
      valor = valor;
      campo.value = valor;
    } else {
      valor = valor + " KMs/Litro";
      campo.value = valor;
    }
    campo.onclick = function () {
      valor = valor.replace(" KMs/Litro", "");
      campo.value = valor;
    };
}

function formatarCorridas(element) {
    var id = element.id;
    var campo = document.getElementById(id);
    var valor = campo.value;
    var containWord = /[a-z]/i.test(valor);
    var containSimbol = /[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi.test(valor);
  
    if (containWord || containSimbol) {
      console.log("contem caracteres");
      valorA = valor.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, "");
      valor = valorA.replace(/[\D]+/g, "");
      campo.value = valor;
    }
    if (valor == "" || valor < 0) {
      console.log("é NaN");
      valor = "";
      campo.value = null;
    } else if (campo.value.includes("Corridas/semana")) {
      valor = valor;
      campo.value = valor;
    } else {
      valor = valor + " Corridas/semana";
      campo.value = valor;
    }
    campo.onclick = function () {
      valor = valor.replace(" Corridas/semana", "");
      campo.value = valor;
    };
}

function realParseFloat(s) {
  s = s.replace(/[^\d,.-]/g, "");
  if (
    navigator.language.substring(0, 2) !== "de" &&
    /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(s)
  ) {
    s = s.replace(/,/g, "");
    return parseFloat(s);
  } else if (/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(s)) {
    s = s.replace(/\./g, "");
    s = s.replace(/,/g, ".");
    return parseFloat(s);
  } else {
    s = s.replace(/,/g, "");
    return parseFloat(s);
  }
}
