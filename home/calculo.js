
// function nper(rate, pmt, pv, fv) {

//   const z = pmt * (1 + rate * 1) / rate
//   return Math.log10((-fv + z) / (pv + z)) / Math.log10(1 + rate)
// }

// // console.log(nper(0.0491/12, -400, -45000, 359928))

// var taxaAnual = 5.88 // taxa anual 
// var i = ((1 + taxaAnual / 100) ** (1 / 12)) - 1 // taxa convertida mensal

// console.log(Math.ceil(nper(i, -300, -25000, 350000)))

// console.log(Math.ceil(nper(i, -650, -55000, 450000)))