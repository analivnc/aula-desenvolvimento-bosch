const prompt = require('prompt-sync')();

let numero1 = Number(prompt("digite primeiro numero: "))
let numero2 = Number(prompt("digite segundo numero: "))
let soma = 0
let contador = 0 

while (contador < numero2){
  soma += numero1
    contador++
  
}console.log(`Resultado final: ${soma}`);