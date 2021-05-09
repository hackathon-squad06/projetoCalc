function calcular() {
    const valorSeguro = realParseFloat(document.getElementById("inputValorSeguro").value);
    const valorIpva = realParseFloat(document.getElementById("inputIpva").value);
    const valorSeguroObr = realParseFloat(document.getElementById("inputSeguroObr").value);
    const valorEstacionamento = realParseFloat(document.getElementById("inputEstacionamento").value);
    const valorManutencao = realParseFloat(document.getElementById("inputManutencao").value);
    const valorKm = realParseFloat(document.getElementById("inputKm").value);
    const valorConsumo = realParseFloat(document.getElementById("inputConsumo").value);
    const valorCombustivel = realParseFloat(document.getElementById("inputCombustivel").value);
    const numeroCorridas = realParseFloat(document.getElementById("inputApp").value);
    const valorCorridas = realParseFloat(document.getElementById("inputCorridas").value);

    const gastosAnuaisF = valorSeguro + valorIpva + valorSeguroObr
    const gastosAnuais = parseFloat(gastosAnuaisF.toFixed(2))
    const gastosEstacionamentoF = valorEstacionamento * 12
    const gastosEstacionamento = parseFloat(gastosEstacionamentoF.toFixed(2))
    const gastosManutencaoF = valorManutencao * 2
    const gastosManutencao = parseFloat(gastosManutencaoF.toFixed(2))
    const gastosCombustivelF = ((valorKm / valorConsumo) * valorCombustivel) * 52
    const gastosCombustivel = parseFloat(gastosCombustivelF.toFixed(2))
    const gastosAppF = (numeroCorridas * valorCorridas) * 52
    const gastosApp = parseFloat(gastosAppF.toFixed(2))
    const usoApp = Math.ceil(numeroCorridas * 52)
    var gastosTotaisCarroF = (gastosAnuais + gastosEstacionamento + gastosManutencao + gastosCombustivel)
    var gastosTotaisCarro = parseFloat(gastosTotaisCarroF.toFixed(2))
    var diferencaF = gastosTotaisCarro - gastosApp
    var diferenca = parseFloat(diferencaF.toFixed(2))
    if (diferenca > 0) {
        var melhorOpcao = 'usar o aplicativo de corridas'
    } else {
        var melhorOpcao = 'usar o carro'
    }

    console.log(gastosTotaisCarro, gastosAnuais, gastosEstacionamento, gastosManutencao, gastosCombustivel, gastosApp, usoApp, diferenca, melhorOpcao);

    sessionStorage.setItem("gastosTotaisCarro", gastosTotaisCarro);
    sessionStorage.setItem("gastosAnuais", gastosAnuais);
    sessionStorage.setItem("gastosEstacionamento", gastosEstacionamento);
    sessionStorage.setItem("gastosManutencao", gastosManutencao);
    sessionStorage.setItem("gastosCombustivel", gastosCombustivel)
    sessionStorage.setItem("gastosApp", gastosApp);
    sessionStorage.setItem("usoApp", usoApp);
    sessionStorage.setItem("diferenca", diferenca);
    sessionStorage.setItem("melhorOpcao", melhorOpcao);

    window.location.href = "/carroResult.html";
}

function formatarReais(campo) {
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

function formatarKm(element) {
    var id = element.id
    var campo = document.getElementById(id)
    var valor = campo.value
    var containWord = /[a-z]/i.test(valor)
    var containSimbol = /[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi.test(valor)

    if (containWord || containSimbol) {
        valorA = valor.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, '')
        valor = valorA.replace(/[\D]+/g, '')
        campo.value = valor;
    }
    if (valor == '' || valor <= 0) {
        valor = ''
        campo.value = null;
    } else if (campo.value.includes('Km/semana')) {
        valor = valor;
        campo.value = valor;
    } else {
        valor = valor + ' Km/semana';
        campo.value = valor;
    }
    campo.onclick = function () {
        valor = valor.replace(' Km/semana', '');
        campo.value = valor;
    }
}

function formatarKmLitro(element) {
    var id = element.id;
    var campo = document.getElementById(id);
    var valor = campo.value;
    var containWord = /[a-z]/i.test(valor);
    var containSimbol = /[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi.test(valor);

    if (containWord || containSimbol) {
        valorA = valor.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, "");
        valor = valorA.replace(/[\D]+/g, "");
        campo.value = valor;
    }
    if (valor == "" || valor <= 0) {
        valor = "";
        campo.value = null;
    } else if (campo.value.includes("Km/litro")) {
        valor = valor;
        campo.value = valor;
    } else {
        valor = valor + " Km/litro";
        campo.value = valor;
    }
    campo.onclick = function () {
        valor = valor.replace(" Km/litro", "");
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
        valorA = valor.replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, "");
        valor = valorA.replace(/[\D]+/g, "");
        campo.value = valor;
    }
    if (valor == "" || valor <= 0) {
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

function numCheck(element) {
    var id = element.id
    var campo = document.getElementById(id)
    var valor = campo.value
    if (valor == "R$ 0") {
        console.log('é NaN')
        valor = ''
        campo.value = null;
    }
}