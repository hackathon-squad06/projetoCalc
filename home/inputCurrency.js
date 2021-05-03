/*function formatarReais() {
    var digitou = document.querySelector("#inputValorImovel");
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

    digitou.value = "R$" + valor;
    if (valor == 'NaN') {
        digitou.value = '';
    }
    
    //Transforma a string em número
    digitou.onblur = function () {
      valor = valor.replace(/[.]/g, "")
      valor = valor.replace(/[,]/g, ".")
      valor = Number(valor)
    }
}
*/