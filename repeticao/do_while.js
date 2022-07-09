const prompt = require('prompt-sync')();
let numero;
//verificando se o numero e valido
do {
    console.log('Digite um numero válido');
    numero = Number(prompt());
    if (isNaN(numero)) {
        console.log("Digite um valor númerico!");
    }
} while (numero === 0 || isNaN(numero));

console.log("Número válido! !!!!");