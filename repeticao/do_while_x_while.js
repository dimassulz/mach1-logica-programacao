const prompt = require('prompt-sync')();
let numero;

while (numero === 0 || isNaN(numero)){
    console.log('Digite um número válido: ');
    numero = Number(prompt());
    if (isNaN(numero)) { 
        console.log("Digite um valor númerico! Por favor!");
    }
}

console.log("Número válido! !!!!");