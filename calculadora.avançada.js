const prompt = require('prompt-sync')(); // Importa a biblioteca para entrada de dados

console.log("=== CALCULADORA AVANÇADA ===");
console.log("Operações disponíveis:");
console.log("+  Adição");
console.log("-  Subtração");
console.log("*  Multiplicação");
console.log("/  Divisão");
console.log("^  Potência");
console.log("%  Módulo (resto da divisão)");
console.log("sqrt Raiz quadrada");

// Entrada da operação
let operacao = prompt("Digite a operação desejada: ").toLowerCase();

let numero1, numero2, resultado;

// Se for raiz quadrada, só precisa de 1 número
if (operacao === "sqrt") {
  numero1 = parseFloat(prompt("Digite o número: "));
  if (isNaN(numero1)) {
    console.log("Erro: entrada inválida.");
    return;
  }

  if (numero1 < 0) {
    console.log("Erro: não existe raiz quadrada real de número negativo.");
    return;
  }

  resultado = Math.sqrt(numero1);
  console.log(`Resultado: √${numero1} = ${resultado}`);
} else {
  // Para todas as outras operações
  numero1 = parseFloat(prompt("Digite o primeiro número: "));
  numero2 = parseFloat(prompt("Digite o segundo número: "));

  if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Erro: entradas inválidas.");
    return;
  }

  switch (operacao) {
    case "+":
  }
}
