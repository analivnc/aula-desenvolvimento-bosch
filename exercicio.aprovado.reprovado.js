entrada = require('prompt-sync')();  


//entrada de dados
let nota1 = Number(entrada("digite a primeira nota: "))
let nota2 = Number(entrada("digite a segunda nota: "))
let nota3 = Number(entrada("digite a terceira nota: "))
let nota4= Number(entrada("digite a quarta nota: "))

//processamento de dados
let media = (nota1 + nota2 + nota3 + nota4)

if ( media >= 6 ) {
  if( media >= 6)
  console.log("o aluno esta aprovado, parabéns!");
} else {
  console.log("o aluno esta reprovado, aff melhore!")
}

