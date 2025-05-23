prompt = require('prompt-sync')();


numero1 = Number(prompt("digite o primeiro numero da multiplicação: "));
numero2 = Number(prompt("digite o segundo numero da multiplicação: "));

resultado = 0;
contador = 0;

while(contador < numero2){
  resultado = resultado + numero1;
  contador = contador + 1;
}

console.log('mostrar o resultado: ', resultado);
console.log('numero1: ', numero1);
console.log('numero2: ', numero2);
