const prompt = require('prompt-sync')();

let soma = 0;
//solicita o numero
let valorDigitado = Number(prompt("digite um valor para somar: "));
//enquanro for diferente de zero somara os numeros
while (valorDigitado !== 0){
  soma +=valorDigitado;
  console.log(`Soma parcial: ${soma}`)
  valorDigitado = Number(prompt("Digite outro valor para somar: "));
  
}
//resultado final
 console.log(`Resultado final: ${soma}`)