prompt = require('prompt-sync')();
//peça para o usuário digitar sua idade e sua nota final em uma disciplina
//number quando for trabalhar com  numeros
//entrada de dados
let idade = Number(prompt("Digite sua idade: "));
let nota = Number(prompt("Digite sua nota final: "));

//processamento e saída 
if (nota > 7) {
  if (idade >= 18) {
    console.log("Maior de idade e aprovado");
  } else {
    console.log("Menor de idade e aprovado");
  }
} else {
  if (idade >= 18) {
    console.log("Maior de idade e não aprovado");
  } else {
    console.log("Menor de idade e não aprovado");
  }
}
