/**
 * Criar um programa que leia um nome e um número.
 * Verificar se é um número valido!
 * O programa dever repetir esse nome de acordo com o número informado
 * Utilize o | para separar o nome
 * Exemplo:
 * Usuario entrou com o nome José Feliz e colocou o numero 5
 * José Feliz | José Feliz | José Feliz | José Feliz | José Feliz |
 */

const prompt = require('prompt-sync')();

console.log('Digite um nome: ');
let nome = prompt();

console.log('Digite um número: ');
let nRepetir = Number(prompt());

if (!Number.isInteger(nRepetir)) {
    return console.log("Digite um número inteiro");
}

let msgSaida = '';

for (let n = 1; n <= nRepetir; n++) {
    msgSaida += `${nome} | `;
}

console.log(msgSaida);