const prompt = require('prompt-sync')();  

//calculadora em java
let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
let numero2 = parseFloat(prompt("Digite o segundo numero: "));
let operação = prompt("digite a operação (+, -, *, /): ");

if (operação === "+"){
  resultado = numero1 + numero2;
} else {
  if (operação === "-"){
    resultado = numero1 - numero2;
} else {
    if (operação === "*"){
      resultado = numero1 * numero2;
}else if (operação === "/"){
      resultado = numero1 / numero2;
    }else {
      
      resulado = null;
    }
  }
}
if(resultado == null) 
  console.log("operação invalida!"); 
else
  console.log ("o resultado é", resultado);