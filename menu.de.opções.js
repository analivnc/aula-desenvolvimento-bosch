const entrada = require('prompt-sync')();  

// Exemplo menu de sistema
console.log("=== MENU DE OPÇÕES ===");
console.log("1 - Verificar saldo");
console.log("2 - Realizar depósito");
console.log("3 - Realizar saque");
console.log("4 - Sair");
console.log("======================");

let opcao = Number(entrada("Escolha uma opção: "));

switch(opcao) {
  case 1:
    console.log("Seu saldo é de R$ 1.000,00");
    break;
  case 2:
    console.log("Depósito realizado com sucesso");
    break;
  case 3:
    console.log("Saque realizado com sucesso");
    break;
  case 4:
    console.log("Obrigado por usar nosso sistema");
}
