const prompt = require('prompt-sync')();  // Importa a biblioteca para entrada de dados no terminal

// Calculadora simples em JavaScript
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");

let resultado; // É necessário declarar a variável antes de usá-la

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      console.log("Erro: divisão por zero!");
      return; // Encerra o programa se tentar dividir por zero
    }
    break;
  default:
    console.log("Operação inválida!");
    return; // Encerra o programa se a operação não for reconhecida
}

console.log(`Resultado: ${resultado}`);
