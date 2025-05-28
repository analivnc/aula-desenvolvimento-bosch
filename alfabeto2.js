const prompt = require('prompt-sync')();  

// Entrada do usuário
const letra = prompt("Digite uma letra (A-Z): ").toUpperCase();

// Verifica a letra e mostra a posição no alfabeto
switch (letra) {
    case 'A': console.log("A letra A está na posição 1 do alfabeto."); break;
    case 'B': console.log("A letra B está na posição 2 do alfabeto."); break;
    case 'C': console.log("A letra C está na posição 3 do alfabeto."); break;
    case 'D': console.log("A letra D está na posição 4 do alfabeto."); break;
    case 'E': console.log("A letra E está na posição 5 do alfabeto."); break;
    case 'F': console.log("A letra F está na posição 6 do alfabeto."); break;
    case 'G': console.log("A letra G está na posição 7 do alfabeto."); break;
    case 'H': console.log("A letra H está na posição 8 do alfabeto."); break;
    case 'I': console.log("A letra I está na posição 9 do alfabeto."); break;
    case 'J': console.log("A letra J está na posição 10 do alfabeto."); break;
    case 'K': console.log("A letra K está na posição 11 do alfabeto."); break;
    case 'L': console.log("A letra L está na posição 12 do alfabeto."); break;
    case 'M': console.log("A letra M está na posição 13 do alfabeto."); break;
    case 'N': console.log("A letra N está na posição 14 do alfabeto."); break;
    case 'O': console.log("A letra O está na posição 15 do alfabeto."); break;
    case 'P': console.log("A letra P está na posição 16 do alfabeto."); break;
    case 'Q': console.log("A letra Q está na posição 17 do alfabeto."); break;
    case 'R': console.log("A letra R está na posição 18 do alfabeto."); break;
    case 'S': console.log("A letra S está na posição 19 do alfabeto."); break;
    case 'T': console.log("A letra T está na posição 20 do alfabeto."); break;
    case 'U': console.log("A letra U está na posição 21 do alfabeto."); break;
    case 'V': console.log("A letra V está na posição 22 do alfabeto."); break;
    case 'W': console.log("A letra W está na posição 23 do alfabeto."); break;
    case 'X': console.log("A letra X está na posição 24 do alfabeto."); break;
    case 'Y': console.log("A letra Y está na posição 25 do alfabeto."); break;
    case 'Z': console.log("A letra Z está na posição 26 do alfabeto."); break;
    default: console.log("Letra inválida. Digite uma letra de A a Z.");
}
