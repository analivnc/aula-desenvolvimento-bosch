const prompt = require('prompt-sync')();
let soma = 0
let contador = 1

while (contador <=100){
  soma = soma + contador;
  contador = contador +1;
}
console.log("a soma de 1 a 100 é:", soma );
  soma = 0;
for(contador = 1; contador<=100; contador++){
  soma = soma + contador;
}
console.log("a soma de 1 a 100 é: ", soma)